import gsap from 'gsap';
import { motion } from './config';

export function animateNarrative(desktop: boolean) {
  gsap.fromTo(
    '.story-word',
    { color: '#67818a' },
    {
      color: '#073347',
      stagger: 0.075,
      ease: 'none',
      scrollTrigger: { trigger: '#story-title', start: 'top 80%', end: 'bottom 38%', scrub: 0.5 },
    },
  );
  gsap.to('.hero .water-lines', {
    xPercent: 8,
    yPercent: -30,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: motion.scrub },
  });
  gsap.utils.toArray<HTMLElement>('.modality-content').forEach((content) => {
    gsap.fromTo(
      content,
      { '--scene-progress': '0%' },
      {
        '--scene-progress': '100%',
        ease: 'none',
        scrollTrigger: { trigger: content, start: 'top 85%', end: 'bottom 55%', scrub: 0.5 },
      },
    );
    gsap.from(content.querySelectorAll('.tag-list li'), {
      y: 12,
      opacity: 0.35,
      stagger: 0.13,
      duration: 0.7,
      scrollTrigger: { trigger: content.querySelector('.tag-list'), start: 'top 90%', once: true },
    });
  });
  gsap.utils.toArray<HTMLElement>('.value-step').forEach((step) => {
    gsap.fromTo(
      step.querySelector('h3'),
      { x: desktop ? 30 : 12 },
      {
        x: desktop ? -12 : 0,
        ease: 'none',
        scrollTrigger: { trigger: step, start: 'top bottom', end: 'bottom top', scrub: 0.8 },
      },
    );
  });
  const gallery = gsap.timeline({
    scrollTrigger: {
      trigger: '.pool-reveal',
      start: desktop ? 'top 75%' : 'top 80%',
      end: desktop ? 'bottom bottom' : 'bottom 35%',
      scrub: 0.8,
    },
  });
  gallery
    .fromTo(
      '.pool-reveal-image',
      { clipPath: desktop ? 'inset(10% 16% 10% 16%)' : 'inset(4% 4% 4% 4%)' },
      { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.35, ease: 'none' },
      0,
    )
    .fromTo('.pool-reveal-image img', { scale: 1.15 }, { scale: 1, duration: 0.5, ease: 'none' }, 0)
    .fromTo(
      '.pool-reveal-next',
      { clipPath: 'inset(100% 0% 0% 0%)' },
      { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.35, ease: 'power1.inOut' },
      0.55,
    )
    .fromTo(
      '.pool-reveal-next img',
      { scale: 1.1 },
      { scale: 1, duration: 0.45, ease: 'none' },
      0.55,
    )
    .to('.gallery-caption-primary', { opacity: 0, y: -10, duration: 0.15 }, 0.6)
    .fromTo(
      '.gallery-caption-next',
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.2 },
      0.75,
    )
    .fromTo('.gallery-progress>span', { scaleX: 0 }, { scaleX: 1, duration: 1, ease: 'none' }, 0);
  gsap.fromTo(
    '.contact-water',
    { scale: 1.18 },
    {
      scale: 1.05,
      ease: 'none',
      scrollTrigger: {
        trigger: '.contact-scene',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: motion.scrub,
      },
    },
  );
  gsap.to('.contact-scene .water-lines', {
    xPercent: -8,
    yPercent: -25,
    ease: 'none',
    scrollTrigger: {
      trigger: '.contact-scene',
      start: 'top bottom',
      end: 'bottom top',
      scrub: motion.scrub,
    },
  });
}
