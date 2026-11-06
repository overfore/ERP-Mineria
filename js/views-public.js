'use strict';
/* =====================================================================
   views-public.js — portal público, autenticación e incorporación
   ===================================================================== */
const demoBanner = `<div style="background:var(--copper-l);border-bottom:1px solid #E3BBA4;padding:8px 16px;text-align:center;font-size:14px"><strong>Prototipo de demostración</strong> · datos ficticios · Caso 01 Minería · Licitación TFEP-01/2026 · empresa mandante ficticia</div>`;

/* ===== Portal público ===== */

/* Imagen corporativa (ilustración vectorial del rajo) y sello de marca */
H.heroPit = () => {
  const r = rng(9); let benches = '';
  const cols = ['#5b3a26', '#6e4630', '#80523a', '#93603f', '#a56c45', '#b9794b', '#c98857'];
  for (let k = 0; k < 7; k++) {
    const y = 470 + k * 52, w = 900 - k * 120, x0 = 400 - w / 2; let pts = [];
    for (let i = 0; i <= 16; i++) pts.push(`${Math.round(x0 + w * i / 16)},${Math.round(y + (r() - .5) * 14)}`);
    benches += `<polygon points="${pts.join(' ')} ${Math.round(x0 + w)},900 ${Math.round(x0)},900" fill="${cols[k]}"/><polyline points="${pts.join(' ')}" fill="none" stroke="#e9c9a8" stroke-opacity=".35" stroke-width="2"/>`;
  }
  const truck = (x, y, sc) => `<g transform="translate(${x} ${y}) scale(${sc})" fill="#1b2229"><path d="M0 8h34v14H0z"/><path d="M34 12h14l7 8v4H34z"/><circle cx="10" cy="26" r="6"/><circle cx="44" cy="26" r="6"/></g>`;
  return `<svg class="hero-art" viewBox="0 0 800 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="hsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#15202a"/><stop offset=".55" stop-color="#5a3a33"/><stop offset="1" stop-color="#d98b4f"/></linearGradient><radialGradient id="hsun" cx=".72" cy=".52" r=".35"><stop offset="0" stop-color="#ffd9a0" stop-opacity=".9"/><stop offset="1" stop-color="#ffd9a0" stop-opacity="0"/></radialGradient></defs>
  <rect width="800" height="900" fill="url(#hsky)"/><rect width="800" height="900" fill="url(#hsun)"/>
  <polygon points="0,470 90,400 190,440 300,370 420,430 540,380 660,430 800,390 800,520 0,520" fill="#2a2f38"/>${benches}
  <polyline points="120,900 260,780 470,740 330,690 560,650 430,610 600,570" fill="none" stroke="#2a1b14" stroke-width="16" stroke-linejoin="round" stroke-linecap="round"/><polyline points="120,900 260,780 470,740 330,690 560,650 430,610 600,570" fill="none" stroke="#d9a275" stroke-width="2.5" stroke-dasharray="10 12"/>
  ${truck(300, 764, .9)}${truck(420, 666, .7)}${truck(505, 620, .55)}${truck(470, 584, .45)}</svg>`;
};
H.brandMark = () => `<div class="brand-lock"><span class="brand-mark" aria-hidden="true">AA</span><div><strong>Compañía Minera Altos de Aranda S.A.</strong><span>Región de Antofagasta · Chile</span></div></div>`;

