import { ApplicationConfig, Injectable, provideBrowserGlobalErrorListeners } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy, provideRouter, withComponentInputBinding, withHashLocation } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { routes } from './app.routes';

/** Título de la pestaña: «Pantalla · SITCO Aranda». */
@Injectable()
class Titulo extends TitleStrategy {
  constructor(private title: Title) { super(); }
  override updateTitle(s: RouterStateSnapshot) {
    const t = this.buildTitle(s);
    this.title.setTitle(t ? `${t} · SITCO Aranda` : 'SITCO Aranda');
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Rutas con # (/#/inicio), igual que el prototipo en HTML: funciona en cualquier hosting estático.
    provideRouter(routes, withHashLocation(), withComponentInputBinding()),
    { provide: TitleStrategy, useClass: Titulo },
  ],
};
