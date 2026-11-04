'use strict';
/* =====================================================================
   core.js — utilidades, íconos, componentes reutilizables y gráficos
   ===================================================================== */
const H = window.H = { A: {}, S: { user: null, edit: false, sun: false, big: false }, routes: {}, AC: {} };
H.route = (path, def) => { H.routes[path] = def; };
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const nf = n => Number(n).toLocaleString('es-CL');
const nd = (n, d = 1) => Number(n).toLocaleString('es-CL', { minimumFractionDigits: d, maximumFractionDigits: d });
const pad = n => String(n).padStart(2, '0');
const dOff = (days = 0, h = 0, m = 0) => { const d = new Date(); d.setDate(d.getDate() + days); d.setHours(h, m, 0, 0); return d; };
const fd = d => `${pad(d.getDate())}-${pad(d.getMonth() + 1)}-${d.getFullYear()}`;
const ft = d => `${pad(d.getHours())}:${pad(d.getMinutes())}`;
const fdt = d => `${fd(d)} ${ft(d)}`;
const safe = (fn, d) => { try { return fn(); } catch (e) { return d; } };
const store = {
  get: k => safe(() => JSON.parse(sessionStorage.getItem('ha.' + k)), null),
  set: (k, v) => safe(() => sessionStorage.setItem('ha.' + k, JSON.stringify(v)))
};
function rng(seed) { let a = seed >>> 0; return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const uid = (p = 'ID') => p + '-' + Math.random().toString(36).slice(2, 7).toUpperCase();

/* ---------- Íconos (trazo, 24x24) ---------- */
const IC = {
  home: '<path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10"/>',
  route: '<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M8 19h7a4 4 0 000-8H9a4 4 0 010-8h7"/>',
  scale: '<path d="M12 3v18M6 21h12M5 7h14"/><path d="M5 7l-3 7a3.5 3.5 0 006 0zM19 7l-3 7a3.5 3.5 0 006 0z"/>',
  cal: '<path d="M4 6h16v14H4zM4 10h16M8 3v4M16 3v4"/>',
  truck: '<path d="M2 6h11v10H2zM13 9h4l4 4v3h-8"/><circle cx="6.5" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2 20c.8-3.6 3.4-5.5 7-5.5s6.200 1.900 7 5.500M16 4.500a3.500 3.500 0 010 7M18 15c2 .6 3.500 2.200 4 5"/>',
  leaf: '<path d="M5 19C3 11 8 4 20 4c0 11-6 17-14 15zM5 19c3-5 6-8 11-11"/>',
  bld: '<path d="M4 21V5l8-2v18M12 8h8v13M4 21h16M8 8h1M8 12h1M8 16h1M15 12h2M15 16h2"/>',
  chart: '<path d="M4 20V4M4 20h16M8 16v-5M12 16V8M16 16v-8"/>',
  wifi: '<path d="M2 9a15 15 0 0120 0M5 12.500a10.500 10.500 0 0114 0M8.500 16a5 5 0 017 0"/><circle cx="12" cy="19.500" r="1" fill="currentColor"/>',
  wifiOff: '<path d="M3 3l18 18M2 9a15 15 0 015-3M22 9a15 15 0 00-8-4M5 12.500a10.500 10.500 0 014-2.500M19 12.500a10.500 10.500 0 00-3-2M8.500 16a5 5 0 013-1.500M15.500 16"/><circle cx="12" cy="19.500" r="1" fill="currentColor"/>',
  cloud: '<path d="M7 18a4.500 4.500 0 01-.5-9A6 6 0 0118 10a4 4 0 010 8z"/>',
  cloudOff: '<path d="M3 3l18 18M7 18a4.500 4.500 0 01-.5-9M10 6a6 6 0 018 4 4 4 0 011.500 7.500M8 18h9"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
  file: '<path d="M6 3h8l5 5v13H6zM14 3v5h5M9 13h7M9 17h7"/>',
  upload: '<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',
  check: '<path d="M4 12l5 5 11-11"/>',
  x: '<path d="M5 5l14 14M19 5L5 19"/>',
  alert: '<path d="M12 3l10 18H2zM12 10v5M12 18.500v.5"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.500v.5"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
  bell: '<path d="M6 17V11a6 6 0 0112 0v6l2 2H4zM10 21h4"/>',
  chR: '<path d="M9 5l7 7-7 7"/>', chD: '<path d="M5 9l7 7 7-7"/>', chL: '<path d="M15 5l-7 7 7 7"/>', chU: '<path d="M5 15l7-7 7 7"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  filter: '<path d="M3 5h18l-7 8v6l-4 2v-8z"/>',
  dl: '<path d="M12 4v12M7 11l5 5 5-5M4 20h16"/>',
  dots: '<circle cx="12" cy="5" r="1.500" fill="currentColor"/><circle cx="12" cy="12" r="1.500" fill="currentColor"/><circle cx="12" cy="19" r="1.500" fill="currentColor"/>',
  out: '<path d="M9 4H4v16h5M16 8l4 4-4 4M20 12H9"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.500 9.500a2.500 2.500 0 114 2c-1 .8-1.500 1.200-1.500 2.500M12 17.500v.5"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  pin: '<path d="M12 21s7-6 7-12a7 7 0 10-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="9" r="2.500"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  phone: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
  play: '<path d="M7 4l13 8-13 8z"/>',
  refresh: '<path d="M20 11a8 8 0 00-14-4M4 5v4h4M4 13a8 8 0 0014 4M20 19v-4h-4"/>',
  drill: '<path d="M12 3v14M8 7l4-4 4 4M7 21h10M9 17l3 4 3-4"/>',
  moon: '<path d="M20 14A8 8 0 019.500 4 8 8 0 1020 14z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5M3 17.500l9 5 9-5"/>',
  wrench: '<path d="M14 6a4 4 0 005 5l-9 9a2.500 2.500 0 01-4-4l9-9a4 4 0 00-1-5z"/>',
  flag: '<path d="M5 21V4M5 4h12l-2 4 2 4H5"/>',
  sort: '<path d="M8 4v16M4 16l4 4 4-4M16 20V4M12 8l4-4 4 4"/>',
  edit: '<path d="M4 20h4L19 9l-4-4L4 16zM13 7l4 4"/>',
  trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v6M14 11v6"/>',
  cam: '<path d="M3 8h4l2-3h6l2 3h4v12H3z"/><circle cx="12" cy="13" r="3.500"/>',
  map: '<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2zM9 4v14M15 6v14"/>',
  zap: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  db: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.700 3.600 3 8 3s8-1.300 8-3V5M4 12c0 1.700 3.600 3 8 3s8-1.300 8-3"/>',
  box: '<path d="M3 7l9-4 9 4v10l-9 4-9-4zM3 7l9 4 9-4M12 11v10"/>',
  star: '<path d="M12 3l2.800 5.800 6.200.9-4.500 4.400 1.100 6.200L12 17.300 6.400 20.300l1.100-6.200L3 9.700l6.200-.9z"/>',
  grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  pause: '<path d="M8 5v14M16 5v14"/>',
  badge: '<circle cx="12" cy="9" r="6"/><path d="M8.500 14L7 22l5-3 5 3-1.500-8"/>',
  link: '<path d="M10 14a4 4 0 005.700 0l3-3a4 4 0 00-5.700-5.700l-1 1M14 10a4 4 0 00-5.700 0l-3 3a4 4 0 005.700 5.700l1-1"/>'
};
const ico = (n, cls = '') => `<svg class="i ${cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${IC[n] || IC.info}</svg>`;

/* ---------- Toast / Modal / Confirmación ---------- */
H.toast = (msg, type = 'info', ms = 4800) => {
  const t = document.createElement('div');
  t.className = 'toast ' + type;
  const ic = { ok: 'check', err: 'alert', warn: 'alert', info: 'info' }[type] || 'info';
  t.innerHTML = `${ico(ic)}<div class="grow">${msg}</div><button class="ibtn" aria-label="Cerrar notificación" style="width:32px;height:32px">${ico('x')}</button>`;
  t.querySelector('button').onclick = () => t.remove();
  $('#toasts').appendChild(t);
  setTimeout(() => t.remove(), ms);
};
let modalStack = [];
H.modal = (o) => {
  const root = $('#modal-root');
  const ov = document.createElement('div');
  ov.className = 'overlay';
  const prev = document.activeElement;
  const id = uid('m');
  ov.innerHTML = `<div class="modal ${o.wide ? 'wide' : ''}" role="dialog" aria-modal="true" aria-labelledby="${id}">
    <div class="row between" style="align-items:flex-start"><h2 id="${id}">${o.title}</h2><button class="ibtn" data-close aria-label="Cerrar diálogo">${ico('x')}</button></div>
    <div class="m-body">${o.body || ''}</div>
    <div class="modal-f">${(o.actions || []).map((a, i) => `<button class="btn ${a.kind || ''}" data-mi="${i}">${a.label}</button>`).join('')}</div></div>`;
  root.appendChild(ov);
  const api = { el: ov, close() { ov.remove(); modalStack = modalStack.filter(x => x !== api); prev && prev.focus && prev.focus(); o.onClose && o.onClose(); } };
  modalStack.push(api);
  ov.addEventListener('click', e => {
    if (e.target === ov || e.target.closest('[data-close]')) return api.close();
    const b = e.target.closest('[data-mi]');
    if (b) { const a = o.actions[+b.dataset.mi]; const r = a.onClick ? a.onClick(api, ov) : undefined; if (r !== false && !a.keep) api.close(); }
  });
  ov.addEventListener('keydown', e => {
    if (e.key === 'Escape') api.close();
    if (e.key === 'Tab') {
      const f = $$('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])', ov).filter(x => !x.disabled && x.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  setTimeout(() => { (ov.querySelector('[autofocus],input,select,textarea') || ov.querySelector('.btn') || ov.querySelector('button')).focus(); o.onOpen && o.onOpen(ov, api); }, 30);
  return api;
};
H.confirm = (o) => H.modal({
  title: o.title, body: `<p>${o.message}</p>${o.extra || ''}`,
  actions: [{ label: 'Cancelar', kind: 'sec' }, { label: o.confirm || 'Confirmar', kind: o.danger ? 'danger' : '', onClick: (api, el) => o.onYes && o.onYes(el) }]
});

/* ---------- Validación en tiempo real ---------- */
function rutOk(r) {
  r = String(r).replace(/[.\s]/g, '').toUpperCase();
  const m = r.match(/^(\d{7,8})-?([\dK])$/); if (!m) return false;
  let s = 0, f = 2; for (let i = m[1].length - 1; i >= 0; i--) { s += +m[1][i] * f; f = f === 7 ? 2 : f + 1; }
  const dv = 11 - (s % 11); const c = dv === 11 ? '0' : dv === 10 ? 'K' : String(dv);
  return c === m[2];
}
H.rutOk = rutOk;
function checkField(el) {
  const rules = (el.dataset.v || '').split('|').filter(Boolean);
  const v = el.type === 'checkbox' ? el.checked : el.value.trim();
  for (const r of rules) {
    const [n, a] = r.split(':');
    if (n === 'required' && (el.type === 'checkbox' ? !v : v === '')) return el.dataset.msg || 'Este campo es obligatorio.';
    if (v === '' || v === false) continue;
    if (n === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return 'Ingresa un correo válido (ej. nombre@empresa.cl).';
    if (n === 'rut' && !rutOk(v)) return 'RUT inválido: revisa el dígito verificador (ej. 76.123.456-K).';
    if (n === 'tel' && !/^\+?[0-9 ]{8,14}$/.test(v)) return 'Ingresa un teléfono válido (8 a 12 dígitos).';
    if (n === 'min' && v.length < +a) return `Mínimo ${a} caracteres.`;
    if (n === 'code6' && !/^\d{6}$/.test(v)) return 'El código tiene 6 dígitos.';
    if (n === 'match' && v !== (document.querySelector(a) || {}).value) return 'Los valores no coinciden.';
    if (n === 'pwd' && !(v.length >= 10 && /[A-Z]/.test(v) && /\d/.test(v) && /[^A-Za-z0-9]/.test(v))) return 'Mínimo 10 caracteres con mayúscula, número y símbolo.';
    if (n === 'gt0' && !(+v > 0)) return 'Ingresa un valor mayor que 0.';
    if (n === 'future' && new Date(v) < new Date(new Date().toDateString())) return 'La fecha no puede ser anterior a hoy.';
  }
  return '';
}
H.check = checkField;
function paint(el) {
  const f = el.closest('.field'); if (!f) return true;
  const msg = checkField(el);
  f.classList.toggle('invalid', !!msg);
  f.classList.toggle('valid', !msg && (el.type === 'checkbox' ? el.checked : el.value.trim() !== ''));
  const m = f.querySelector('.err-m'); if (m) m.innerHTML = msg ? ico('alert').replace('class="i ', 'class="i " style="width:16px;height:16px" data-x="') + esc(msg) : '';
  el.setAttribute('aria-invalid', msg ? 'true' : 'false');
  return !msg;
}
H.validate = (root) => {
  let first = null, ok = true;
  $$('[data-v]', root).forEach(el => { if (!paint(el)) { ok = false; first = first || el; } });
  if (first) first.focus();
  return ok;
};
document.addEventListener('input', e => { const el = e.target; if (el.dataset && el.dataset.v) { if (el.closest('.field.invalid') || el.closest('.field.valid') || el.dataset.live) paint(el); } if (el.dataset && el.dataset.rutfmt) { /* sin formato forzado */ } if (el.dataset && el.dataset.strength) strength(el); });
document.addEventListener('focusout', e => { const el = e.target; if (el.dataset && el.dataset.v && el.value !== undefined) paint(el); });
function strength(el) {
  const v = el.value; let s = 0; if (v.length >= 10) s++; if (/[A-Z]/.test(v) && /[a-z]/.test(v)) s++; if (/\d/.test(v)) s++; if (/[^A-Za-z0-9]/.test(v)) s++;
  const b = $(el.dataset.strength); if (!b) return;
  $$('i', b).forEach((x, i) => x.style.background = i < s ? ['#A32020', '#C58A10', '#6C8E3A', '#1F7A5C'][s - 1] : '');
  const t = $(el.dataset.strength + '-t'); if (t) t.textContent = v ? ['Muy débil', 'Débil', 'Aceptable', 'Fuerte', 'Muy fuerte'][s] : '';
}
H.field = (o) => {
  const id = o.id || uid('f'), t = o.type || 'text';
  const common = `id="${id}" name="${o.name || id}" ${o.v ? `data-v="${o.v}"` : ''} ${o.ph ? `placeholder="${esc(o.ph)}"` : ''} ${o.autocomplete ? `autocomplete="${o.autocomplete}"` : ''} aria-describedby="${id}-h ${id}-e" ${o.v && o.v.includes('required') ? 'aria-required="true"' : ''} ${o.extra || ''}`;
  let inp;
  if (t === 'select') inp = `<select ${common}>${(o.options || []).map(x => { const v = x.v ?? x, l = x.l ?? x; return `<option value="${esc(v)}" ${String(o.value) === String(v) ? 'selected' : ''}>${esc(l)}</option>`; }).join('')}</select>`;
  else if (t === 'textarea') inp = `<textarea ${common}>${esc(o.value || '')}</textarea>`;
  else inp = `<input type="${t}" ${common} value="${esc(o.value || '')}" ${o.ac ? `data-ac="${o.ac}" role="combobox" aria-autocomplete="list" autocomplete="off"` : ''} ${o.inputmode ? `inputmode="${o.inputmode}"` : ''}>`;
  return `<div class="field ${o.ac ? 'ac' : ''}"><label for="${id}">${o.label}${o.v && o.v.includes('required') ? ' <span aria-hidden="true" style="color:var(--err)">*</span>' : ''}</label>${inp}${o.ac ? `<div class="ac-list hide" role="listbox"></div>` : ''}<div class="hint" id="${id}-h">${o.hint || ''}</div><div class="err-m" id="${id}-e" role="alert"></div></div>`;
};
/* autocompletado */
document.addEventListener('input', e => {
  const el = e.target; if (!el.dataset || !el.dataset.ac) return;
  const list = el.parentElement.querySelector('.ac-list'); const src = (H.AC[el.dataset.ac] || []);
  const q = el.value.toLowerCase(); const m = q ? src.filter(x => x.toLowerCase().includes(q)).slice(0, 8) : [];
  list.innerHTML = m.map(x => `<button type="button" role="option" data-pick="${esc(x)}">${esc(x)}</button>`).join('');
  list.classList.toggle('hide', !m.length);
});
document.addEventListener('keydown', e => {
  const el = e.target; if (!el.dataset || !el.dataset.ac) return;
  const list = el.parentElement.querySelector('.ac-list'); const items = $$('button', list); if (!items.length) return;
  let i = items.findIndex(b => b.getAttribute('aria-selected') === 'true');
  if (e.key === 'ArrowDown') { e.preventDefault(); i = (i + 1) % items.length; } else if (e.key === 'ArrowUp') { e.preventDefault(); i = (i - 1 + items.length) % items.length; }
  else if (e.key === 'Enter' && i >= 0) { e.preventDefault(); items[i].click(); return; } else if (e.key === 'Escape') { list.classList.add('hide'); return; } else return;
  items.forEach((b, k) => b.setAttribute('aria-selected', k === i));
});

/* ---------- Carga de archivos simulada (arrastrar y soltar) ---------- */
H.drop = (id, label, hint = 'PDF, JPG o PNG · máx. 10 MB') => `<div class="drop" data-drop="${id}" tabindex="0" role="button" aria-label="${esc(label)}: arrastra archivos aquí o presiona Enter para elegir">${ico('upload')}<div><strong>${label}</strong></div><div class="small muted">Arrastra y suelta aquí, o <span style="text-decoration:underline">elige un archivo</span></div><div class="xs muted">${hint}</div><input type="file" class="sr" tabindex="-1" multiple></div><div data-files="${id}" aria-live="polite"></div>`;
function addFile(zone, f) {
  const host = $(`[data-files="${zone.dataset.drop}"]`);
  const row = document.createElement('div'); row.className = 'file-row';
  const sz = f.size ? (f.size / 1024).toFixed(0) + ' KB' : '—';
  row.innerHTML = `${ico('file')}<div class="grow"><div class="small"><strong>${esc(f.name)}</strong> <span class="muted">${sz}</span></div><div class="row" style="gap:8px;flex-wrap:nowrap"><div class="bar"><i style="width:0"></i></div><span class="xs muted pct">0%</span></div></div><button type="button" class="ibtn" aria-label="Quitar ${esc(f.name)}">${ico('x')}</button>`;
  host.appendChild(row);
  row.querySelector('button').onclick = () => { clearInterval(t); row.remove(); H.toast('Archivo quitado de la carga.', 'info', 2500); };
  let p = 0; const t = setInterval(() => { p = Math.min(100, p + 8 + Math.random() * 14); row.querySelector('i').style.width = p + '%'; row.querySelector('.pct').textContent = Math.round(p) + '%'; if (p >= 100) { clearInterval(t); row.querySelector('.pct').innerHTML = '<span style="color:var(--teal)">✓ Cargado y validado</span>'; host.dispatchEvent(new CustomEvent('uploaded', { bubbles: true })); } }, 140);
}
document.addEventListener('click', e => { const z = e.target.closest('.drop'); if (z && e.target.tagName !== 'INPUT') z.querySelector('input').click(); });
document.addEventListener('change', e => { const z = e.target.closest('.drop'); if (z && e.target.type === 'file') { [...e.target.files].forEach(f => addFile(z, f)); e.target.value = ''; } });
document.addEventListener('keydown', e => { const z = e.target.closest && e.target.closest('.drop'); if (z && (e.key === 'Enter' || e.key === ' ') && e.target === z) { e.preventDefault(); z.querySelector('input').click(); } });
['dragover', 'dragenter'].forEach(ev => document.addEventListener(ev, e => { const z = e.target.closest && e.target.closest('.drop'); if (z) { e.preventDefault(); z.classList.add('over'); } }));
['dragleave', 'drop'].forEach(ev => document.addEventListener(ev, e => { const z = e.target.closest && e.target.closest('.drop'); if (z) { z.classList.remove('over'); if (ev === 'drop') { e.preventDefault(); [...e.dataTransfer.files].forEach(f => addFile(z, f)); } } }));
/* Subida simulada sin archivo real (para demostración con un clic) */
H.A.fakeFile = (el) => { const z = $(`[data-drop="${el.dataset.zone}"]`); addFile(z, { name: el.dataset.name || 'documento.pdf', size: 240000 + Math.random() * 400000 }); };

/* ---------- Pestañas ---------- */
document.addEventListener('click', e => {
  const b = e.target.closest('[data-tab]'); if (!b) return;
  const set = b.closest('.tabset'); if (!set) return;
  $$(':scope > .tabs [data-tab]', set).forEach(x => { const on = x === b; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; });
  $$(':scope > [data-panel]', set).forEach(p => p.classList.toggle('hide', p.dataset.panel !== b.dataset.tab));
  set.dispatchEvent(new CustomEvent('tabchange', { detail: b.dataset.tab, bubbles: true }));
});
document.addEventListener('keydown', e => {
  const b = e.target.closest && e.target.closest('[role="tab"]'); if (!b || !['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(e.key)) return;
  const all = $$('[role="tab"]', b.parentElement); let i = all.indexOf(b);
  i = e.key === 'ArrowRight' ? (i + 1) % all.length : e.key === 'ArrowLeft' ? (i - 1 + all.length) % all.length : e.key === 'Home' ? 0 : all.length - 1;
  all[i].focus(); all[i].click(); e.preventDefault();
});
H.tabs = (items, active, panels) => `<div class="tabset"><div class="tabs" role="tablist">${items.map(t => `<button role="tab" data-tab="${t.id}" aria-selected="${t.id === active}" tabindex="${t.id === active ? 0 : -1}">${t.label}</button>`).join('')}</div>${items.map(t => `<div data-panel="${t.id}" role="tabpanel" class="${t.id === active ? '' : 'hide'}">${panels[t.id] || ''}</div>`).join('')}</div>`;

/* ---------- Menús (kebab) y acciones delegadas ---------- */
H.kebab = (items, label = 'Más acciones') => `<div class="pos-rel" style="display:inline-block"><button class="ibtn" data-act="menu" aria-haspopup="menu" aria-expanded="false" aria-label="${label}">${ico('dots')}</button><div class="menu hide" role="menu">${items.map(i => i.href ? `<a role="menuitem" href="${i.href}">${i.label}</a>` : `<button role="menuitem" data-act="${i.act}" ${Object.entries(i.data || {}).map(([k, v]) => `data-${k}="${esc(v)}"`).join(' ')}>${i.label}</button>`).join('')}</div></div>`;
H.A.menu = (el) => { const m = el.nextElementSibling; const open = m.classList.contains('hide'); closeMenus(); if (open) { m.classList.remove('hide'); el.setAttribute('aria-expanded', 'true'); const f = m.querySelector('a,button'); f && f.focus(); } };
function closeMenus() { $$('.menu:not(.hide),.fab-menu:not(.hide)').forEach(m => { m.classList.add('hide'); const t = m.previousElementSibling; t && t.setAttribute && t.setAttribute('aria-expanded', 'false'); }); }
H.closeMenus = closeMenus;
document.addEventListener('click', e => {
  const a = e.target.closest('[data-act]');
  if (!e.target.closest('.menu') && !e.target.closest('[data-act="menu"]') && !e.target.closest('.fab')) closeMenus();
  if (!e.target.closest('.ac')) $$('.ac-list').forEach(l => l.classList.add('hide'));
  const pk = e.target.closest('[data-pick]');
  if (pk) { const f = pk.closest('.ac'); const i = f.querySelector('input'); i.value = pk.dataset.pick; f.querySelector('.ac-list').classList.add('hide'); i.dispatchEvent(new Event('input', { bubbles: true })); i.dispatchEvent(new CustomEvent('picked', { bubbles: true })); paint(i); return; }
  if (a && H.A[a.dataset.act]) { if (a.dataset.act !== 'menu' && a.closest('.menu')) closeMenus(); H.A[a.dataset.act](a, e); }
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenus(); });

/* ---------- Tabla de datos (ordenar, filtrar, paginar, selección masiva) ---------- */
H.table = (el, o) => {
  const st = { sort: o.sort || null, page: 1, q: '', f: {}, sel: new Set() };
  const ps = o.pageSize || 8;
  const keys = o.searchKeys || o.cols.map(c => c.key).filter(Boolean);
  const rows = () => {
    let r = o.rows.slice();
    if (st.q) { const q = st.q.toLowerCase(); r = r.filter(x => keys.some(k => String(x[k] ?? '').toLowerCase().includes(q))); }
    for (const k in st.f) if (st.f[k]) r = r.filter(x => String(x[k]) === st.f[k]);
    if (st.sort) { const c = o.cols.find(c => c.key === st.sort.key); const g = c.sortv || (x => x[c.key]); r.sort((a, b) => { const A = g(a), B = g(b); return (A > B ? 1 : A < B ? -1 : 0) * st.sort.dir; }); }
    return r;
  };
  const tid = uid('t');
  el.innerHTML = `<div class="tbl-tools">
    ${o.search === false ? '' : `<div class="field"><label class="sr" for="${tid}q">Buscar</label><input type="search" id="${tid}q" placeholder="${esc(o.searchPh || 'Buscar…')}" aria-controls="${tid}b"></div>`}
    ${(o.filters || []).map(f => `<div class="field"><label class="sr" for="${tid}${f.key}">${f.label}</label><select id="${tid}${f.key}" data-fk="${f.key}"><option value="">${f.label}: todos</option>${f.options.map(x => `<option value="${esc(x)}">${esc(x)}</option>`).join('')}</select></div>`).join('')}
    ${o.tools || ''}</div><div id="${tid}bulk"></div><div id="${tid}b" aria-live="polite"></div>`;
  const body = $('#' + tid + 'b', el), bulk = $('#' + tid + 'bulk', el);
  function draw() {
    const all = rows(), pages = Math.max(1, Math.ceil(all.length / ps)); st.page = Math.min(st.page, pages);
    const sl = all.slice((st.page - 1) * ps, st.page * ps);
    bulk.innerHTML = st.sel.size && o.bulk ? `<div class="bulk" role="region" aria-label="Acciones masivas"><strong>${st.sel.size} seleccionado${st.sel.size > 1 ? 's' : ''}</strong>${o.bulk.map((b, i) => `<button class="btn sm sec" data-bk="${i}">${b.label}</button>`).join('')}<button class="btn sm ter" style="color:#fff" data-bk="clear">Limpiar</button></div>` : '';
    if (!all.length) { body.innerHTML = H.empty(o.emptyTitle || 'Sin resultados', 'No hay registros que coincidan con los filtros aplicados.', `<button class="btn sec" data-bk="reset">Limpiar filtros</button>`); return; }
    body.innerHTML = `<div class="tbl-wrap"><table class="${o.stack === false ? '' : 'stack'}"><caption class="sr">${esc(o.caption || 'Tabla de datos')}</caption><thead><tr>${o.bulk ? `<th style="width:48px"><input type="checkbox" data-bk="all" aria-label="Seleccionar página" style="width:22px;height:22px;accent-color:var(--copper)"></th>` : ''}${o.cols.map(c => `<th class="${c.num ? 'num' : ''}" ${st.sort && st.sort.key === c.key ? `aria-sort="${st.sort.dir > 0 ? 'ascending' : 'descending'}"` : ''}>${c.nosort || !c.key ? esc(c.label) : `<button data-sk="${c.key}">${esc(c.label)}${ico('sort').replace('class="i ', 'class="i " style="width:14px;height:14px;opacity:.6" data-s="')}</button>`}</th>`).join('')}</tr></thead>
    <tbody>${sl.map(r => `<tr data-id="${esc(r.id)}" class="${st.sel.has(r.id) ? 'sel' : ''}">${o.bulk ? `<td><input type="checkbox" data-bk="row" value="${esc(r.id)}" ${st.sel.has(r.id) ? 'checked' : ''} aria-label="Seleccionar ${esc(r.id)}" style="width:22px;height:22px;accent-color:var(--copper)"></td>` : ''}${o.cols.map(c => `<td data-l="${esc(c.label)}" class="${c.num ? 'num' : ''}">${c.render ? c.render(r) : esc(r[c.key])}</td>`).join('')}</tr>`).join('')}</tbody></table></div>
    <div class="pager"><span>Mostrando ${(st.page - 1) * ps + 1}–${Math.min(all.length, st.page * ps)} de ${nf(all.length)}</span><nav class="pg" aria-label="Paginación"><button data-pg="${st.page - 1}" ${st.page === 1 ? 'disabled' : ''} aria-label="Página anterior">${ico('chL')}</button>${Array.from({ length: pages }, (_, i) => i + 1).filter(p => p === 1 || p === pages || Math.abs(p - st.page) <= 1).map((p, i, a) => (i && p - a[i - 1] > 1 ? '<span style="padding:12px 4px">…</span>' : '') + `<button data-pg="${p}" ${p === st.page ? 'aria-current="page"' : ''} aria-label="Página ${p}">${p}</button>`).join('')}<button data-pg="${st.page + 1}" ${st.page === pages ? 'disabled' : ''} aria-label="Página siguiente">${ico('chR')}</button></nav></div>`;
  }
  el.addEventListener('input', e => { if (e.target.type === 'search') { st.q = e.target.value; st.page = 1; draw(); } });
  el.addEventListener('change', e => {
    if (e.target.dataset.fk) { st.f[e.target.dataset.fk] = e.target.value; st.page = 1; draw(); }
    if (e.target.dataset.bk === 'row') { e.target.checked ? st.sel.add(e.target.value) : st.sel.delete(e.target.value); draw(); }
    if (e.target.dataset.bk === 'all') { const ids = rows().slice((st.page - 1) * ps, st.page * ps).map(r => r.id); ids.forEach(i => e.target.checked ? st.sel.add(i) : st.sel.delete(i)); draw(); }
  });
  el.addEventListener('click', e => {
    const s = e.target.closest('[data-sk]'); if (s) { st.sort = st.sort && st.sort.key === s.dataset.sk ? { key: s.dataset.sk, dir: -st.sort.dir } : { key: s.dataset.sk, dir: 1 }; draw(); const nb = $(`[data-sk="${s.dataset.sk}"]`, el); nb && nb.focus(); }
    const p = e.target.closest('[data-pg]'); if (p) { st.page = +p.dataset.pg; draw(); }
    const b = e.target.closest('button[data-bk]');
    if (b) { const k = b.dataset.bk; if (k === 'clear') { st.sel.clear(); draw(); } else if (k === 'reset') { st.q = ''; st.f = {}; $$('input[type=search],select', el).forEach(x => x.value = ''); draw(); } else if (!isNaN(k)) { const ids = [...st.sel]; o.bulk[+k].fn(ids, () => { st.sel.clear(); draw(); }); } }
  });
  draw();
  return { redraw: draw, state: st, setRows: r => { o.rows = r; draw(); } };
};
H.empty = (t, m, act = '') => `<div class="empty"><svg viewBox="0 0 120 90" aria-hidden="true"><rect x="22" y="30" width="76" height="44" rx="6" fill="#EEF1F3" stroke="#6C8294" stroke-width="2"/><path d="M22 44h76" stroke="#6C8294" stroke-width="2"/><circle cx="86" cy="26" r="14" fill="#F3E1D6" stroke="#9C4A1F" stroke-width="2.5"/><path d="M96 36l10 10" stroke="#9C4A1F" stroke-width="3" stroke-linecap="round"/><path d="M36 58h30M36 66h18" stroke="#6C8294" stroke-width="2" stroke-linecap="round"/></svg><h3>${t}</h3><p>${m}</p>${act}</div>`;
H.skel = (n = 3) => `<div class="col" aria-busy="true" aria-label="Cargando contenido"><div class="skel" style="height:34px;width:40%"></div><div class="grid g3">${Array.from({ length: 3 }, () => '<div class="skel" style="height:96px"></div>').join('')}</div>${Array.from({ length: n }, () => '<div class="skel" style="height:56px"></div>').join('')}</div>`;

/* ---------- Asistente de varios pasos ---------- */
H.wizard = (el, o) => {
  let i = 0; const d = o.data || {};
  function collect(root) {
    $$('input,select,textarea', root).forEach(x => { if (!x.name) return; if (x.type === 'checkbox') d[x.name] = x.checked; else if (x.type === 'radio') { if (x.checked) d[x.name] = x.value; } else d[x.name] = x.value; });
  }
  function draw() {
    const s = o.steps[i];
    el.innerHTML = `<ol class="stepper" aria-label="Progreso: paso ${i + 1} de ${o.steps.length}">${o.steps.map((x, k) => `<li class="${k < i ? 'done' : k === i ? 'cur' : ''}" ${k === i ? 'aria-current="step"' : ''}><span>${esc(x.label)}</span></li>`).join('')}</ol>
    <div class="wz-panel card"><h2 tabindex="-1" id="wzh">Paso ${i + 1} de ${o.steps.length} · ${esc(s.title || s.label)}</h2>${s.intro ? `<p class="muted">${s.intro}</p>` : ''}<div class="wz-body">${s.render(d)}</div>
    <div class="modal-f" style="justify-content:space-between"><button class="btn sec" data-wz="back" ${i === 0 ? 'disabled' : ''}>${ico('chL')} Atrás</button><div class="row">${o.save ? `<button class="btn ter" data-wz="save">Guardar borrador</button>` : ''}<button class="btn" data-wz="next">${i === o.steps.length - 1 ? (o.finishLabel || 'Finalizar') : 'Continuar'} ${i === o.steps.length - 1 ? ico('check') : ico('chR')}</button></div></div></div>`;
    $('#wzh', el).focus({ preventScroll: true });
    s.mount && s.mount($('.wz-body', el), d);
  }
  el.onclick = e => {
    const b = e.target.closest('[data-wz]'); if (!b) return;
    const panel = $('.wz-body', el);
    if (b.dataset.wz === 'back') { collect(panel); i--; draw(); }
    else if (b.dataset.wz === 'save') { collect(panel); H.toast('Borrador guardado en el equipo y en la nube (cuando haya enlace).', 'ok'); }
    else {
      if (!H.validate(panel)) { H.toast('Revisa los campos marcados antes de continuar.', 'warn'); return; }
      collect(panel);
      const s = o.steps[i]; if (s.validate) { const r = s.validate(panel, d); if (r !== true && r !== undefined) { H.toast(r, 'warn'); return; } }
      if (i < o.steps.length - 1) { i++; draw(); window.scrollTo({ top: 0, behavior: 'smooth' }); } else o.finish(d, el);
    }
  };
  draw();
  return { go: n => { i = n; draw(); } };
};

/* ---------- Gráficos SVG (barras, líneas, área, anillo, apilado, dispersión, calor, medidor, chispa) ---------- */
const PAL = ['#1E2B35', '#9C4A1F', '#1F7A5C', '#6C8294', '#C9A27A', '#7E3A16'];
H.PAL = PAL;
const niceMax = (m) => { if (m <= 0) return 1; const p = Math.pow(10, Math.floor(Math.log10(m))); const f = m / p; const n = f <= 1 ? 1 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 5 ? 5 : 10; return n * p; };
const svgW = (w, h, label, inner) => `<svg class="chart" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}" preserveAspectRatio="xMidYMid meet">${inner}</svg>`;
H.legend = (items) => `<div class="legend">${items.map((x, i) => `<span><i style="background:${x.color || PAL[i % PAL.length]}"></i>${esc(x.name || x)}</span>`).join('')}</div>`;
const axes = (w, h, m, max, fmt, ticks = 4) => { let s = ''; for (let i = 0; i <= ticks; i++) { const y = m.t + (h - m.t - m.b) * (1 - i / ticks); s += `<line class="gl" x1="${m.l}" x2="${w - m.r}" y1="${y}" y2="${y}"/><text x="${m.l - 6}" y="${y + 4}" text-anchor="end">${fmt(max * i / ticks)}</text>`; } return s; };
H.C = {
  bar(o) {
    const w = o.w || 520, h = o.h || 240, m = { l: 44, r: 8, t: 16, b: 38 }, fmt = o.fmt || (v => nf(Math.round(v * 10) / 10));
    const max = niceMax(o.max || Math.max(...o.values) * 1.08), n = o.values.length, bw = (w - m.l - m.r) / n, y0 = h - m.b;
    let s = axes(w, h, m, max, fmt) + `<line class="ax" x1="${m.l}" x2="${w - m.r}" y1="${y0}" y2="${y0}"/>`;
    o.values.forEach((v, i) => {
      const bh = (h - m.t - m.b) * v / max, x = m.l + i * bw + bw * .18, col = (o.colors && o.colors[i]) || o.color || PAL[1];
      s += `<rect class="${o.drill ? 'hit' : ''}" x="${x}" y="${y0 - bh}" width="${bw * .64}" height="${bh}" rx="3" fill="${col}" ${o.drill ? `${o.drill(i)} tabindex="0" role="link" aria-label="${esc(o.labels[i])}: ${fmt(v)}. Ver detalle"` : ''}><title>${esc(o.labels[i])}: ${fmt(v)}</title></rect><text x="${x + bw * .32}" y="${y0 - bh - 4}" text-anchor="middle" style="fill:var(--slate);font-weight:600">${fmt(v)}</text><text x="${x + bw * .32}" y="${h - 18}" text-anchor="middle">${esc(o.labels[i])}</text>`;
    });
    if (o.target != null) { const ty = y0 - (h - m.t - m.b) * o.target / max; s += `<line x1="${m.l}" x2="${w - m.r}" y1="${ty}" y2="${ty}" stroke="#1F7A5C" stroke-width="2" stroke-dasharray="6 4"/><text x="${w - m.r}" y="${ty - 5}" text-anchor="end" style="fill:#1F7A5C;font-weight:600">${esc(o.targetLabel || 'Meta')}</text>`; }
    return svgW(w, h, o.label || 'Gráfico de barras', s);
  },
  hbar(o) {
    const w = o.w || 520, rowH = 34, h = o.values.length * rowH + 20, m = { l: o.ml || 150, r: 50 }, max = niceMax(Math.max(...o.values) * 1.05), fmt = o.fmt || nf;
    let s = ''; o.values.forEach((v, i) => { const y = 8 + i * rowH, bw = (w - m.l - m.r) * v / max; s += `<text x="${m.l - 8}" y="${y + 17}" text-anchor="end" style="fill:var(--slate)">${esc(o.labels[i])}</text><rect x="${m.l}" y="${y + 4}" width="${bw}" height="20" rx="3" fill="${(o.colors && o.colors[i]) || o.color || PAL[1]}"><title>${esc(o.labels[i])}: ${fmt(v)}</title></rect><text x="${m.l + bw + 6}" y="${y + 19}" style="fill:var(--slate);font-weight:600">${fmt(v)}</text>`; });
    return svgW(w, h, o.label || 'Gráfico de barras horizontales', s);
  },
  line(o) {
    const w = o.w || 560, h = o.h || 240, m = { l: 44, r: 12, t: 14, b: 34 }, fmt = o.fmt || (v => nf(Math.round(v * 10) / 10));
    const all = o.series.flatMap(s => s.values), lo = o.min ?? 0, max = o.max ?? niceMax(Math.max(...all) * 1.08), n = o.labels.length;
    const X = i => m.l + (w - m.l - m.r) * (n === 1 ? .5 : i / (n - 1)), Y = v => h - m.b - (h - m.t - m.b) * (v - lo) / (max - lo || 1);
    let s = ''; for (let i = 0; i <= 4; i++) { const v = lo + (max - lo) * i / 4, y = Y(v); s += `<line class="gl" x1="${m.l}" x2="${w - m.r}" y1="${y}" y2="${y}"/><text x="${m.l - 6}" y="${y + 4}" text-anchor="end">${fmt(v)}</text>`; }
    const step = Math.ceil(n / 8); o.labels.forEach((l, i) => { if (i % step === 0 || i === n - 1) s += `<text x="${X(i)}" y="${h - 12}" text-anchor="middle">${esc(l)}</text>`; });
    o.series.forEach((se, k) => {
      const col = se.color || PAL[(k + 1) % PAL.length], pts = se.values.map((v, i) => `${X(i)},${Y(v)}`).join(' ');
      if (o.area) s += `<polygon points="${X(0)},${Y(lo)} ${pts} ${X(n - 1)},${Y(lo)}" fill="${col}" opacity=".16"/>`;
      s += `<polyline points="${pts}" fill="none" stroke="${col}" stroke-width="2.6" ${se.dash ? 'stroke-dasharray="7 5"' : ''} stroke-linejoin="round"/>`;
      if (n <= 16) se.values.forEach((v, i) => s += `<circle cx="${X(i)}" cy="${Y(v)}" r="3.5" fill="#fff" stroke="${col}" stroke-width="2"><title>${esc(se.name)} · ${esc(o.labels[i])}: ${fmt(v)}</title></circle>`);
    });
    if (o.ref != null) { s += `<line x1="${m.l}" x2="${w - m.r}" y1="${Y(o.ref)}" y2="${Y(o.ref)}" stroke="#1F7A5C" stroke-width="2" stroke-dasharray="6 4"/><text x="${w - m.r}" y="${Y(o.ref) - 5}" text-anchor="end" style="fill:#1F7A5C;font-weight:600">${esc(o.refLabel || 'Meta')}</text>`; }
    return svgW(w, h, o.label || 'Gráfico de líneas', s);
  },
  stack(o) {
    const w = o.w || 520, h = o.h || 250, m = { l: 44, r: 8, t: 14, b: 34 }, fmt = o.fmt || nf, n = o.labels.length;
    const tot = o.labels.map((_, i) => o.series.reduce((a, s) => a + s.values[i], 0)), max = niceMax(Math.max(...tot) * 1.05), bw = (w - m.l - m.r) / n, y0 = h - m.b;
    let s = axes(w, h, m, max, fmt) + `<line class="ax" x1="${m.l}" x2="${w - m.r}" y1="${y0}" y2="${y0}"/>`;
    o.labels.forEach((l, i) => { let acc = 0; o.series.forEach((se, k) => { const v = se.values[i], bh = (h - m.t - m.b) * v / max; s += `<rect x="${m.l + i * bw + bw * .18}" y="${y0 - (h - m.t - m.b) * acc / max - bh}" width="${bw * .64}" height="${bh}" fill="${se.color || PAL[k % PAL.length]}"><title>${esc(se.name)} · ${esc(l)}: ${fmt(v)}</title></rect>`; acc += v; }); s += `<text x="${m.l + i * bw + bw / 2}" y="${h - 14}" text-anchor="middle">${esc(l)}</text>`; });
    return svgW(w, h, o.label || 'Gráfico de barras apiladas', s);
  },
  donut(o) {
    const w = 260, h = 260, cx = 130, cy = 130, R = 100, r = 62, tot = o.items.reduce((a, x) => a + x.value, 0); let a0 = -Math.PI / 2, s = '';
    o.items.forEach((x, i) => { const a1 = a0 + 2 * Math.PI * x.value / tot, lg = a1 - a0 > Math.PI ? 1 : 0, c = x.color || PAL[i % PAL.length];
      const p = (R_, a) => `${cx + R_ * Math.cos(a)},${cy + R_ * Math.sin(a)}`;
      s += `<path d="M${p(R, a0)} A${R},${R} 0 ${lg} 1 ${p(R, a1 - .0001)} L${p(r, a1 - .0001)} A${r},${r} 0 ${lg} 0 ${p(r, a0)}Z" fill="${c}" stroke="#fff" stroke-width="2"><title>${esc(x.label)}: ${nf(x.value)} (${nd(x.value / tot * 100, 1)} %)</title></path>`; a0 = a1; });
    s += `<text x="${cx}" y="${cy - 2}" text-anchor="middle" style="font:700 28px var(--f-head);fill:var(--slate)">${esc(o.big || nf(tot))}</text><text x="${cx}" y="${cy + 18}" text-anchor="middle">${esc(o.small || '')}</text>`;
    return svgW(w, h, o.label || 'Gráfico circular', s).replace('class="chart"', 'class="chart" style="max-width:260px;margin:auto"');
  },
  scatter(o) {
    const w = o.w || 520, h = o.h || 250, m = { l: 48, r: 12, t: 12, b: 40 }, xs = o.points.map(p => p.x), ys = o.points.map(p => p.y);
    const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
    const X = v => m.l + (w - m.l - m.r) * (v - x0) / (x1 - x0 || 1), Y = v => h - m.b - (h - m.t - m.b) * (v - y0) / (y1 - y0 || 1);
    let s = ''; for (let i = 0; i <= 4; i++) { const v = y0 + (y1 - y0) * i / 4; s += `<line class="gl" x1="${m.l}" x2="${w - m.r}" y1="${Y(v)}" y2="${Y(v)}"/><text x="${m.l - 6}" y="${Y(v) + 4}" text-anchor="end">${nd(v, 1)}</text>`; const xv = x0 + (x1 - x0) * i / 4; s += `<text x="${X(xv)}" y="${h - 22}" text-anchor="middle">${nd(xv, 2)}</text>`; }
    o.points.forEach(p => s += `<circle cx="${X(p.x)}" cy="${Y(p.y)}" r="5.5" fill="${PAL[1]}" fill-opacity=".72" stroke="#fff"><title>${esc(p.l || '')} · ${o.xl}: ${nd(p.x, 2)} · ${o.yl}: ${nd(p.y, 1)}</title></circle>`);
    s += `<text x="${(w + m.l) / 2}" y="${h - 4}" text-anchor="middle">${esc(o.xl || '')}</text><text transform="translate(12 ${h / 2}) rotate(-90)" text-anchor="middle">${esc(o.yl || '')}</text>`;
    return svgW(w, h, o.label || 'Gráfico de dispersión', s);
  },
  heat(o) {
    const w = o.w || 560, cw = (w - 56) / o.cols.length, ch = 28, h = o.rows.length * ch + 28, mx = Math.max(...o.values.flat());
    let s = ''; o.cols.forEach((c, j) => { if (j % (o.skip || 1) === 0) s += `<text x="${56 + j * cw + cw / 2}" y="12" text-anchor="middle">${esc(c)}</text>`; });
    o.rows.forEach((r, i) => { s += `<text x="50" y="${28 + i * ch + 18}" text-anchor="end">${esc(r)}</text>`; o.values[i].forEach((v, j) => { const t = v / (mx || 1); s += `<rect x="${56 + j * cw + 1}" y="${24 + i * ch + 1}" width="${cw - 2}" height="${ch - 2}" rx="3" fill="rgb(${Math.round(245 - t * 89)},${Math.round(240 - t * 166)},${Math.round(232 - t * 201)})"><title>${esc(r)} · ${esc(o.cols[j])}: ${nd(v, 1)} ${o.unit || ''}</title></rect>`; }); });
    return svgW(w, h, o.label || 'Mapa de calor', s);
  },
  gauge(o) {
    const w = 260, h = 160, cx = 130, cy = 130, R = 100, p = Math.min(1, o.value / o.max), a = Math.PI * (1 - p);
    const pt = (rr, aa) => `${cx + rr * Math.cos(aa)},${cy - rr * Math.sin(aa)}`, col = o.good === false ? '#A32020' : '#1F7A5C';
    let s = `<path d="M${pt(R, Math.PI)} A${R},${R} 0 0 1 ${pt(R, 0)}" fill="none" stroke="#DCE2E6" stroke-width="20" stroke-linecap="round"/><path d="M${pt(R, Math.PI)} A${R},${R} 0 0 1 ${pt(R, a)}" fill="none" stroke="${col}" stroke-width="20" stroke-linecap="round"/>`;
    if (o.target != null) { const ta = Math.PI * (1 - o.target / o.max); s += `<line x1="${cx + (R - 16) * Math.cos(ta)}" y1="${cy - (R - 16) * Math.sin(ta)}" x2="${cx + (R + 14) * Math.cos(ta)}" y2="${cy - (R + 14) * Math.sin(ta)}" stroke="#1E2B35" stroke-width="3"/>`; }
    s += `<text x="${cx}" y="${cy - 14}" text-anchor="middle" style="font:700 34px var(--f-head);fill:var(--slate)">${esc(o.text || nd(o.value, 0))}</text><text x="${cx}" y="${cy + 10}" text-anchor="middle">${esc(o.sub || '')}</text>`;
    return svgW(w, h, o.label || 'Medidor', s).replace('class="chart"', 'class="chart" style="max-width:260px;margin:auto"');
  },
  spark(v, col = PAL[1], w = 120, h = 34) {
    const mn = Math.min(...v), mx = Math.max(...v), X = i => 2 + (w - 4) * i / (v.length - 1), Y = x => h - 3 - (h - 6) * (x - mn) / (mx - mn || 1);
    return `<svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="Tendencia"><polyline points="${v.map((x, i) => X(i) + ',' + Y(x)).join(' ')}" fill="none" stroke="${col}" stroke-width="2.2"/></svg>`;
  }
};

/* ---------- Tarjetas y utilidades de maquetación ---------- */
H.card = (title, body, o = {}) => `<section class="card ${o.cls || ''}" ${o.id ? `id="${o.id}"` : ''}><div class="card-h"><h3>${title}</h3>${o.right || ''}</div>${o.sub ? `<p class="muted small">${o.sub}</p>` : ''}${body}</section>`;
H.kpi = (lbl, val, unit, dlt, cls, href, extra = '') => `<${href ? `a href="${href}"` : 'div'} class="kpi" style="text-decoration:none" ${href ? `aria-label="${esc(lbl)}: ${esc(val)} ${esc(unit || '')}. Ver detalle"` : ''}><span class="lbl">${lbl}</span><span class="val">${val}${unit ? ` <small>${unit}</small>` : ''}</span>${dlt ? `<span class="dlt ${cls || 'neu'}">${dlt}</span>` : ''}${extra}</${href ? 'a' : 'div'}>`;
H.badge = (t, k = '') => `<span class="badge ${k}">${t}</span>`;
H.banner = (k, html, act = '') => `<div class="banner ${k}" role="${k === 'err' || k === 'warn' ? 'alert' : 'note'}">${ico(k === 'ok' ? 'check' : k === 'info' ? 'info' : 'alert')}<div class="grow">${html}</div>${act}</div>`;
H.accordion = (title, body, open) => `<details class="acc" ${open ? 'open' : ''}><summary>${title}</summary><div>${body}</div></details>`;
H.timeline = (items) => `<ol class="timeline">${items.map(i => `<li class="${i.s || ''}"><strong>${i.t}</strong><span class="when">${i.w || ''}</span>${i.d ? `<div class="small muted">${i.d}</div>` : ''}</li>`).join('')}</ol>`;
H.csv = (name, head, rows) => {
  const q = v => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const blob = new Blob(['﻿' + [head, ...rows].map(r => r.map(q).join(';')).join('\n')], { type: 'text/csv;charset=utf-8' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
};
/* Exportación simulada de informes (con progreso) */
H.exportDlg = (title, csv) => {
  H.modal({
    title: 'Exportar informe', body: `<p>${esc(title)}</p><fieldset style="border:0;padding:0;margin:0 0 12px"><legend class="lbl-t">Formato</legend><div class="choice-grid"><label class="choice"><input type="radio" name="fmt" value="csv" checked> CSV (Excel)</label><label class="choice"><input type="radio" name="fmt" value="pdf"> PDF firmado</label><label class="choice"><input type="radio" name="fmt" value="xlsx"> XLSX</label></div></fieldset><label class="check"><input type="checkbox" checked> Incluir trazabilidad hasta la medición de origen</label><div id="exp-p"></div>`,
    actions: [{ label: 'Cancelar', kind: 'sec' }, {
      label: 'Generar informe', keep: true, onClick: (api, el) => {
        const f = $('input[name=fmt]:checked', el).value, host = $('#exp-p', el); host.innerHTML = `<div class="row mt1"><div class="bar cu"><i style="width:0"></i></div><span class="xs">Generando…</span></div>`;
        let p = 0; const t = setInterval(() => { p += 14 + Math.random() * 18; $('i', host).style.width = Math.min(100, p) + '%'; if (p >= 100) { clearInterval(t); api.close(); if (f === 'csv' && csv) { H.csv(csv.name, csv.head, csv.rows); H.toast('Informe CSV descargado.', 'ok'); } else H.toast(`Informe ${f.toUpperCase()} generado (simulado en el prototipo). En producción se firma y archiva con su hash.`, 'ok', 6000); } }, 160); return false;
      }
    }]
  });
};
