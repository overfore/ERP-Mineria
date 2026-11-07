'use strict';
/* =====================================================================
   views-modulos.js — piezas que faltaban para calzar con los módulos de la
   solución (Subdocumento 3):
   · Marcas de módulo, etapa (E1/E2) y NODO en la cabecera de cada pantalla
   · Integrador de Sistemas: un conector por cada sistema existente
   ===================================================================== */

/* ---------- Marcas de módulo, etapa y NODO ---------- */
const MOD_TIP = 'E1: Etapa 1, en producción el mes 16. E2: Etapa 2, en producción el mes 21. NODO: también corre en el Nodo de Faena y sigue funcionando 48 h sin enlace. Fuente: Subdocumento 3.';
H.stageBadges = m => `${m.e.map(e => H.badge(e, e === 'E1' ? 'cu' : '')).join('')}${m.nodo ? H.badge('NODO', 'dk') : ''}`;
H.modChips = item => {
  const m = item && H.modOf(item); if (!m) return '';
  return `<div class="mod-tag"><span class="xs muted">Módulo</span> <strong class="small">${esc(m.n)}</strong> ${H.stageBadges(m)}${H.tip(MOD_TIP, true)}</div>`;
};

/* ===== Integrador de Sistemas ===== */
const intEstado = s => {
  if (s.t === 'Se reemplaza') return { t: 'Migrado a SITCO', k: '' };
  if (s.loc === 'nube' && H.Sim.link === 'down') return { t: 'En bandeja de salida', k: 'warn' };
  if (s.loc === 'nube' && H.Sim.slow()) return { t: 'Conectado por satélite', k: 'warn' };
  return { t: 'Conectado', k: 'ok' };
};
const intTrat = t => H.badge(t, { 'Se integra': 'ok', 'Solo lectura': '', 'Se amplía': 'cu', 'Se reemplaza': 'dk' }[t]);
const intBanner = () => H.Sim.link === 'down'
  ? H.banner('warn', '<strong>Sin camino a la nube.</strong> Los conectores que corren en el Nodo de Faena (despacho, laboratorio, báscula, fatiga, historiador y portería) siguen trabajando. Los que van a la nube (SAP, telemetría y planificación) dejan sus mensajes en la bandeja de salida y los envían solos, en orden, al volver el enlace.')
  : H.banner('info', 'Ninguno de los diez sistemas existentes queda fuera: <strong>cinco se integran</strong>, <strong>tres se leen sin modificarse</strong>, el <strong>acceso de portería se amplía</strong> y las <strong>planillas dejan de ser el sistema de registro</strong>. Prueba cortar las fibras en «Simular nube» y mira cómo cambia el estado de cada conector.');
