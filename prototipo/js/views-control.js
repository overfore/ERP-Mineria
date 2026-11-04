'use strict';
/* =====================================================================
   views-control.js — Centro de control: despacho (palas ↔ camiones),
   mapa del rajo con equipos en movimiento, geotecnia, pit 3D por bloques
   y arquitectura isométrica equipo → borde → nube. Todo simulado.
   ===================================================================== */
const CC = H.CC = { tab: 'desp', sel: null, layers: { roads: true, zones: true, trucks: true, shovels: true, drills: false }, timer: null, a: 0.6, by: 'mat', seed: 1 };
const STC = { Operando: '#3fbf8f', Detenido: '#ff6b5e', Mantención: '#f2b84b', 'Sin señal': '#7b8791' };
const cls = s => s.replace(/[^A-Za-z]/g, '').replace('Sinsenal', 'SinSenal').replace('Sinseal', 'SinSenal');
const scls = s => (s === 'Sin señal' ? 'SinSenal' : s);

/* ---------- Geometría del rajo (viewBox 1000×620) ---------- */
const PITC = [500, 340];
const DEST = { CH: { n: 'Chancador primario', p: [170, 150] }, SA: { n: 'Stock A (lixiviación)', p: [800, 170] }, BS: { n: 'Botadero sur', p: [790, 545] } };
const SHOV = {
  'PA-01': { p: [430, 300], d: 'CH', mat: 'Mineral sulfuro', path: [[430, 300], [380, 250], [300, 205], [220, 165], [170, 150]] },
  'PA-02': { p: [560, 362], d: 'BS', mat: 'Estéril', path: [[560, 362], [625, 435], [700, 500], [790, 545]] },
  'PA-03': { p: [500, 412], d: 'CH', mat: 'Mineral sulfuro', path: [[500, 412], [452, 345], [380, 275], [290, 212], [170, 150]] },
  'PA-04': { p: [392, 382], d: 'SA', mat: 'Mineral óxido', path: [[392, 382], [470, 332], [560, 282], [680, 222], [800, 170]] },
  'PA-05': { p: [612, 302], d: 'SA', mat: 'Mineral óxido', path: [[612, 302], [680, 252], [742, 205], [800, 170]] }
};
const plen = P => { let L = 0; for (let i = 1; i < P.length; i++) L += Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1]); return L; };
const at = (P, t) => { const L = plen(P); let d = Math.max(0, Math.min(1, t)) * L; for (let i = 1; i < P.length; i++) { const s = Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1]); if (d <= s) { const k = s ? d / s : 0; return [P[i - 1][0] + (P[i][0] - P[i - 1][0]) * k, P[i - 1][1] + (P[i][1] - P[i - 1][1]) * k]; } d -= s; } return P[P.length - 1]; };

/* ---------- Estado de flota (se anima en el cliente) ---------- */
const rr = rng(2026);
CC.trucks = H.EQUIPOS.filter(e => e.id.startsWith('CF')).map((e, i) => {
  const keys = Object.keys(SHOV); const sh = keys[i % keys.length];
  return { id: e.id, sh, t: rr(), dir: rr() < .5 ? 1 : -1, v: .018 + rr() * .018, ref: e };
});
CC.drills = H.EQUIPOS.filter(e => e.id.startsWith('PF')).map((e, i) => ({ id: e.id, p: [330 + (i % 5) * 70 + (i > 4 ? 25 : 0), 450 + Math.floor(i / 5) * 55], ref: e }));
CC.tons = 18420;
const posOf = t => { const s = SHOV[t.sh]; const e = t.ref; if (e.estado === 'Mantención') return [905 + (CC.trucks.indexOf(t) % 4) * 18, 95 + (CC.trucks.indexOf(t) % 3) * 16]; return at(s.path, t.t); };
const inShadow = p => Math.hypot(p[0] - PITC[0], (p[1] - PITC[1]) * 1.2) < 125;
const stale = t => H.Sim.lte === 'shadow' && inShadow(posOf(t)) && t.ref.estado === 'Operando';

CC.step = () => {
  CC.trucks.forEach(t => {
    const e = t.ref;
    if (e.estado !== 'Operando') return;
    const sh = H.EQ(t.sh); if (sh && sh.estado === 'Detenido' && t.t < .06 && t.dir === -1) return; // cola en pala detenida
    t.t += t.dir * t.v * .55; if (t.t >= 1) { t.t = 1; t.dir = -1; CC.tons += 240; } if (t.t <= 0) { t.t = 0; t.dir = 1; }
  });
};