H.route('/', {
  title: 'Inicio', public: true, fast: true,
  render: () => `${demoBanner}
  <section class="hero sect" aria-labelledby="pgh"><div class="wrap grid" style="grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);align-items:center;gap:var(--s6)" id="hero-g">
    <div><span class="badge cu" style="background:rgba(255,255,255,.12);color:#FFD8BF;border-color:rgba(255,255,255,.3)">Rajo Aranda · 3.180 m s. n. m. · Sierra Gorda</span>
      <h1 id="pgh" tabindex="-1" style="font-size:clamp(34px,5vw,58px);margin-top:16px">Cada tonelada deja huella.</h1>
      <p style="font-size:19px;max-width:54ch;color:#DCE2E6">Trazabilidad del mineral, productividad de la flota y cumplimiento regulatorio en una sola plataforma, <strong>que sigue funcionando aunque se corte la fibra</strong>. Sin pedirle más pasos a quien opera.</p>
      <div class="row mt2"><a class="btn lg" href="#/login">${ico('lock')} Ingresar</a><button class="btn lg sec" data-act="switchRoleQuick">${ico('eye')} Explorar como evaluador</button></div>
      <p class="small mt2" style="color:#C7D0D6">¿Eres empresa contratista? <a href="#/registro" style="color:#fff">Registra tu empresa y acredita a tu gente</a>.</p></div>
    <div class="grid g2" style="gap:12px" role="list" aria-label="Resultados comprometidos">
      ${[['4–6 sem → < 2 h', 'Reconstruir el origen de un lote embarcado'], ['18 días → ≤ 3 días', 'Cierre de la conciliación metalúrgica'], ['9 días → < 48 h', 'Acreditar a un trabajador contratista nuevo'], ['48 h sin enlace', 'La operación registra y se sincroniza sola']].map(x => `<div class="card flat" role="listitem" style="background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.18);color:#fff"><div class="stat-big" style="font-size:30px">${x[0]}</div><div class="small" style="color:#DCE2E6;margin-top:6px">${x[1]}</div></div>`).join('')}</div></div></section>
  <section class="sect" aria-labelledby="h-roles"><div class="wrap"><h2 id="h-roles">Una plataforma, nueve miradas</h2><p class="muted" style="max-width:70ch">Cada persona entra a lo que necesita. El operador de pala ve un botón; la gerencia, la trazabilidad completa. Elige un perfil para recorrerlo (acceso de demostración).</p>
    <div class="grid g-auto mt2" style="grid-template-columns:repeat(auto-fill,minmax(240px,1fr))">${Object.entries(H.ROLES).map(([k, r]) => `<button class="role-card" data-act="quickRole" data-r="${k}"><span class="ico">${ico(r.ico)}</span><strong>${r.label}</strong><span class="small muted">${r.desc}</span></button>`).join('')}</div></div></section>
  <section class="sect" style="background:var(--white);border-block:1px solid var(--sand-2)" aria-labelledby="h-how"><div class="wrap"><h2 id="h-how">Cómo se resuelve lo que duele</h2>
    <div class="grid g3 mt2">
      <div class="card flat"><span class="ico badge cu" style="margin-bottom:8px">${ico('pin')} 1 · Registrar donde ocurre</span><h3>El dato nace en el lugar del hecho</h3><p>Un toque del operador de pala, en la botonera, registra el cambio de destino con su contexto (pala, polígono, hora). Los incidentes se firman en terreno. Nada de digitar días después.</p></div>
      <div class="card flat"><span class="ico badge cu" style="margin-bottom:8px">${ico('route')} 2 · Seguir la huella</span><h3>De cualquier lote al polígono, y de vuelta</h3><p>Del embarque al banco de origen, por los stocks y la planta, con la versión del plan vigente y los análisis que respaldan cada paso.</p></div>
      <div class="card flat"><span class="ico badge cu" style="margin-bottom:8px">${ico('shield')} 3 · Cumplir sin planillas</span><h3>Reportes que salen del sistema</h3><p>Acreditaciones que avisan antes del vencimiento, reportes a la autoridad con trazabilidad hasta la medición y huella de carbono verificable.</p></div></div></div></section>
  <section class="sect" aria-labelledby="h-off"><div class="wrap grid g2" style="align-items:center;gap:var(--s6)"><div><h2 id="h-off">Pensada para el rajo, no para la oficina</h2><ul style="padding-left:20px"><li>Botones grandes para operar con guantes.</li><li>Modo sol de alto contraste para el mediodía.</li><li>Sin señal en el fondo del rajo: el equipo guarda y envía al volver.</li><li>Corte de fibra de hasta 48 h: el borde de faena sigue operando.</li></ul><a class="btn sec" href="#/conectividad-demo">Ver cómo se sincroniza</a></div>
    <div class="card" aria-hidden="true">${H.C.gauge({ value: 31, max: 48, target: 48, text: '31 h', sub: 'de 48 h de autonomía sin enlace', label: 'Autonomía' })}</div></div></section>
  <footer class="foot"><div class="wrap row between"><span>${H.BRAND.product} · prototipo de ${H.BRAND.vendor} · datos ficticios de demostración</span><nav class="row" aria-label="Documentación"><a href="#/arquitectura-informacion">Arquitectura de información</a><a href="#/sistema-diseno">Sistema de diseño</a><a href="#/ayuda-publica">Accesibilidad</a></nav></div></footer>`,
  mount: (m) => { const g = $('#hero-g', m); const f = () => g.style.gridTemplateColumns = window.innerWidth < 900 ? '1fr' : ''; f(); }
});
H.A.switchRoleQuick = () => H.modal({ title: 'Explorar como evaluador', wide: true, body: `<p class="muted">Acceso de demostración: omite el segundo factor para que puedas recorrer cada perfil rápidamente.</p><div class="grid g-auto" style="grid-template-columns:repeat(auto-fill,minmax(210px,1fr))">${Object.entries(H.ROLES).map(([k, r]) => `<button class="role-card" data-act="quickRole" data-r="${k}"><span class="ico">${ico(r.ico)}</span><strong>${r.label}</strong><span class="xs muted">${r.desc}</span></button>`).join('')}</div>` });
H.A.quickRole = (el) => { H.closeModals(); H.login(el.dataset.r, true); };
H.route('/conectividad-demo', { title: 'Conectividad', public: true, fast: true, render: () => '', mount: () => { location.hash = H.S.user ? '#/conectividad' : '#/login'; H.toast('Inicia sesión para ver la arquitectura de conectividad en vivo (o usa “Explorar como evaluador”).', 'info'); } });
H.route('/ayuda-publica', { title: 'Accesibilidad', public: true, fast: true, render: () => '', mount: () => { location.hash = '#/ayuda'; } });

