import { Injectable, signal } from '@angular/core';

export type Miga = [string, string];

/** Datos de la pantalla actual que leen el marco y la cabecera (módulo, migas, carga). */
@Injectable({ providedIn: 'root' })
export class PageService {
  /** Sección del menú (inicio, trazabilidad…): decide permisos y la marca de módulo. */
  readonly item = signal<string | null>(null);
  readonly migas = signal<Miga[]>([]);
  readonly cargando = signal(false);
  readonly publico = signal(true);
  readonly navAbierto = signal(false);
}

/** Datos que cada ruta declara en app.routes.ts. */
export interface DatosRuta {
  item?: string;
  auth?: boolean;
  publico?: boolean;
  /** Retardo del esqueleto de carga; las pantallas rápidas no lo muestran. */
  rapido?: boolean;
  migas?: (p: Record<string, string>) => Miga[];
}
