import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CUMPL, PLAN_VERS, POLIS } from '../../core/data';
import { line } from '../../core/charts';
import { SessionService } from '../../core/session.service';
import { ToastService } from '../../core/toast.service';
import { fdt, nd, nf } from '../../core/util';
import { Cell, Col, DataTable } from '../../shared/data-table';
import { Field } from '../../shared/forms';
import { HtmlPipe } from '../../shared/html.pipe';
import { Icon } from '../../shared/icon';
import { Modal } from '../../shared/modal';
import { PageHeader } from '../../shared/page-header';
import { Kpi, Tabs, Timeline } from '../../shared/ui';

/** Plan minero versionado: cada cambio con su motivo, y cumplimiento medido contra la versión vigente. */
@Component({
  selector: 'app-plan',
  templateUrl: './plan.html',
  imports: [FormsModule, DataTable, Cell, Field, HtmlPipe, Icon, Modal, PageHeader, Kpi, Tabs, Timeline],
})
export class Plan {
  private ses = inject(SessionService);
  private toast = inject(ToastService);
  readonly nf = nf;
  readonly nd = nd;
  readonly min = Math.min;
  readonly tabs = [{ id: 'v', label: 'Versiones' }, { id: 'c', label: 'Cumplimiento' }, { id: 'p', label: 'Polígonos' }];
  readonly tab = signal('v');
  readonly versiones = signal([...PLAN_VERS]);
  readonly hitos = computed(() => this.versiones().slice().reverse().map((x, i) => ({
    t: `${x.v}${i === 0 ? ' · vigente' : ''} — ${x.m}`, w: `${fdt(x.f)} · ${x.a}`, s: i === 0 ? 'cur' : 'done',
    d: `${x.c} polígono${x.c !== 1 ? 's' : ''} afectado${x.c !== 1 ? 's' : ''} · impacto en tonelaje planificado: ${x.t > 0 ? '+' : ''}${nf(x.t)} t`,
  })));
  readonly grafico = line({ labels: CUMPL.labels, series: [{ name: 'Contra versión vigente', values: CUMPL.vigente, color: '#1F7A5C' }, { name: 'Contra plan del domingo', values: CUMPL.domingo, color: '#9C4A1F', dash: true }], min: 60, max: 100, fmt: v => nf(Math.round(v)) + '%', label: 'Cumplimiento del plan por turno' });
  readonly poligonos = POLIS.map(p => ({ ...p, cum: Math.round(p.real / p.plan * 100) }));
  readonly cols: Col[] = [
    { key: 'id', label: 'Polígono' }, { key: 'destino', label: 'Destino' }, { key: 'ley', label: 'Ley Cu %', num: true },
    { key: 'plan', label: 'Plan (t)', num: true }, { key: 'real', label: 'Real (t)', num: true }, { key: 'cum', label: 'Cumplimiento', num: true },
  ];

  readonly motivos = ['Caída de rampa o acceso', 'Tronadura desplazó el contacto', 'Pedido de la planta (ley o mineralogía)', 'Equipo fuera de servicio', 'Otro'];
  nueva = false;
  motivo = this.motivos[0];
  descripcion = '';
  poligono = '';
  readonly err = signal<Record<string, string>>({});

  abrir() { this.nueva = true; this.descripcion = ''; this.poligono = ''; this.err.set({}); }
  publicar() {
    const e: Record<string, string> = {};
    const t = this.descripcion.trim();
    if (!t) e['vd'] = 'Este campo es obligatorio.'; else if (t.length < 10) e['vd'] = 'Mínimo 10 caracteres.';
    if (!this.poligono.trim()) e['vp'] = 'Este campo es obligatorio.';
    this.err.set(e);
    if (Object.keys(e).length) return;
    const n = PLAN_VERS.length + 1;
    PLAN_VERS.push({ v: 'v' + n, f: new Date(), a: this.ses.user()?.name || 'Usuario', m: `${this.motivo}: ${t}`, c: 1, t: -800 });
    this.versiones.set([...PLAN_VERS]);
    this.nueva = false;
    this.toast.show(`Versión v${n} publicada y notificada al despacho y a terreno.`, 'ok');
  }
}
