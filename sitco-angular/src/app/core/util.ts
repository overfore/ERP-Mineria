/* Utilidades de formato, fechas, números al azar con semilla y validación de RUT. */

export const nf = (n: number) => Number(n).toLocaleString('es-CL');
export const nd = (n: number, d = 1) =>
  Number(n).toLocaleString('es-CL', { minimumFractionDigits: d, maximumFractionDigits: d });
export const pad = (n: number) => String(n).padStart(2, '0');

/** Fecha relativa a hoy: días de diferencia y hora del día. */
export const dOff = (days = 0, h = 0, m = 0) => {
  const d = new Date();
  d.setDate(d.getDate() + days);
  d.setHours(h, m, 0, 0);
  return d;
};
/** Fecha y hora de hace `min` minutos. */
export const hace = (min: number) => new Date(Date.now() - min * 60000);

export const fd = (d: Date) => `${pad(d.getDate())}-${pad(d.getMonth() + 1)}-${d.getFullYear()}`;
export const ft = (d: Date) => `${pad(d.getHours())}:${pad(d.getMinutes())}`;
export const fdt = (d: Date) => `${fd(d)} ${ft(d)}`;

/** Generador de números pseudoaleatorios con semilla: los datos de ejemplo salen siempre iguales. */
export function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const uid = (p = 'ID') => p + '-' + Math.random().toString(36).slice(2, 7).toUpperCase();

export function rutDv(n: number | string) {
  let s = 0, f = 2;
  String(n).split('').reverse().forEach(c => { s += +c * f; f = f === 7 ? 2 : f + 1; });
  const d = 11 - (s % 11);
  return d === 11 ? '0' : d === 10 ? 'K' : String(d);
}

export function rutOk(r: string) {
  const m = String(r).replace(/[.\s]/g, '').toUpperCase().match(/^(\d{7,8})-?([\dK])$/);
  return !!m && rutDv(m[1]) === m[2];
}

/** Reglas de validación en tiempo real (RT-25.03). Devuelve el mensaje de error o ''. */
export function validar(valor: string | boolean, reglas: string): string {
  const v = typeof valor === 'string' ? valor.trim() : valor;
  for (const regla of reglas.split('|').filter(Boolean)) {
    const [n, a] = regla.split(':');
    if (n === 'required' && (v === '' || v === false)) return 'Este campo es obligatorio.';
    if (v === '' || v === false || typeof v !== 'string') continue;
    if (n === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return 'Ingresa un correo válido (ej. nombre@empresa.cl).';
    if (n === 'rut' && !rutOk(v)) return 'RUT inválido: revisa el dígito verificador (ej. 76.123.456-K).';
    if (n === 'tel' && !/^\+?[0-9 ]{8,14}$/.test(v)) return 'Ingresa un teléfono válido (8 a 12 dígitos).';
    if (n === 'min' && v.length < +a) return `Mínimo ${a} caracteres.`;
    if (n === 'code6' && !/^\d{6}$/.test(v)) return 'El código tiene 6 dígitos.';
    if (n === 'pwd' && !(v.length >= 10 && /[A-Z]/.test(v) && /\d/.test(v) && /[^A-Za-z0-9]/.test(v)))
      return 'Mínimo 10 caracteres con mayúscula, número y símbolo.';
    if (n === 'gt0' && !(+v > 0)) return 'Ingresa un valor mayor que 0.';
    if (n === 'future' && new Date(v) < new Date(new Date().toDateString())) return 'La fecha no puede ser anterior a hoy.';
  }
  return '';
}

/** Fuerza de la contraseña de 0 a 4. */
export function fuerza(v: string) {
  let s = 0;
  if (v.length >= 10) s++;
  if (/[A-Z]/.test(v) && /[a-z]/.test(v)) s++;
  if (/\d/.test(v)) s++;
  if (/[^A-Za-z0-9]/.test(v)) s++;
  return s;
}

/** Descarga un archivo CSV separado por punto y coma (Excel en español). */
export function csv(nombre: string, cabecera: (string | number)[], filas: (string | number | null | undefined)[][]) {
  const q = (v: unknown) => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const blob = new Blob(['﻿' + [cabecera, ...filas].map(r => r.map(q).join(';')).join('\n')], { type: 'text/csv;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = nombre;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
}

export const esc = (s: unknown) =>
  String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

/** Tiempo transcurrido desde una fecha: «34 min» o «2 h 10 min». */
export const desde = (d: Date) => {
  const m = Math.max(0, Math.round((Date.now() - d.getTime()) / 60000));
  return m >= 60 ? `${Math.floor(m / 60)} h ${m % 60} min` : `${m} min`;
};
/** Fecha ISO (aaaa-mm-dd) a n días de hoy, para campos de fecha. */
export const isoDia = (n: number) => { const d = dOff(n); return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; };
