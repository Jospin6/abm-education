"use client";
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  centered?: boolean;
  light?: boolean;
}

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  children,
  centered = true,
  light = false,
}: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} mb-12`}
    >
      {badge && (
        <span
          className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
            light
              ? 'bg-white/10 text-white/90'
              : 'bg-secondary/10 text-secondary-foreground'
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? 'text-white' : 'text-foreground'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg ${
            light ? 'text-white/70' : 'text-muted-foreground'
          }`}
        >
          {subtitle}
        </p>
      )}
      {children}
      <div
        className={`section-divider mt-6 ${centered ? 'mx-auto' : ''} ${
          light ? 'bg-white/30' : ''
        }`}
      />
    </motion.div>
  );
};

export default SectionHeading;
