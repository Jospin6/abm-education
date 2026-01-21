"use client";
import { motion } from 'framer-motion';
import { ArrowRight, Users, School, GraduationCap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import Link from 'next/link';

const stats = [
  {
    icon: Users,
    value: 5,
    suffix: '+',
    label: 'Élèves accompagnés',
    description: 'Jeunes formés et soutenus',
  },
  {
    icon: School,
    value: 3,
    suffix: '+',
    label: 'Écoles partenaires',
    description: 'Institutions engagées',
  },
  {
    icon: GraduationCap,
    value: 1,
    suffix: '+',
    label: 'Bourses attribuées',
    description: "Pour l'international",
  },
  {
    icon: Globe,
    value: 3,
    suffix: '+',
    label: 'Pays de destination',
    description: 'Pour nos étudiants',
  },
];

export const ImpactSection = () => {
  return (
    <section className="py-24 hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-20 w-64 h-64 rounded-full bg-secondary/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/90 mb-4"
          >
            Notre Impact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Des résultats concrets pour l'Afrique
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Chaque chiffre représente une vie transformée, une opportunité créée, 
            un avenir rendu possible grâce à votre soutien.
          </motion.p>
          <div className="section-divider bg-white/30 mt-6 mx-auto" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/10 transition-all">
                <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-7 h-7 text-gray-200" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white font-medium mb-1">{stat.label}</div>
                <div className="text-white/50 text-sm">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 gap-2"
          >
            <Link href="/a-propos">
              Découvrir nos histoires
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