/* ---------- Terreno procedural ---------- */
function terrain() {
  const r = rng(11); let out = '';
  for (let k = 0; k < 15; k++) {
    const R = 310 - k * 19; const pts = [];
    for (let a = 0; a < 40; a++) { const th = a / 40 * Math.PI * 2; const j = 1 + (r() - .5) * .11; pts.push([PITC[0] + Math.cos(th) * R * 1.38 * j, PITC[1] + Math.sin(th) * R * .98 * j]); }
    const shade = 40 + k * 2.2;
    out += `<polygon points="${pts.map(p => p.map(Math.round).join(',')).join(' ')}" fill="hsl(${k < 3 ? 70 : 38} ${k < 3 ? 8 : 10}% ${Math.max(7, 30 - k * 1.7)}%)" stroke="hsl(40 8% ${shade}%)" stroke-width=".7" stroke-opacity=".5"/>`;
  }
  return out;
}
const ZONES = [
  { n: 'Botadero norte', c: '#2f9e6a', p: [[60, 40], [250, 30], [300, 90], [210, 120], [70, 110]] },
  { n: 'Chancador', c: '#3a6fb5', p: [[130, 125], [215, 125], [215, 180], [130, 180]] },
  { n: 'Stock A', c: '#3a6fb5', p: [[745, 135], [850, 135], [850, 205], [745, 205]] },
  { n: 'Botadero sur', c: '#b54a3a', p: [[735, 505], [920, 495], [940, 590], [740, 590]] },
  { n: 'Taller', c: '#8a949c', p: [[880, 60], [980, 60], [980, 160], [880, 160]] }
];
const truckGlyph = (c, s = 1) => `<svg width="${26 * s}" height="${14 * s}" viewBox="0 0 26 14" aria-hidden="true"><path d="M1 3h14v7H1z" fill="${c}"/><path d="M15 5h6l3 3v2H15z" fill="${c}"/><circle cx="6" cy="11.5" r="2" fill="#0c1013" stroke="${c}"/><circle cx="19" cy="11.5" r="2" fill="#0c1013" stroke="${c}"/></svg>`;