H.route('/integrador', {
  title: 'Integrador de sistemas', auth: true, item: 'integrador', crumbs: () => [['Inicio', '#/inicio'], ['Integrador de sistemas', '#']],
  render: () => `${H.pageH('Integrador de sistemas', 'Un conector por cada sistema existente. La plataforma se integra con lo que la compañía ya tiene: no reemplaza a SAP ni al despacho.', `<button class="btn sec" data-act="intTestAll">${ico('refresh')} Probar todos los conectores</button>`)}
  <div class="grid g4">${H.kpi('Se integran', 5, 'sistemas', 'SAP, despacho, laboratorio, telemetría y fatiga', 'neu')}${H.kpi('Solo lectura', 3, 'sistemas', 'Historiador, planificación y báscula', 'neu')}${H.kpi('Se amplía', 1, 'sistema', 'Acceso de portería', 'neu')}${H.kpi('Se reemplaza', 1, '', 'Planillas y carpetas', 'neu')}</div>
  <div id="int-ban" class="mt2">${intBanner()}</div>
  ${H.card('Conectores', '<div id="int-t"></div>', { sub: 'Estado simulado. En producción cada conector registra sus mensajes con un identificador único, así que un reintento nunca duplica un dato.' })}
  <div class="grid g2 mt2">${H.card('Cómo trabaja un conector', H.timeline([
    { t: '1 · Lee o recibe del sistema', s: 'done', d: 'Por la interfaz que ese sistema ya ofrece. La red de control de planta solo se lee, a través de un diodo de datos.' },
    { t: '2 · Valida y traduce', s: 'done', d: 'Convierte el dato al modelo común de SITCO y rechaza lo incompleto con un motivo.' },
    { t: '3 · Registra con identificador único', s: 'done', d: 'Si el mensaje llega dos veces, se descarta el duplicado.' },
    { t: '4 · Entrega al módulo', s: 'cur', d: 'Si no hay enlace con la nube, el mensaje espera en el Nodo de Faena y sale solo al volver.' }]))}
  ${H.card('Mensajes de las últimas 24 horas', H.C.hbar({ labels: H.SISTEMAS.filter(s => s.lat).map(s => s.n.replace(' (3 portales)', '')), values: [1840, 9620, 1210, 4380, 290, 17280, 7, 2460, 1930], fmt: v => nf(v), ml: 190, label: 'Mensajes procesados por conector en las últimas 24 horas' }) + '<p class="xs muted">Cifras de ejemplo.</p>')}</div>`,
  mount: (m) => {
    H.intT = H.table($('#int-t', m), {
      caption: 'Conectores con los sistemas existentes', pageSize: 10, rows: H.SISTEMAS, searchKeys: ['n', 't', 'mod', 'q'], searchPh: 'Buscar sistema o módulo…',
      filters: [{ key: 't', label: 'Tratamiento', options: ['Se integra', 'Solo lectura', 'Se amplía', 'Se reemplaza'] }],
      cols: [
        { key: 'n', label: 'Sistema', render: r => `<strong>${esc(r.n)}</strong><div class="xs muted">${esc(r.q)}</div>` },
        { key: 't', label: 'Tratamiento', render: r => intTrat(r.t) },
        { key: 'dir', label: 'Sentido' },
        { key: 'loc', label: 'Dónde corre', render: r => r.loc === 'faena' ? 'Nodo de Faena' : r.loc === 'nube' ? 'Nube' : '—' },
        { key: 'mod', label: 'Lo usa' },
        { key: 'e', label: 'Etapa' },
        { key: 'est', label: 'Estado', sortv: r => intEstado(r).t, render: r => { const s = intEstado(r); return H.badge(s.t, s.k); } },
        { label: '', nosort: true, render: r => r.lat ? `<button class="btn sm sec" data-act="intTest" data-id="${r.id}">Probar</button>` : '' }]
    });
  }
});
H.Sim.on(() => { if (location.hash === '#/integrador' && H.intT && $('#int-t')) { H.intT.redraw(); const b = $('#int-ban'); if (b) b.innerHTML = intBanner(); } });
H.A.intTest = el => {
  const s = H.SISTEMAS.find(x => x.id === el.dataset.id), st = intEstado(s);
  if (st.k === 'warn' && H.Sim.link === 'down') return H.toast(`<strong>${esc(s.n)}:</strong> sin camino a la nube. Los mensajes esperan en el Nodo de Faena y salen solos al volver el enlace.`, 'warn', 5500);
  const ms = Math.round(s.lat * (H.Sim.slow() && s.loc === 'nube' ? 3.2 : 1) * (0.85 + Math.random() * 0.3));
  H.toast(`<strong>${esc(s.n)}:</strong> responde en ${nf(ms)} ms (prueba simulada).`, 'ok');
};
H.A.intTestAll = () => {
  const ok = H.SISTEMAS.filter(s => s.lat && intEstado(s).k === 'ok').length, w = H.SISTEMAS.filter(s => s.lat).length - ok;
  H.toast(`Prueba completa: <strong>${ok} conectores responden</strong>${w ? `, ${w} con aviso (revisa la columna Estado)` : ''}.`, w ? 'warn' : 'ok', 5500);
};
