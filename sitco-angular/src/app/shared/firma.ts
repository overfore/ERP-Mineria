import { Component, ElementRef, signal, viewChild } from '@angular/core';

/** Recuadro para firmar con el dedo o el mouse. `firmado()` indica si ya hay trazo. */
@Component({
  selector: 'app-firma',
  host: { class: 'block' },
  template: `<canvas #lienzo class="w-full h-[140px] border-2 border-dashed border-acero rounded-[10px] bg-white touch-none" aria-label="Área para firmar con el dedo"
    (pointerdown)="bajar($event)" (pointermove)="mover($event)" (pointerup)="dibujando = false" (pointercancel)="dibujando = false"></canvas>`,
})
export class Firma {
  private lienzo = viewChild.required<ElementRef<HTMLCanvasElement>>('lienzo');
  private ctx: CanvasRenderingContext2D | null = null;
  dibujando = false;
  readonly firmado = signal(false);

  private preparar() {
    if (this.ctx) return this.ctx;
    const cv = this.lienzo().nativeElement, ratio = window.devicePixelRatio || 1, r = cv.getBoundingClientRect();
    cv.width = (r.width || 300) * ratio;
    cv.height = 140 * ratio;
    const c = cv.getContext('2d')!;
    c.scale(ratio, ratio);
    c.lineWidth = 2.6; c.lineCap = 'round'; c.strokeStyle = '#1E2B35';
    return (this.ctx = c);
  }
  private punto(e: PointerEvent): [number, number] { const r = this.lienzo().nativeElement.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; }
  bajar(e: PointerEvent) {
    const c = this.preparar();
    this.dibujando = true;
    this.lienzo().nativeElement.setPointerCapture(e.pointerId);
    c.beginPath();
    c.moveTo(...this.punto(e));
  }
  mover(e: PointerEvent) {
    if (!this.dibujando) return;
    this.ctx!.lineTo(...this.punto(e));
    this.ctx!.stroke();
    this.firmado.set(true);
  }
  borrar() {
    const cv = this.lienzo().nativeElement;
    this.ctx?.clearRect(0, 0, cv.width, cv.height);
    this.firmado.set(false);
  }
}
