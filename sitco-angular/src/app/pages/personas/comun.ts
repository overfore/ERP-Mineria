/* Ayudas compartidas por las pantallas de personas y cumplimiento. */
import { TRAB } from '../../core/data';

export const diasTxt = (d: number) => (d < 0 ? `Vencido hace ${-d} d` : d === 0 ? 'Vence hoy' : `Vence en ${d} d`);
export const diasTipo = (d: number) => (d < 0 ? 'err' : d <= 30 ? 'warn' : 'ok');
/** La empresa contratista solo ve a su propia gente. */
export const EMPRESA_DEMO = 'Transportes Salar Grande Ltda.';
export const trabajadoresDe = (role?: string) => (role === 'contratista' ? TRAB.filter(t => t.empresa === EMPRESA_DEMO) : TRAB);
export const cnt = <T>(a: T[], f: (x: T) => boolean) => a.filter(f).length;
