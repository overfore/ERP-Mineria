/* =====================================================================
   Centro de control: geometría del rajo, flota animada, geotecnia y
   modelo de bloques. Todo es ficticio y se calcula en el navegador.
   ===================================================================== */
import { LIMITES, EQ, EQUIPOS, Equipo } from '../../core/data';
import { nd, rng } from '../../core/util';

type Pt = [number, number];
export const STC: Record<string, string> = { Operando: '#3fbf8f', Detenido: '#ff6b5e', Mantención: '#f2b84b', 'Sin señal': '#7b8791' };

/* ---------- Geometría del rajo (viewBox 1000×620) ---------- */
export const PITC: Pt = [500, 340];
export const DEST: Record<string, { n: string; p: Pt }> = { CH: { n: 'Chancador primario', p: [170, 150] }, SA: { n: 'Stock A (lixiviación)', p: [800, 170] }, BS: { n: 'Botadero sur', p: [790, 545] } };
export const PALAS: Record<string, { p: Pt; d: string; mat: string; path: Pt[] }> = {
  'PA-01': { p: [430, 300], d: 'CH', mat: 'Mineral sulfuro', path: [[430, 300], [380, 250], [300, 205], [220, 165], [170, 150]] },
  'PA-02': { p: [560, 362], d: 'BS', mat: 'Estéril', path: [[560, 362], [625, 435], [700, 500], [790, 545]] },
  'PA-03': { p: [500, 412], d: 'CH', mat: 'Mineral sulfuro', path: [[500, 412], [452, 345], [380, 275], [290, 212], [170, 150]] },
  'PA-04': { p: [392, 382], d: 'SA', mat: 'Mineral óxido', path: [[392, 382], [470, 332], [560, 282], [680, 222], [800, 170]] },
  'PA-05': { p: [612, 302], d: 'SA', mat: 'Mineral óxido', path: [[612, 302], [680, 252], [742, 205], [800, 170]] },
};
export const PALA_IDS = Object.keys(PALAS);
export const ZONAS = [
  { n: 'Botadero norte', c: '#2f9e6a', p: [[60, 40], [250, 30], [300, 90], [210, 120], [70, 110]] as Pt[] },
  { n: 'Chancador', c: '#3a6fb5', p: [[130, 125], [215, 125], [215, 180], [130, 180]] as Pt[] },
  { n: 'Stock A', c: '#3a6fb5', p: [[745, 135], [850, 135], [850, 205], [745, 205]] as Pt[] },
  { n: 'Botadero sur', c: '#b54a3a', p: [[735, 505], [920, 495], [940, 590], [740, 590]] as Pt[] },
  { n: 'Taller', c: '#8a949c', p: [[880, 60], [980, 60], [980, 160], [880, 160]] as Pt[] },
].map(z => ({ ...z, pts: z.p.map(p => p.join(',')).join(' '), cx: z.p.reduce((a, p) => a + p[0], 0) / z.p.length, cy: z.p.reduce((a, p) => a + p[1], 0) / z.p.length }));
export const CAMINOS = PALA_IDS.map(k => ({ k, pts: PALAS[k].path.map(p => p.join(',')).join(' ') }));

const largo = (P: Pt[]) => { let L = 0; for (let i = 1; i < P.length; i++) L += Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1]); return L; };
const en = (P: Pt[], t: number): Pt => {
  let d = Math.max(0, Math.min(1, t)) * largo(P);
  for (let i = 1; i < P.length; i++) {
    const s = Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1]);
    if (d <= s) { const k = s ? d / s : 0; return [P[i - 1][0] + (P[i][0] - P[i - 1][0]) * k, P[i - 1][1] + (P[i][1] - P[i - 1][1]) * k]; }
    d -= s;
  }
  return P[P.length - 1];
};

/* ---------- Flota (se conserva al cambiar de pantalla) ---------- */
export interface Camion { id: string; sh: string; t: number; dir: number; v: number; ref: Equipo }
const rr = rng(2026);
export const CAMIONES: Camion[] = EQUIPOS.filter(e => e.id.startsWith('CF')).map((e, i) => ({ id: e.id, sh: PALA_IDS[i % PALA_IDS.length], t: rr(), dir: rr() < .5 ? 1 : -1, v: .018 + rr() * .018, ref: e }));
export const PERFORADORAS = EQUIPOS.filter(e => e.id.startsWith('PF')).map((e, i) => ({ id: e.id, p: [330 + (i % 5) * 70 + (i > 4 ? 25 : 0), 450 + Math.floor(i / 5) * 55] as Pt, ref: e }));
export const turno = { tons: 18420 };

export const posicion = (t: Camion): Pt => t.ref.estado === 'Mantención'
  ? [905 + (CAMIONES.indexOf(t) % 4) * 18, 95 + (CAMIONES.indexOf(t) % 3) * 16]
  : en(PALAS[t.sh].path, t.t);
