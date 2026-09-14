const filmDialog = document.querySelector<HTMLDialogElement>('#school-film');
const video = document.querySelector<HTMLVideoElement>('#acquagyn-film');
let filmTrigger: HTMLElement | null = null;

document.querySelectorAll<HTMLButtonElement>('[data-open-film]').forEach((button) => {
  button.addEventListener('click', () => {
    filmTrigger = button;
    if (video && !video.getAttribute('src')) video.src = video.dataset.src!;
    filmDialog?.showModal();
    document.body.classList.add('film-open');
    filmDialog?.querySelector<HTMLButtonElement>('.film-close')?.focus();
    void video?.play().catch(() => {
      /* Native controls remain available when autoplay is blocked. */
    });
  });
});
function resetFilm() {
  video?.pause();
  document.body.classList.remove('film-open');
  filmTrigger?.focus({ preventScroll: true });
}
filmDialog?.querySelector('.film-close')?.addEventListener('click', () => filmDialog.close());
filmDialog?.addEventListener('close', resetFilm);
filmDialog?.addEventListener('cancel', resetFilm);
video?.addEventListener('error', () => {
  const caption = filmDialog?.querySelector('.film-caption');
  if (caption)
    caption.textContent =
      'Não foi possível carregar o vídeo. Tente o link abaixo ou consulte as fotos da página.';
});