/* ===== Inicio de sesión unificado ===== */
let pin = '', tries = 0;
H.route('/login', {
  title: 'Iniciar sesión', public: true, fast: true,
  render: () => `<div class="split"><div class="side has-art">${H.heroPit()}<div class="side-in">${H.brandMark()}<span class="badge" style="width:max-content;background:rgba(255,255,255,.12);color:#fff;border-color:rgba(255,255,255,.3)">Acceso unificado</span><h1 id="pgh" tabindex="-1">Un solo ingreso, el mecanismo que le sirve a cada persona</h1><p style="color:#DCE2E6;font-size:18px">Oficina y Centro Integrado de Operaciones entran con su cuenta corporativa y segundo factor. En terreno, con <strong>credencial de faena y PIN</strong>: sin correo personal, sin teclear contraseñas con guantes.</p><ul style="color:#DCE2E6;padding-left:20px"><li>Identidad federada con el directorio del grupo</li><li>Doble factor obligatorio · sin credenciales compartidas</li><li>Registro completo de accesos</li></ul><p class="side-foot">Plataforma de trazabilidad, cumplimiento y operación · SITCO Aranda por OVERFORE</p></div></div>
  <div class="form"><div class="card"><h2>Iniciar sesión</h2>
  ${H.tabs([{ id: 'corp', label: 'Cuenta corporativa' }, { id: 'cred', label: 'Credencial de faena' }], 'corp', {
    corp: `<form id="f-corp" novalidate>${H.field({ id: 'em', name: 'em', label: 'Correo corporativo', type: 'email', v: 'required|email', ph: 'nombre@aranda.example', hint: 'Te redirigiremos al directorio corporativo del grupo.', autocomplete: 'username' })}
      ${H.field({ id: 'rl', name: 'rl', label: 'Perfil de demostración', type: 'select', options: Object.entries(H.ROLES).filter(([k]) => k !== 'operador').map(([k, r]) => ({ v: k, l: r.label })), value: 'supervisor', hint: 'Solo en el prototipo: en producción el perfil lo define el directorio.' })}
      <button class="btn lg" style="width:100%" type="submit">Continuar con el directorio corporativo ${ico('chR')}</button>
      <div class="row between mt1"><a href="#/recuperar">¿Olvidaste tu acceso?</a><a href="#/registro">Soy empresa contratista</a></div></form>`,
    cred: `<form id="f-cred" novalidate><p class="small muted">Para supervisión y portería: credencial más PIN. El operador de pala no inicia sesión: usa la botonera.</p>${H.field({ id: 'rutc', name: 'rutc', label: 'RUT de la credencial', v: 'required|rut', ph: '12.345.678-5', value: '12.345.678-5', inputmode: 'text' })}
      <div class="lbl-t" id="pin-l">PIN de 4 dígitos <span class="muted xs">(demostración: 1234)</span></div><div class="pin-dots" id="pin-dots" aria-live="polite" aria-label="Dígitos ingresados: 0 de 4"><i></i><i></i><i></i><i></i></div><div class="err-m" id="pin-e" role="alert" style="color:var(--err);text-align:center;font-weight:600;min-height:22px"></div>
      <div class="pin-pad" role="group" aria-labelledby="pin-l">${[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => `<button type="button" data-act="pinKey" data-k="${n}" aria-label="${n}">${n}</button>`).join('')}<button type="button" data-act="pinKey" data-k="del" aria-label="Borrar" style="font-size:18px">⌫</button><button type="button" data-act="pinKey" data-k="0" aria-label="0">0</button><button type="button" data-act="pinKey" data-k="ok" aria-label="Ingresar" style="background:var(--copper);color:#fff;border-color:var(--copper-d)">✓</button></div></form>`
  })}</div></div></div>`,
  mount: (m) => {
    pin = ''; tries = 0;
    $('#f-corp', m).onsubmit = e => { e.preventDefault(); if (!H.validate(e.target)) return; const role = $('#rl', m).value; H.S.pend = { role, kind: 'corp' };
      const md = H.modal({ title: 'Redirigiendo al directorio corporativo…', body: `<div class="row"><span class="spinner"></span><span>Autenticando con la identidad federada del grupo.</span></div>`, actions: [] }); setTimeout(() => { md.close(); location.hash = '#/2fa'; }, 1300); };
    $('#f-cred', m).onsubmit = e => e.preventDefault();
  }
});
H.A.pinKey = (el) => {
  const k = el.dataset.k; if (k === 'del') pin = pin.slice(0, -1); else if (k === 'ok') return checkPin(); else if (pin.length < 4) pin += k;
  $$('#pin-dots i').forEach((d, i) => d.classList.toggle('on', i < pin.length)); $('#pin-dots').setAttribute('aria-label', `Dígitos ingresados: ${pin.length} de 4`); if (pin.length === 4) setTimeout(checkPin, 150);
};
function checkPin() {
  const rutOkV = H.rutOk($('#rutc').value); if (!rutOkV) { $('#pin-e').textContent = 'Revisa el RUT de la credencial.'; return; }
  if (pin.length < 4) { $('#pin-e').textContent = 'Ingresa los 4 dígitos.'; return; }
  if (pin !== '1234') { tries++; pin = ''; $$('#pin-dots i').forEach(d => d.classList.remove('on')); $('#pin-e').textContent = tries >= 3 ? 'Credencial bloqueada. Avisa a tu supervisor.' : `PIN incorrecto. Te quedan ${3 - tries} intento${3 - tries > 1 ? 's' : ''}.`; return; }
  H.S.pend = { role: 'supervisor', kind: 'cred' }; location.hash = '#/2fa';
}

