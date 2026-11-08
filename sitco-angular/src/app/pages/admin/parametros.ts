import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LIMITES, PARAMS } from '../../core/data';
import { ToastService } from '../../core/toast.service';
import { Modal } from '../../shared/modal';
import { PageHeader } from '../../shared/page-header';
import { Tip } from '../../shared/ui';
import { AdminNav } from './admin-nav';

/** Parametrización: los umbrales y supuestos del negocio son parámetros, no valores escritos en el código. */
@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.html',
  imports: [FormsModule, Modal, PageHeader, Tip, AdminNav],
})
export class Parametros {
  private toast = inject(ToastService);
  readonly params = PARAMS;
  valores: Record<string, number> = Object.fromEntries(PARAMS.map(p => [p.k, p.v]));
  motivo = '';
  readonly err = signal<Record<string, string>>({});
  confirmar = false;

  revisar() {
    const e: Record<string, string> = {};
    PARAMS.forEach(p => {
      const v = this.valores[p.k];
      if (v === null || v === undefined || (v as unknown) === '') e[p.k] = 'Este campo es obligatorio.';
      else if (!(+v > 0)) e[p.k] = 'Ingresa un valor mayor que 0.';
      else if (v < p.min || v > p.max) e[p.k] = `Fuera de rango (${p.min}–${p.max}).`;
    });
    const m = this.motivo.trim();
    if (!m) e['motivo'] = 'Este campo es obligatorio.'; else if (m.length < 10) e['motivo'] = 'Mínimo 10 caracteres.';
    this.err.set(e);
    if (Object.keys(e).length) { this.toast.show('Corrige los valores marcados.', 'warn'); return; }
    this.confirmar = true;
  }
  guardar() {
    PARAMS.forEach(p => (p.v = +this.valores[p.k]));
    LIMITES.as = PARAMS[0].v;
    this.confirmar = false;
    this.toast.show('Parámetros guardados (auditado).', 'ok');
  }
}
