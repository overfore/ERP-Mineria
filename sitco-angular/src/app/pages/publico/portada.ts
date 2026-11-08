import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BRAND } from '../../core/data';
import { gauge } from '../../core/charts';
import { HtmlPipe } from '../../shared/html.pipe';
import { Icon } from '../../shared/icon';
import { Modal } from '../../shared/modal';
import { RoleCards } from '../../layout/role-picker';

/** Portal público: propuesta de valor, perfiles de demostración y cómo funciona sin enlace. */
@Component({
  selector: 'app-portada',
  templateUrl: './portada.html',
  imports: [RouterLink, Icon, Modal, RoleCards, HtmlPipe],
})
export class Portada {
  readonly brand = BRAND;
  explorar = false;
  readonly resultados = [
    ['4–6 sem → < 2 h', 'Reconstruir el origen de un lote embarcado'],
    ['18 días → ≤ 3 días', 'Cierre de la conciliación metalúrgica'],
    ['9 días → < 48 h', 'Acreditar a un trabajador contratista nuevo'],
    ['48 h sin enlace', 'La operación registra y se sincroniza sola'],
  ];
  readonly pasos = [
    { ico: 'pin', n: '1 · Registrar donde ocurre', t: 'El dato nace en el lugar del hecho', d: 'Un toque del operador de pala, en la botonera, registra el cambio de destino con su contexto (pala, polígono, hora). Los incidentes se firman en terreno. Nada de digitar días después.' },
    { ico: 'route', n: '2 · Seguir la huella', t: 'De cualquier lote al polígono, y de vuelta', d: 'Del embarque al banco de origen, por los stocks y la planta, con la versión del plan vigente y los análisis que respaldan cada paso.' },
    { ico: 'shield', n: '3 · Cumplir sin planillas', t: 'Reportes que salen del sistema', d: 'Acreditaciones que avisan antes del vencimiento, reportes a la autoridad con trazabilidad hasta la medición y huella de carbono verificable.' },
  ];
  readonly medidor = gauge({ value: 31, max: 48, target: 48, text: '31 h', sub: 'de 48 h de autonomía sin enlace', label: 'Autonomía' });
}
