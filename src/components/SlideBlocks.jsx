import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SlideInBlocks({ children, leftContent, rightContent }) {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const $left = leftRef.current;
    const $right = rightRef.current;

    if (!$left || !$right) return;

    gsap.fromTo(
      $left,
      {
        x: '32px',
        opacity: 0,
        filter: 'blur(20px)',
      },
      {
        x: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 3.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: $left,
          start: 'top 5%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );

    gsap.fromTo(
      $right,
      {
        x: '-32px',
        opacity: 0,
        filter: 'blur(20px)',
      },
      {
        x: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 3.4,
        ease: 'power3.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: $right,
          start: 'top 5%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );

    return () => {
      const triggers = ScrollTrigger.getAll();
      triggers.forEach(trigger => {
        if (trigger.vars.trigger === $left || trigger.vars.trigger === $right) {
          trigger.kill();
        }
      });
    };
  }, [leftContent, rightContent]);

  return (
    <div className="slide-in-container" style={{
      display: 'flex',


      gap: '60px',

      margin: '0 auto',
      flexWrap: 'wrap',
    }}>
      <div ref={leftRef} className="slide-in-left" style={{
        flex: '1 1 400px',
        opacity: 0,
      }}>
        {leftContent}
      </div>

      <div ref={rightRef} className="slide-in-right" style={{
        flex: '1 1 500px',
        opacity: 0,
      }}>
        {rightContent}
      </div>
    </div>
  );
}