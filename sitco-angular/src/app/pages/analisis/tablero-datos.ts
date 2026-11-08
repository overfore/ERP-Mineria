/* Datos de ejemplo del tablero analítico, según el período elegido. */
import { rng } from '../../core/util';

export const PERIODOS: Record<number, [string, number, string]> = { 7: ['Últimos 7 días', 7, 'd'], 30: ['Últimos 30 días', 10, '3 d'], 90: ['Últimos 90 días', 12, 'sem'], 365: ['Último año', 12, 'mes'] };
export const CATS = ['Todas', 'Mina', 'Planta', 'Seguridad', 'Ambiental', 'Comercial'];

function etiquetas(per: number) {
  const n = PERIODOS[per][1];
  return per === 7 ? ['L', 'M', 'X', 'J', 'V', 'S', 'D']
    : per === 30 ? Array.from({ length: n }, (_, i) => `${i * 3 + 1}-${i * 3 + 3}`)
      : per === 90 ? Array.from({ length: n }, (_, i) => 'S' + (i + 1))
        : ['Nov', 'Dic', 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct'];
}

export function datosPeriodo(per: number) {
  const r = rng(per * 17 + 3), n = PERIODOS[per][1], L = etiquetas(per);
  const ramp = (a: number, b: number, j = 2) => Array.from({ length: n }, (_, i) => +(a + (b - a) * i / (n - 1) + (r() - .5) * j).toFixed(1));
  return {
    L, util: ramp(71, 74, 2.4), plan: ramp(72, 95, 3), det: [38, 24, 18, 14, 9, 7, 6, 4].map(v => Math.round(v * (per / 30 + .4))), sinc: ramp(23, 8, 2),
    stack: { a: ramp(52, 56, 3).map(Math.round), b: ramp(18, 19, 2).map(Math.round), c: ramp(10, 8, 2).map(Math.round) },
    heat: Array.from({ length: 5 }, (_, d) => Array.from({ length: 12 }, (_, h) => +(r() * 8 + (h > 8 || h < 2 ? 10 : 2) + (d === 2 ? 3 : 0)).toFixed(1))),
    sc: Array.from({ length: 22 }, () => { const x = 0.45 + r() * 0.2; return { x, y: 80 + (x - .45) * 55 + (r() - .5) * 6, l: 'Muestra' }; }),
  };
}

export const INDICADORES = [
  { k: 'utilizacion', cat: 'Mina', l: 'Utilización efectiva de flota', v: '74', u: '%', d: '▲ línea base 71 % · meta interna 80 %', c: 'good' as const },
  { k: 'demoras', cat: 'Mina', l: 'Demoras sin clasificar', v: '8', u: '%', d: '▼ línea base 23 % · meta interna < 5 %', c: 'good' as const },
  { k: 'conciliacion', cat: 'Planta', l: 'Diferencia de conciliación', v: '2,6', u: '%', d: '▼ línea base 3,1–6,8 %', c: 'good' as const },
  { k: 'plan', cat: 'Mina', l: 'Cumplimiento del plan (vigente)', v: '95', u: '%', d: 'Disponible al inicio del turno', c: 'good' as const },
  { k: 'detenciones', cat: 'Planta', l: 'Detención no programada de planta', v: '150', u: 'h/año', d: '▼ línea base 214 h · meta interna < 120 h', c: 'good' as const },
  { k: 'acreditacion', cat: 'Seguridad', l: 'Acreditación promedio', v: '38', u: 'h', d: '▼ línea base 9 días · meta < 48 h', c: 'good' as const },
];

/** Detalle de cada indicador: nombre, unidad, línea base 2025 y meta. */
export const DETALLE: Record<string, [string, string, number, number]> = {
  utilizacion: ['Utilización efectiva de flota', '%', 71, 80], demoras: ['Demoras sin clasificar', '%', 23, 5], conciliacion: ['Diferencia de conciliación', '%', 4.7, 2],
  plan: ['Cumplimiento del plan', '%', 72, 90], detenciones: ['Detenciones por causa', 'h', 0, 0], acreditacion: ['Tiempo de acreditación', 'h', 216, 48],
};
