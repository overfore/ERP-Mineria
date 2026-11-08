import { Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/** Íconos de trazo, 24x24. */
export const IC: Record<string, string> = {
  home: '<path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10"/>',
  route: '<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M8 19h7a4 4 0 000-8H9a4 4 0 010-8h7"/>',
  scale: '<path d="M12 3v18M6 21h12M5 7h14"/><path d="M5 7l-3 7a3.5 3.5 0 006 0zM19 7l-3 7a3.5 3.5 0 006 0z"/>',
  cal: '<path d="M4 6h16v14H4zM4 10h16M8 3v4M16 3v4"/>',
  truck: '<path d="M2 6h11v10H2zM13 9h4l4 4v3h-8"/><circle cx="6.5" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2 20c.8-3.6 3.4-5.5 7-5.5s6.2 1.9 7 5.5M16 4.5a3.5 3.5 0 010 7M18 15c2 .6 3.5 2.2 4 5"/>',
  leaf: '<path d="M5 19C3 11 8 4 20 4c0 11-6 17-14 15zM5 19c3-5 6-8 11-11"/>',
  bld: '<path d="M4 21V5l8-2v18M12 8h8v13M4 21h16M8 8h1M8 12h1M8 16h1M15 12h2M15 16h2"/>',
  chart: '<path d="M4 20V4M4 20h16M8 16v-5M12 16V8M16 16v-8"/>',
  wifi: '<path d="M2 9a15 15 0 0120 0M5 12.5a10.5 10.5 0 0114 0M8.5 16a5 5 0 017 0"/><circle cx="12" cy="19.5" r="1" fill="currentColor"/>',
  wifiOff: '<path d="M3 3l18 18M2 9a15 15 0 015-3M22 9a15 15 0 00-8-4M5 12.5a10.5 10.5 0 014-2.5M19 12.5a10.5 10.5 0 00-3-2M8.5 16a5 5 0 013-1.5M15.5 16"/><circle cx="12" cy="19.5" r="1" fill="currentColor"/>',
  cloud: '<path d="M7 18a4.5 4.5 0 01-.5-9A6 6 0 0118 10a4 4 0 010 8z"/>',
  cloudOff: '<path d="M3 3l18 18M7 18a4.5 4.5 0 01-.5-9M10 6a6 6 0 018 4 4 4 0 011.5 7.5M8 18h9"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
  file: '<path d="M6 3h8l5 5v13H6zM14 3v5h5M9 13h7M9 17h7"/>',
  upload: '<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',
  check: '<path d="M4 12l5 5 11-11"/>',
  x: '<path d="M5 5l14 14M19 5L5 19"/>',
  alert: '<path d="M12 3l10 18H2zM12 10v5M12 18.5v.5"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
  bell: '<path d="M6 17V11a6 6 0 0112 0v6l2 2H4zM10 21h4"/>',
  chR: '<path d="M9 5l7 7-7 7"/>', chD: '<path d="M5 9l7 7 7-7"/>', chL: '<path d="M15 5l-7 7 7 7"/>', chU: '<path d="M5 15l7-7 7 7"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  filter: '<path d="M3 5h18l-7 8v6l-4 2v-8z"/>',
  dl: '<path d="M12 4v12M7 11l5 5 5-5M4 20h16"/>',
  dots: '<circle cx="12" cy="5" r="1.5" fill="currentColor"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle cx="12" cy="19" r="1.5" fill="currentColor"/>',
  out: '<path d="M9 4H4v16h5M16 8l4 4-4 4M20 12H9"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 114 2c-1 .8-1.5 1.2-1.5 2.5M12 17.5v.5"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  pin: '<path d="M12 21s7-6 7-12a7 7 0 10-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  phone: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
  play: '<path d="M7 4l13 8-13 8z"/>',
  refresh: '<path d="M20 11a8 8 0 00-14-4M4 5v4h4M4 13a8 8 0 0014 4M20 19v-4h-4"/>',
  drill: '<path d="M12 3v14M8 7l4-4 4 4M7 21h10M9 17l3 4 3-4"/>',
  moon: '<path d="M20 14A8 8 0 019.5 4 8 8 0 1020 14z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5M3 17.5l9 5 9-5"/>',
  wrench: '<path d="M14 6a4 4 0 005 5l-9 9a2.5 2.5 0 01-4-4l9-9a4 4 0 00-1-5z"/>',
  flag: '<path d="M5 21V4M5 4h12l-2 4 2 4H5"/>',
  sort: '<path d="M8 4v16M4 16l4 4 4-4M16 20V4M12 8l4-4 4 4"/>',
  edit: '<path d="M4 20h4L19 9l-4-4L4 16zM13 7l4 4"/>',
  trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v6M14 11v6"/>',
  cam: '<path d="M3 8h4l2-3h6l2 3h4v12H3z"/><circle cx="12" cy="13" r="3.5"/>',
  map: '<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2zM9 4v14M15 6v14"/>',
  zap: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  db: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  box: '<path d="M3 7l9-4 9 4v10l-9 4-9-4zM3 7l9 4 9-4M12 11v10"/>',
  star: '<path d="M12 3l2.8 5.8 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.3l1.1-6.2L3 9.7l6.2-.9z"/>',
  grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  pause: '<path d="M8 5v14M16 5v14"/>',
  badge: '<circle cx="12" cy="9" r="6"/><path d="M8.5 14L7 22l5-3 5 3-1.5-8"/>',
  link: '<path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1"/>',
};

/** Ícono SVG decorativo: `<app-icon name="truck" />`. El tamaño se cambia con clases (size-6). */
@Component({
  selector: 'app-icon',
  host: { class: 'inline-flex flex-none size-5', 'aria-hidden': 'true' },
  template: `<svg viewBox="0 0 24 24" focusable="false" class="size-full fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round]" [attr.stroke-width]="trazo()" [innerHTML]="svg()"></svg>`,
})
export class Icon {
  private san = inject(DomSanitizer);
  readonly name = input.required<string>();
  readonly trazo = input(1.9);
  readonly svg = computed(() => this.san.bypassSecurityTrustHtml(IC[this.name()] || IC['info']));
}
