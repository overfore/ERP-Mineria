'use strict';
/* =====================================================================
   views-modulos.js — piezas que faltaban para calzar con los módulos de la
   solución (Subdocumento 3):
   · Marcas de módulo, etapa (E1/E2) y NODO en la cabecera de cada pantalla
   ===================================================================== */

/* ---------- Marcas de módulo, etapa y NODO ---------- */
const MOD_TIP = 'E1: Etapa 1, en producción el mes 16. E2: Etapa 2, en producción el mes 21. NODO: también corre en el Nodo de Faena y sigue funcionando 48 h sin enlace. Fuente: Subdocumento 3.';
H.stageBadges = m => `${m.e.map(e => H.badge(e, e === 'E1' ? 'cu' : '')).join('')}${m.nodo ? H.badge('NODO', 'dk') : ''}`;
H.modChips = item => {
  const m = item && H.modOf(item); if (!m) return '';
  return `<div class="mod-tag"><span class="xs muted">Módulo</span> <strong class="small">${esc(m.n)}</strong> ${H.stageBadges(m)}${H.tip(MOD_TIP, true)}</div>`;
};
