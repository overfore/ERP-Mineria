import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/** Muestra HTML generado por la propia aplicación (gráficos SVG y textos con negrita).
    Nunca se usa con texto escrito por la persona usuaria. */
@Pipe({ name: 'html' })
export class HtmlPipe implements PipeTransform {
  private san = inject(DomSanitizer);
  transform(v: string | null | undefined): SafeHtml {
    return this.san.bypassSecurityTrustHtml(v ?? '');
  }
}
