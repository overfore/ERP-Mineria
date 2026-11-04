'use strict';
/* =====================================================================
   sim.js — Simulación de conectividad: dispositivo → borde de faena → nube
   (sin servicios reales; solo para demostrar el comportamiento esperado:
   la operación sigue y los datos se sincronizan solos, criterio 13).
   ===================================================================== */
const Sim = H.Sim = {
  link: 'ok',            // fibra faena–Antofagasta: 'ok' | 'down'
  lte: 'ok',             // cobertura LTE del rajo: 'ok' | 'shadow'
  hours: 0,              // horas simuladas de corte
  queue: [],             // eventos recientes
  total: 0, syncedAtCut: 0, resolved: 0, lastSync: new Date(),
  log: [], listeners: [], seq: 1,
  on(fn) { this.listeners.push(fn); },
  emit() { this.listeners.forEach(f => { try { f(this); } catch (e) { console.error(e); } }); },
  pending() { return this.queue.filter(e => e.tier < 2).length + (this.bulk || 0); },
  onDevice() { return this.queue.filter(e => e.tier === 0).length; },
  onEdge() { return this.queue.filter(e => e.tier === 1).length + (this.bulk || 0); },
  mode() { return this.link === 'down' ? 'down' : (this.pending() > 2 ? 'sync' : 'ok'); },
  say(t, k = 'info') { this.log.unshift({ t, k, f: new Date() }); this.log = this.log.slice(0, 40); },
  capture(type, label, src = 'Terreno') {
    const e = { id: 'EV-' + String(this.seq++).padStart(5, '0'), type, label, src, ts: new Date(), tier: 0 };
    this.queue.unshift(e); this.queue = this.queue.slice(0, 80); this.total++;
    if (this.lte === 'shadow') this.say(`${e.id} guardado en el equipo (zona sin cobertura LTE)`, 'warn');
    this.emit(); return e;
  },
  setLink(down) {
    if (down && this.link === 'down') return; if (!down && this.link === 'ok') return;
    this.link = down ? 'down' : 'ok';
    if (down) { this.hours = 0; this.syncedAtCut = this.total; this.say('Corte de fibra detectado. El borde de faena asume el servicio (modo local).', 'err'); H.toast('<strong>Corte de fibra.</strong> La operación sigue en modo local: nada se detiene.', 'warn', 6000); }
    else { this.say(`Enlace restablecido tras ${nd(this.hours, 0)} h simuladas. Sincronizando ${this.pending()} eventos…`, 'ok'); H.toast('<strong>Enlace restablecido.</strong> Sincronizando automáticamente…', 'info'); }
    this.emit();
  },
  setLte(shadow) { this.lte = shadow ? 'shadow' : 'ok'; this.say(shadow ? 'El equipo entró a una zona de sombra (fondo del rajo).' : 'El equipo recuperó cobertura LTE y vuelca su cola al borde.', shadow ? 'warn' : 'ok'); this.emit(); },
  advance(h) {
    if (this.link !== 'down') { H.toast('Primero simula un corte de fibra para avanzar el reloj.', 'info'); return; }
    this.hours += h; const n = Math.min(520, Math.round(h * 26)); const tier = this.lte === 'shadow' ? 0 : 1;
    this.bulk = (this.bulk || 0) + n; this.total += n;
    this.say(`+${h} h sin enlace: se registraron ${nf(n)} eventos localmente (despacho, cambios de material, incidentes, inspecciones).`, this.hours > 48 ? 'err' : 'warn');
    if (this.hours > 48) H.toast('Se superaron las 48 h garantizadas: se activa el protocolo de contingencia.', 'err', 6000);
    this.emit();
  },
  reset() { this.link = 'ok'; this.lte = 'ok'; this.hours = 0; this.bulk = 0; this.queue.forEach(e => e.tier = 2); this.emit(); },
  tick() {
    let moved = 0; const fast = Math.max(4, Math.ceil(this.pending() / 14));
    this.queue.slice().reverse().forEach(e => {
      if (moved >= fast) return;
      if (e.tier === 0 && this.lte === 'ok') { e.tier = 1; moved++; }
      else if (e.tier === 1 && this.link === 'ok') { e.tier = 2; moved++; }
    });
    if (this.bulk && this.link === 'ok' && this.lte === 'ok') { const m = Math.min(this.bulk, Math.max(20, Math.ceil(this.bulk / 8))); this.bulk -= m; moved += m; if (!this.bulk) this.finish(); }
    if (moved) { this.lastSync = new Date(); if (!this.pending() && this.link === 'ok') this.finish(); this.emit(); }
  },
  finish() {
    if (this.hours > 0 || this.syncedAtCut) {
      const n = this.total - this.syncedAtCut; this.resolved = this.hours > 6 ? 1 : 0;
      this.say(`Sincronización completa: ${nf(n)} eventos en orden, ${this.resolved} conflicto de versión del plan resuelto por regla (gana la marca de tiempo del borde), 0 intervenciones manuales. Integridad verificada por hash.`, 'ok');
      H.toast(`<strong>Sincronización completa.</strong> ${nf(n)} eventos, 0 intervenciones manuales.`, 'ok', 6500);
      this.hours = 0; this.syncedAtCut = 0;
    }
  },
  nodes() {
    const d = this.link === 'down';
    return [
      { id: 'device', n: 'Equipo en terreno', s: this.lte === 'shadow' ? 'warn' : 'ok', t: this.lte === 'shadow' ? 'Sin cobertura · guarda localmente' : 'Conectado al borde por LTE privada' },
      { id: 'edge', n: 'Borde de faena (sala de servidores)', s: this.hours > 48 ? 'warn' : 'ok', t: d ? 'Opera en modo local · autonomía ' + nd(this.hours, 0) + ' de 48 h' : 'Operando · réplica hacia la nube' },
      { id: 'link', n: 'Fibra faena–Antofagasta', s: d ? 'err' : 'ok', t: d ? 'Corte · respaldo satelital solo voz y correo' : 'Enlace activo' },
      { id: 'cloud', n: 'Nube corporativa (Santiago)', s: d ? 'warn' : 'ok', t: d ? 'Sin recibir datos · retiene lo último sincronizado' : 'Recibiendo y consolidando' },
      { id: 'cio', n: 'Centro Integrado de Operaciones', s: d ? 'warn' : 'ok', t: d ? 'Datos de la faena congelados · telefonía activa' : 'Vista en vivo de la operación' }
    ];
  }
};
setInterval(() => Sim.tick(), 700);

