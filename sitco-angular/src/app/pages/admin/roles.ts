import { Component, computed, inject, signal } from '@angular/core';
import { MATRIZ, PERMISOS, ROLES } from '../../core/data';
import { ToastService } from '../../core/toast.service';
import { Modal } from '../../shared/modal';
import { PageHeader } from '../../shared/page-header';
import { Banner } from '../../shared/ui';
import { AdminNav } from './admin-nav';

/** Permisos que no deben juntarse en un mismo rol (segregación de funciones). */
const CONFLICTOS: [number, number, string][] = [[3, 9, 'aprobar acreditaciones y administrar usuarios'], [1, 9, 'aprobar lotes y cambiar parámetros'], [4, 8, 'aprobar acreditaciones y administrar usuarios']];
const copia = () => JSON.parse(JSON.stringify(MATRIZ)) as Record<string, number[]>;

/** Matriz de permisos por rol, con alerta de conflictos de segregación de funciones. */
@Component({
  selector: 'app-roles',
  templateUrl: './roles.html',
  imports: [Modal, PageHeader, Banner, AdminNav],
})
export class Roles {
  private toast = inject(ToastService);
  readonly roles = Object.entries(ROLES);
  readonly permisos = PERMISOS;
  readonly mtx = signal(copia());
  readonly guardado = signal(false);
  readonly cambiado = computed(() => JSON.stringify(this.mtx()) !== JSON.stringify(MATRIZ));
  readonly conflictos = computed(() => {
    const m = this.mtx();
    return Object.keys(m).flatMap(k => CONFLICTOS.filter(c => m[k][c[0]] && m[k][c[1]]).map(c => `${ROLES[k].label}: ${c[2]}`));
  });
  confirmar = false;

  marcar(rol: string, i: number, on: boolean) {
    this.mtx.update(m => ({ ...m, [rol]: m[rol].map((v, k) => (k === i ? (on ? 1 : 0) : v)) }));
    this.guardado.set(false);
  }
  guardar() {
    Object.entries(this.mtx()).forEach(([k, v]) => (MATRIZ[k] = v.slice()));
    this.mtx.set(copia());
    this.confirmar = false;
    this.guardado.set(true);
    this.toast.show('Matriz de permisos actualizada y auditada.', 'ok');
  }
  descartar() { this.mtx.set(copia()); this.guardado.set(false); this.toast.show('Cambios descartados.', 'info', 2500); }
}
