import { Injectable, signal } from '@angular/core';

export type ToastTipo = 'ok' | 'err' | 'warn' | 'info';
export interface Toast { id: number; msg: string; tipo: ToastTipo }

/** Avisos breves en la esquina superior derecha (se anuncian al lector de pantalla). */
@Injectable({ providedIn: 'root' })
export class ToastService {
  readonly lista = signal<Toast[]>([]);
  private seq = 0;

  show(msg: string, tipo: ToastTipo = 'info', ms = 4800) {
    const t = { id: ++this.seq, msg, tipo };
    this.lista.update(l => [...l, t]);
    setTimeout(() => this.cerrar(t.id), ms);
  }

  cerrar(id: number) {
    this.lista.update(l => l.filter(t => t.id !== id));
  }
}
