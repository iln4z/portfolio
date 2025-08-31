import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FadeUp({
  children,
  className = '',
  style = {},
  duration = 1,
  ease = 'power3.out',
  fromY = 60,
  opacityFrom = 0,
  start = 'top 90%',
  end = 'bottom 10%',
  once = true,
  stagger = 0,
  delay = 0,
}) {
  const containerRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  useEffect(() => {
    const $el = containerRef.current;
    if (!$el) return;

    const targets = $el.children.length > 0 ? $el.children : $el;

    gsap.fromTo(
      targets,
      {
        y: fromY,
        opacity: opacityFrom,
        willChange: 'transform, opacity',
      },
      {
        y: 0,
        opacity: 1,
        duration,
        ease,
        delay,
        stagger,
        clearProps: 'willChange',
        scrollTrigger: {
          trigger: $el,
          start,
          end,
          toggleActions: once ? 'play none none none' : 'play none none reset',
          once,
          // markers: true
        },
      }
    );

    const triggers = ScrollTrigger.getAll();
    const trigger = triggers.find(t => t.vars.trigger === $el);
    scrollTriggerRef.current = trigger;

    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }
    };
  }, [
    duration,
    ease,
    fromY,
    opacityFrom,
    start,
    end,
    once,
    stagger,
    delay,
  ]);

  return (
    <div
      ref={containerRef}
      className={`fade-up-container ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}