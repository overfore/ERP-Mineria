import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { hbar, line } from '../../core/charts';
import { ToastService } from '../../core/toast.service';
import { nd, nf } from '../../core/util';
import { Cell, Col, DataTable } from '../../shared/data-table';
import { ExportDialog } from '../../shared/export-dialog';
import { HtmlPipe } from '../../shared/html.pipe';
import { Icon } from '../../shared/icon';
import { Modal } from '../../shared/modal';
import { PageHeader } from '../../shared/page-header';
import { Card, Estado, Kpi, Timeline } from '../../shared/ui';

interface Punto { id: string; punto: string; a: string; b: string; va: number; vb: number; ex: boolean; causa: string }
/** Diferencias por punto de la cadena (se conservan mientras dure la sesión). */
const PUNTOS: Punto[] = [
  { id: 'c1', punto: 'Mina → descarga', a: 'Pesaje a bordo', b: 'Báscula de control (muestra)', va: 1842300, vb: 1803900, ex: false, causa: '' },
  { id: 'c2', punto: 'Descarga → alimentación a planta', a: 'Báscula de control', b: 'Balanza de alimentación', va: 1803900, vb: 1771200, ex: false, causa: '' },
  { id: 'c3', punto: 'Planta → concentrado', a: 'Cobre fino alimentado', b: 'Cobre fino en concentrado + relave', va: 9310, vb: 9235, ex: true, causa: 'Recuperación: factor de ajuste histórico (2013) revisado y versionado' },
  { id: 'c4', punto: 'Concentrado → embarque', a: 'Despachado a puerto', b: 'Embarcado (certificado)', va: 31580, vb: 31430, ex: true, causa: 'Humedad de muestreo y merma de acopio portuario' },
];
const CAUSAS = ['Calibración de balanza', 'Humedad no corregida', 'Stock con ley no verificada', 'Viajes sin pesaje de a bordo', 'Factor de ajuste histórico', 'Otra'];

/** Conciliación metalúrgica mina–planta–embarque, con causa explicada por punto de la cadena. */
@Component({
  selector: 'app-conciliacion',
  templateUrl: './conciliacion.html',
  imports: [FormsModule, DataTable, Cell, ExportDialog, HtmlPipe, Icon, Modal, PageHeader, Card, Estado, Kpi, Timeline],
})
export class Conciliacion {
  private toast = inject(ToastService);
  readonly nf = nf;
  readonly nd = nd;
  readonly causas = CAUSAS;
  readonly puntos = signal<Punto[]>([...PUNTOS]);
  readonly porExplicar = computed(() => this.puntos().filter(x => !x.ex).length);
  readonly cols: Col<Punto>[] = [
    { key: 'punto', label: 'Punto de la cadena' }, { key: 'a', label: 'Medición A' }, { key: 'b', label: 'Medición B' },
    { key: 'd', label: 'Diferencia', num: true, sortv: r => r.va - r.vb }, { key: 'ex', label: 'Estado' }, { key: 'acc', label: '', nosort: true },
  ];
  readonly mediciones = hbar({ labels: ['Pesaje a bordo', 'Báscula (muestra)', 'Balanza de planta'], values: [1842.3, 1816.8, 1794.4], fmt: v => nd(v, 1) + ' kt', ml: 130, colors: ['#6C8294', '#8A6A3E', '#1F7A5C'], label: 'Tonelaje del mes según cada medición, en miles de toneladas' });
  readonly extremos = nd((1842.3 - 1794.4) / 1842.3 * 100, 1);
  readonly mensual = line({ labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct'], series: [{ name: 'Diferencia', values: [6.8, 5.9, 5.2, 4.7, 4.1, 3.6, 3.1, 2.9, 2.7, 2.6], color: '#9C4A1F' }], ref: 2, refLabel: 'Meta 2 %', min: 0, max: 8, fmt: v => nd(v, 0) + '%', label: 'Diferencia de conciliación mensual' });
  readonly cierre = [
    { t: 'Día 1 · Carga automática', w: 'Despacho, báscula, balanza e historiador (lectura)', s: 'done', d: 'Sin planillas ni transcripción.' },
    { t: 'Día 2 · Laboratorio y ajustes', w: 'Resultados de laboratorio y factores de ajuste versionados', s: 'cur', d: 'Los factores desde 2013 quedan documentados: ya no dependen de dos personas.' },
    { t: 'Día 3 · Cierre y entrega a SAP', w: 'La plataforma entrega datos; SAP emite', d: 'Habilitado cuando todas las diferencias tienen causa.' },
  ];
  readonly csv = { name: 'conciliacion.csv', head: ['Punto', 'Medición A', 'Valor A', 'Medición B', 'Valor B', 'Dif %', 'Causa'], rows: PUNTOS.map(r => [r.punto, r.a, r.va, r.b, r.vb, nd((r.va - r.vb) / r.va * 100, 2), r.causa]) };

  exportar = false;
  confirmarCierre = false;
  explicando: Punto | null = null;
  causa = CAUSAS[0];
  comentario = '';
  readonly errComentario = signal('');

  dif(r: Punto) { return nd((r.va - r.vb) / r.va * 100, 1); }

  abrir(r: Punto) { this.explicando = r; this.causa = CAUSAS[0]; this.comentario = ''; this.errComentario.set(''); }
  guardarExplicacion() {
    const t = this.comentario.trim();
    this.errComentario.set(!t ? 'Este campo es obligatorio.' : t.length < 10 ? 'Mínimo 10 caracteres.' : '');
    if (this.errComentario()) return;
    const r = PUNTOS.find(x => x.id === this.explicando!.id)!;
    r.ex = true;
    r.causa = `${this.causa}: ${t}`;
    this.puntos.set([...PUNTOS]);
    this.explicando = null;
    this.toast.show('Explicación registrada y auditada.', 'ok');
  }
  cerrarMes() {
    const n = this.porExplicar();
    if (n) { this.toast.show(`No se puede cerrar: ${n} diferencia${n > 1 ? 's' : ''} sin causa. Explica cada una primero.`, 'warn', 5500); return; }
    this.confirmarCierre = true;
  }
  confirmarCierreMes() { this.confirmarCierre = false; this.toast.show('Mes cerrado en D+2. Datos entregados a SAP.', 'ok', 5000); }
}