/* ---------- Vista: despacho ---------- */
function rowsHtml() {
  return Object.keys(SHOV).map(k => {
    const s = SHOV[k], e = H.EQ(k), ts = CC.trucks.filter(t => t.sh === k && t.ref.estado !== 'Mantención');
    const op = ts.filter(t => t.ref.estado === 'Operando').length;
    return `<div class="cc-row ${CC.sel === k ? 'sel' : ''}" data-sh="${k}">
      <button class="cc-sh" data-act="ccSel" data-id="${k}" aria-label="Seleccionar pala ${k}"><b><i class="dot ${scls(e.estado)}"></i>${k}</b><span>${esc(s.mat)}</span><span>${op} camiones en ciclo</span></button>
      <div class="cc-track" data-track="${k}">${ts.map(t => `<button class="cc-tk ${CC.sel === t.id ? 'sel' : ''}" data-act="ccSel" data-id="${t.id}" data-tk="${t.id}" style="left:${(t.t * 100).toFixed(1)}%" aria-label="Camión ${t.id}, ${t.ref.estado}">${truckGlyph(STC[t.ref.estado], .9)}${CC.sel === t.id || t.ref.estado === 'Detenido' ? `<span>${t.id.slice(3)}</span>` : ''}</button>`).join('')}</div>
      <div class="cc-dst"><b>${DEST[s.d].n}</b><span>${nf(Math.round(CC.tons * (.12 + (k.charCodeAt(4) % 5) * .05)))} t</span><div class="bar"><i style="width:${40 + (k.charCodeAt(4) % 5) * 11}%"></i></div></div></div>`;
  }).join('');
}
function eqChips() {
  const grp = (t, ids) => `<h4>${t} (${ids.length})</h4><div class="cc-chips">${ids.map(e => `<button class="${scls(e.estado)} ${CC.sel === e.id ? 'sel' : ''}" data-act="ccSel" data-id="${e.id}" title="${e.estado}">${e.id.slice(3)}</button>`).join('')}</div>`;
  return grp('Camiones 240 t', H.EQUIPOS.filter(e => e.id.startsWith('CF'))) + grp('Palas eléctricas', H.EQUIPOS.filter(e => e.id.startsWith('PA'))) + grp('Perforadoras', H.EQUIPOS.filter(e => e.id.startsWith('PF')));
}
function mapSvg() {
  const L = CC.layers;
  const roads = Object.keys(SHOV).map(k => `<polyline points="${SHOV[k].path.map(p => p.join(',')).join(' ')}" fill="none" stroke="#7a2a22" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><polyline points="${SHOV[k].path.map(p => p.join(',')).join(' ')}" fill="none" stroke="#e5604f" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="${k === CC.sel || (CC.sel && H.EQ(CC.sel) && CC.trucks.find(t => t.id === CC.sel)?.sh === k) ? '' : '1 0'}"/>`).join('');
  const zones = ZONES.map(z => { const cx = z.p.reduce((a, p) => a + p[0], 0) / z.p.length, cy = z.p.reduce((a, p) => a + p[1], 0) / z.p.length; return `<polygon points="${z.p.map(p => p.join(',')).join(' ')}" fill="${z.c}" fill-opacity=".38" stroke="${z.c}" stroke-width="1.6"/><text x="${cx}" y="${cy}" text-anchor="middle" fill="#fff" font-size="13" font-weight="600" style="paint-order:stroke;stroke:#000;stroke-width:3px">${z.n}</text>`; }).join('');
  const shadow = H.Sim.lte === 'shadow' ? `<ellipse cx="${PITC[0]}" cy="${PITC[1]}" rx="170" ry="125" fill="#f2b84b" fill-opacity=".10" stroke="#f2b84b" stroke-dasharray="6 5"/><text x="${PITC[0]}" y="${PITC[1] + 150}" text-anchor="middle" fill="#ffd88a" font-size="13" font-weight="600" style="paint-order:stroke;stroke:#000;stroke-width:3px">Sombra LTE · equipos guardan los eventos</text>` : '';
  const dr = L.drills ? CC.drills.map(d => `<g transform="translate(${d.p[0]} ${d.p[1]})" data-act="ccSel" data-id="${d.id}" class="m-sel" role="button" tabindex="0" aria-label="Perforadora ${d.id}"><rect x="-7" y="-7" width="14" height="14" fill="#10161a" stroke="${STC[d.ref.estado]}" stroke-width="2"/><text x="0" y="-11" text-anchor="middle" font-size="10" fill="#fff" style="paint-order:stroke;stroke:#000;stroke-width:3px">${d.id}</text></g>`).join('') : '';
  const sh = L.shovels ? Object.keys(SHOV).map(k => { const e = H.EQ(k), p = SHOV[k].p; return `<g transform="translate(${p[0]} ${p[1]})" data-act="ccSel" data-id="${k}" class="m-sel" role="button" tabindex="0" aria-label="Pala ${k}, ${e.estado}"><circle r="15" fill="#10161a" stroke="${STC[e.estado]}" stroke-width="3"/><path d="M-7 3h10l5-6h4v9h-19z" fill="${STC[e.estado]}"/><text y="-20" text-anchor="middle" font-size="12" fill="#fff" font-weight="700" style="paint-order:stroke;stroke:#000;stroke-width:3px">${k}</text>${CC.sel === k ? '<circle r="22" fill="none" stroke="#e0793a" stroke-width="2.5"/>' : ''}</g>`; }).join('') : '';
  const tr = L.trucks ? CC.trucks.map(t => { const p = posOf(t), c = STC[t.ref.estado]; return `<g class="m-tr m-sel ${stale(t) ? 'stale' : ''}" data-mt="${t.id}" style="transform:translate(${p[0].toFixed(1)}px,${p[1].toFixed(1)}px)" data-act="ccSel" data-id="${t.id}" role="button" tabindex="0" aria-label="Camión ${t.id}, ${t.ref.estado}"><circle r="${CC.sel === t.id ? 12 : 8}" fill="#10161a" stroke="${CC.sel === t.id ? '#e0793a' : c}" stroke-width="${CC.sel === t.id ? 3 : 2.4}"/><circle r="3" fill="${c}"/>${CC.sel === t.id || t.ref.estado === 'Detenido' ? `<text y="-14" text-anchor="middle">${t.id}</text>` : ''}</g>`; }).join('') : '';
  return `<svg viewBox="0 0 1000 620" role="img" aria-label="Mapa del rajo con zonas, caminos y equipos en movimiento"><rect width="1000" height="620" fill="#0f1316"/>${terrain()}${L.zones ? zones : ''}${L.roads ? roads : ''}${shadow}${dr}${sh}${tr}
  <g transform="translate(14 600)" fill="#9aa8b2" font-size="11"><text>Plano esquemático ficticio · coordenadas de demostración</text></g></svg>`;
}
function selCard() {
  const id = CC.sel; if (!id) return `<div class="cc-card"><h5>Toca un equipo</h5><p>Camión, pala o perforadora: verás su estado, zona y la acción para clasificar la detención.</p></div>`;
  const e = H.EQ(id); const t = CC.trucks.find(x => x.id === id);
  const det = e.det ? `<p><strong style="color:#ff9d93">Detenido ${e.det.causa === 'Sin clasificar' ? '· sin clasificar' : '· ' + esc(e.det.causa)}</strong></p>` : '';
  return `<div class="cc-card"><h5>${e.id} <span class="muted" style="font-size:12px">${e.tipo}</span></h5><p><i class="dot ${scls(e.estado)}"></i> ${e.estado} · ${esc(e.zona)}</p><p>Utilización ${e.util} % · ${t ? 'va a ' + DEST[SHOV[t.sh].d].n : 'Fabricante: ' + e.fab}</p>${det}
    <a class="btn dark" href="#/equipos/${e.id}">Vista única del equipo</a>${e.estado === 'Detenido' && e.det.causa === 'Sin clasificar' ? ` <button class="btn" data-act="classify" data-id="${e.id}">Clasificar causa</button>` : ''}</div>`;
}
function linkNote() {
  const S = H.Sim;
  if (S.link === 'down') return `<div class="cc-note warn" id="cc-note"><b>Sin enlace con Antofagasta.</b> El despacho sigue funcionando desde el borde de faena (modo local · ${S.hours} h de 48 h). Lo que ocurra se sincroniza solo al volver la fibra.</div>`;
  if (S.lte === 'shadow') return `<div class="cc-note warn" id="cc-note"><b>Zona sin cobertura LTE en el fondo del rajo.</b> Los equipos de esa zona se ven atenuados y guardan cada evento en el propio equipo hasta recuperar señal.</div>`;
  return `<div class="cc-note" id="cc-note">Conectado a la nube · datos en tiempo real. Prueba “Simular nube” (abajo a la derecha) para cortar la fibra o crear una sombra de cobertura.</div>`;
}
function kpisHtml() {
  const tk = CC.trucks, op = tk.filter(t => t.ref.estado === 'Operando').length;
  return `<div class="cc-kpis"><div><small>Toneladas del turno</small><b id="k-t">${nf(CC.tons)}<em>t</em></b></div><div><small>Camiones en ciclo</small><b>${op}<em>de ${tk.length}</em></b></div><div><small>Palas operando</small><b>${Object.keys(SHOV).filter(k => H.EQ(k).estado === 'Operando').length}<em>de 5</em></b></div><div><small>Ciclo promedio</small><b>31<em>min</em></b></div><div><small>Detenidos sin clasificar</small><b>${H.EQUIPOS.filter(e => e.det && e.det.causa === 'Sin clasificar').length}<em>equipos</em></b></div></div>`;
}

