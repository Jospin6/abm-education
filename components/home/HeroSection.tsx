"use client";
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Globe, Lightbulb, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const HeroSection = () => {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        
        {/* Floating Orbs */}
        <motion.div
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-secondary/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-secondary/5 blur-2xl"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold text-white mt-8 mb-6 leading-tight"
          >
            Former l'
            <span className="bg-linear-to-r from-[hsl(42_91%_62%)] to-[hsl(42_91%_52%)] bg-clip-text text-transparent font-semibold">
              excellence africaine
            </span>
            .
            <br />
            Connecter l'Afrique au{' '}
            <span className="relative">
              monde
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -bottom-2 left-0 w-full h-1 bg-secondary origin-left"
              />
            </span>
            .
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm md:text-lg text-white/70 max-w-3xl mx-auto mb-10"
          >
            ABM-EDUCATION accompagne les jeunes africains vers l'excellence académique, 
            technologique et internationale. Ensemble, construisons les leaders de demain.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <Button asChild size="lg" className="btn-gold text-base px-8 h-14 gap-2">
              <Link href="/programmes">
                Découvrir nos programmes
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            {/* <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base px-8 h-14 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white"
            >
              <Link href="/partenariats">Devenir partenaire</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="text-base px-8 h-14 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact">Nous contacter</Link>
            </Button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
