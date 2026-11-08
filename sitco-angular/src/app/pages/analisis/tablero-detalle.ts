import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { hbar, line } from '../../core/charts';
import { dOff, fd, nd, rng } from '../../core/util';
import { Cell, Col, DataTable } from '../../shared/data-table';
import { ExportDialog } from '../../shared/export-dialog';
import { HtmlPipe } from '../../shared/html.pipe';
import { Icon } from '../../shared/icon';
import { PageHeader } from '../../shared/page-header';
import { Card, Empty, Estado } from '../../shared/ui';
import { DETALLE, datosPeriodo } from './tablero-datos';

interface Registro { id: string; f: Date; z: string; v: number; m: number; o: string }

/** Detalle de un indicador: tendencia, línea base, meta y registros que lo componen. */
@Component({
  selector: 'app-tablero-detalle',
  templateUrl: './tablero-detalle.html',
  imports: [RouterLink, DataTable, Cell, ExportDialog, HtmlPipe, Icon, PageHeader, Card, Empty, Estado],
})
export class TableroDetalle {
  readonly k = input.required<string>();
  readonly nd = nd;
  readonly fd = fd;
  readonly d = computed(() => DETALLE[this.k()]);
  readonly tendencia = computed(() => {
    const k = this.k(), d = this.d(), D = datosPeriodo(30);
    if (k === 'detenciones') return hbar({ labels: ['Falla mecánica', 'Falla eléctrica', 'Espera de pala', 'Espera de camión', 'Clima / viento', 'Cambio de turno'], values: D.det.slice(0, 6), fmt: v => v + ' h', ml: 140, label: 'Horas de detención por causa' });
    const v = k === 'utilizacion' ? D.util : k === 'demoras' ? D.sinc : k === 'plan' ? D.plan : k === 'conciliacion' ? D.sinc.map(x => x / 5) : D.util.map(x => x / 2);
    return line({ labels: D.L, series: [{ name: d[0], values: v, color: '#9C4A1F' }], label: d[0] });
  });
  readonly registros = computed<Registro[]>(() => {
    const r = rng(this.k().length * 101);
    return Array.from({ length: 24 }, (_, i) => ({ id: 'R-' + (i + 1), f: dOff(-i), z: ['Banco B3015', 'Rampa norte', 'Chancador', 'Stock A', 'Planta'][i % 5], v: +(60 + r() * 35).toFixed(1), m: 80, o: ['Dispatch', 'Telemetría', 'Laboratorio', 'Balanza'][i % 4] }));
  });
  readonly cols: Col<Registro>[] = [
    { key: 'id', label: 'Registro' }, { key: 'f', label: 'Fecha', sortv: r => r.f.getTime() }, { key: 'z', label: 'Zona' }, { key: 'o', label: 'Fuente' },
    { key: 'v', label: 'Valor', num: true }, { key: 'm', label: 'Meta', num: true }, { key: 'e', label: 'Estado' },
  ];
  exportar = false;
}
