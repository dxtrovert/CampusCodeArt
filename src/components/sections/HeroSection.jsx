import { useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight, Trophy } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../common/Button.jsx';
import BrandMark from '../common/BrandMark.jsx';
import FlexCarousel from '../FlexCarousel.jsx';
import { landingStats } from '../../data/landingContent.js';

const heroItems = [
  { src: '/images/hero/neon-workspace.jpg', alt: 'A city street after dark lit by purple and blue neon', title: 'After Hours', subtitle: 'Ideas in motion' },
  { src: '/images/hero/digital-sculpture.jpg', alt: 'A luminous iridescent digital sculpture', title: 'New Dimensions', subtitle: 'Digital art' },
  { src: '/images/hero/creative-code.jpg', alt: 'A developer workspace glowing with code', title: 'Build Forward', subtitle: 'Creative technology' },
  { src: '/images/hero/circuit-study.jpg', alt: 'A close-up study of a dark circuit board', title: 'Made of Ideas', subtitle: 'Innovation' },
  { src: '/images/hero/retro-computing.jpg', alt: 'Retro computers illuminated with purple and blue neon', title: 'Play Different', subtitle: 'Creative computing' },
  { src: '/images/hero/immersive-light.jpg', alt: 'An immersive digital experience illuminated by light', title: 'Beyond the Screen', subtitle: 'Interactive media' },
];

gsap.registerPlugin(ScrollTrigger);

const headingVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.2, 0.75, 0.25, 1] } },
};

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef(null);
  const visualRef = useRef(null);
  const personRef = useRef(null);
  const carouselRef = useRef(null);
  const scrollTargetRef = useRef(0);

  function moveCarouselTo(index) {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const target = (index + heroItems.length) % heroItems.length;
    const difference = target - scrollTargetRef.current;
    const key = difference < 0 ? 'ArrowLeft' : 'ArrowRight';
    for (let step = 0; step < Math.abs(difference); step += 1) {
      carousel.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }));
    }
    scrollTargetRef.current = target;
  }

  useEffect(() => {
    const visual = visualRef.current;
    const person = personRef.current;
    if (!visual || !person || reduceMotion) return undefined;

    const moveX = gsap.quickTo(person, 'x', { duration: 0.8, ease: 'power3.out' });
    const moveY = gsap.quickTo(person, 'y', { duration: 0.8, ease: 'power3.out' });
    const handlePointerMove = (event) => {
      const bounds = visual.getBoundingClientRect();
      moveX((event.clientX - bounds.left - bounds.width / 2) * 0.018);
      moveY((event.clientY - bounds.top - bounds.height / 2) * 0.012);
    };
    const resetPosition = () => {
      moveX(0);
      moveY(0);
    };

    visual.addEventListener('pointermove', handlePointerMove);
    visual.addEventListener('pointerleave', resetPosition);
    return () => {
      visual.removeEventListener('pointermove', handlePointerMove);
      visual.removeEventListener('pointerleave', resetPosition);
      gsap.killTweensOf(person);
    };
  }, [reduceMotion]);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || reduceMotion) return undefined;

    const context = gsap.context(() => {
      ScrollTrigger.create({
        trigger: hero,
        pin: true,
        pinSpacing: true,
        start: 'top top+=92',
        end: () => `+=${Math.round(window.innerHeight * (heroItems.length - 1) * 0.46)}`,
        scrub: 0.35,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const target = Math.round(self.progress * (heroItems.length - 1));
          if (target !== scrollTargetRef.current) moveCarouselTo(target);
        },
      });
    }, hero);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh, { once: true });
    const imageObserver = new ResizeObserver(refresh);
    imageObserver.observe(hero);

    return () => {
      window.removeEventListener('load', refresh);
      imageObserver.disconnect();
      context.revert();
    };
  }, [reduceMotion]);

  return (
    <section className="section-shell hero-section" id="home" data-theme="light" ref={heroRef}>
      <div className="hero-section__main">
        <motion.div
          className="hero-copy"
          variants={headingVariants}
          initial={reduceMotion ? false : 'hidden'}
          animate={reduceMotion ? undefined : 'visible'}
        >
          <p className="eyebrow"><span className="status-dot" /> The student innovation network</p>
          <motion.h1 aria-label="Build. Compete. Ship.">
            <motion.span variants={lineVariants}>Build.</motion.span>
            <motion.span variants={lineVariants}>Compete.</motion.span>
            <motion.span className="hero-heading__ship highlight highlight--lime" variants={lineVariants}>Ship.</motion.span>
          </motion.h1>
          <p className="hero-copy__description">
            The student innovation network to ideate, collaborate and ship real-world projects.
          </p>
          <div className="hero-actions">
            <Button to="/register">Join CampusCode</Button>
            <a className="button button--outline" href="#arena">
              <Trophy size={18} aria-hidden="true" /><span>Join Hackathons</span>
            </a>
          </div>
        </motion.div>

        <div className="hero-visual" ref={visualRef}>
          <span className="hero-spark hero-spark--top" aria-hidden="true">+</span>
          <span className="hero-spark hero-spark--side" aria-hidden="true">+</span>
          <div className="hero-visual__caption">
            <span className="mono-label">CAMPUSCODE / 01</span>
          </div>
          <FlexCarousel
            containerRef={carouselRef}
            className="hero-carousel"
            items={heroItems}
            preset="liquid"
            intro="rise"
            cardHeight={0.48}
            gap={12}
            squeeze={0.2}
            focusOnClick={false}
            captions={false}
            fit="natural"
            radius={2}
            lensWidth={0.72}
            lensHeight={0.9}
            tilt={62}
            roundness={1}
            bend={0.34}
            reach={0.38}
            curl="twist"
            dispersion={0.45}
            liquid={0}
            followCursor={false}
            autoplay={false}
            interval={4}
            captureWheel={false}
          />
          <div className="hero-person" ref={personRef} aria-hidden="true">
            <motion.img
              src="/images/hero/guy.png"
              alt=""
              initial={reduceMotion ? false : { opacity: 0, y: 35, scale: 0.97 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.2, 0.75, 0.25, 1] }}
              draggable="false"
            />
          </div>
        </div>
      </div>

      <div className="hero-panels">
        <article className="hero-panel hero-panel--discover">
          <span className="mono-label">01 / DISCOVER</span>
          <ArrowUpRight className="hero-panel__arrow" size={22} />
          <h2>Find ideas, people<br />and opportunities<br />across your campus.</h2>
          <p>Meet builders and make your next campus idea real.</p>
          <div className="hero-panel__community">
            <span className="hero-panel__builder-count"><strong>12K+</strong> Builders</span>
          </div>
        </article>

        <article className="hero-panel hero-panel--build">
          <span className="mono-label">02 / BUILD</span>
          <ArrowUpRight className="hero-panel__arrow" size={22} />
          <h2>Ideas<br /><span>into <em>Impact.</em></span></h2>
        </article>

        <article className="hero-panel hero-panel--abstract" aria-label="Abstract CampusCode visual">
          <div className="hero-impact-art" aria-hidden="true">
            <img src="/images/hero/abstract.gif" alt="" />
            <span className="hero-impact-art__accent" />
          </div>
        </article>
      </div>

      <div className="hero-stats">
        <BrandMark className="hero-stats__mark" />
        {landingStats.map((stat) => (
          <div className="hero-stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
        <a className="hero-stats__arrow" href="#about" aria-label="Discover CampusCode">
          <ArrowRight size={21} />
        </a>
      </div>
    </section>
  );
}
