'use strict';
/* =====================================================================
   sim.js — Simulación de conectividad: dispositivo → Nodo de Faena → nube
   (sin servicios reales; solo para demostrar el comportamiento esperado:
   la operación sigue y los datos se sincronizan solos, criterio 13).
   Caminos hacia la nube (Subdocumento 3): fibra A (proveedor actual),
   fibra B (otro proveedor y camino) y enlace satelital de órbita baja.
   El modo local solo se activa si caen los tres. El satélite
   geoestacionario existente sigue solo para telefonía y correo.
   ===================================================================== */
const Sim = H.Sim = {
  link: 'ok',            // hay al menos un camino a la nube: 'ok' | 'down' (los tres caídos)
  fibA: 'ok',            // fibra A, proveedor actual: 'ok' | 'down'
  fibB: 'ok',            // fibra B, otro proveedor y camino: 'ok' | 'down'
  leo: 'ok',             // satélite de órbita baja: 'ok' | 'down'
  lte: 'ok',             // cobertura LTE del rajo: 'ok' | 'shadow'
  hours: 0,              // horas simuladas de corte total
  queue: [],             // eventos recientes
  total: 0, syncedAtCut: 0, resolved: 0, lastSync: new Date(),
  log: [], listeners: [], seq: 1,
  on(fn) { this.listeners.push(fn); },
  emit() { this.listeners.forEach(f => { try { f(this); } catch (e) { console.error(e); } }); },
  pending() { return this.queue.filter(e => e.tier < 2).length + (this.bulk || 0); },
  onDevice() { return this.queue.filter(e => e.tier === 0).length; },
  onEdge() { return this.queue.filter(e => e.tier === 1).length + (this.bulk || 0); },
  mode() { return this.link === 'down' ? 'down' : (this.pending() > 2 ? 'sync' : 'ok'); },
  path() { return this.fibA === 'ok' ? 'Fibra A' : this.fibB === 'ok' ? 'Fibra B' : this.leo === 'ok' ? 'Satélite de órbita baja' : null; },
  pathName() { return { 'Fibra A': 'fibra A', 'Fibra B': 'fibra B', 'Satélite de órbita baja': 'satélite de órbita baja' }[this.path()] || ''; },
  slow() { return this.path() === 'Satélite de órbita baja'; },
  say(t, k = 'info') { this.log.unshift({ t, k, f: new Date() }); this.log = this.log.slice(0, 40); },
  capture(type, label, src = 'Terreno') {
    const e = { id: 'EV-' + String(this.seq++).padStart(5, '0'), type, label, src, ts: new Date(), tier: 0 };
    this.queue.unshift(e); this.queue = this.queue.slice(0, 80); this.total++;
    if (this.lte === 'shadow') this.say(`${e.id} guardado en el equipo (zona sin cobertura LTE)`, 'warn');
    this.emit(); return e;
  },
  setPath(which, down) {
    const key = { A: 'fibA', B: 'fibB', L: 'leo' }[which];
    const nom = { A: 'La fibra A (proveedor actual)', B: 'La fibra B (otro proveedor y camino)', L: 'El enlace satelital de órbita baja' }[which];
    if ((this[key] === 'down') === !!down) return;
    const before = this.link, pBefore = this.path();
    this[key] = down ? 'down' : 'ok';
    const p = this.path(); this.link = p ? 'ok' : 'down';
    if (this.link === 'down' && before === 'ok') {
      this.hours = 0; this.syncedAtCut = this.total;
      this.say('Cayeron las dos fibras y el satélite. El Nodo de Faena asume el servicio (modo local).', 'err');
      H.toast('<strong>Sin camino a la nube.</strong> La operación sigue en modo local: nada se detiene.', 'warn', 6000);
    } else if (this.link === 'ok' && before === 'down') {
      this.say(`Enlace restablecido por ${this.pathName()} tras ${nd(this.hours, 0)} h simuladas. ${this.slow() ? 'La operación en vivo y las alertas se sincronizan; las series del historiador esperan en el Nodo hasta que vuelva una fibra.' : 'Sincronizando ' + this.pending() + ' eventos…'}`, 'ok');
      H.toast('<strong>Enlace restablecido.</strong> Sincronizando automáticamente…', 'info');
    } else if (p !== pBefore) {
      if (down) {
        this.say(`${nom} cayó. El SD-WAN conmuta a ${this.pathName()} en 5 segundos o menos.${this.slow() ? ' El satélite (20 Mbps) lleva la operación en vivo, las alertas y la bandeja de salida; las series del historiador esperan en el Nodo hasta que vuelva una fibra.' : ''}`, this.slow() ? 'warn' : 'info');
        H.toast(`<strong>${nom} cayó.</strong> El tráfico pasa por ${this.pathName()}; la operación no se detiene.`, 'info', 5000);
      } else this.say(`${nom} volvió. El tráfico regresa por ${this.pathName()}.`, 'ok');
    } else this.say(`${nom} ${down ? 'cayó' : 'volvió'}; el tráfico sigue por ${this.pathName()}.`, 'info');
    this.emit();
  },
  setLink(down) { ['A', 'B', 'L'].forEach(k => this.setPath(k, down)); },
  setLte(shadow) { this.lte = shadow ? 'shadow' : 'ok'; this.say(shadow ? 'El equipo entró a una zona de sombra (fondo del rajo).' : 'El equipo recuperó cobertura LTE y vuelca su cola al Nodo de Faena.', shadow ? 'warn' : 'ok'); this.emit(); },
  advance(h) {
    if (this.link !== 'down') { H.toast('Primero simula la caída de las dos fibras y del satélite para avanzar el reloj.', 'info'); return; }
    this.hours += h; const n = Math.min(520, Math.round(h * 26)); const tier = this.lte === 'shadow' ? 0 : 1;
    this.bulk = (this.bulk || 0) + n; this.total += n;
    this.say(`+${h} h sin enlace: se registraron ${nf(n)} eventos localmente (estimación de demostración) (despacho, cambios de destino, incidentes, inspecciones).`, this.hours > 48 ? 'err' : 'warn');
    if (this.hours > 48) H.toast('Se superaron las 48 horas de autonomía comprometidas.', 'err', 6000);
    this.emit();
  },
  reset() { this.link = 'ok'; this.fibA = 'ok'; this.fibB = 'ok'; this.leo = 'ok'; this.lte = 'ok'; this.hours = 0; this.bulk = 0; this.queue.forEach(e => e.tier = 2); this.emit(); },
  tick() {
    let moved = 0; const fast = Math.max(4, Math.ceil(this.pending() / 14));
    this.queue.slice().reverse().forEach(e => {
      if (moved >= fast) return;
      if (e.tier === 0 && this.lte === 'ok') { e.tier = 1; moved++; }
      else if (e.tier === 1 && this.link === 'ok') { e.tier = 2; moved++; }
    });
    if (this.bulk && this.link === 'ok' && !this.slow() && this.lte === 'ok') { const m = Math.min(this.bulk, Math.max(20, Math.ceil(this.bulk / 8))); this.bulk -= m; moved += m; if (!this.bulk) this.finish(); }
    if (moved) { this.lastSync = new Date(); if (!this.pending() && this.link === 'ok') this.finish(); this.emit(); }
  },
  finish() {
    if (this.hours > 0 || this.syncedAtCut) {
      const n = this.total - this.syncedAtCut; this.resolved = this.hours > 6 ? 1 : 0;
      this.say(`Sincronización completa: ${nf(n)} eventos en orden, ${this.resolved} conflicto de versión del plan (cifra de ejemplo) resuelto por regla (el plan, que es dato maestro, lo gana la última versión aprobada en la nube; los hechos de faena los gana el Nodo de Faena), 0 intervenciones manuales. Duplicados descartados por el identificador del evento; registros cifrados y firmados.`, 'ok');
      H.toast(`<strong>Sincronización completa.</strong> ${nf(n)} eventos, 0 intervenciones manuales.`, 'ok', 6500);
      this.hours = 0; this.syncedAtCut = 0;
    }
  },
  nodes() {
    const d = this.link === 'down', p = this.path();
    const linkS = d ? 'err' : p === 'Fibra A' ? 'ok' : 'warn';
    const linkT = d ? 'Caídas las dos fibras y el satélite · modo local'
      : p === 'Fibra A' ? 'Fibra A activa · fibra B disponible y satélite en espera'
      : p === 'Fibra B' ? 'Fibra A caída · el tráfico va por la fibra B'
      : 'Ambas fibras caídas · el tráfico va por el satélite de órbita baja (20 Mbps); las series del historiador esperan en el Nodo';
    return [
      { id: 'device', n: 'Equipo en terreno', s: this.lte === 'shadow' ? 'warn' : 'ok', t: this.lte === 'shadow' ? 'Sin cobertura · guarda localmente' : 'Conectado al Nodo de Faena por LTE privada' },
      { id: 'edge', n: 'Nodo de Faena (sala técnica)', s: this.hours > 48 ? 'warn' : 'ok', t: d ? 'Opera en modo local · autonomía ' + nd(this.hours, 0) + ' de 48 h' : 'Operando · réplica hacia la nube' },
      { id: 'link', n: 'Enlaces faena–Antofagasta', s: linkS, t: linkT },
      { id: 'cloud', n: 'Nube corporativa (Azure, Santiago)', s: d ? 'warn' : 'ok', t: d ? 'Sin recibir datos · retiene lo último sincronizado' : 'Recibiendo y consolidando · réplica en São Paulo' },
      { id: 'cio', n: 'Centro Integrado de Operaciones', s: d ? 'warn' : 'ok', t: d ? 'Datos de la faena congelados · telefonía por el satélite geoestacionario' : 'Vista en vivo de la operación' }
    ];
  }
};
setInterval(() => Sim.tick(), 700);

