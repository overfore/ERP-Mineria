'use strict';
/* =====================================================================
   app.js — enrutador por hash, layout público/autenticado, navegación
   ===================================================================== */
H.route = (path, def) => { H.routes[path] = def; };
const SESSION = store.get('user');
if (SESSION && H.ROLES[SESSION.role]) H.S.user = SESSION;
H.S.tour = store.get('tour') || false;
H.S.widgets = store.get('widgets') || {};

H.login = (role, quick) => {
  H.S.user = { role, name: H.ROLES[role].person, ini: H.ROLES[role].ini };
  store.set('user', H.S.user);
  H.toast(`Sesión iniciada como <strong>${esc(H.ROLES[role].label)}</strong>${quick ? ' (acceso rápido de demostración: omite el segundo factor)' : ''}.`, 'ok', 5000);
  location.hash = H.ROLES[role].home;
};
H.logout = () => { H.S.user = null; store.set('user', null); H.toast('Sesión cerrada. Los datos locales del equipo se limpian al cerrar sesión.', 'info'); location.hash = '#/'; };
H.allowed = (id) => !H.S.user || H.ROLES[H.S.user.role].items.includes(id);

/* ---------- Rastro de navegación ---------- */
const crumbs = (list) => `<nav class="crumbs" aria-label="Rastro de navegación"><ol>${list.map((c, i) => i < list.length - 1 ? `<li><a href="${c[1]}">${esc(c[0])}</a></li>` : `<li aria-current="page">${esc(c[0])}</li>`).join('')}</ol></nav>`;
H.crumbs = crumbs;
H.pageH = (t, sub, right = '') => `<div class="page-h"><div><h1 id="pgh" tabindex="-1">${t}</h1>${sub ? `<p>${sub}</p>` : ''}</div><div class="row">${right}</div></div>`;

