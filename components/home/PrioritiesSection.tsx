"use client";
import { motion } from 'framer-motion';
import { GraduationCap, Cpu, Globe, Award } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const priorities = [
  {
    icon: GraduationCap,
    title: 'Excellence Académique',
    description:
      "Accompagner les élèves et étudiants vers les meilleures performances scolaires et universitaires à travers un suivi personnalisé et des ressources de qualité.",
    color: 'from-secondary to-secondary/80',
  },
  {
    icon: Cpu,
    title: 'STEM-M & Technologie',
    description:
      "Former la prochaine génération de leaders technologiques africains en sciences, technologie, ingénierie, mathématiques et médecine.",
    color: 'from-accent to-accent/80',
  },
  {
    icon: Globe,
    title: 'Internationalisation',
    description:
      "Connecter les talents africains aux meilleures opportunités d'études et de carrière à l'échelle mondiale.",
    color: 'from-secondary to-accent',
  },
  {
    icon: Award,
    title: 'Reconnaissance du Mérite',
    description:
      "Célébrer et récompenser l'excellence éducative sous toutes ses formes, des élèves aux enseignants et institutions.",
    color: 'from-accent to-secondary',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export const PrioritiesSection = () => {
  return (
    <section className="py-24 bg-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          badge="Nos Priorités"
          title="Quatre piliers pour l'excellence"
          subtitle="ABM-EDUCATION s'engage sur quatre axes stratégiques pour transformer l'éducation en Afrique et préparer les jeunes aux défis du 21e siècle."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {priorities.map((priority, index) => (
            <motion.div
              key={priority.title}
              variants={itemVariants}
              className="group"
            >
              <div className="card-premium p-8 h-full flex flex-col items-center text-center hover:border-secondary/30 transition-all">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-linear-to-br ${priority.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <priority.icon className="w-8 h-8 text-white" />
                </div>

                {/* Number Badge */}
                <span className="text-xs font-bold text-secondary mb-2">
                  0{index + 1}
                </span>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {priority.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {priority.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PrioritiesSection;
