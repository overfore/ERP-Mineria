'use strict';
/* =====================================================================
   views-modulos.js — piezas que faltaban para calzar con los módulos de la
   solución (Subdocumento 3):
   · Marca de módulo y NODO en la cabecera de cada pantalla
   · Integrador de Sistemas: un conector por cada sistema existente
   · Perforación y pozos (Operación Mina, RF-TER-006)
   · Consola de portería (Acreditación y Acceso, criterio de aceptación 7)
   ===================================================================== */

/* ---------- Marca de módulo y NODO ---------- */
const MOD_TIP = 'NODO: también corre en el Nodo de Faena y sigue funcionando 48 h sin enlace. Fuente: Subdocumento 3.';
H.nodoBadge = m => m.nodo ? H.badge('NODO', 'dk') : '';
H.modChips = item => {
  const m = item && H.modOf(item); if (!m) return '';
  return `<div class="mod-tag"><span class="xs muted">Módulo</span> <strong class="small">${esc(m.n)}</strong> ${m.nodo ? H.nodoBadge(m) + H.tip(MOD_TIP, true) : ''}</div>`;
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

/* ===== Perforación y pozos (Operación Mina) ===== */
H.POZOS.forEach((p, i) => { p.poli = H.POLIS[(i * 7) % H.POLIS.length].id; });
const PF_SIN = ['PF-03', 'PF-04', 'PF-05', 'PF-06', 'PF-07', 'PF-08', 'PF-09'];
const durCls = d => d >= 75 ? 'Dura' : d >= 55 ? 'Media' : 'Blanda';
const pzTurno = () => H.POZOS.filter(p => Date.now() - p.f.getTime() < 12 * 3600e3);
H.route('/perforacion', {
  title: 'Perforación y pozos', auth: true, item: 'perforacion', crumbs: () => [['Inicio', '#/inicio'], ['Perforación y pozos', '#']],
  render: () => {
    const avg = Math.round(H.POZOS.reduce((a, p) => a + p.dur, 0) / H.POZOS.length);
    const byPoli = {}; H.POZOS.forEach(p => { (byPoli[p.poli] = byPoli[p.poli] || []).push(p.dur); });
    const polis = Object.keys(byPoli).slice(0, 8);
    return `${H.pageH('Perforación y pozos', 'Cada pozo queda registrado con su profundidad y su índice de dureza. Las dos perforadoras instrumentadas lo envían solas; las siete sin instrumentación lo registran en la App SITCO Terreno. Geología descarga los pozos desde aquí, sin planillas.', `<button class="btn sec" data-act="pzExport">${ico('dl')} Descargar para Geología</button><button class="btn" data-act="pzNew">${ico('plus')} Registrar pozo</button>`)}
    <div class="grid g4">${H.kpi('Pozos del turno', `<span id="pz-n">${pzTurno().length}</span>`, '', 'Turno día · 08:00 a 20:00', 'neu')}${H.kpi('Perforadoras instrumentadas', 2, 'de 9', 'Las otras 7 registran en la App SITCO Terreno', 'neu')}${H.kpi('Índice de dureza promedio', avg, '', 'Escala 0 a 100 · valores de ejemplo', 'neu')}${H.kpi('Pozos sin registro digital', 0, '', 'Antes: libreta y planilla al final del turno', 'good')}</div>
    <div class="mt2">${H.tabs([{ id: 'p', label: 'Pozos' }, { id: 'd', label: 'Dureza por polígono' }, { id: 'c', label: 'Cómo se registra' }], 'p', {
      p: '<div id="pz-t"></div>',
      d: `<div class="card">${H.C.hbar({ labels: polis, values: polis.map(k => Math.round(byPoli[k].reduce((a, b) => a + b, 0) / byPoli[k].length)), fmt: v => String(v), ml: 110, label: 'Índice de dureza promedio por polígono' })}<p class="small muted">La dureza ayuda a planificar la tronadura y a anticipar el rendimiento en la planta. Valores de ejemplo.</p></div>`,
      c: `<div class="grid g2"><div class="card flat"><h3>${ico('zap')} Perforadora instrumentada (PF-01 y PF-02)</h3><p class="small">El equipo mide la profundidad y la energía de perforación. El Integrador recibe el dato y calcula el índice de dureza sin que el operador haga nada.</p></div><div class="card flat"><h3>${ico('phone')} Perforadora sin instrumentación (PF-03 a PF-09)</h3><p class="small">El operador registra el pozo en la App SITCO Terreno con botones grandes, al terminar cada pozo. Si no hay señal, el registro queda en la tableta y sube solo al Nodo de Faena.</p></div></div>`
    })}</div>`;
  },
  mount: (m) => {
    H.pzT = H.table($('#pz-t', m), {
      caption: 'Pozos perforados', pageSize: 8, rows: H.POZOS, searchKeys: ['id', 'poli', 'pf'], searchPh: 'Buscar pozo, polígono o perforadora…',
      filters: [{ key: 'origen', label: 'Origen', options: ['Instrumentada', 'App SITCO Terreno'] }, { key: 'pf', label: 'Perforadora', options: ['PF-01', 'PF-02', ...PF_SIN] }],
      bulk: [{ label: 'Exportar selección', fn: (ids, done) => { pzCsv(H.POZOS.filter(p => ids.includes(p.id))); done(); } }],
      cols: [
        { key: 'id', label: 'Pozo', render: r => `<strong>${r.id}</strong>` },
        { key: 'poli', label: 'Polígono' },
        { key: 'pf', label: 'Perforadora' },
        { key: 'prof', label: 'Profundidad', num: true, render: r => nd(r.prof, 1) + ' m' },
        { key: 'dur', label: 'Dureza', num: true, render: r => `${r.dur} · ${durCls(r.dur)}` },
        { key: 'agua', label: 'Agua' },
        { key: 'origen', label: 'Origen', render: r => H.badge(r.origen, r.origen === 'Instrumentada' ? '' : 'cu') },
        { key: 'f', label: 'Hora', sortv: r => r.f.getTime(), render: r => fdt(r.f) }]
    });
  }
});
const pzCsv = rows => { H.csv('pozos.csv', ['Pozo', 'Polígono', 'Perforadora', 'Profundidad (m)', 'Diámetro (mm)', 'Índice de dureza', 'Agua', 'Origen', 'Fecha y hora'], rows.map(p => [p.id, p.poli, p.pf, p.prof, p.diam, p.dur, p.agua, p.origen, fdt(p.f)])); H.toast(`${rows.length} pozos descargados en CSV.`, 'ok'); };
H.A.pzExport = () => pzCsv(H.POZOS);
H.A.pzNew = () => H.modal({
  title: 'Registrar pozo (App SITCO Terreno)',
  body: `<p class="small muted">Así lo registra el operador de una perforadora sin instrumentación. Turno, hora y posición se completan solos.</p>
  ${H.field({ id: 'pz-pf', name: 'pf', label: 'Perforadora', type: 'select', options: PF_SIN })}
  ${H.field({ id: 'pz-po', name: 'po', label: 'Polígono', ac: 'polis', v: 'required', hint: 'Empieza a escribir: B30…' })}
  ${H.field({ id: 'pz-pr', name: 'pr', label: 'Profundidad (m)', type: 'number', v: 'required|gt0', value: '15', extra: 'min="1" max="40" step="0.1"', inputmode: 'decimal' })}
  ${H.field({ id: 'pz-du', name: 'du', label: 'Cómo se sintió el terreno', type: 'select', options: [{ v: 45, l: 'Blando' }, { v: 65, l: 'Medio' }, { v: 82, l: 'Duro' }], value: 65, hint: 'Sin instrumentación, la dureza se estima por la percepción del operador y se ajusta con la tronadura.' })}
  ${H.field({ id: 'pz-ag', name: 'ag', label: '¿Encontró agua?', type: 'select', options: ['No', 'Sí'] })}`,
  actions: [{ label: 'Cancelar', kind: 'sec' }, { label: 'Registrar pozo', onClick: (api, o) => {
    if (!H.validate(o)) return false;
    const p = { id: 'PZ-' + (4800 + H.POZOS.length), poli: $('#pz-po', o).value, pf: $('#pz-pf', o).value, prof: +$('#pz-pr', o).value, diam: 311, dur: +$('#pz-du', o).value, agua: $('#pz-ag', o).value, origen: 'App SITCO Terreno', f: new Date() };
    H.POZOS.unshift(p); H.Sim.capture('pozo', `Pozo ${p.id} · ${p.pf} · ${p.poli}`, 'App SITCO Terreno');
    if (H.pzT) H.pzT.setRows(H.POZOS); const n = $('#pz-n'); if (n) n.textContent = pzTurno().length;
    H.toast(H.Sim.lte === 'shadow' ? `<strong>${p.id} guardado en la tableta.</strong> Sin cobertura: sube solo al recuperar la señal.` : H.Sim.link === 'down' ? `<strong>${p.id} registrado en el Nodo de Faena.</strong> Sube a la nube al volver el enlace.` : `<strong>${p.id} registrado.</strong> Geología ya puede descargarlo.`, 'ok', 5000);
  } }]
});

/* ===== Consola de portería (Acreditación y Acceso · criterio 7) ===== */
H.AC.trab = H.TRAB.map(t => `${t.nombre} · ${t.rut}`);
const PT_LOG = [];
{
  const rL = rng(4242);
  for (let i = 0; i < 14; i++) { const t = H.TRAB[Math.floor(rL() * H.TRAB.length)]; if (t.estado === 'Vencido' || t.estado === 'En revisión') continue; PT_LOG.push({ id: 'IN-' + (7100 + i), nombre: t.nombre, empresa: t.empresa, f: new Date(Date.now() - (8 + i * 23) * 60000), res: 'Ingresó', motivo: t.estado === 'Por vencer' ? 'Habilitado · documento por vencer, ya avisado' : 'Habilitado' }); }
}
const ptDemo = k => H.TRAB.find(t => k === 'ok' ? t.estado === 'Habilitado' : k === 'warn' ? t.estado === 'Por vencer' : t.estado === 'Vencido');
const ptKpis = () => { const r = PT_LOG.filter(x => x.res !== 'Ingresó').length; return `${H.kpi('Ingresos del turno', PT_LOG.length - r, '', 'Turno día', 'neu')}${H.kpi('Rechazos del turno', r, '', 'Con motivo registrado', r ? 'bad' : 'neu')}${H.kpi('Rechazos por documento vencido', PT_LOG.filter(x => / vencido$/.test(x.motivo)).length, '', 'Cada uno con 3 avisos previos · antes, el 14 % de los rechazos llegaba sin aviso', 'neu')}${H.kpi('Avisos enviados antes de vencer', H.TRAB.filter(t => t.min <= 30).length, '', 'A 30, 15 y 7 días', 'neu')}`; };
H.route('/porteria', {
  title: 'Consola de portería', auth: true, item: 'porteria', crumbs: () => [['Inicio', '#/inicio'], ['Acreditación', '#/acreditacion'], ['Consola de portería', '#']],
  render: () => `${H.pageH('Consola de portería', 'Lo que ve el guardia cuando una persona acerca su credencial. La consola consulta la habilitación en el Nodo de Faena, así que sigue funcionando aunque se corte la fibra. No usa reconocimiento facial: queda sujeto al acuerdo con el sindicato.', H.badge('Guardia: credencial y PIN al inicio del turno', 'dk'))}
  <div class="grid g4" id="pt-k">${ptKpis()}</div>
  <div class="grid g2 mt2">
    ${H.card('Lectura de credencial', `<p class="small muted">En la faena la persona acerca su credencial al lector. Aquí puedes simularlo con tres casos o buscar a cualquier persona.</p>
      <div class="pt-demo"><button class="btn sec" data-act="ptRead" data-k="ok">${ico('check')} Persona habilitada</button><button class="btn sec" data-act="ptRead" data-k="warn">${ico('clock')} Documento por vencer</button><button class="btn sec" data-act="ptRead" data-k="err">${ico('alert')} Documento vencido</button></div>
      ${H.field({ id: 'pt-q', name: 'q', label: 'Buscar persona (nombre o RUT)', ac: 'trab', ph: 'Escribe un nombre…' })}
      <button class="btn" data-act="ptRead" data-k="q">${ico('badge')} Validar</button>`)}
    <section class="card" aria-live="polite" id="pt-res">${H.empty('Esperando credencial', 'Acerca una credencial al lector o usa uno de los casos de ejemplo.')}</section>
  </div>
  ${H.card('Bitácora del turno', '<div id="pt-t"></div>', { cls: 'mt2', sub: 'Cada ingreso y cada rechazo queda registrado con su motivo y vuelve al sistema de acceso existente, que se amplía con la habilitación de SITCO.' })}`,
  mount: (m) => {
    H.ptT = H.table($('#pt-t', m), {
      caption: 'Ingresos y rechazos del turno', pageSize: 6, rows: PT_LOG, searchKeys: ['nombre', 'empresa', 'motivo'], searchPh: 'Buscar persona o empresa…',
      filters: [{ key: 'res', label: 'Resultado', options: ['Ingresó', 'Rechazado'] }],
      cols: [{ key: 'f', label: 'Hora', sortv: r => r.f.getTime(), render: r => ft(r.f) }, { key: 'nombre', label: 'Persona', render: r => `<strong>${esc(r.nombre)}</strong>` }, { key: 'empresa', label: 'Empresa' }, { key: 'res', label: 'Resultado', render: r => H.badge(r.res, r.res === 'Ingresó' ? 'ok' : 'err') }, { key: 'motivo', label: 'Motivo' }]
    });
  }
});
H.A.ptRead = el => {
  let t;
  if (el.dataset.k === 'q') { const v = ($('#pt-q').value || '').trim().toLowerCase(); t = v && H.TRAB.find(x => `${x.nombre} · ${x.rut}`.toLowerCase().includes(v) || x.rut.toLowerCase() === v); if (!t) { H.toast('No se encontró a esa persona. Revisa el nombre o el RUT.', 'warn'); $('#pt-q').focus(); return; } }
  else t = ptDemo(el.dataset.k);
  const venc = t.docs.slice().sort((a, b) => a.dias - b.dias)[0], dV = dOff(venc.dias);
  const avisos = [30, 15, 7].map(n => fd(dOff(venc.dias - n)));
  let k, head, body, act = '', res = 'Ingresó', motivo = 'Habilitado';
  if (t.estado === 'Vencido') {
    k = 'err'; head = 'No puede ingresar'; res = 'Rechazado'; motivo = `${venc.d} vencido`;
    body = `<p><strong>${esc(venc.d)}</strong> venció el ${fd(dV)}.</p><p class="small">El sistema avisó a la persona, a ${esc(t.empresa)} y a Seguridad el ${avisos[0]}, el ${avisos[1]} y el ${avisos[2]}. Por eso este rechazo no debería ocurrir: la empresa tuvo 30 días para renovar.</p>`;
    act = `<div class="row mt1"><a class="btn sec" href="#/acreditacion/${t.id}">Ver ficha</a><button class="btn ter" data-act="ptCall">Avisar a Seguridad</button></div>`;
  } else if (t.estado === 'En revisión') {
    k = 'warn'; head = 'Acreditación en revisión'; res = 'Rechazado'; motivo = 'Acreditación en revisión';
    body = '<p class="small">La persona aún no está habilitada. Seguridad revisa sus documentos; no puede ingresar hasta que se apruebe.</p>';
  } else if (t.estado === 'Por vencer') {
    k = 'ok'; head = 'Puede ingresar'; motivo = 'Habilitado · documento por vencer, ya avisado';
    body = `<p class="small"><strong>Aviso:</strong> ${esc(venc.d)} vence el ${fd(dV)} (en ${venc.dias} días). Ya se avisó a la persona, a su empleador y a Seguridad.</p>`;
  } else { k = 'ok'; head = 'Puede ingresar'; body = '<p class="small">Todos sus documentos están vigentes.</p>'; }
  $('#pt-res').innerHTML = `<div class="pt-res ${k}" role="status"><div class="pt-ico">${ico(k === 'ok' ? 'check' : 'alert')}</div><div class="grow"><div class="pt-head">${head}</div><div class="small"><strong>${esc(t.nombre)}</strong> · ${esc(t.rut)}<br>${esc(t.cargo)} · ${esc(t.empresa)}</div></div></div>${body}${act}`;
  PT_LOG.unshift({ id: uid('IN'), nombre: t.nombre, empresa: t.empresa, f: new Date(), res, motivo });
  if (H.ptT) H.ptT.setRows(PT_LOG); const kp = $('#pt-k'); if (kp) kp.innerHTML = ptKpis();
  H.Sim.capture('acceso', `${res === 'Ingresó' ? 'Ingreso' : 'Rechazo'} en portería · ${t.nombre}`, 'Consola de Portería');
};
H.A.ptCall = () => H.toast('Aviso enviado a Seguridad con el motivo del rechazo (simulado).', 'ok');