/* ---------- Geotecnia ---------- */
function geoView() {
  const r = rng(5); let bands = '';
  for (let i = 0; i < 11; i++) { const y = 40 + i * 32; bands += `<path d="M0 ${y} C 120 ${y - 10 + r() * 12}, 240 ${y + 8}, 360 ${y - 4 + r() * 10} S 560 ${y + 6}, 700 ${y - 6}" fill="none" stroke="#c9ccc4" stroke-opacity=".55" stroke-width="${1 + r() * 1.6}"/><path d="M0 ${y + 14} C 150 ${y + 10}, 300 ${y + 22}, 700 ${y + 12} L700 ${y + 32} L0 ${y + 32}z" fill="#8c8e86" fill-opacity="${.12 + r() * .12}"/>`; }
  const v = (4.2 + Math.sin(Date.now() / 4000) * .6).toFixed(1);
  const prisms = [[120, 120], [260, 200], [420, 150], [520, 260], [610, 120], [190, 300]].map((p, i) => `<g transform="translate(${p[0]} ${p[1]})"><path d="M0-6l6 6-6 6-6-6z" fill="#1f2a30" stroke="#6fe0b5" stroke-width="1.6"/><text y="-9" text-anchor="middle" font-size="10" fill="#fff" style="paint-order:stroke;stroke:#000;stroke-width:3px">P${i + 1}</text></g>`).join('');
  const line = (c, k) => { const pts = Array.from({ length: 40 }, (_, i) => `${10 + i * 7.2},${60 - Math.max(0, (i - 22)) * (k) - Math.sin(i / 3) * 3 - i * .15}`).join(' '); return `<polyline points="${pts}" fill="none" stroke="${c}" stroke-width="1.8"/>`; };
  return `<div class="cc-g3"><div><div class="cc-ph"><span>Mapa de desplazamiento · radar de pared</span><span>Talud este · banco B3015</span></div>
    <svg viewBox="0 0 760 420" style="display:block;width:100%;height:auto" role="img" aria-label="Pared del rajo con zona de desplazamiento acelerado"><defs><linearGradient id="ck" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#2b6cb0"/><stop offset=".5" stop-color="#e8d34a"/><stop offset="1" stop-color="#d1291d"/></linearGradient><radialGradient id="hs"><stop offset="0" stop-color="#d1291d"/><stop offset=".5" stop-color="#e8934a" stop-opacity=".8"/><stop offset="1" stop-color="#e8d34a" stop-opacity="0"/></radialGradient></defs>
    <rect width="760" height="420" fill="#d8dad3"/>${bands}<ellipse cx="300" cy="180" rx="${50 + Math.sin(Date.now() / 3000) * 4}" ry="70" fill="url(#hs)"/>${prisms}<rect x="716" y="40" width="14" height="300" fill="url(#ck)" stroke="#333"/><text x="722" y="32" text-anchor="middle" font-size="11" fill="#222">mm</text><text x="738" y="52" font-size="10" fill="#222">8</text><text x="738" y="344" font-size="10" fill="#222">0</text></svg>
    <div class="cc-ctl"><span>Desplazamiento máx.: <b id="geo-v">${v}</b> mm/día · umbral de alerta 4,0</span><button class="cc-btn cu" data-act="ccAck">Reconocer alerta (registrar acción)</button></div></div>
    <div><div class="cc-ph"><span>Series de tiempo · prismas P1–P6</span></div>
    <svg viewBox="0 0 300 80" style="display:block;width:100%;background:#fff;border-bottom:1px solid var(--c-line)" role="img" aria-label="Desplazamiento acumulado">${line('#d1291d', .9)}${line('#2b6cb0', .35)}${line('#2f9e6a', .1)}</svg>
    <div class="cc-ph"><span>Mapa de riesgo</span></div><svg viewBox="0 0 300 150" style="display:block;width:100%" role="img" aria-label="Mapa de riesgo geotécnico"><rect width="300" height="150" fill="#1d8a3a"/><ellipse cx="120" cy="70" rx="40" ry="28" fill="#e8d34a"/><ellipse cx="120" cy="70" rx="16" ry="12" fill="#ff7aa8"/><ellipse cx="220" cy="100" rx="22" ry="14" fill="#7bd36a"/></svg>
    <div class="cc-leg"><span><i style="background:#1d8a3a"></i>Estable</span><span><i style="background:#e8d34a"></i>Vigilancia</span><span><i style="background:#ff7aa8"></i>Alerta</span></div></div></div>
    <div class="cc-note">La alerta se origina en el radar y se registra como evento: queda en la cola de sincronización aunque no haya enlace. Pasa a los incidentes de seguridad con quién actuó y cuándo.</div>`;
}

