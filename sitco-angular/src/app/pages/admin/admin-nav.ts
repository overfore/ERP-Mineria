import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

/** Pestañas de navegación entre las secciones de Administración. */
@Component({
  selector: 'app-admin-nav',
  host: { class: 'block' },
  template: `
    <nav class="flex gap-1 border-b-2 border-arena-2 mb-4 overflow-x-auto" aria-label="Secciones de administración">
      @for (x of secciones; track x[0]) {
        <a [routerLink]="'/admin/' + x[0]" routerLinkActive #a="routerLinkActive" ariaCurrentWhenActive="page"
          class="inline-flex items-center min-h-12 px-[18px] font-semibold no-underline whitespace-nowrap border-b-4 -mb-0.5 hover:text-pizarra"
          [class]="a.isActive ? 'text-pizarra border-cobre' : 'text-acero border-transparent'">{{ x[1] }}</a>
      }
    </nav>`,
  imports: [RouterLink, RouterLinkActive],
})
export class AdminNav {
  readonly secciones = [['usuarios', 'Usuarios'], ['roles', 'Roles y permisos'], ['parametros', 'Parametrización'], ['auditoria', 'Auditoría']];
}
