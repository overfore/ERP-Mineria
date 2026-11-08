import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AUDIT, Auditoria as Evento } from '../../core/data';
import { ToastService } from '../../core/toast.service';
import { fdt, isoDia } from '../../core/util';
import { Cell, Col, DataTable } from '../../shared/data-table';
import { ExportDialog } from '../../shared/export-dialog';
import { Icon } from '../../shared/icon';
import { PageHeader } from '../../shared/page-header';
import { AdminNav } from './admin-nav';

/** Registro de auditoría: accesos y acciones críticas, con hash de integridad. */
@Component({
  selector: 'app-auditoria',
  templateUrl: './auditoria.html',
  imports: [FormsModule, DataTable, Cell, ExportDialog, Icon, PageHeader, AdminNav],
})
export class Auditoria {
  private toast = inject(ToastService);
  readonly fdt = fdt;
  readonly eventos = signal<Evento[]>(AUDIT);
  readonly cols: Col<Evento>[] = [
    { key: 'id', label: 'Evento' }, { key: 'f', label: 'Fecha y hora', sortv: r => r.f.getTime() }, { key: 'u', label: 'Usuario' }, { key: 'rol', label: 'Rol' },
    { key: 'a', label: 'Acción' }, { key: 'ip', label: 'Origen' }, { key: 'hash', label: 'Hash' },
  ];
  readonly filtros = [{ key: 'a', label: 'Acción', options: [...new Set(AUDIT.map(a => a.a))] }];
  readonly csv = { name: 'auditoria.csv', head: ['Evento', 'Fecha', 'Usuario', 'Rol', 'Acción', 'Origen', 'Hash'], rows: AUDIT.map(a => [a.id, fdt(a.f), a.u, a.rol, a.a, a.ip, a.hash]) };
  desde = isoDia(-3);
  hasta = isoDia(0);
  exportar = false;

  aplicarRango() {
    const a = new Date(this.desde + 'T00:00:00'), b = new Date(this.hasta + 'T23:59:59');
    if (isNaN(+a) || isNaN(+b) || a > b) { this.toast.show('Revisa el rango de fechas: “Desde” no puede ser posterior a “Hasta”.', 'warn'); return; }
    const r = AUDIT.filter(x => x.f >= a && x.f <= b);
    this.eventos.set(r);
    this.toast.show(`${r.length} eventos en el rango.`, 'info', 2500);
  }
}
