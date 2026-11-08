import { Component, inject, signal } from '@angular/core';
import { SessionService } from '../../core/session.service';
import { ToastService, ToastTipo } from '../../core/toast.service';
import { Field, Regla } from '../../shared/forms';
import { IC, Icon } from '../../shared/icon';
import { Modal } from '../../shared/modal';
import { PageHeader } from '../../shared/page-header';
import { Empty, Estado, Stepper, Tabs, Timeline } from '../../shared/ui';

/** Sistema de diseño (RT-25.05): color, tipografía, retícula, componentes, íconos y accesibilidad. */
@Component({
  selector: 'app-sistema-diseno',
  templateUrl: './sistema-diseno.html',
  imports: [Field, Regla, Icon, Modal, PageHeader, Empty, Estado, Stepper, Tabs, Timeline],
})
export class SistemaDiseno {
  readonly ses = inject(SessionService);
  private toast = inject(ToastService);
  readonly tabs = [{ id: 'c', label: 'Color' }, { id: 't', label: 'Tipografía y retícula' }, { id: 'k', label: 'Componentes' }, { id: 'i', label: 'Iconografía' }, { id: 'a', label: 'Accesibilidad' }];
  readonly tab = signal('c');
  readonly paleta = [['Pizarra', '#1E2B35', '#fff', 'Estructura, texto, navegación', 'pizarra'], ['Cobre', '#9C4A1F', '#fff', 'Acción principal y énfasis', 'cobre'], ['Arena', '#F5F0E8', '#1E2B35', 'Fondo de la aplicación', 'arena'], ['Acero', '#4A5A66', '#fff', 'Texto secundario y bordes', 'acero'], ['Verde señal', '#1F7A5C', '#fff', 'Éxito y estado normal', 'senal']];
  readonly estados = [['Advertencia', '#7A4E00', '#FFF1CF'], ['Error', '#A32020', '#FCE4E4'], ['Información', '#4A5A66', '#EEF1F3']];
  readonly contrastes = [['Pizarra sobre arena', '12,9 : 1', 'Texto principal'], ['Blanco sobre cobre', '6,1 : 1', 'Botón primario'], ['Acero sobre arena', '6,3 : 1', 'Texto secundario'], ['Blanco sobre verde señal', '5,2 : 1', 'Confirmaciones'], ['Modo sol: pizarra sobre blanco', '14,6 : 1', 'Alto contraste a la intemperie']];
  readonly espacios = [4, 8, 12, 16, 24, 32, 48];
  readonly iconos = Object.keys(IC);
  readonly avisos: [ToastTipo, string, string][] = [['ok', 'Éxito', '<strong>Éxito.</strong> La acción se completó.'], ['warn', 'Advertencia', '<strong>Advertencia.</strong> Revisa los datos.'], ['err', 'Error', '<strong>Error.</strong> No se pudo completar. Intenta de nuevo.'], ['info', 'Información', '<strong>Información.</strong> Sincronización en curso.']];
  dialogo = false;

  aviso(t: ToastTipo, msg: string) { this.toast.show(msg, t); }
  confirmar() { this.dialogo = false; this.toast.show('Acción confirmada.', 'ok'); }
}
