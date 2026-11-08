import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Empty } from '../shared/ui';

@Component({
  selector: 'app-no-encontrada',
  template: `
    <section class="max-w-[480px] mx-auto my-8 px-4">
      <div class="card">
        <app-empty titulo="Página no encontrada" mensaje="El enlace no existe o fue movido. Vuelve al inicio para continuar.">
          <a class="btn" routerLink="/">Ir al inicio</a>
        </app-empty>
      </div>
    </section>`,
  imports: [RouterLink, Empty],
})
export class NoEncontrada {}