export const enSombra = (p: Pt) => Math.hypot(p[0] - PITC[0], (p[1] - PITC[1]) * 1.2) < 125;

/** Avanza cada camión por su camino; los que esperan una pala detenida hacen cola. */
export function avanzar() {
  CAMIONES.forEach(t => {
    if (t.ref.estado !== 'Operando') return;
    const pala = EQ(t.sh);
    if (pala && pala.estado === 'Detenido' && t.t < .06 && t.dir === -1) return;
    t.t += t.dir * t.v * .55;
    if (t.t >= 1) { t.t = 1; t.dir = -1; turno.tons += 240; }
    if (t.t <= 0) { t.t = 0; t.dir = 1; }
  });
}

/* ---------- Terreno (curvas de nivel del rajo) ---------- */
function terreno() {
  const r = rng(11);
  let out = '';
  for (let k = 0; k < 15; k++) {
    const R = 310 - k * 19, pts: Pt[] = [];
    for (let a = 0; a < 40; a++) { const th = a / 40 * Math.PI * 2, j = 1 + (r() - .5) * .11; pts.push([PITC[0] + Math.cos(th) * R * 1.38 * j, PITC[1] + Math.sin(th) * R * .98 * j]); }
    out += `<polygon points="${pts.map(p => p.map(Math.round).join(',')).join(' ')}" fill="hsl(${k < 3 ? 70 : 38} ${k < 3 ? 8 : 10}% ${Math.max(7, 30 - k * 1.7)}%)" stroke="hsl(40 8% ${40 + k * 2.2}%)" stroke-width=".7" stroke-opacity=".5"/>`;
  }
  return out;
}
export const TERRENO = terreno();

/* ---------- Geotecnia: pared del rajo con radar y prismas ---------- */
const rg = rng(5);
let bandas = '';
for (let i = 0; i < 11; i++) {
  const y = 40 + i * 32;
  bandas += `<path d="M0 ${y} C 120 ${y - 10 + rg() * 12}, 240 ${y + 8}, 360 ${y - 4 + rg() * 10} S 560 ${y + 6}, 700 ${y - 6}" fill="none" stroke="#c9ccc4" stroke-opacity=".55" stroke-width="${1 + rg() * 1.6}"/><path d="M0 ${y + 14} C 150 ${y + 10}, 300 ${y + 22}, 700 ${y + 12} L700 ${y + 32} L0 ${y + 32}z" fill="#8c8e86" fill-opacity="${.12 + rg() * .12}"/>`;
}
const PRISMAS = [[120, 120], [260, 200], [420, 150], [520, 260], [610, 120], [190, 300]].map((p, i) => `<g transform="translate(${p[0]} ${p[1]})"><path d="M0-6l6 6-6 6-6-6z" fill="#1f2a30" stroke="#6fe0b5" stroke-width="1.6"/><text y="-9" text-anchor="middle" font-size="10" fill="#fff" style="paint-order:stroke;stroke:#000;stroke-width:3px">P${i + 1}</text></g>`).join('');
export const desplazamiento = () => 4.2 + Math.sin(Date.now() / 4000) * .6;
export function paredGeotecnia() {
  return `<svg viewBox="0 0 760 420" style="display:block;width:100%;height:auto" role="img" aria-label="Pared del rajo con zona de desplazamiento acelerado"><defs><linearGradient id="ck" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#2b6cb0"/><stop offset=".5" stop-color="#e8d34a"/><stop offset="1" stop-color="#d1291d"/></linearGradient><radialGradient id="hs"><stop offset="0" stop-color="#d1291d"/><stop offset=".5" stop-color="#e8934a" stop-opacity=".8"/><stop offset="1" stop-color="#e8d34a" stop-opacity="0"/></radialGradient></defs>
    <rect width="760" height="420" fill="#d8dad3"/>${bandas}<ellipse cx="300" cy="180" rx="${50 + Math.sin(Date.now() / 3000) * 4}" ry="70" fill="url(#hs)"/>${PRISMAS}<rect x="716" y="40" width="14" height="300" fill="url(#ck)" stroke="#333"/><text x="722" y="32" text-anchor="middle" font-size="11" fill="#222">mm</text><text x="738" y="52" font-size="10" fill="#222">8</text><text x="738" y="344" font-size="10" fill="#222">0</text></svg>`;
}
const serie = (c: string, k: number) => `<polyline points="${Array.from({ length: 40 }, (_, i) => `${10 + i * 7.2},${60 - Math.max(0, i - 22) * k - Math.sin(i / 3) * 3 - i * .15}`).join(' ')}" fill="none" stroke="${c}" stroke-width="1.8"/>`;
export const SERIES_PRISMAS = `<svg viewBox="0 0 300 80" style="display:block;width:100%;background:#fff" role="img" aria-label="Desplazamiento acumulado">${serie('#d1291d', .9)}${serie('#2b6cb0', .35)}${serie('#2f9e6a', .1)}</svg>`;
export const MAPA_RIESGO = `<svg viewBox="0 0 300 150" style="display:block;width:100%" role="img" aria-label="Mapa de riesgo geotécnico"><rect width="300" height="150" fill="#1d8a3a"/><ellipse cx="120" cy="70" rx="40" ry="28" fill="#e8d34a"/><ellipse cx="120" cy="70" rx="16" ry="12" fill="#ff7aa8"/><ellipse cx="220" cy="100" rx="22" ry="14" fill="#7bd36a"/></svg>`;