/* ---------- Layout ---------- */
function connChip() {
  const S = H.Sim, m = S.mode();
  const txt = m === 'down' ? `Sin enlace · modo local · ${nf(S.pending())} pendientes` : m === 'sync' ? `Sincronizando ${nf(S.pending())}…` : 'Conectado · todo sincronizado';
  return `<a class="conn ${m}" href="#/conectividad" id="conn" aria-label="Estado de conectividad: ${txt}. Abrir detalle"><span class="dot"></span><span class="txt">${txt}</span></a>`;
}
function hdr(auth) {
  const u = H.S.user;
  return `<header class="hdr" role="banner">
    ${auth ? `<button class="ibtn menu-toggle" data-act="navToggle" aria-label="Abrir menú de navegación" aria-expanded="false" aria-controls="nav">${ico('menu')}</button>` : ''}
    <a class="brand" href="${auth ? '#/inicio' : '#/'}" aria-label="${H.BRAND.product}, ir al inicio"><span class="brand-mark">${ico('layers')}</span><span>${H.BRAND.product}<small>Altos de Aranda · por ${H.BRAND.vendor}</small></span></a>
    <span class="spacer"></span>
    ${auth ? `${connChip()}
    <div class="pos-rel"><button class="ibtn" data-act="menu" aria-haspopup="menu" aria-expanded="false" aria-label="Notificaciones: 3 nuevas">${ico('bell')}<span class="badge-n" style="position:absolute;top:2px;right:2px;min-width:18px;height:18px;font-size:11px">3</span></button>
      <div class="menu hide" role="menu" style="width:min(360px,92vw)">${H.NOTIFS.map(n => `<a role="menuitem" href="${n.h}" style="height:auto;padding:10px 12px;align-items:flex-start;flex-direction:column;gap:2px"><strong class="small">${n.t}</strong><span class="xs muted">${n.d}</span></a>`).join('')}</div></div>
    <a class="ibtn" href="#/ayuda" aria-label="Ayuda y accesibilidad">${ico('help')}</a>
    <div class="pos-rel"><button class="user-btn" data-act="menu" aria-haspopup="menu" aria-expanded="false"><span class="avatar" aria-hidden="true">${u.ini}</span><span class="nm">${esc(H.ROLES[u.role].label)}</span>${ico('chD')}</button>
      <div class="menu hide" role="menu" style="width:min(320px,92vw)"><div style="padding:8px 12px"><strong>${esc(H.ROLES[u.role].person)}</strong><div class="xs muted">${esc(H.ROLES[u.role].label)} · ${u.role === 'operador' ? 'credencial + PIN' : 'sesión federada con el directorio corporativo'}</div></div><hr style="border:0;border-top:1px solid var(--sand-2)">
      <button role="menuitem" data-act="switchRole">${ico('users')} Cambiar de perfil (demostración)</button>
      <button role="menuitem" data-act="sun">${ico('sun')} Modo sol (alto contraste)</button>
      <button role="menuitem" data-act="big">${ico('eye')} Texto grande</button>
      <button role="menuitem" data-act="tour">${ico('play')} Repetir recorrido guiado</button>
      <button role="menuitem" data-act="logout">${ico('out')} Cerrar sesión</button></div></div>`
      : `<nav aria-label="Principal" class="row" style="gap:4px"><a class="btn ter" style="color:#fff" href="#/registro">Registro de contratistas</a><a class="btn" href="#/login">Ingresar</a></nav>`}
  </header>`;
}
function navHtml() {
  const role = H.ROLES[H.S.user.role];
  return `<nav class="nav" id="nav" aria-label="Menú principal">${H.NAV.map(g => {
    const its = g.items.filter(i => role.items.includes(i.id)); if (!its.length) return '';
    return `<h6>${g.g}</h6>${its.map(i => `<a href="${i.h}" data-nav="${i.id}" ${i.id === 'trazabilidad' ? 'data-tour="nav"' : ''}>${ico(i.i)}<span>${i.l}</span>${i.id === 'acreditacion' && H.S.user.role !== 'contratista' ? '<span class="badge-n" aria-label="4 pendientes">4</span>' : ''}</a>`).join('')}`;
  }).join('')}<h6>Documentación del prototipo</h6><a href="#/arquitectura-informacion">${ico('map')}<span>Arquitectura de información</span></a><a href="#/sistema-diseno">${ico('grid')}<span>Sistema de diseño</span></a></nav>`;
}
function quickMenu() {
  const items = { operador: [['#/terreno', 'truck', 'Abrir app de terreno']], supervisor: [['#/terreno', 'alert', 'Registrar incidente'], ['#/equipos', 'truck', 'Ver equipos detenidos']], planificacion: [['#/plan', 'cal', 'Publicar versión del plan']], metalurgia: [['#/trazabilidad/nuevo', 'plus', 'Conformar lote de embarque'], ['#/conciliacion', 'scale', 'Conciliación del mes']], seguridad: [['#/acreditacion/nueva', 'plus', 'Nueva acreditación'], ['#/seguridad', 'alert', 'Alertas de fatiga']], sustentabilidad: [['#/ambiental', 'leaf', 'Generar reporte a la autoridad']], contratista: [['#/acreditacion/nueva', 'plus', 'Solicitar acreditación']], gerencia: [['#/tablero', 'chart', 'Tablero analítico']], admin: [['#/admin/usuarios', 'users', 'Gestionar usuarios']] }[H.S.user.role] || [];
  return `<div class="fab" data-tour="fab"><button class="btn lg" data-act="fab" aria-haspopup="menu" aria-expanded="false">${ico('zap')} Acciones rápidas</button><div class="fab-menu hide" role="menu">${items.map(i => `<a role="menuitem" href="${i[0]}">${ico(i[1])} ${i[2]}</a>`).join('')}<a role="menuitem" href="#/tablero">${ico('chart')} Ir al tablero</a><a role="menuitem" href="#/ayuda">${ico('help')} Ayuda</a></div></div>`;
}
H.A.fab = (el) => { const m = el.nextElementSibling; const o = m.classList.contains('hide'); H.closeMenus(); m.classList.toggle('hide', !o); el.setAttribute('aria-expanded', o); };
H.A.navToggle = (el) => { const n = $('#nav'); const o = n.classList.toggle('open'); el.setAttribute('aria-expanded', o); };
H.A.logout = () => H.confirm({ title: 'Cerrar sesión', message: '¿Quieres cerrar tu sesión? Los registros pendientes de sincronizar quedan resguardados en el equipo.', confirm: 'Cerrar sesión', onYes: () => H.logout() });
H.A.sun = () => { H.S.sun = !H.S.sun; document.documentElement.dataset.sun = H.S.sun ? '1' : '0'; H.toast(H.S.sun ? 'Modo sol activado: contraste máximo para uso a la intemperie.' : 'Modo sol desactivado.', 'info', 3000); };
H.A.big = () => { H.S.big = !H.S.big; document.documentElement.style.fontSize = H.S.big ? '19px' : ''; H.toast(H.S.big ? 'Texto grande activado.' : 'Texto normal.', 'info', 3000); };
H.A.switchRole = () => H.modal({
  title: 'Explorar como otra persona usuaria', wide: true,
  body: `<p class="muted">Cada perfil ve un menú, un inicio y permisos distintos (RBAC). Es una función de demostración: en producción el perfil lo entrega el directorio corporativo.</p><div class="grid g-auto" style="grid-template-columns:repeat(auto-fill,minmax(210px,1fr))">${Object.entries(H.ROLES).map(([k, r]) => `<button class="role-card" data-act="pickRole" data-r="${k}"><span class="ico">${ico(r.ico)}</span><strong>${r.label}</strong><span class="xs muted">${r.desc}</span></button>`).join('')}</div>`
});
H.A.pickRole = (el) => { H.closeModals(); H.login(el.dataset.r, true); };
H.closeModals = () => $$('.overlay').forEach(o => o.remove());

