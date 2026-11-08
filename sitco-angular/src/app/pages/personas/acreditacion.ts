import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EMPRESAS, ETAPAS_ACR, SOLICITUDES, TR, Trabajador } from '../../core/data';
import { SessionService } from '../../core/session.service';
import { ToastService } from '../../core/toast.service';
import { csv } from '../../core/util';
import { Cell, Col, DataTable } from '../../shared/data-table';
import { Icon } from '../../shared/icon';
import { Modal } from '../../shared/modal';
import { PageHeader } from '../../shared/page-header';
import { Banner, Empty, Estado, Kpi, Menu, Stepper, Tabs } from '../../shared/ui';
import { cnt, diasTipo, diasTxt, trabajadoresDe } from './comun';

type Solicitud = (typeof SOLICITUDES)[number] & { done?: boolean };
/** Solicitudes en curso (se conservan mientras dure la sesión). */
const SOLS: Solicitud[] = SOLICITUDES.map(s => ({ ...s }));

/** Acreditación de personas: lista, solicitudes con plazo de 48 h y alertas de vencimiento. */
@Component({
  selector: 'app-acreditacion',
  templateUrl: './acreditacion.html',
  imports: [FormsModule, RouterLink, DataTable, Cell, Icon, Modal, PageHeader, Banner, Empty, Estado, Kpi, Menu, Stepper, Tabs],
})
export class Acreditacion {
  readonly ses = inject(SessionService);
  private toast = inject(ToastService);
  readonly diasTxt = diasTxt;
  readonly diasTipo = diasTipo;
  readonly etapas = ETAPAS_ACR;
  readonly propia = computed(() => this.ses.user()?.role === 'contratista');
  readonly lista = computed(() => trabajadoresDe(this.ses.user()?.role));
  readonly porVencer = computed(() => cnt(this.lista(), t => t.estado === 'Por vencer'));
  readonly vencidos = computed(() => cnt(this.lista(), t => t.estado === 'Vencido'));
  readonly habilitados = computed(() => cnt(this.lista(), t => t.estado === 'Habilitado'));
  readonly alertas = computed(() => this.lista().filter(t => t.estado === 'Por vencer' || t.estado === 'Vencido').sort((a, b) => a.min - b.min).slice(0, 12)
    .map(t => ({ t, d: t.docs.slice().sort((a, b) => a.dias - b.dias)[0] })));

  readonly tabs = [{ id: 'p', label: 'Personas' }, { id: 's', label: 'Solicitudes en curso' }, { id: 'a', label: 'Alertas de vencimiento' }];
  readonly tab = signal('p');
  readonly cols: Col<Trabajador>[] = [
    { key: 'nombre', label: 'Persona' }, { key: 'empresa', label: 'Empresa' }, { key: 'cargo', label: 'Cargo' }, { key: 'turno', label: 'Turno' },
    { key: 'min', label: 'Próximo vencimiento', sortv: r => r.min }, { key: 'estado', label: 'Estado' }, { key: 'acc', label: '', nosort: true },
  ];
  readonly filtros = computed(() => [
    { key: 'estado', label: 'Estado', options: ['Habilitado', 'Por vencer', 'Vencido', 'En revisión'] },
    ...(this.propia() ? [] : [{ key: 'empresa', label: 'Empresa', options: EMPRESAS.slice(0, 8).map(e => e.nombre) }]),
  ]);

  readonly solicitudes = signal(SOLS.filter(s => !s.done));
  aprobando: Solicitud | null = null;
  rechazando: Solicitud | null = null;
  readonly motivos = ['Documento vencido o ilegible', 'Falta examen preocupacional', 'Falta curso de riesgos específicos', 'Datos inconsistentes'];
  motivo = this.motivos[0];
  comentario = '';
  readonly errComentario = signal('');
  suspendiendo: Trabajador | null = null;

  masiva(e: { accion: string; ids: string[] }) {
    if (e.accion === 'rec') this.toast.show(`Recordatorio enviado a ${e.ids.length} persona${e.ids.length > 1 ? 's' : ''}, sus empleadores y Seguridad.`, 'ok');
    else csv('acreditacion.csv', ['ID', 'Nombre', 'RUT', 'Empresa', 'Estado'], e.ids.map(i => { const t = TR(i)!; return [t.id, t.nombre, t.rut, t.empresa, t.estado]; }));
  }
  recordar(t: Trabajador) { this.toast.show(`Recordatorio enviado a ${t.nombre}, a ${t.empresa} y a Seguridad.`, 'ok'); }
  suspender() { this.suspendiendo!.estado = 'Vencido'; this.suspendiendo = null; this.toast.show('Acceso suspendido. Portería actualizada.', 'warn'); }

  private refrescar() { this.solicitudes.set(SOLS.filter(s => !s.done)); }
  avanzar(s: Solicitud) {
    if (s.etapa < 2) { s.etapa++; this.refrescar(); this.toast.show(`${s.id}: pasó a “${ETAPAS_ACR[s.etapa]}”.`, 'ok', 3000); return; }
    this.aprobando = s;
  }
  aprobar() {
    const s = this.aprobando!; s.done = true; this.aprobando = null; this.refrescar();
    this.toast.show(`Credencial emitida para ${s.nombre}. Acreditada en ${s.hrs} h (línea base: 9 días).`, 'ok', 5500);
  }
  abrirRechazo(s: Solicitud) { this.rechazando = s; this.comentario = ''; this.errComentario.set(''); }
  rechazar() {
    const t = this.comentario.trim();
    this.errComentario.set(!t ? 'Este campo es obligatorio.' : t.length < 10 ? 'Mínimo 10 caracteres.' : '');
    if (this.errComentario()) return;
    const s = this.rechazando!; s.done = true; this.rechazando = null; this.refrescar();
    this.toast.show(`${s.id} rechazada. Se notificó a la empresa con el motivo.`, 'warn');
  }
  plazo(h: number) { return h > 40 ? 'err' : h > 30 ? 'warn' : 'ok'; }
}
