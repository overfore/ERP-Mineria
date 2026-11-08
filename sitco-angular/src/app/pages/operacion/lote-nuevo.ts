import { Component, OnDestroy, computed, inject, signal, viewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LIMITES } from '../../core/data';
import { ToastService } from '../../core/toast.service';
import { isoDia, nd, nf } from '../../core/util';
import { Field, Regla, validarTodos } from '../../shared/forms';
import { Icon } from '../../shared/icon';
import { PageHeader } from '../../shared/page-header';
import { Banner, Stepper, Timeline } from '../../shared/ui';

const ACOPIOS = [
  { id: 'L-0412', n: 'Acopio · L-0412', as: 0.22, cu: 27.4, max: 6000 },
  { id: 'L-0415', n: 'Acopio · L-0415', as: 0.58, cu: 26.9, max: 5500 },
  { id: 'L-0418', n: 'Acopio · L-0418', as: 0.31, cu: 27.8, max: 4000 },
];
const VERIFICACIONES = ['Versión del plan vigente en cada carga', 'Pesaje de a bordo contra báscula de control', 'Balanza de alimentación de la planta (solo lectura)', 'Análisis de laboratorio asociados (12 de 12)', 'Guías de despacho (412 viajes)', 'Sello de integridad (hash) de toda la evidencia'];
const DOCUMENTOS = ['Certificado de peso y calidad', 'Conocimiento de embarque (datos a SAP)', 'Cadena de custodia firmada', 'Certificado de origen', 'Informe de muestreo comercial'];

/** Conformar un lote de embarque de punta a punta, con el manejo de la excepción de arsénico. */
@Component({
  selector: 'app-lote-nuevo',
  templateUrl: './lote-nuevo.html',
  imports: [FormsModule, RouterLink, Field, Regla, Icon, PageHeader, Banner, Stepper, Timeline],
})
export class LoteNuevo implements OnDestroy {
  private toast = inject(ToastService);
  private reglas = viewChildren(Regla);
  readonly nf = nf;
  readonly nd = nd;
  readonly asLim = LIMITES.as;
  readonly acopios = ACOPIOS;
  readonly verificaciones = VERIFICACIONES;
  readonly naves = ['MN Hokuetsu Star', 'MV Han River', 'MN Pacific Ayame', 'MV Coral Andes', 'MN Seto Maru'];
  readonly pasos = ['Embarque', 'Mezcla', 'Muestreo', 'Cadena', 'Excepciones', 'Aprobación', 'Documentos'];
  readonly titulos = ['Programar el embarque', 'Conformar la mezcla desde el acopio', 'Muestreo comercial', 'Verificación de la cadena de custodia', 'Manejo de excepciones', 'Aprobación comercial', 'Emisión de documentos y cierre'];
  readonly paso = signal(0);

  d = { nv: 'MN Hokuetsu Star', cp: 'Pacific Smelting Co. (Japón)', tn: 12000, fl: isoDia(14), hl: '08:00', pm: 'Acordado', fm: isoDia(12), lb: 'Laboratorio del vendedor (Aranda)', hm: 8.5, obl: true, ex: 'remix', jx: '', ap: false };
  readonly mezcla = signal([6000, 2500, 3500]);
  readonly calc = computed(() => {
    const b = this.mezcla(), t = b.reduce((a, x) => a + x, 0);
    return { t, as: t ? ACOPIOS.reduce((a, l, i) => a + l.as * b[i], 0) / t : 0, cu: t ? ACOPIOS.reduce((a, l, i) => a + l.cu * b[i], 0) / t : 0 };
  });
  readonly objetivo = signal(12000);
  readonly enRango = computed(() => Math.abs(this.calc().t - this.objetivo()) / this.objetivo() <= 0.02);

  /** Paso 4: verificación automática, una fila cada medio segundo. */
  readonly verificadas = signal(0);
  private timers: ReturnType<typeof setInterval>[] = [];

  /** Final: emisión de documentos. */
  readonly emitidos = signal(-1);
  readonly cerrado = signal(false);
  readonly documentos = DOCUMENTOS;

  ngOnDestroy() { this.timers.forEach(t => clearInterval(t)); }

  moverMezcla(i: number, v: string) { this.mezcla.update(b => b.map((x, k) => (k === i ? +v : x))); }

  atras() { this.paso.update(p => p - 1); }
  guardar() { this.toast.show('Borrador guardado en el equipo y en la nube (cuando haya enlace).', 'ok'); }

  continuar() {
    if (!validarTodos(this.reglas())) { this.toast.show('Revisa los campos marcados antes de continuar.', 'warn'); return; }
    const c = this.calc();
    switch (this.paso()) {
      case 0: this.objetivo.set(+this.d.tn || 12000); break;
      case 1: if (!this.enRango()) { this.toast.show(`La mezcla suma ${nf(c.t)} t y el objetivo es ${nf(this.objetivo())} t (±2 %).`, 'warn'); return; } break;
      case 3: if (this.verificadas() < VERIFICACIONES.length) { this.toast.show('Espera a que termine la verificación de la cadena.', 'warn'); return; } break;
      case 4:
        if (c.as > LIMITES.as && this.d.ex === 'remix') { this.toast.show('Vuelve al paso 2 y ajusta la mezcla para bajar el arsénico, o elige continuar con justificación.', 'warn'); return; }
        if (c.as > LIMITES.as && this.d.jx.trim().length < 20) { this.toast.show('Escribe una justificación de al menos 20 caracteres.', 'warn'); return; }
        break;
      case 6: this.emitir(); return;
    }
    this.paso.update(p => p + 1);
    if (this.paso() === 3) this.verificar();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private verificar() {
    this.verificadas.set(0);
    const t = setInterval(() => { this.verificadas.update(v => v + 1); if (this.verificadas() >= VERIFICACIONES.length) clearInterval(t); }, 520);
    this.timers.push(t);
  }

  private emitir() {
    this.emitidos.set(0);
    const t = setInterval(() => {
      this.emitidos.update(v => v + 1);
      if (this.emitidos() >= DOCUMENTOS.length) {
        clearInterval(t);
        setTimeout(() => { this.cerrado.set(true); this.toast.show('Lote cerrado y documentos emitidos.', 'ok'); }, 500);
      }
    }, 450);
    this.timers.push(t);
  }
}