function simWidget() {
  return `<div class="sim"><button class="btn dark" data-act="simToggle" aria-expanded="false" aria-controls="sim-panel" aria-label="Simulador de conectividad (demostración)">${ico('cloud')} Simular nube</button><div id="sim-panel" class="sim-panel hide" role="dialog" aria-label="Simulador de conectividad"></div></div>`;
}

let cur = null, tok = 0;
async function render() {
  const raw = location.hash.replace(/^#/, '') || '/';
  const [pathPart] = raw.split('?');
  let match = null, params = {};
  for (const p in H.routes) {
    const re = new RegExp('^' + p.replace(/:[a-z]+/g, '([^/]+)') + '$'); const m = pathPart.match(re);
    if (m) { const names = (p.match(/:[a-z]+/g) || []).map(s => s.slice(1)); names.forEach((n, i) => params[n] = decodeURIComponent(m[i + 1])); match = H.routes[p]; match.key = p; break; }
  }
  const app = $('#app'); const myTok = ++tok;
  if (!match) { match = { title: 'Página no encontrada', auth: false, render: () => `<section class="auth"><div class="card">${H.empty('Página no encontrada', 'El enlace no existe o fue movido. Vuelve al inicio para continuar.', '<a class="btn" href="#/">Ir al inicio</a>')}</div></section>` }; }
  if (match.auth && !H.S.user) { H.S.next = location.hash; location.hash = '#/login'; return; }
  const auth = !!H.S.user && !match.public;
  const shell = auth ? 'shell' : 'shell public';
  const first = !$('#main') || cur !== (auth ? 'a' : 'p');
  if (first) {
    cur = auth ? 'a' : 'p';
    app.innerHTML = hdr(auth) + `<div id="offbar"></div><div class="${shell}">${auth ? navHtml() : ''}<main id="main" class="main" tabindex="-1"></main></div>${auth ? quickMenu() : ''}${simWidget()}`;
  }
  const main = $('#main');
  document.title = `${match.title || H.BRAND.product} · ${H.BRAND.product}`;
  const seg = pathPart.split('/')[1] || '';
  $$('#nav a').forEach(a => { const href = a.getAttribute('href').slice(1); const on = a.dataset.nav ? a.dataset.nav === seg : href === pathPart; on ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current'); });
  $('#nav') && $('#nav').classList.remove('open');
  if (auth && match.item && !H.allowed(match.item)) {
    main.innerHTML = `${crumbs([['Inicio', '#/inicio'], ['Acceso restringido', '#']])}<div class="card">${H.empty('Acceso restringido para tu perfil', `El perfil <strong>${esc(H.ROLES[H.S.user.role].label)}</strong> no tiene permiso para esta sección. Así funciona el control de acceso por roles.`, `<button class="btn" data-act="switchRole">Cambiar de perfil (demostración)</button> <a class="btn sec" href="#/inicio">Volver al inicio</a>`)}</div>`;
    return;
  }
  // esqueleto de carga y transición (RT-25.02)
  if (match.skeleton !== false) main.innerHTML = H.skel(2);
  await new Promise(r => setTimeout(r, match.fast ? 40 : 260));
  if (myTok !== tok) return;
  main.innerHTML = (match.crumbs && auth ? crumbs(match.crumbs(params)) : '') + match.render(params);
  match.mount && match.mount(main, params);
  window.scrollTo(0, 0);
  const h = $('#pgh') || $('h1', main); if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); }
  paintConn();
  if (auth && !H.S.tour && match.key === '/inicio') setTimeout(() => H.A.tour(), 600);
}
function paintConn() {
  const c = $('#conn'); if (!c) return;
  const tmp = document.createElement('div'); tmp.innerHTML = connChip(); const n = tmp.firstChild;
  c.className = n.className; c.innerHTML = n.innerHTML; c.setAttribute('aria-label', n.getAttribute('aria-label'));
  const S = H.Sim, off = $('#offbar');
  if (off) off.innerHTML = S.link === 'down' && H.S.user ? `<div class="offline-bar" role="status">${ico('wifiOff')}<strong>Sin enlace con Antofagasta.</strong><span>La operación continúa en modo local desde el borde de faena · ${nd(S.hours, 0)} h de 48 h de autonomía · ${nf(S.pending())} registros por sincronizar.</span><a href="#/conectividad" class="link-btn">Ver detalle</a></div>` : '';
  const p = $('#sim-panel'); if (p && !p.classList.contains('hide') && !p.contains(document.activeElement)) p.innerHTML = H.simPanel();
}
H.Sim.on(paintConn);
window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);

