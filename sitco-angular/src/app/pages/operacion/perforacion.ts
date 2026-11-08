import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { POZOS, Pozo } from '../../core/data';
import { hbar } from '../../core/charts';
import { SimService } from '../../core/sim.service';
import { ToastService } from '../../core/toast.service';
import { csv, fdt, nd } from '../../core/util';
import { Cell, Col, DataTable } from '../../shared/data-table';
import { Field } from '../../shared/forms';
import { HtmlPipe } from '../../shared/html.pipe';
import { Icon } from '../../shared/icon';
import { Modal } from '../../shared/modal';
import { PageHeader } from '../../shared/page-header';
import { Estado, Kpi, Tabs } from '../../shared/ui';

const SIN_INSTRUMENTAR = ['PF-03', 'PF-04', 'PF-05', 'PF-06', 'PF-07', 'PF-08', 'PF-09'];
const delTurno = () => POZOS.filter(p => Date.now() - p.f.getTime() < 12 * 3600e3);

/** Perforación y pozos (Operación Mina, RF-TER-006): profundidad e índice de dureza de cada pozo. */
@Component({
  selector: 'app-perforacion',
  templateUrl: './perforacion.html',
  imports: [FormsModule, DataTable, Cell, Field, HtmlPipe, Icon, Modal, PageHeader, Estado, Kpi, Tabs],
})
export class Perforacion {
  readonly sim = inject(SimService);
  private toast = inject(ToastService);
  readonly nd = nd;
  readonly fdt = fdt;
  readonly sinInstrumentar = SIN_INSTRUMENTAR;
  readonly pozos = signal([...POZOS]);
  readonly delTurno = computed(() => { this.pozos(); return delTurno().length; });
  readonly promedio = computed(() => Math.round(this.pozos().reduce((a, p) => a + p.dur, 0) / this.pozos().length));
  readonly durezaPorPoligono = computed(() => {
    const por: Record<string, number[]> = {};
    this.pozos().forEach(p => (por[p.poli] = por[p.poli] || []).push(p.dur));
    const polis = Object.keys(por).slice(0, 8);
    return hbar({ labels: polis, values: polis.map(k => Math.round(por[k].reduce((a, b) => a + b, 0) / por[k].length)), fmt: v => String(v), ml: 110, label: 'Índice de dureza promedio por polígono' });
  });
  readonly tabs = [{ id: 'p', label: 'Pozos' }, { id: 'd', label: 'Dureza por polígono' }, { id: 'c', label: 'Cómo se registra' }];
  readonly tab = signal('p');
  readonly cols: Col<Pozo>[] = [
    { key: 'id', label: 'Pozo' }, { key: 'poli', label: 'Polígono' }, { key: 'pf', label: 'Perforadora' }, { key: 'prof', label: 'Profundidad', num: true },
    { key: 'dur', label: 'Dureza', num: true }, { key: 'agua', label: 'Agua' }, { key: 'origen', label: 'Origen' }, { key: 'f', label: 'Hora', sortv: r => r.f.getTime() },
  ];
  readonly filtros = [{ key: 'origen', label: 'Origen', options: ['Instrumentada', 'App SITCO Terreno'] }, { key: 'pf', label: 'Perforadora', options: ['PF-01', 'PF-02', ...SIN_INSTRUMENTAR] }];

  nuevo = false;
  n = { pf: 'PF-03', poli: '', prof: 15, dur: 65, agua: 'No' };
  readonly err = signal<Record<string, string>>({});

  dureza(d: number) { return d >= 75 ? 'Dura' : d >= 55 ? 'Media' : 'Blanda'; }
  descargar(rows: Pozo[]) {
    csv('pozos.csv', ['Pozo', 'Polígono', 'Perforadora', 'Profundidad (m)', 'Diámetro (mm)', 'Índice de dureza', 'Agua', 'Origen', 'Fecha y hora'], rows.map(p => [p.id, p.poli, p.pf, p.prof, p.diam, p.dur, p.agua, p.origen, fdt(p.f)]));
    this.toast.show(`${rows.length} pozos descargados en CSV.`, 'ok');
  }
  exportarSeleccion(ids: string[]) { this.descargar(POZOS.filter(p => ids.includes(p.id))); }
  abrir() { this.nuevo = true; this.n = { pf: 'PF-03', poli: '', prof: 15, dur: 65, agua: 'No' }; this.err.set({}); }
  registrar() {
    const e: Record<string, string> = {};
    if (!this.n.poli.trim()) e['poli'] = 'Este campo es obligatorio.';
    if (!(+this.n.prof > 0)) e['prof'] = 'Ingresa un valor mayor que 0.';
    this.err.set(e);
    if (Object.keys(e).length) return;
    const p: Pozo = { id: 'PZ-' + (4800 + POZOS.length), poli: this.n.poli.trim(), pf: this.n.pf, prof: +this.n.prof, diam: 311, dur: +this.n.dur, agua: this.n.agua, origen: 'App SITCO Terreno', f: new Date() };
    POZOS.unshift(p);
    this.pozos.set([...POZOS]);
    this.sim.capture('pozo', `Pozo ${p.id} · ${p.pf} · ${p.poli}`, 'App SITCO Terreno');
    this.nuevo = false;
    this.toast.show(this.sim.lte === 'shadow' ? `<strong>${p.id} guardado en la tableta.</strong> Sin cobertura: sube solo al recuperar la señal.`
      : this.sim.link === 'down' ? `<strong>${p.id} registrado en el Nodo de Faena.</strong> Sube a la nube al volver el enlace.`
        : `<strong>${p.id} registrado.</strong> Geología ya puede descargarlo.`, 'ok', 5000);
  }
}