/* ---------- Pit 3D por bloques ---------- */
const PITPAL = { mat: ['#f2d32b', '#2f4fd8', '#e0449d', '#34b34a', '#34c6d6', '#e0806a', '#f4f4f0', '#1a1a1a'] };
function pit3d() {
  const NB = 9, SEG = 56, a = CC.a, r = rng(CC.seed * 7 + 3), noise = []; for (let k = 0; k < NB; k++) { noise.push([]); for (let i = 0; i < SEG; i++) noise[k].push(r()); }
  const proj = (R, th, z) => { const X = Math.cos(th + a) * R, Y = Math.sin(th + a) * R; return [380 + X, 215 + Y * .5 - z]; };
  const col = (k, i) => { const th = i / SEG; const n = noise[k][(i + k * 3) % SEG];
    if (CC.by === 'mat') return PITPAL.mat[Math.floor(((th * 4 + k * .35 + n * 1.6) % 1 + 1) % 1 * PITPAL.mat.length)];
    if (CC.by === 'cu') { const g = Math.min(1, Math.max(0, .25 + (1 - k / NB) * .15 + Math.sin(th * 9) * .25 + n * .35)); return `hsl(${210 - g * 190} 70% ${30 + g * 28}%)`; }
    const bad = (i > 20 && i < 25 && k > 2 && k < 6) || (i > 40 && i < 43 && k < 4); return bad ? '#e0382a' : `hsl(40 8% ${22 + n * 14}%)`; };
  const rim = Array.from({ length: SEG }, (_, i) => proj(345, i / SEG * Math.PI * 2, 0).map(Math.round).join(',')).join(' ');
  let out = `<defs><clipPath id="pitclip"><polygon points="${rim}"/></clipPath></defs><polygon points="${rim}" fill="#6a6a3c"/><g clip-path="url(#pitclip)">`;
  for (let k = NB - 1; k >= 0; k--) {
    const Rout = 300 - k * 26, Rin = Rout - 14, z0 = -k * 12, z1 = -(k + 1) * 12;
    const order = Array.from({ length: SEG }, (_, i) => i).sort((p, q) => Math.sin((p / SEG * 2 * Math.PI) + a) - Math.sin((q / SEG * 2 * Math.PI) + a));
    order.forEach(i => {
      const t0 = i / SEG * Math.PI * 2, t1 = (i + 1) / SEG * Math.PI * 2, c = col(k, i);
      const wall = [proj(Rin, t0, z0), proj(Rin, t1, z0), proj(Rin, t1, z1), proj(Rin, t0, z1)];
      const ber = [proj(Rin, t0, z1), proj(Rin, t1, z1), proj(Rin - 12, t1, z1), proj(Rin - 12, t0, z1)];
      const fl = k === NB - 1 ? [proj(Rin, t0, z1), proj(Rin, t1, z1), proj(0, 0, z1)] : null;
      out += `<polygon points="${wall.map(p => p.map(Math.round).join(',')).join(' ')}" fill="${c}" stroke="#000" stroke-opacity=".25" stroke-width=".5"/>`;
      out += `<polygon points="${ber.map(p => p.map(Math.round).join(',')).join(' ')}" fill="${c}" fill-opacity=".72" stroke="#000" stroke-opacity=".2" stroke-width=".5"/>`;
      if (fl) out += `<polygon points="${fl.map(p => p.map(Math.round).join(',')).join(' ')}" fill="#cfcfc8" stroke="#cfcfc8" stroke-width="1"/>`;
    });
  }
  return `<svg viewBox="0 0 760 420" style="display:block;width:100%;height:auto;background:#a9b7ff" role="img" aria-label="Modelo de bloques del rajo en perspectiva">${out}</g></svg>`;
}
function pitLeg() {
  if (CC.by === 'mat') return ['Óxido', 'Sulfuro alto', 'Sulfuro bajo', 'Mixto', 'Lastre', 'Estéril', 'Lixiviable', 'Roca dura'].map((n, i) => `<span><i style="background:${PITPAL.mat[i]}"></i>${n}</span>`).join('');
  if (CC.by === 'cu') return '<span><i style="background:hsl(210 70% 30%)"></i>Ley baja</span><span><i style="background:hsl(120 70% 44%)"></i>Media</span><span><i style="background:hsl(20 70% 58%)"></i>Ley alta de Cu</span>';
  return '<span><i style="background:#e0382a"></i>Sobre el límite de arsénico (0,25 %)</span><span><i style="background:#454540"></i>Bajo el límite</span><span>El límite es un parámetro, no una constante.</span>';
}

