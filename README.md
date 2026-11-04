# Huella Aranda — Prototipo interactivo

**FEP Caso Minería · Grupo 2 · OVERFORE**
Prototipo navegable para la propuesta de la Compañía Minera Altos de Aranda S.A. (empresa ficticia del caso).

> Es una **simulación**: no hay servidor, base de datos ni nube reales. Todo corre en el navegador con datos de demostración, para mostrar cómo se vería y cómo se comportaría la plataforma.

---

## Cómo verlo

1. Abre `index.html` con doble clic (Chrome o Edge). No requiere instalar nada ni conexión a internet, salvo las tipografías de Google Fonts.
2. En el login pulsa **"Explorar como evaluador"**, o elige un perfil de demostración.
3. Con el botón **"Simular nube"** (abajo a la izquierda) puedes cortar la fibra o crear una sombra de cobertura y ver cómo reacciona la plataforma.

| Dato de demostración | Valor |
|---|---|
| PIN de credencial de faena | `1234` |
| Código de segundo factor (OTP) | `123456` |
| Código de recuperación de cuenta | `482913` |

Si se publica con GitHub Pages, la dirección es `https://overfore.github.io/ERP-Mineria/`.

---

## Qué hicimos

Una aplicación web de una sola página (HTML, CSS y JavaScript puros, sin dependencias ni compilación) con:

- **9 perfiles de usuario** con menú, inicio y permisos propios: operador de pala, supervisor de turno, planificación, metalurgia, seguridad, sustentabilidad, contratista, gerencia y administración TI. Si un perfil entra a una sección que no le corresponde, ve "Acceso restringido": es el control de acceso por roles.
- **Trazabilidad de lotes** de la mina al embarque, con reconstrucción del origen de cada lote, ciclo completo y una excepción por arsénico.
- **Conciliación metalúrgica**, plan minero con versiones, y flota de equipos con detenciones.
- **Centro de control**: despacho de palas y camiones en movimiento, mapa del rajo, geotecnia, modelo 3D por bloques y arquitectura isométrica equipo → borde → nube.
- **Acreditación de personas**, seguridad y fatiga, ambiental y huella de carbono, y gestión de terceros.
- **Tablero analítico** con filtros, exportación y desglose por indicador.
- **Terreno (móvil)**: la vista del operador de pala, pensada para guantes y sol, con un solo toque.
- **Conectividad y nube**: cola de sincronización, bitácora y simulador de corte.
- **Administración**: usuarios, matriz de roles con conflictos de segregación de funciones, parámetros y auditoría.
- **Documentación del prototipo**: arquitectura de información y sistema de diseño.

## Por qué lo hicimos

Las bases exigen un prototipo interactivo (Capítulo 25 de las Bases Técnicas Transversales, TFEP-01/2026). Además, el correo del profesor aclara que el Informe 3 solo necesita un **avance navegable**; la versión completa se entrega con la propuesta final.

Decidimos **simular** en vez de construir un sistema real, porque lo que se evalúa es el diseño, la experiencia de uso y el comportamiento ante fallas, no un backend en producción. Por eso la conexión a la nube y la sincronización son un modelo en el navegador.

## De dónde sale la información

| Fuente | Qué aporta |
|---|---|
| Bases Técnicas Transversales (TFEP-01/2026), Cap. 25 | Alcance mínimo del prototipo y reglas de diseño RT-25.01 a RT-25.09 |
| Bases Técnicas del Caso Minería | El caso, los procesos y los 14 criterios de aceptación (en especial el 13: 48 h sin enlace, y el 14: operador de pala con guantes y un solo toque) |
| Bases Administrativas | Exigencias de ingeniería, DevSecOps y calidad (art. 24), y contenido de los subdocumentos |
| Correo del profesor | Alcance del Informe 3: avance navegable |
| `DECISIONES.md` del repo del informe | Decisiones de la propuesta que el prototipo respeta |

### Cobertura de reglas de diseño

- **RT-25.05** Sistema de diseño: pantalla `/sistema-diseno`.
- **RT-25.07** Acceso por 6 meses: es un sitio estático, publicable en GitHub Pages u otro alojamiento estático.
- **RT-25.09** Arquitectura de información: pantalla `/arquitectura-informacion` con mapa del sitio, taxonomía y menús por perfil.
- **Criterio 13**: el simulador de nube muestra la operación local desde el borde de faena durante hasta 48 h y la sincronización automática al volver el enlace.
- **Criterio 14**: la pantalla `/terreno` permite registrar el cambio de material con un toque, con opción de deshacer.

## Supuestos y límites

- **Todos los datos son ficticios.** Empresa, personas, lotes, equipos y cifras son de demostración.
- El **límite de arsénico (0,25 %)** es un parámetro supuesto y se puede cambiar; no es un valor oficial del caso.
- El nombre **"Huella Aranda"** y la marca **OVERFORE** son supuestos del equipo; se cambian en un solo lugar (`H.BRAND`, en `js/data.js`).
- Se asume que el **balance es la fuente de verdad** y que **SAP emite los documentos**; el prototipo no reemplaza a SAP.
- **No usa biometría**, por la objeción sindical declarada en el caso.
- Los mapas, el modelo 3D y la imagen del login son **ilustraciones esquemáticas generadas por código**, no datos reales ni fotos de una mina.
- No cubre toda la propuesta: es un avance. El pipeline DevSecOps, por ejemplo, se documenta en la propuesta, no está en el prototipo.

## Estructura

```
index.html          Entrada de la aplicación
css/styles.css      Sistema de diseño y componentes
css/control.css     Estilos del centro de control
js/core.js          Utilidades, componentes, validaciones y gráficos
js/data.js          Datos de demostración, perfiles y menú
js/sim.js           Simulación de conectividad (equipo → borde → nube)
js/app.js           Enrutador, estructura general y recorrido guiado
js/views-*.js       Pantallas por área (públicas, operación, personas, administración, documentación, centro de control)
```

## Accesibilidad

Pensado para el trabajo en faena: objetivos táctiles de 44 px o más, modo de alto contraste para el sol, texto ampliable, navegación por teclado, mensajes anunciados para lector de pantalla y respeto a la preferencia de reducir movimiento.