/* ===== Segundo factor ===== */
let otpTimer = null;
H.route('/2fa', {
  title: 'Segundo factor', public: true, fast: true,
  render: () => { const k = (H.S.pend || {}).kind; if (!H.S.pend) return `<section class="auth"><div class="card">${H.empty('Sesión de acceso no iniciada', 'Vuelve a la pantalla de ingreso.', '<a class="btn" href="#/login">Ir a ingresar</a>')}</div></section>`;
    return `<section class="auth"><div class="card"><h1 id="pgh" tabindex="-1" style="font-size:28px">Verificación en dos pasos</h1>${k === 'cred' ? `<p>Acerca tu <strong>credencial de faena</strong> al lector del equipo. No necesitas escribir nada.</p><div style="text-align:center;padding:20px"><div style="width:120px;height:120px;border-radius:50%;border:5px dashed var(--copper);margin:auto;display:grid;place-items:center;color:var(--copper)">${ico('badge').replace('class="i ', 'class="i " style="width:56px;height:56px" data-x="')}</div></div><button class="btn lg" style="width:100%" data-act="nfc">${ico('zap')} Simular lectura de credencial</button>`
      : `<p>Ingresa el código de 6 dígitos de tu aplicación autenticadora. <span class="muted small">(Demostración: <strong>123456</strong>)</span></p><form id="f-otp" novalidate><div class="otp" role="group" aria-label="Código de 6 dígitos">${Array.from({ length: 6 }, (_, i) => `<input type="text" inputmode="numeric" maxlength="1" aria-label="Dígito ${i + 1}" autocomplete="one-time-code" data-i="${i}">`).join('')}</div><div id="otp-e" role="alert" style="text-align:center;color:var(--err);font-weight:600;min-height:28px;margin-top:8px"></div><button class="btn lg" style="width:100%" type="submit">Verificar</button></form><div class="row between mt2 small"><span id="otp-t">El código vence en <strong>30</strong> s</span><button class="link-btn" data-act="otpResend">Enviar otro código</button></div>`}
      <p class="small muted mt2"><a href="#/login">← Volver</a></p></div></section>`; },
  mount: (m) => {
    const f = $('#f-otp', m); if (!f) return; const ins = $$('.otp input', m); let att = 0;
    ins[0].focus();
    ins.forEach((inp, i) => { inp.oninput = () => { inp.value = inp.value.replace(/\D/g, ''); if (inp.value && ins[i + 1]) ins[i + 1].focus(); }; inp.onkeydown = e => { if (e.key === 'Backspace' && !inp.value && ins[i - 1]) ins[i - 1].focus(); }; inp.onpaste = e => { const t = (e.clipboardData.getData('text') || '').replace(/\D/g, '').slice(0, 6); if (t) { e.preventDefault(); t.split('').forEach((c, k) => ins[k] && (ins[k].value = c)); ins[Math.min(5, t.length)].focus(); } }; });
    f.onsubmit = e => { e.preventDefault(); const code = ins.map(x => x.value).join(''); const er = $('#otp-e', m);
      if (code.length < 6) { er.textContent = 'Ingresa los 6 dígitos.'; return; }
      if (code !== '123456') { att++; er.textContent = att >= 3 ? 'Demasiados intentos. Cuenta bloqueada 5 min (simulado).' : `Código incorrecto. Intento ${att} de 3.`; ins.forEach(x => x.value = ''); ins[0].focus(); return; }
      clearInterval(otpTimer); H.login(H.S.pend.role); };
    let s = 30; clearInterval(otpTimer); otpTimer = setInterval(() => { s--; const t = $('#otp-t strong'); if (!t) return clearInterval(otpTimer); t.textContent = s; if (s <= 0) { clearInterval(otpTimer); $('#otp-t').innerHTML = '<span style="color:var(--warn)">El código venció. Solicita otro.</span>'; } }, 1000);
  }
});
H.A.nfc = () => { H.toast('Credencial leída correctamente.', 'ok', 2500); H.login('supervisor'); };
H.A.otpResend = () => { H.toast('Se envió un nuevo código a tu aplicación autenticadora.', 'info'); H.routes['/2fa'].mount($('#main')); };

