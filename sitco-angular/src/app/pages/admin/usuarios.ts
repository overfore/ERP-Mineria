import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ROLES, USUARIOS, Usuario } from '../../core/data';
import { ToastService } from '../../core/toast.service';
import { fdt } from '../../core/util';
import { Cell, Col, DataTable } from '../../shared/data-table';
import { Icon } from '../../shared/icon';
import { Modal } from '../../shared/modal';
import { PageHeader } from '../../shared/page-header';
import { Banner, Estado, Menu } from '../../shared/ui';
import { AdminNav } from './admin-nav';

/** Administración de personas usuarias: identidades federadas, roles, segundo factor y bloqueo. */
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.html',
  imports: [FormsModule, DataTable, Cell, Icon, Modal, PageHeader, Banner, Estado, Menu, AdminNav],
})
export class Usuarios {
  private toast = inject(ToastService);
  readonly fdt = fdt;
  readonly roles = Object.entries(ROLES);
  readonly usuarios = signal([...USUARIOS]);
  readonly cols: Col<Usuario>[] = [
    { key: 'nombre', label: 'Persona' }, { key: 'rolL', label: 'Rol' }, { key: 'idp', label: 'Identidad' }, { key: 'mfa', label: '2.º factor' },
    { key: 'estado', label: 'Estado' }, { key: 'acceso', label: 'Último acceso', sortv: r => r.acceso.getTime() }, { key: 'acc', label: '', nosort: true },
  ];
  readonly filtros = [{ key: 'rolL', label: 'Rol', options: Object.values(ROLES).map(r => r.label) }, { key: 'estado', label: 'Estado', options: ['Activo', 'Inactivo', 'Bloqueado'] }];

  invitar = false;
  correo = '';
  rolInvitado = 'supervisor';
  readonly errCorreo = signal('');
  cambiandoRol: Usuario | null = null;
  nuevoRol = '';
  restableciendo: Usuario | null = null;
  bloqueando: Usuario | null = null;
  desactivando: string[] = [];

  private refrescar() { this.usuarios.set([...USUARIOS]); }

  masiva(e: { accion: string; ids: string[] }) {
    if (e.accion === 'mfa') this.toast.show(`Segundo factor exigido a ${e.ids.length} usuario${e.ids.length > 1 ? 's' : ''} en el próximo ingreso.`, 'ok');
    else this.desactivando = e.ids;
  }
  desactivar() {
    this.desactivando.forEach(i => (USUARIOS.find(u => u.id === i)!.estado = 'Inactivo'));
    this.desactivando = [];
    this.refrescar();
    this.toast.show('Cuentas desactivadas y auditadas.', 'ok');
  }
  abrirInvitacion() { this.invitar = true; this.correo = ''; this.errCorreo.set(''); }
  enviarInvitacion() {
    const v = this.correo.trim();
    this.errCorreo.set(!v ? 'Este campo es obligatorio.' : !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? 'Ingresa un correo válido (ej. nombre@empresa.cl).' : '');
    if (this.errCorreo()) return;
    this.invitar = false;
    this.toast.show('Invitación enviada. El acceso se federa con el directorio corporativo.', 'ok');
  }
  abrirRol(u: Usuario) { this.cambiandoRol = u; this.nuevoRol = u.rol; }
  guardarRol() {
    const u = USUARIOS.find(x => x.id === this.cambiandoRol!.id)!;
    u.rol = this.nuevoRol; u.rolL = ROLES[u.rol].label;
    this.cambiandoRol = null;
    this.refrescar();
    this.toast.show('Rol actualizado y auditado.', 'ok');
  }
  restablecer() { this.restableciendo = null; this.toast.show('Segundo factor restablecido (auditado).', 'ok'); }
  bloquear() {
    const u = USUARIOS.find(x => x.id === this.bloqueando!.id)!;
    u.estado = u.estado === 'Bloqueado' ? 'Activo' : 'Bloqueado';
    this.bloqueando = null;
    this.refrescar();
    this.toast.show('Estado de la cuenta actualizado y auditado.', 'ok');
  }
}