/* ---------- Recorrido guiado (primer ingreso) ---------- */
H.A.tour = () => {
  const steps = [
    { sel: '[data-tour="nav"]', t: 'Tu menú, a tu medida', d: 'El menú muestra solo lo que tu perfil necesita. Cualquier función principal está a tres interacciones o menos.' },
    { sel: '#conn', t: 'Estado de conexión siempre visible', d: 'Si se corta la fibra, la operación sigue en modo local y esta señal te avisa. Todo se sincroniza solo al volver el enlace.' },
    { sel: '[data-tour="widgets"]', t: 'Tablero configurable', d: 'Presiona “Personalizar” para ocultar o reordenar los componentes de tu inicio.' },
    { sel: '[data-tour="fab"]', t: 'Acciones rápidas', d: 'Las tareas más frecuentes de tu perfil, siempre a un toque.' }
  ];
  let i = 0; const hole = document.createElement('div'), pop = document.createElement('div');
  hole.className = 'tour-hole'; pop.className = 'tour-pop'; pop.setAttribute('role', 'dialog'); pop.setAttribute('aria-modal', 'true'); pop.setAttribute('aria-label', 'Recorrido guiado');
  document.body.append(hole, pop);
  const end = () => { hole.remove(); pop.remove(); H.S.tour = true; store.set('tour', true); document.removeEventListener('keydown', esc_); };
  const esc_ = e => { if (e.key === 'Escape') end(); };
  document.addEventListener('keydown', esc_);
  function show() {
    const s = steps[i]; const el = $(s.sel);
    if (!el) { if (i < steps.length - 1) { i++; return show(); } return end(); }
    if (el.closest('.nav') && window.innerWidth < 1024) { const n = $('#nav'); n.classList.add('open'); }
    const r = el.getBoundingClientRect();
    Object.assign(hole.style, { left: r.left - 6 + 'px', top: r.top - 6 + 'px', width: r.width + 12 + 'px', height: r.height + 12 + 'px' });
    pop.innerHTML = `<div class="xs muted">Paso ${i + 1} de ${steps.length}</div><h3>${s.t}</h3><p class="small">${s.d}</p><div class="row between"><button class="btn sm ter" data-tr="skip">Omitir</button><div class="row"><button class="btn sm sec" data-tr="prev" ${i === 0 ? 'disabled' : ''}>Atrás</button><button class="btn sm" data-tr="next">${i === steps.length - 1 ? 'Entendido' : 'Siguiente'}</button></div></div>`;
    const pw = Math.min(340, window.innerWidth - 24); let left = Math.min(Math.max(12, r.left), window.innerWidth - pw - 12), top = r.bottom + 14;
    if (top + 190 > window.innerHeight) top = Math.max(12, r.top - 200);
    pop.style.left = left + 'px'; pop.style.top = top + 'px';
    $('button:not([disabled]):last-child', pop).focus();
  }
  pop.onclick = e => { const b = e.target.closest('[data-tr]'); if (!b) return; const a = b.dataset.tr; if (a === 'skip') return end(); if (a === 'prev') i--; else if (i === steps.length - 1) { end(); H.toast('¡Listo! Puedes repetir el recorrido desde tu menú de usuario.', 'ok'); return; } else i++; show(); };
  show();
};