/* ---------- Arquitectura isométrica (equipo → borde → nube) ---------- */
const iso = (x, y, z, o) => [o[0] + (x - y) * 0.866, o[1] + (x + y) * 0.5 - z];
const P = (pts) => pts.map(p => p.map(v => v.toFixed(0)).join(',')).join(' ');
function box(o, x, y, z, w, d, h, c) { const f = (a, b, cc) => iso(x + a, y + b, z + cc, o); const top = [f(0, 0, h), f(w, 0, h), f(w, d, h), f(0, d, h)], L = [f(0, d, h), f(w, d, h), f(w, d, 0), f(0, d, 0)], R = [f(w, 0, h), f(w, d, h), f(w, d, 0), f(w, 0, 0)];
  return `<polygon points="${P(L)}" fill="${c[1]}"/><polygon points="${P(R)}" fill="${c[2]}"/><polygon points="${P(top)}" fill="${c[0]}"/>`; }
const C_Y = ['#e9b84a', '#c28f22', '#a97a1a'], C_B = ['#5fb6e6', '#3b8fc0', '#2f7aa8'], C_G = ['#58c08a', '#3a9b6a', '#2f8559'], C_D = ['#46535c', '#323d44', '#29333a'], C_W = ['#e8edf0', '#b9c3ca', '#9aa6ae'];
function isoArch() {
  const S = H.Sim, down = S.link === 'down', pipe = down ? '#6b7680' : '#4aa3df', pipe2 = down ? '#6b7680' : '#3fbf8f';
  const plat = (o, c, label) => { const f = iso(190, 190, 0, o); return `${box(o, 0, 0, 0, 190, 190, 10, c)}<text x="${f[0]}" y="${f[1] + 26}" text-anchor="middle" fill="#fff" font-size="15" font-weight="700" font-family="Barlow Semi Condensed,sans-serif" letter-spacing=".06em">${label}</text>`; };
  const O1 = [190, 255], O2 = [445, 205], O3 = [700, 95];
  const faena = plat(O1, C_Y, 'FAENA · EQUIPOS') + box(O1, 30, 30, 10, 60, 34, 22, C_D) + box(O1, 40, 35, 32, 30, 22, 16, C_Y) + box(O1, 110, 50, 10, 44, 24, 16, C_W) + box(O1, 118, 56, 26, 22, 14, 12, C_Y)
    + box(O1, 120, 130, 10, 28, 20, 30, C_D) + box(O1, 30, 120, 10, 6, 6, 60, C_W) + box(O1, 150, 20, 10, 5, 5, 54, C_W) + box(O1, 70, 130, 10, 16, 4, 20, ['#6fe0b5', '#3fbf8f', '#2f9e6a']);
  const borde = plat(O2, C_B, 'BORDE DE FAENA') + box(O2, 30, 30, 10, 20, 20, 44, C_D) + box(O2, 60, 30, 10, 20, 20, 54, C_D) + box(O2, 90, 30, 10, 20, 20, 36, C_D) + box(O2, 40, 100, 10, 60, 8, 40, C_W) + box(O2, 130, 110, 10, 34, 26, 12, C_D) + `<text x="${iso(60, 40, 76, O2)[0]}" y="${iso(60, 40, 76, O2)[1] - 6}" fill="#fff" font-size="11" text-anchor="middle">servidor local 48 h</text>`;
  const nube = plat(O3, C_G, 'NUBE · ANTOFAGASTA') + box(O3, 30, 40, 10, 50, 10, 56, C_W) + box(O3, 100, 40, 10, 40, 10, 40, C_W) + box(O3, 40, 120, 10, 22, 22, 30, C_D) + box(O3, 70, 120, 10, 22, 22, 46, C_D) + box(O3, 100, 120, 10, 22, 22, 22, C_D) + `<ellipse cx="${iso(95, 90, 90, O3)[0]}" cy="${iso(95, 90, 90, O3)[1] - 60}" rx="44" ry="22" fill="#e8edf0" fill-opacity=".92"/><ellipse cx="${iso(95, 90, 90, O3)[0] - 26}" cy="${iso(95, 90, 90, O3)[1] - 52}" rx="24" ry="16" fill="#e8edf0" fill-opacity=".92"/>`;
  const a1 = iso(190, 95, 10, O1), a2 = iso(0, 95, 10, O2), b1 = iso(190, 95, 10, O2), b2 = iso(0, 95, 10, O3);
  const pipes = `<path d="M${a1[0]} ${a1[1]} L${a2[0]} ${a2[1]}" stroke="${S.lte === 'shadow' ? '#f2b84b' : pipe2}" stroke-width="5" fill="none" class="iso-dash"/><text x="${(a1[0] + a2[0]) / 2}" y="${(a1[1] + a2[1]) / 2 + 30}" fill="#fff" font-size="11" text-anchor="middle">LTE / 5G privada</text>
    <path d="M${b1[0]} ${b1[1]} L${b2[0]} ${b2[1]}" stroke="${pipe}" stroke-width="5" fill="none" ${down ? 'stroke-dasharray="4 10"' : 'class="iso-dash"'}/><text x="${(b1[0] + b2[0]) / 2}" y="${(b1[1] + b2[1]) / 2 + 34}" fill="#fff" font-size="11" text-anchor="middle">fibra / enlace satelital</text>${down ? `<g transform="translate(${(b1[0] + b2[0]) / 2} ${(b1[1] + b2[1]) / 2})"><circle r="14" fill="#ff6b5e"/><path d="M-6-6l12 12M6-6l-12 12" stroke="#fff" stroke-width="3"/></g>` : ''}`;
  const q = S.pending();
  return `<div class="cc" style="border-radius:10px"><div class="cc-bar"><span class="cc-t">Arquitectura de tres niveles</span><span class="cc-chip ${down ? 'bad' : q > 2 ? 'warn' : ''}"><i></i>${down ? 'Enlace caído · el borde sostiene la operación' : q > 2 ? `Sincronizando ${q} eventos` : 'Todo sincronizado'}</span></div>
  <svg viewBox="0 0 900 500" style="display:block;width:100%;height:auto;background:#23272b" role="img" aria-label="Tres plataformas: faena y equipos, borde de faena con servidor local, y nube en Antofagasta"><g>${nube}${borde}${faena}${pipes}</g></svg>
  <div class="cc-note"><b>Cómo se lee:</b> el equipo guarda cada evento y lo manda al borde; el borde responde a la faena aunque no haya enlace con Antofagasta (hasta 48 h) y sube todo en orden cuando vuelve la fibra.</div></div>`;
}
H.isoArch = isoArch;