/* ===== Recuperación de acceso ===== */
H.route('/recuperar', {
  title: 'Recuperar acceso', public: true, fast: true,
  render: () => `<section class="auth" style="max-width:640px"><h1 id="pgh" tabindex="-1" style="font-size:28px">Recuperar acceso</h1><div id="wz"></div><p class="small"><a href="#/login">← Volver a ingresar</a></p></section>`,
  mount: (m) => H.wizard($('#wz', m), {
    finishLabel: 'Guardar y volver a ingresar', finish: () => { H.toast('Contraseña actualizada. Ingresa con tu nueva clave.', 'ok'); location.hash = '#/login'; },
    steps: [
      { label: 'Identificarte', title: 'Cuéntanos quién eres', intro: 'Las cuentas corporativas se recuperan en el directorio del grupo. Aquí recuperas el acceso de empresas contratistas.', render: () => H.field({ id: 'rc', name: 'rc', label: 'Correo o RUT registrado', v: 'required|min:7', ph: 'correo@empresa.cl o 76.123.456-K', hint: 'Por seguridad no confirmamos si la cuenta existe.' }) },
      { label: 'Verificar', title: 'Revisa tu correo', intro: 'Si la cuenta existe, enviamos un código de 6 dígitos. Vence en 10 minutos.', render: () => `${H.banner('info', 'Código de demostración: <strong>482913</strong>')}${H.field({ id: 'cd', name: 'cd', label: 'Código recibido', v: 'required|code6', ph: '000000', inputmode: 'numeric' })}`, validate: (p, d) => d.cd === '482913' ? true : 'El código no coincide. Usa 482913 en la demostración.' },
      { label: 'Nueva clave', title: 'Crea tu nueva contraseña', render: () => `${H.field({ id: 'pw', name: 'pw', label: 'Nueva contraseña', type: 'password', v: 'required|pwd', extra: 'data-strength="#st1" data-live="1"', autocomplete: 'new-password', hint: 'Mínimo 10 caracteres con mayúscula, número y símbolo.' })}<div class="strength" id="st1" aria-hidden="true"><i></i><i></i><i></i><i></i></div><div class="xs muted" id="st1-t" aria-live="polite" style="margin:4px 0 16px"></div>${H.field({ id: 'pw2', name: 'pw2', label: 'Repite la contraseña', type: 'password', v: 'required|match:#pw', autocomplete: 'new-password' })}` }
    ]
  })
});

