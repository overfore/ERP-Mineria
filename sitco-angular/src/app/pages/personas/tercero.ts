import { Component, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TERCEROS } from '../../core/data';
import { hbar } from '../../core/charts';
import { ToastService } from '../../core/toast.service';
import { dOff, fd, nf, rng } from '../../core/util';
import { HtmlPipe } from '../../shared/html.pipe';
import { Icon } from '../../shared/icon';
import { Modal } from '../../shared/modal';
import { PageHeader } from '../../shared/page-header';
import { Empty, Estado, Tabs, Timeline } from '../../shared/ui';

const CRITERIOS = ['Seguridad', 'Cumplimiento documental', 'Puntualidad', 'Calidad del servicio'];

/** Ficha de un tercero: datos, documentos, evaluación por criterio e historial. */
@Component({
  selector: 'app-tercero',
  templateUrl: './tercero.html',
  imports: [RouterLink, HtmlPipe, Icon, Modal, PageHeader, Empty, Estado, Tabs, Timeline],
})
export class TerceroFicha {
  private toast = inject(ToastService);
  readonly id = input.required<string>();
  readonly nf = nf;
  readonly criterios = CRITERIOS;
  readonly t = computed(() => TERCEROS.find(x => x.id === this.id()));
  readonly tabs = [{ id: 'f', label: 'Ficha' }, { id: 'e', label: 'Evaluación' }, { id: 'h', label: 'Historial' }];
  readonly tab = signal('f');
  readonly contacto = computed(() => `contacto@${(this.t()?.nombre || '').toLowerCase().replace(/[^a-z]/g, '').slice(0, 10)}.example`);
  readonly evaluacion = computed(() => {
    const t = this.t(); if (!t) return '';
    const r = rng(t.id.length * 13 + t.score);
    const v = [60 + Math.floor(r() * 38), 55 + Math.floor(r() * 43), 62 + Math.floor(r() * 36), 60 + Math.floor(r() * 38)];
    return hbar({ labels: CRITERIOS, values: v, fmt: x => x + '', ml: 170, colors: ['#1F7A5C', '#9C4A1F', '#6C8294', '#8A6A3E'], label: 'Criterios de evaluación del tercero' });
  });
  readonly historial = computed(() => {
    const t = this.t()!;
    return [
      { t: 'Evaluación semestral', w: fd(dOff(-30)), s: 'done', d: `Puntaje ${t.score}` },
      { t: 'Observación registrada', w: fd(dOff(-75)), s: t.estado === 'Vigente' ? 'done' : 'warn', d: t.estado === 'Vigente' ? 'Cerrada sin impacto.' : 'Abierta: seguimiento en curso.' },
      { t: 'Incorporación al directorio', w: fd(dOff(-410)), s: 'done' },
    ];
  });

  evaluar = false;
  readonly notas = signal([75, 75, 75, 75]);
  nota(i: number, v: string) { this.notas.update(n => n.map((x, k) => (k === i ? +v : x))); }
  guardar() { this.evaluar = false; this.toast.show('Evaluación guardada en el historial del tercero.', 'ok'); }
}