/* ---------- Ruta ---------- */
function body() {
  const t = CC.tab;
  if (t === 'desp') return `<div class="cc-main two"><div class="cc-pane"><div class="cc-ph"><span>Palas y camiones</span><span>Cada camión sale de la pala hacia su destino</span></div><div class="cc-rows" id="cc-rows">${rowsHtml()}</div><div class="cc-ph"><span>Lista de equipos</span></div><div class="cc-eq" id="cc-eq">${eqChips()}</div></div>
    <div class="cc-pane" style="border:0"><div class="cc-ph"><span>Mapa del rajo</span><span>Toca un equipo</span></div><div class="cc-map"><div class="cc-layers" role="group" aria-label="Capas del mapa">${[['roads', 'Caminos'], ['zones', 'Zonas'], ['trucks', 'Camiones'], ['shovels', 'Palas'], ['drills', 'Perforadoras']].map(([k, l]) => `<label><input type="checkbox" data-act="ccLayer" data-k="${k}" ${CC.layers[k] ? 'checked' : ''}>${l}</label>`).join('')}</div><div id="cc-svg">${mapSvg()}</div><div id="cc-card">${selCard()}</div></div></div></div>`;
  if (t === 'geo') return geoView();
  if (t === 'pit') return `${pit3d().replace('<svg', '<svg id="pit-svg"')}<div class="cc-ctl"><label>Rotar <input type="range" min="0" max="628" value="${Math.round(CC.a * 100)}" data-act="ccRot" aria-label="Rotación del modelo"></label><label>Colorear por <select data-act="ccBy" aria-label="Colorear por"><option value="mat" ${CC.by === 'mat' ? 'selected' : ''}>Tipo de material</option><option value="cu" ${CC.by === 'cu' ? 'selected' : ''}>Ley de cobre</option><option value="as" ${CC.by === 'as' ? 'selected' : ''}>Arsénico vs. límite</option></select></label><button class="cc-btn" data-act="ccSpin">Girar automático</button></div><div class="cc-leg" id="pit-leg">${pitLeg()}</div><div class="cc-note">Modelo de bloques ficticio: de aquí sale la “capa de stock” que la trazabilidad usa para reconstruir el origen de cada lote.</div>`;
  return isoArch();
}
function shell() {
  const S = H.Sim, tabs = [['desp', 'Despacho y mapa'], ['geo', 'Geotecnia'], ['pit', 'Pit 3D'], ['arq', 'Arquitectura']];
  return `<div class="cc" id="cc-root"><div class="cc-bar"><span class="cc-t">Centro Integrado de Operaciones</span><span class="cc-chip ${S.link === 'down' ? 'warn' : ''}" id="cc-lk"><i></i>${S.link === 'down' ? 'Modo local (borde de faena)' : 'Nube conectada'}</span><div class="cc-tabs" role="tablist" aria-label="Vistas del centro de control">${tabs.map(([k, l]) => `<button role="tab" aria-selected="${CC.tab === k}" data-act="ccTab" data-k="${k}">${l}</button>`).join('')}</div></div>${CC.tab === 'desp' ? kpisHtml() : ''}<div id="cc-body">${body()}</div>${CC.tab === 'desp' ? linkNote() : ''}</div>`;
}
const redraw = () => { const r = $('#cc-root'); if (r) r.outerHTML = shell(); };