/* ===== Registro de empresa contratista (5 pasos + confirmación) ===== */
const workersTmp = [];
H.route('/registro', {
  title: 'Registro de empresa contratista', public: true, fast: true,
  render: () => `<section class="sect" style="padding-top:24px"><div class="wrap" style="max-width:860px"><h1 id="pgh" tabindex="-1">Registro de empresa contratista</h1><p class="muted">Una solicitud completa se revisa en menos de 48 horas hábiles. Hoy toma en promedio nueve días porque los documentos llegan por correo y los vencimientos no se advierten.</p><div id="wz"></div></div></section>`,
  mount: (m) => {
    workersTmp.length = 0;
    H.wizard($('#wz', m), {
      save: true, finishLabel: 'Enviar solicitud',
      finish: (d, el) => { const n = 'SOL-' + (7000 + Math.floor(Math.random() * 999)); el.innerHTML = `<div class="card" style="text-align:center">${ico('check').replace('class="i ', 'class="i " style="width:56px;height:56px;color:var(--teal)" data-x="')}<h2>Solicitud ${n} enviada</h2><p>Enviamos un correo a <strong>${esc(d.mail || 'tu correo')}</strong> con el comprobante. Plazo de revisión: <strong>48 horas hábiles</strong>.</p>${H.timeline([{ t: 'Solicitud recibida', w: 'Ahora', s: 'done' }, { t: 'Revisión documental', w: 'Dentro de 24 h', s: 'cur' }, { t: 'Aprobación de Seguridad y Salud Ocupacional', w: 'Dentro de 48 h' }, { t: 'Emisión de credenciales', w: 'Al aprobar' }])}<div class="row" style="justify-content:center"><a class="btn" href="#/login">Ir a ingresar</a><a class="btn sec" href="#/">Volver al inicio</a></div></div>`; H.toast('Solicitud enviada con éxito.', 'ok'); },
      steps: [
        { label: 'Empresa', title: 'Datos de la empresa', render: d => `<div class="grid g2">${H.field({ id: 'rs', name: 'rs', label: 'Razón social', v: 'required|min:3', ac: 'empresas', value: d.rs, hint: 'Empieza a escribir para autocompletar si ya existe.' })}${H.field({ id: 'rt', name: 'rt', label: 'RUT de la empresa', v: 'required|rut', ph: '76.123.456-K', value: d.rt })}${H.field({ id: 'gi', name: 'gi', label: 'Giro principal', type: 'select', options: ['Transporte', 'Mantención', 'Construcción', 'Servicios', 'Alimentación', 'Perforación', 'Otro'], value: d.gi })}${H.field({ id: 'tr', name: 'tr', label: 'Número aproximado de trabajadores', type: 'number', v: 'required|gt0', value: d.tr || '' })}</div><fieldset style="border:0;padding:0;margin:0"><legend class="lbl-t">Tipo de servicio en faena</legend><div class="choice-grid"><label class="choice"><input type="radio" name="ts" value="Permanente" ${d.ts !== 'Detención mayor' ? 'checked' : ''}> Permanente (turno 7x7)</label><label class="choice"><input type="radio" name="ts" value="Detención mayor" ${d.ts === 'Detención mayor' ? 'checked' : ''}> Detención mayor de planta</label></div></fieldset>` },
        { label: 'Representante', title: 'Representante y acceso', render: d => `<div class="grid g2">${H.field({ id: 'rn', name: 'rn', label: 'Nombre completo', v: 'required|min:5', value: d.rn })}${H.field({ id: 'rr', name: 'rr', label: 'RUT del representante', v: 'required|rut', value: d.rr })}${H.field({ id: 'mail', name: 'mail', label: 'Correo de contacto', type: 'email', v: 'required|email', value: d.mail })}${H.field({ id: 'tel', name: 'tel', label: 'Teléfono móvil', type: 'tel', v: 'required|tel', ph: '+56 9 1234 5678', value: d.tel })}</div>${H.field({ id: 'pwr', name: 'pwr', label: 'Crea una contraseña', type: 'password', v: 'required|pwd', extra: 'data-strength="#st2" data-live="1"', autocomplete: 'new-password', hint: 'Mínimo 10 caracteres con mayúscula, número y símbolo.' })}<div class="strength" id="st2" aria-hidden="true"><i></i><i></i><i></i><i></i></div><div class="xs muted" id="st2-t" aria-live="polite" style="margin:4px 0 16px"></div><fieldset style="border:0;padding:0;margin:0"><legend class="lbl-t">Segundo factor</legend><div class="choice-grid"><label class="choice"><input type="radio" name="f2" value="app" checked> Aplicación autenticadora</label><label class="choice"><input type="radio" name="f2" value="sms"> SMS al móvil</label></div></fieldset>` },
        { label: 'Documentos', title: 'Documentación de la empresa', intro: 'Sube los documentos ahora: el sistema los revisa y te avisa antes de que venzan.', render: () => `<div class="grid g2"><div>${H.drop('d1', 'Certificado de vigencia de la sociedad')}</div><div>${H.drop('d2', 'Certificado de cumplimiento laboral')}</div><div>${H.drop('d3', 'Póliza de seguro de responsabilidad civil')}</div><div><button class="btn sec" type="button" data-act="fakeAll">${ico('upload')} Usar archivos de ejemplo</button><p class="xs muted mt1">Atajo de demostración: simula la carga de los tres documentos.</p></div></div>`, validate: p => $$('.file-row', p).length >= 3 ? true : 'Sube los tres documentos para continuar (o usa los archivos de ejemplo).' },
        { label: 'Trabajadores', title: 'Trabajadores a acreditar', intro: 'Agrega al menos una persona. También puedes cargar una planilla; se valida cada RUT.', render: () => `<div class="card flat"><div class="grid g3" style="align-items:end">${H.field({ id: 'wn', name: '_wn', label: 'Nombre', ph: 'Nombre y apellidos' })}${H.field({ id: 'wr', name: '_wr', label: 'RUT', ph: '12.345.678-5' })}${H.field({ id: 'wc', name: '_wc', label: 'Cargo', ac: 'cargos', ph: 'Escribe para buscar' })}</div><button class="btn sec" type="button" data-act="addW">${ico('plus')} Agregar trabajador</button></div><div id="w-list" aria-live="polite" class="mt2"></div>`, mount: () => drawW(), validate: () => workersTmp.length ? true : 'Agrega al menos un trabajador.' },
        { label: 'Revisión', title: 'Revisa y confirma', render: d => `<div class="grid g2"><div class="card flat"><h4>Empresa</h4><p class="small">${esc(d.rs)}<br>RUT ${esc(d.rt)}<br>${esc(d.gi)} · ${esc(d.ts)}</p></div><div class="card flat"><h4>Representante</h4><p class="small">${esc(d.rn)}<br>${esc(d.mail)}<br>${esc(d.tel)}</p></div></div><div class="card flat mt1"><h4>${workersTmp.length} trabajador${workersTmp.length > 1 ? 'es' : ''} · 3 documentos cargados</h4></div><label class="check"><input type="checkbox" name="ok1" data-v="required" data-msg="Debes aceptar los términos para continuar."> Acepto los términos de uso y las normas de seguridad de la faena.</label><label class="check"><input type="checkbox" name="ok2" data-v="required" data-msg="Debes autorizar el tratamiento de datos."> Autorizo el tratamiento de datos personales de mis trabajadores conforme a la Ley N° 21.719 (incluye datos de salud ocupacional, de acceso restringido).</label>` }
      ]
    });
  }
});
function drawW() { const h = $('#w-list'); if (!h) return; h.innerHTML = workersTmp.length ? `<div class="tbl-wrap"><table class="stack"><thead><tr><th>Nombre</th><th>RUT</th><th>Cargo</th><th><span class="sr">Acciones</span></th></tr></thead><tbody>${workersTmp.map((w, i) => `<tr><td data-l="Nombre">${esc(w.n)}</td><td data-l="RUT">${esc(w.r)}</td><td data-l="Cargo">${esc(w.c)}</td><td><button class="btn sm ter" data-act="delW" data-i="${i}">${ico('trash')} Quitar</button></td></tr>`).join('')}</tbody></table></div>` : H.empty('Aún no hay trabajadores', 'Agrega la primera persona con el formulario de arriba.'); }
H.A.addW = () => { const n = $('#wn'), r = $('#wr'), c = $('#wc'); n.dataset.v = 'required|min:5'; r.dataset.v = 'required|rut'; c.dataset.v = 'required'; const ok = [n, r, c].map(x => H.check(x) === '').every(Boolean); [n, r, c].forEach(x => { const f = x.closest('.field'); const msg = H.check(x); f.classList.toggle('invalid', !!msg); f.querySelector('.err-m').textContent = msg; }); [n, r, c].forEach(x => delete x.dataset.v); if (!ok) return; workersTmp.push({ n: n.value, r: r.value, c: c.value }); [n, r, c].forEach(x => { x.value = ''; x.closest('.field').classList.remove('valid', 'invalid'); }); drawW(); H.toast('Trabajador agregado.', 'ok', 2000); };
H.A.delW = (el) => { workersTmp.splice(+el.dataset.i, 1); drawW(); };
H.A.fakeAll = () => { [['d1', 'certificado-vigencia.pdf'], ['d2', 'cumplimiento-laboral.pdf'], ['d3', 'poliza-seguro.pdf']].forEach(([z, n]) => { const zone = $(`[data-drop="${z}"]`); if (!$(`[data-files="${z}"] .file-row`)) H.A.fakeFile({ dataset: { zone: z, name: n } }); }); };