/* ---- Panel flotante de simulación ---- */
H.simPanel = () => {
  const S = Sim, d = S.link === 'down', pct = Math.min(100, S.hours / 48 * 100);
  return `<h3 style="font-size:18px">Simulador de conectividad</h3><p class="small muted">Herramienta de demostración para evaluadores. Aquí no hay servicios reales: se simula el comportamiento esperado.</p>
  <label class="switch"><input type="checkbox" data-act="simLink" ${d ? 'checked' : ''}><span class="tr"></span><span>Cortar fibra faena–Antofagasta</span></label>
  <label class="switch"><input type="checkbox" data-act="simLte" ${S.lte === 'shadow' ? 'checked' : ''}><span class="tr"></span><span>Equipo en zona sin cobertura (fondo del rajo)</span></label>
  <div class="mt1"><div class="row between small"><strong>Autonomía local usada</strong><span>${nd(S.hours, 0)} h de 48 h</span></div><div class="bar ${S.hours > 48 ? 'err' : S.hours > 36 ? 'warn' : ''}" role="progressbar" aria-valuemin="0" aria-valuemax="48" aria-valuenow="${Math.round(S.hours)}"><i style="width:${pct}%"></i></div></div>
  <div class="row mt1"><button class="btn sm sec" data-act="simAdv" data-h="6" ${d ? '' : 'disabled'}>+6 h</button><button class="btn sm sec" data-act="simAdv" data-h="20" ${d ? '' : 'disabled'}>+20 h (corte más largo)</button><button class="btn sm sec" data-act="simAdv" data-h="48" ${d ? '' : 'disabled'}>+48 h</button></div>
  <div class="grid g3 mt2" style="gap:8px"><div class="card flat" style="padding:8px 10px"><div class="xs muted">En equipo</div><strong class="mono">${nf(S.onDevice())}</strong></div><div class="card flat" style="padding:8px 10px"><div class="xs muted">En borde</div><strong class="mono">${nf(S.onEdge())}</strong></div><div class="card flat" style="padding:8px 10px"><div class="xs muted">Sincronizados</div><strong class="mono">${nf(S.total - S.pending())}</strong></div></div>
  <ul style="list-style:none;padding:0;margin:12px 0 0" class="small">${S.nodes().map(n => `<li class="row" style="gap:8px;padding:4px 0;flex-wrap:nowrap"><span class="badge ${n.s === 'ok' ? 'ok' : n.s === 'warn' ? 'warn' : 'err'}" style="min-width:12px;padding:0 6px">${n.s === 'ok' ? '●' : n.s === 'warn' ? '▲' : '✕'}</span><span><strong>${n.n}</strong><br><span class="muted xs">${n.t}</span></span></li>`).join('')}</ul>
  <div class="row mt1"><a class="btn sm" href="#/conectividad">Ver arquitectura animada</a><button class="btn sm ter" data-act="simReset">Restablecer</button></div>`;
};
Object.assign(H.A, {
  simLink: el => Sim.setLink(el.checked),
  simLte: el => Sim.setLte(el.checked),
  simAdv: el => Sim.advance(+el.dataset.h),
  simReset: () => { Sim.reset(); H.toast('Simulación restablecida.', 'info', 2500); },
  simToggle: el => { const p = $('#sim-panel'); const open = p.classList.toggle('hide'); el.setAttribute('aria-expanded', !open); if (!open) p.innerHTML = H.simPanel(); }
});
