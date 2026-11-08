import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EQ, EQUIPOS } from '../../core/data';
import { ToastService } from '../../core/toast.service';
import { csv, desde, nf } from '../../core/util';
import { Cell, Col, DataTable } from '../../shared/data-table';
import { PageHeader } from '../../shared/page-header';
import { Estado, Kpi, Tabs } from '../../shared/ui';
import { ClasificarDetencion } from './clasificar';

/** Flota y detenciones: una sola vista que cruza despacho, telemetría y pautas de SAP. */
@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.html',
  imports: [RouterLink, DataTable, Cell, PageHeader, Estado, Kpi, Tabs, ClasificarDetencion],
})
export class Equipos {
  private toast = inject(ToastService);
  readonly nf = nf;
  readonly desde = desde;
  readonly equipos = EQUIPOS;
  private ver = signal(0);
  readonly detenidos = computed(() => { this.ver(); return EQUIPOS.filter(e => e.estado === 'Detenido'); });
  readonly sinClasificar = computed(() => this.detenidos().filter(e => e.det!.causa === 'Sin clasificar').length);
  readonly operando = EQUIPOS.filter(e => e.estado === 'Operando').length;
  readonly tabs = computed(() => [{ id: 'f', label: 'Flota' }, { id: 'd', label: `Detenciones (${this.detenidos().length})` }]);
  readonly tab = signal('f');
  readonly cols: Col[] = [
    { key: 'id', label: 'Equipo' }, { key: 'tipo', label: 'Tipo' }, { key: 'fab', label: 'Fabricante' }, { key: 'estado', label: 'Estado' },
    { key: 'zona', label: 'Zona' }, { key: 'util', label: 'Utilización', num: true }, { key: 'hs', label: 'Horas', num: true },
  ];
  readonly filtros = [
    { key: 'estado', label: 'Estado', options: ['Operando', 'Detenido', 'Mantención', 'Sin señal'] },
    { key: 'tipo', label: 'Tipo', options: ['Camión 240 t', 'Pala eléctrica', 'Perforadora'] },
  ];
  clasificar: string | null = null;

  exportar(ids: string[]) {
    csv('equipos.csv', ['Equipo', 'Tipo', 'Estado', 'Utilización %'], ids.map(i => { const e = EQ(i)!; return [e.id, e.tipo, e.estado, e.util]; }));
    this.toast.show(`${ids.length} equipos exportados.`, 'ok');
  }
  clasificado() { this.clasificar = null; this.ver.update(v => v + 1); }
}
