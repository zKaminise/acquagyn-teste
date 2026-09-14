import './film';
const header = document.querySelector<HTMLElement>('.site-header');
const menu = document.querySelector<HTMLDialogElement>('#mobile-menu');
const toggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
const closeButton = document.querySelector<HTMLButtonElement>('.menu-close');

function closeMenu(restoreFocus = true) {
  menu?.close();
  document.body.classList.remove('menu-open');
  toggle?.setAttribute('aria-expanded', 'false');
  if (restoreFocus) toggle?.focus({ preventScroll: true });
}
toggle?.addEventListener('click', () => {
  menu?.showModal();
  document.body.classList.add('menu-open');
  toggle.setAttribute('aria-expanded', 'true');
  closeButton?.focus();
});
closeButton?.addEventListener('click', () => closeMenu());
menu?.addEventListener('cancel', () => closeMenu());
menu?.addEventListener('close', () => {
  document.body.classList.remove('menu-open');
  toggle?.setAttribute('aria-expanded', 'false');
});
menu?.querySelectorAll<HTMLAnchorElement>('a').forEach((link) =>
  link.addEventListener('click', () => {
    closeMenu(false);
    if (link.hash) {
      const destination = document.querySelector<HTMLElement>(link.hash);
      destination?.setAttribute('tabindex', '-1');
      destination?.focus({ preventScroll: true });
    }
  }),
);

let scheduled = false;
function updateHeader() {
  header?.classList.toggle('is-scrolled', window.scrollY > 64);
  scheduled = false;
}
window.addEventListener(
  'scroll',
  () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(updateHeader);
    }
  },
  { passive: true },
);
updateHeader();

const floating = document.querySelector('.floating-whatsapp');
const hero = document.querySelector('.hero');
if (hero && floating) {
  new IntersectionObserver(
    ([entry]) => floating.classList.toggle('is-visible', !entry.isIntersecting),
    { threshold: 0 },
  ).observe(hero);
}

// Content and navigation remain complete if motion libraries cannot load.
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const motionToggle = document.querySelector<HTMLButtonElement>('[data-motion-toggle]');
let userReduced = false;
const connection = (
  navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }
).connection;
const saveData =
  connection?.saveData || ['slow-2g', '2g'].includes(connection?.effectiveType || '');
let disposeMotion: (() => void) | undefined;
let motionLoading = false;
async function syncMotion() {
  motionToggle?.setAttribute('aria-pressed', String(userReduced || reduced.matches));
  if (motionToggle)
    motionToggle.textContent = reduced.matches
      ? 'Movimento reduzido pelo sistema'
      : userReduced
        ? 'Ativar animações'
        : 'Reduzir movimentos';
  if (reduced.matches || saveData || userReduced) {
    disposeMotion?.();
    disposeMotion = undefined;
    document.documentElement.classList.remove('has-motion');
    return;
  }
  if (disposeMotion || motionLoading) return;
  motionLoading = true;
  try {
    const { initMotion } = await import('../animations/scroll');
    if (!reduced.matches && !userReduced) disposeMotion = initMotion();
  } catch {
    document.documentElement.classList.remove('has-motion');
  } finally {
    motionLoading = false;
  }
}
reduced.addEventListener('change', syncMotion);
motionToggle?.addEventListener('click', () => {
  userReduced = !userReduced;
  void syncMotion();
});
void syncMotion();
