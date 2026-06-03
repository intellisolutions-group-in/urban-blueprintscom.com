"use client";
import React, { useEffect, useState, useRef } from 'react';
import { useInView, motion, useReducedMotion } from 'framer-motion';
import { CheckSquare, Trophy, ShieldAlert, Cpu } from 'lucide-react';
import { Container } from '@/components/layout/Container';

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
}

const statsData: StatItem[] = [
  {
    icon: CheckSquare,
    value: 150,
    suffix: '+',
    label: 'Capital Projects Completed'
  },
  {
    icon: Trophy,
    value: 25,
    suffix: '+',
    label: 'Global Design Awards'
  },
  {
    icon: Cpu,
    value: 45,
    suffix: '+',
    label: 'Structural Specialists'
  },
  {
    icon: ShieldAlert,
    value: 100,
    suffix: '%',
    label: 'On-Time Project Delivery'
  }
];

function CountUp({
  value,
  duration = 2000,
  onComplete
}: {
  value: number;
  duration?: number;
  onComplete?: () => void
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (reducedMotion) {
      setCount(value);
      if (onComplete) onComplete();
      return;
    }

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercentage = Math.min(progress / duration, 1);

      // Ease-out cubic function for smooth decay
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
      const easedProgress = easeOutCubic(progressPercentage);

      setCount(Math.floor(startValue + easedProgress * (value - startValue)));

      if (progressPercentage < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
        if (onComplete) onComplete();
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration, onComplete, reducedMotion]);

  return <span ref={ref}>{count}</span>;
}

export function Stats() {
  const reducedMotion = useReducedMotion();

  // Container viewport reveal variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative py-20 bg-primary text-white overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '16px 16px' }} />

      {/* Slowly floating particle nodes overlay */}
      {!reducedMotion && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-accent/20"
              style={{
                top: `${(i * 7 + 13) % 100}%`,
                left: `${(i * 13 + 7) % 100}%`,
              }}
              animate={{
                y: [0, (i % 2 === 0 ? 30 : -30), 0],
                x: [0, (i % 3 === 0 ? 30 : -30), 0],
                opacity: [0.15, 0.45, 0.15],
              }}
              transition={{
                duration: 7 + (i % 4) * 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Glowing Accents - Slow Pulses */}
      <motion.div
        animate={reducedMotion ? {} : { opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-1/4 -top-1/2 w-[600px] h-[600px] bg-accent/15 rounded-full blur-[150px] pointer-events-none z-0"
      />
      <motion.div
        animate={reducedMotion ? {} : { opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 8, delay: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-1/4 -bottom-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none z-0"
      />

      <Container className="relative z-10">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            const [completed, setCompleted] = useState(false);

            return (
              <motion.div
                key={stat.label}
                variants={cardVariants}
                animate={completed && !reducedMotion ? { scale: [1, 1.05, 1], transition: { duration: 0.4 } } : {}}
                whileHover={{
                  y: -5,
                  borderColor: "rgba(180, 142, 75, 0.4)",
                  boxShadow: "0 15px 35px -10px rgba(0,0,0,0.3)"
                }}
                className="p-6 rounded-[var(--radius-xl)] bg-white/5 border border-white/10 hover:border-accent/40 backdrop-blur-sm transition-all duration-300 shadow-[var(--shadow-soft)] cursor-default text-center group"
              >
                {/* Neon Floating Icon */}
                <motion.div
                  whileHover={{ scale: 1.12, rotate: [0, -3, 3, 0] }}
                  className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-all duration-300"
                >
                  <Icon className="text-accent" size={24} />
                </motion.div>

                {/* Number */}
                <div className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-2 text-white">
                  <CountUp value={stat.value} onComplete={() => setCompleted(true)} />
                  <span className="text-accent">{stat.suffix}</span>
                </div>

                {/* Label */}
                <p className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wider leading-relaxed">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
