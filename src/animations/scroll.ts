import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { motion } from './config';
import { animateNarrative } from './narrative';

export function initMotion() {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
  document.documentElement.classList.add('has-motion');
  const media = gsap.matchMedia();
  media.add(
    { desktop: motion.desktop, mobile: motion.mobile, reduce: motion.reduce },
    (context) => {
      const { desktop, reduce } = context.conditions!;
      if (reduce) return;
      let lenis: Lenis | undefined;
      let tick: ((time: number) => void) | undefined;
      if (desktop) {
        lenis = new Lenis({
          duration: motion.smoothDuration,
          smoothWheel: true,
          syncTouch: false,
          anchors: { offset: -100 },
          prevent: (node) => node.closest('dialog') !== null,
        });
        lenis.on('scroll', ScrollTrigger.update);
        tick = (time) => lenis?.raf(time * 1000);
        gsap.ticker.add(tick);
        const heroTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom bottom',
            scrub: motion.scrub,
          },
        });
        heroTimeline
          .fromTo('.hero-media img', { scale: 1.28 }, { scale: 1, duration: 1, ease: 'none' }, 0)
          .to('.hero h1', { opacity: 0, y: -24, duration: 0.22 }, 0.22)
          .fromTo(
            '.hero-pool',
            { opacity: 0, scale: 1.08, clipPath: 'inset(100% 0 0 0)' },
            {
              opacity: 0.85,
              scale: 1,
              clipPath: 'inset(0% 0 0 0)',
              duration: 0.6,
              ease: 'power1.inOut',
            },
            0.18,
          )
          .fromTo('.hero-next', { opacity: 0, y: 35 }, { opacity: 1, y: 0, duration: 0.28 }, 0.48)
          .to('.water-light', { xPercent: -30, yPercent: 35, duration: 1, ease: 'none' }, 0);
      } else {
        gsap.fromTo(
          '.hero-media img',
          { scale: 1.08 },
          {
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: '.hero',
              start: 'top top',
              end: 'bottom top',
              scrub: motion.scrub,
            },
          },
        );
      }
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        gsap.from(element, {
          y: desktop ? 30 : 15,
          opacity: 0.55,
          duration: motion.revealDuration,
          ease: motion.ease,
          scrollTrigger: { trigger: element, start: 'top 91%', once: true },
        });
      });
      gsap.fromTo(
        '.journey-line>span',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.level-journey',
            start: 'top 65%',
            end: 'bottom 65%',
            scrub: 0.4,
          },
        },
      );
      gsap.utils.toArray<HTMLElement>('.level-step').forEach((element) => {
        ScrollTrigger.create({
          trigger: element,
          start: 'top 55%',
          end: 'bottom 55%',
          toggleClass: 'is-current',
        });
      });
      const count = { value: 0 };
      const counter = document.querySelector('[data-counter]');
      if (counter)
        gsap.to(count, {
          value: 30,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: { trigger: counter, start: 'top 90%', once: true },
          onUpdate: () => {
            counter.textContent = Math.round(count.value).toString();
          },
        });
      gsap.from('.year-line', {
        scaleX: 0.2,
        scrollTrigger: { trigger: '.story', start: 'top 70%', end: 'bottom 65%', scrub: 0.5 },
      });
      gsap.utils.toArray<HTMLElement>('.modality-image').forEach((element) => {
        gsap.fromTo(
          element.querySelector('img'),
          { scale: desktop ? 1.13 : 1.05 },
          {
            scale: 1,
            yPercent: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top bottom',
              end: 'bottom top',
              scrub: motion.scrub,
            },
          },
        );
      });
      const photos = gsap.utils.toArray<HTMLElement>('.value-photo');
      const setPhoto = (i: number) =>
        photos.forEach((photo, index) => photo.classList.toggle('is-active', i === index));
      gsap.utils.toArray<HTMLElement>('.value-step').forEach((element, i) => {
        ScrollTrigger.create({
          trigger: element,
          start: 'top 65%',
          end: 'bottom 65%',
          onEnter: () => setPhoto(i),
          onEnterBack: () => setPhoto(i),
        });
      });
      animateNarrative(Boolean(desktop));
      const refresh = () => ScrollTrigger.refresh();
      document
        .querySelectorAll('details')
        .forEach((detail) => detail.addEventListener('toggle', refresh));
      document.fonts.ready.then(refresh);
      return () => {
        if (tick) gsap.ticker.remove(tick);
        lenis?.destroy();
        setPhoto(0);
        if (counter) counter.textContent = '30';
        document
          .querySelectorAll('details')
          .forEach((detail) => detail.removeEventListener('toggle', refresh));
      };
    },
  );
  return () => {
    media.revert();
    document.documentElement.classList.remove('has-motion');
    ScrollTrigger.refresh();
  };
}
