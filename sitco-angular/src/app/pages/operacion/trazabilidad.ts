import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LIMITES, CHAIN_STEPS, EMBARQUES, POLIS, Poligono, reverse } from '../../core/data';
import { fd, nd, nf } from '../../core/util';
import { Cell, Col, DataTable } from '../../shared/data-table';
import { DatosCsv, ExportDialog } from '../../shared/export-dialog';
import { Field } from '../../shared/forms';
import { Icon } from '../../shared/icon';
import { PageHeader } from '../../shared/page-header';
import { Banner, Card, Empty, Estado, Menu, Skeleton, Tabs, Timeline } from '../../shared/ui';

/** Lotes de embarque, trazabilidad inversa (del polígono a los embarques) y ciclo del mineral. */
@Component({
  selector: 'app-trazabilidad',
  templateUrl: './trazabilidad.html',
  imports: [RouterLink, DataTable, Cell, ExportDialog, Field, Icon, PageHeader, Banner, Card, Empty, Estado, Menu, Skeleton, Tabs, Timeline],
})
export class Trazabilidad {
  readonly nf = nf;
  readonly nd = nd;
  readonly fd = fd;
  readonly asLim = LIMITES.as;
  readonly tabs = [{ id: 'lotes', label: 'Lotes de embarque' }, { id: 'inv', label: 'Trazabilidad inversa' }, { id: 'ciclo', label: 'Ciclo del mineral' }];
  readonly tab = signal('lotes');
  readonly embarques = EMBARQUES;
  readonly cols: Col[] = [
    { key: 'id', label: 'Embarque' }, { key: 'nave', label: 'Nave' }, { key: 'comprador', label: 'Comprador' },
    { key: 't', label: 'Toneladas', num: true }, { key: 'cu', label: 'Cu %', num: true }, { key: 'as', label: 'As %', num: true },
    { key: 'estado', label: 'Estado' }, { key: 'fecha', label: 'Fecha', sortv: r => r.fecha.getTime() }, { key: 'acc', label: '', nosort: true },
  ];
  readonly filtros = [
    { key: 'estado', label: 'Estado', options: ['Programado', 'En conformación', 'En muestreo', 'Pendiente de aprobación', 'Embarcado', 'Liquidado'] },
    { key: 'comprador', label: 'Comprador', options: ['Pacific Smelting Co. (Japón)', 'Han River Metals (Corea)'] },
  ];
  readonly ciclo = CHAIN_STEPS.map((s, i) => ({ t: `${i + 1}. ${s.t} · ${s.dato}`, w: s.sys, d: s.s + (s.regla ? ' Regla: ' + s.regla : ''), s: 'done' }));

  exportar = false;
  exportTitulo = '';
  exportCsv: DatosCsv | null = null;

  poligono = POLIS[3].id;
  readonly buscando = signal(false);
  readonly resultado = signal<{ p: Poligono | undefined; r: ReturnType<typeof reverse> } | null>(null);

  constructor() { this.seguir(); }

  exportarLotes() {
    this.exportTitulo = 'Listado de lotes de embarque';
    this.exportCsv = { name: 'lotes-embarque.csv', head: ['Embarque', 'Nave', 'Comprador', 'Toneladas', 'Cu %', 'As %', 'Estado'], rows: EMBARQUES.map(e => [e.id, e.nave, e.comprador, e.t, e.cu, e.as, e.estado]) };
    this.exportar = true;
  }
  exportarLote(id: string) { this.exportTitulo = `Cadena de custodia del lote ${id}`; this.exportCsv = null; this.exportar = true; }

  /** Trazabilidad inversa: del polígono hacia los embarques donde terminó su mineral. */
  seguir() {
    const p = POLIS.find(x => x.id === this.poligono.trim());
    if (!p) { this.resultado.set({ p: undefined, r: [] }); return; }
    this.buscando.set(true);
    setTimeout(() => { this.resultado.set({ p, r: reverse(p.id) }); this.buscando.set(false); }, 500);
  }
}
