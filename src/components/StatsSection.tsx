import React, { useState, useEffect, useRef } from 'react';
import './StatsSection.css';

// Simple AnimatedCounter component
interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  isVisible: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  suffix = '',
  prefix = '',
  duration = 2000,
  isVisible
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return <span>{prefix}{count}{suffix}</span>;
};

interface StatItem {
  subtitle: string;
  value: number;
  suffix: string;
  prefix?: string;
}

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats: StatItem[] = [
    {
      subtitle: "CALLS HANDLED",
      value: 500000,
      suffix: "+",
    },
    {
      subtitle: "LEADS CONVERTED",
      value: 125000,
      suffix: "+",
    },
    {
      subtitle: "BUSINESSES SERVED",
      value: 2500,
      suffix: "+",
    },
    {
      subtitle: "HOURS SAVED",
      value: 75000,
      suffix: "+",
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="stats-section">
      <div className="stats-section__background"></div>

      <div className="stats-section__container">

        <div className="stats-section__grid">
          {stats.map((stat, index) => (
            <div
              key={stat.subtitle}
              className={`stats-section__item ${isVisible ? 'animate-in' : ''}`}
              style={{
                '--animation-delay': `${index * 0.15}s`
              } as React.CSSProperties}
            >
              <div className="stats-section__subtitle">
                {stat.subtitle}
              </div>
              <div className="stats-section__value">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  duration={2000}
                  isVisible={isVisible}
                  delay={index * 200}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