H.route('/control', {
  title: 'Centro de control', auth: true, item: 'control', crumbs: () => [['Inicio', '#/inicio'], ['Centro de control', '#']],
  render: () => `${H.pageH('Centro de control', 'Una sola consola para despachar, ver el rajo y vigilar los taludes. Hoy esto exige abrir cuatro sistemas y una radio.', '')}<div class="mt2">${shell()}</div>`,
  mount: () => {
    clearInterval(CC.timer);
    CC.timer = setInterval(() => {
      if (!$('#cc-root')) { clearInterval(CC.timer); return; }
      if (CC.tab === 'desp') {
        CC.step();
        CC.trucks.forEach(t => { const g = $(`[data-mt="${t.id}"]`), p = posOf(t); if (g) { g.style.transform = `translate(${p[0].toFixed(1)}px,${p[1].toFixed(1)}px)`; g.classList.toggle('stale', stale(t)); } const b = $(`[data-tk="${t.id}"]`); if (b) { b.style.left = (t.t * 100).toFixed(1) + '%'; b.classList.toggle('stale', stale(t)); } });
        const k = $('#k-t'); if (k) k.firstChild.nodeValue = nf(CC.tons);
      } else if (CC.tab === 'pit' && CC.spin) { CC.a = (CC.a + .03) % 6.283; const s = $('#pit-svg'); if (s) { s.outerHTML = pit3d().replace('<svg', '<svg id="pit-svg"'); } }
      else if (CC.tab === 'geo') { const v = $('#geo-v'); if (v) v.textContent = (4.2 + Math.sin(Date.now() / 4000) * .6).toFixed(1).replace('.', ','); }
    }, 450);
    H.Sim.on(() => { if (!$('#cc-root')) return; const n = $('#cc-note'); if (n) n.outerHTML = linkNote(); const l = $('#cc-lk'); if (l) { l.className = 'cc-chip' + (H.Sim.link === 'down' ? ' warn' : ''); l.innerHTML = `<i></i>${H.Sim.link === 'down' ? 'Modo local (borde de faena)' : 'Nube conectada'}`; } if (CC.tab === 'arq') { const b = $('#cc-body'); if (b) b.innerHTML = isoArch(); } });
  }
});

H.A.ccTab = (el) => { CC.tab = el.dataset.k; CC.spin = false; redraw(); };
H.A.ccSel = (el) => { CC.sel = el.dataset.id; const rows = $('#cc-rows'); if (!rows) return; $$('.cc-row').forEach(r => r.classList.toggle('sel', r.dataset.sh === CC.sel)); $$('.cc-tk').forEach(b => b.classList.toggle('sel', b.dataset.id === CC.sel)); $$('#cc-eq button').forEach(b => b.classList.toggle('sel', b.dataset.id === CC.sel)); $('#cc-svg').innerHTML = mapSvg(); $('#cc-card').innerHTML = selCard(); };
H.A.ccLayer = (el) => { CC.layers[el.dataset.k] = el.checked; $('#cc-svg').innerHTML = mapSvg(); };
H.A.ccRot = (el) => { CC.a = el.value / 100; CC.spin = false; const s = $('#pit-svg'); if (s) s.outerHTML = pit3d().replace('<svg', '<svg id="pit-svg"'); };
H.A.ccBy = (el) => { CC.by = el.value; const s = $('#pit-svg'); if (s) s.outerHTML = pit3d().replace('<svg', '<svg id="pit-svg"'); $('#pit-leg').innerHTML = pitLeg(); };
H.A.ccSpin = () => { CC.spin = !CC.spin; };
H.A.ccAck = () => { H.Sim.capture('Alerta geotécnica', 'Alerta de talud este reconocida (P2, 4,5 mm/día)', 'Centro de control'); H.toast('Alerta reconocida y registrada. Queda en la cola de sincronización y en la auditoría.', 'ok'); };
document.addEventListener('change', e => { const el = e.target.closest && e.target.closest('[data-act="ccLayer"],[data-act="ccBy"]'); if (el) H.A[el.dataset.act](el, e); });
document.addEventListener('input', e => { const el = e.target.closest && e.target.closest('[data-act="ccRot"]'); if (el) H.A.ccRot(el, e); });
