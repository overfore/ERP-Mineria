# SITCO Aranda en Angular

Versión en **Angular 22** con estilos en **Tailwind CSS 4** del prototipo SITCO Aranda. Tiene 37 pantallas con datos de demostración.

> Es una **simulación**: no hay servidor, base de datos ni nube reales. Todo corre en el navegador.

## Cómo verlo

Requisitos: Node.js 22 o superior.

```bash
cd sitco-angular
npm install
npm start
```

Abre `http://localhost:4200`. Los datos para entrar son los mismos del prototipo: PIN `1234`, segundo factor `123456` y código de recuperación `482913`. También puedes usar **Explorar como evaluador** en la portada.

Para generar la versión publicable:

```bash
npm run build
```

Queda en `dist/sitco-angular/browser`. Las rutas usan `#` (por ejemplo `/#/inicio`), así que funciona en cualquier hosting estático, incluido GitHub Pages, sin configurar el servidor.

## Cómo está armado

Angular básico: componentes independientes (*standalone*), señales (*signals*) para el estado, el enrutador de Angular con carga diferida por pantalla y formularios con `ngModel`. No usa librerías de componentes: todo está hecho con Tailwind.

```
src/
  styles.css            Tema de Tailwind (colores, tipografías) y clases base: btn, card, field, badge…
  index.html            Página de entrada, tipografías de Google Fonts
  app/
    app.ts / app.html   Marco: cabecera, menú lateral, migas, esqueleto de carga y control de acceso por rol
    app.routes.ts       Las 37 rutas, con su título, sección del menú y migas
    app.config.ts       Enrutador con # y título de la pestaña
    core/               Datos y lógica sin pantalla
      data.ts           Datos de demostración (perfiles, menú, módulos, lotes, equipos, personas…)
      util.ts           Formatos de número y fecha, validación de RUT y de campos, descarga CSV
      charts.ts         Gráficos SVG (barras, líneas, anillo, medidor, calor…)
      session.service.ts  Sesión de demostración, modo sol, texto grande y recorrido guiado
      sim.service.ts    Simulador de conectividad: equipo → Nodo de Faena → nube
      toast.service.ts  Avisos breves
      page.service.ts   Datos de la pantalla actual (sección, migas, carga)
    layout/             Piezas del marco: cabecera, menú lateral, acciones rápidas, simulador, avisos, recorrido
    shared/             Componentes reutilizables
      ui.ts             Tarjeta, indicador, aviso, ayuda emergente, pestañas, menú, pasos, línea de tiempo, estado
      data-table.ts     Tabla con búsqueda, filtros, orden, paginación y selección masiva
      forms.ts          Campo con validación en tiempo real, autocompletado, carga de archivos y fuerza de contraseña
      modal.ts          Diálogo accesible sobre <dialog>
      icon.ts           Íconos SVG
      …                 Firma en pantalla, exportación de informes, arquitectura isométrica, cabecera de pantalla
    pages/              Una carpeta por área, un componente por pantalla
      publico/          Portada, ingreso, segundo factor, recuperar acceso, registro de contratistas
      operacion/        Inicio, trazabilidad, lote, conformar lote, conciliación, plan, perforación, equipos, terreno
      control/          Centro de control (despacho, mapa, geotecnia, pit 3D, arquitectura)
      personas/         Acreditación, ficha de persona, portería, seguridad, ambiental, terceros
      analisis/         Tablero analítico y detalle de indicador
      plataforma/       Conectividad y nube, integrador de sistemas
      admin/            Usuarios, roles y permisos, parametrización, auditoría
      docs/             Ayuda, arquitectura de información, sistema de diseño
```

### Colores en Tailwind

Los cinco colores de la paleta son clases de Tailwind con nombre propio:

| Color | Clase | Uso |
|---|---|---|
| Pizarra `#1E2B35` | `bg-pizarra`, `text-pizarra` | Estructura, texto, navegación |
| Cobre `#9C4A1F` | `bg-cobre`, `text-cobre` | Acción principal y énfasis |
| Arena `#F5F0E8` | `bg-arena` | Fondo de la aplicación |
| Acero `#4A5A66` | `text-acero`, `border-acero` | Texto secundario y bordes |
| Verde señal `#1F7A5C` | `bg-senal`, `text-senal` | Éxito y estado normal |

Las variantes (`cobre-l`, `acero-xl`, `aviso-l`, `error`…) y los colores de la consola oscura del Centro de control (`cc-bg`, `cc-line`…) están en `src/styles.css`. El modo sol cambia esos colores para toda la aplicación.

### Una pantalla típica

Cada pantalla es un componente con su `.ts` y su `.html`. Por ejemplo, `pages/operacion/equipos.html` usa la tabla compartida y define solo las celdas especiales:

```html
<app-data-table [rows]="equipos" [cols]="cols" [filtros]="filtros">
  <ng-template appCell="id" let-r><a [routerLink]="['/equipos', r.id]">{{ r.id }}</a></ng-template>
  <ng-template appCell="estado" let-r><app-estado [v]="r.estado" /></ng-template>
</app-data-table>
```