/* ---------- Pit 3D por bloques ---------- */
const MAT = ['#f2d32b', '#2f4fd8', '#e0449d', '#34b34a', '#34c6d6', '#e0806a', '#f4f4f0', '#1a1a1a'];
export function pit3d(a: number, por: string, seed = 1) {
  const NB = 9, SEG = 56, r = rng(seed * 7 + 3), ruido: number[][] = [];
  for (let k = 0; k < NB; k++) { ruido.push([]); for (let i = 0; i < SEG; i++) ruido[k].push(r()); }
  const proj = (R: number, th: number, z: number): Pt => [380 + Math.cos(th + a) * R, 215 + Math.sin(th + a) * R * .5 - z];
  const col = (k: number, i: number) => {
    const th = i / SEG, n = ruido[k][(i + k * 3) % SEG];
    if (por === 'mat') return MAT[Math.floor(((th * 4 + k * .35 + n * 1.6) % 1 + 1) % 1 * MAT.length)];
    if (por === 'cu') { const g = Math.min(1, Math.max(0, .25 + (1 - k / NB) * .15 + Math.sin(th * 9) * .25 + n * .35)); return `hsl(${210 - g * 190} 70% ${30 + g * 28}%)`; }
    const malo = (i > 20 && i < 25 && k > 2 && k < 6) || (i > 40 && i < 43 && k < 4);
    return malo ? '#e0382a' : `hsl(40 8% ${22 + n * 14}%)`;
  };
  const pts = (l: Pt[]) => l.map(p => p.map(Math.round).join(',')).join(' ');
  const borde = pts(Array.from({ length: SEG }, (_, i) => proj(345, i / SEG * Math.PI * 2, 0)));
  let out = `<defs><clipPath id="pitclip"><polygon points="${borde}"/></clipPath></defs><polygon points="${borde}" fill="#6a6a3c"/><g clip-path="url(#pitclip)">`;
  for (let k = NB - 1; k >= 0; k--) {
    const Rin = 300 - k * 26 - 14, z0 = -k * 12, z1 = -(k + 1) * 12;
    const orden = Array.from({ length: SEG }, (_, i) => i).sort((p, q) => Math.sin((p / SEG * 2 * Math.PI) + a) - Math.sin((q / SEG * 2 * Math.PI) + a));
    orden.forEach(i => {
      const t0 = i / SEG * Math.PI * 2, t1 = (i + 1) / SEG * Math.PI * 2, c = col(k, i);
      out += `<polygon points="${pts([proj(Rin, t0, z0), proj(Rin, t1, z0), proj(Rin, t1, z1), proj(Rin, t0, z1)])}" fill="${c}" stroke="#000" stroke-opacity=".25" stroke-width=".5"/>`;
      out += `<polygon points="${pts([proj(Rin, t0, z1), proj(Rin, t1, z1), proj(Rin - 12, t1, z1), proj(Rin - 12, t0, z1)])}" fill="${c}" fill-opacity=".72" stroke="#000" stroke-opacity=".2" stroke-width=".5"/>`;
      if (k === NB - 1) out += `<polygon points="${pts([proj(Rin, t0, z1), proj(Rin, t1, z1), proj(0, 0, z1)])}" fill="#cfcfc8" stroke="#cfcfc8" stroke-width="1"/>`;
    });
  }
  return `<svg viewBox="0 0 760 420" style="display:block;width:100%;height:auto;background:#a9b7ff" role="img" aria-label="Modelo de bloques del rajo en perspectiva">${out}</g></svg>`;
}
export function leyendaPit(por: string): [string, string][] {
  if (por === 'mat') return ['Óxido', 'Sulfuro alto', 'Sulfuro bajo', 'Mixto', 'Lastre', 'Estéril', 'Lixiviable', 'Roca dura'].map((n, i) => [n, MAT[i]]);
  if (por === 'cu') return [['Ley baja', 'hsl(210 70% 30%)'], ['Media', 'hsl(120 70% 44%)'], ['Ley alta de Cu', 'hsl(20 70% 58%)']];
  return [[`Sobre el límite de arsénico (${nd(LIMITES.as, 2)} %)`, '#e0382a'], ['Bajo el límite', '#454540'], ['El límite es un parámetro, no una constante.', '']];
}