/* ---- Panel flotante de simulación ---- */
H.simPanel = () => {
  const S = Sim, d = S.link === 'down', pct = Math.min(100, S.hours / 48 * 100);
  return `<h3 style="font-size:18px">Simulador de conectividad</h3><p class="small muted">Herramienta de demostración para evaluadores. Aquí no hay servicios reales: se simula el comportamiento esperado.</p>
  <label class="switch"><input type="checkbox" data-act="simFibA" ${S.fibA === 'down' ? 'checked' : ''}><span class="tr"></span><span>Cortar fibra A (proveedor actual)</span></label>
  <label class="switch"><input type="checkbox" data-act="simFibB" ${S.fibB === 'down' ? 'checked' : ''}><span class="tr"></span><span>Cortar fibra B (otro proveedor y camino)</span></label>
  <label class="switch"><input type="checkbox" data-act="simLeo" ${S.leo === 'down' ? 'checked' : ''}><span class="tr"></span><span>Cortar satélite de órbita baja</span></label>
  <p class="xs muted" style="margin:4px 0 8px">El modo local solo se activa si caen las dos fibras y el satélite. El satélite geoestacionario existente sigue solo para telefonía y correo.</p>
  <label class="switch"><input type="checkbox" data-act="simLte" ${S.lte === 'shadow' ? 'checked' : ''}><span class="tr"></span><span>Equipo en zona sin cobertura (fondo del rajo)</span></label>
  <div class="mt1"><div class="row between small"><strong>Autonomía local usada</strong><span>${nd(S.hours, 0)} h de 48 h</span></div><div class="bar ${S.hours > 48 ? 'err' : S.hours > 36 ? 'warn' : ''}" role="progressbar" aria-valuemin="0" aria-valuemax="48" aria-valuenow="${Math.round(S.hours)}"><i style="width:${pct}%"></i></div></div>
  <div class="row mt1"><button class="btn sm sec" data-act="simAdv" data-h="6" ${d ? '' : 'disabled'}>+6 h</button><button class="btn sm sec" data-act="simAdv" data-h="20" ${d ? '' : 'disabled'}>+20 h (corte más largo)</button><button class="btn sm sec" data-act="simAdv" data-h="48" ${d ? '' : 'disabled'}>+48 h</button></div>
  <div class="grid g3 mt2" style="gap:8px"><div class="card flat" style="padding:8px 10px"><div class="xs muted">En equipo</div><strong class="mono">${nf(S.onDevice())}</strong></div><div class="card flat" style="padding:8px 10px"><div class="xs muted">En el Nodo</div><strong class="mono">${nf(S.onEdge())}</strong></div><div class="card flat" style="padding:8px 10px"><div class="xs muted">Sincronizados</div><strong class="mono">${nf(S.total - S.pending())}</strong></div></div>
  <ul style="list-style:none;padding:0;margin:12px 0 0" class="small">${S.nodes().map(n => `<li class="row" style="gap:8px;padding:4px 0;flex-wrap:nowrap"><span class="badge ${n.s === 'ok' ? 'ok' : n.s === 'warn' ? 'warn' : 'err'}" style="min-width:12px;padding:0 6px">${n.s === 'ok' ? '●' : n.s === 'warn' ? '▲' : '✕'}</span><span><strong>${n.n}</strong><br><span class="muted xs">${n.t}</span></span></li>`).join('')}</ul>
  <div class="row mt1"><a class="btn sm" href="#/conectividad">Ver arquitectura animada</a><button class="btn sm ter" data-act="simReset">Restablecer</button></div>`;
};
Object.assign(H.A, {
  simFibA: el => Sim.setPath('A', el.checked),
  simFibB: el => Sim.setPath('B', el.checked),
  simLeo: el => Sim.setPath('L', el.checked),
  simLink: el => Sim.setLink(el.checked),
  simLte: el => Sim.setLte(el.checked),
  simAdv: el => Sim.advance(+el.dataset.h),
  simReset: () => { Sim.reset(); H.toast('Simulación restablecida.', 'info', 2500); },
  simToggle: el => { const p = $('#sim-panel'); const open = p.classList.toggle('hide'); el.setAttribute('aria-expanded', !open); if (!open) p.innerHTML = H.simPanel(); }
});
