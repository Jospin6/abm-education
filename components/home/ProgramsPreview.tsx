"use client";
import { motion } from 'framer-motion';
import { ArrowRight, Code, Plane, Laptop, Trophy, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import Link from 'next/link';

const programs = [
  {
    icon: Code,
    title: 'ABM Tech Club',
    description:
      "Formation en programmation, coding, robotique et compétences numériques pour préparer les jeunes à l'économie digitale.",
    link: '/programmes/tech-club',
    color: 'bg-accent',
    badge: 'Technologie',
  },
  {
    icon: Plane,
    title: 'ABM Élite Internationale',
    description:
      "Accompagnement personnalisé pour les études supérieures à l'étranger : orientation, candidatures, bourses et préparation au départ.",
    link: '/programmes/elite-internationale',
    color: 'bg-secondary',
    badge: 'International',
  },
  {
    icon: Laptop,
    title: 'Un Élève, Un Ordinateur',
    description:
      "Programme d'accès aux outils numériques avec système de paiement échelonné pour démocratiser l'accès à la technologie.",
    link: '/programmes/un-eleve-un-ordinateur',
    color: 'bg-primary',
    badge: 'Équipement',
  },
  {
    icon: Trophy,
    title: 'ABM Education Award',
    description:
      "Récompenses annuelles célébrant l'excellence éducative : meilleurs élèves, enseignants innovants et écoles modèles.",
    link: '/programmes/education-award',
    color: 'bg-secondary',
    badge: 'Excellence',
  },
  {
    icon: Heart,
    title: 'Bourse Denis Mukwege',
    description:
      "Bourse de persévérance pour étudiants ayant surmonté des épreuves exceptionnelles, nommée en l'honneur du Prix Nobel de la Paix.",
    link: '/programmes/bourse-mukwege',
    color: 'bg-accent',
    badge: 'Solidarité',
  },
];

export const ProgramsPreview = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Nos Programmes"
          title="Des solutions concrètes pour chaque besoin"
          subtitle="Cinq programmes complémentaires pour accompagner les jeunes africains à chaque étape de leur parcours éducatif."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <Link href={program.link} className="block h-full">
                <div className="card-premium p-6 h-full flex flex-col group-hover:border-secondary/30">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${program.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <program.icon className="w-6 h-6 text-gray-900" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {program.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground text-sm flex-1 mb-4">
                    {program.description}
                  </p>

                  {/* Link */}
                  <div className="flex items-center text-secondary font-medium text-sm group-hover:gap-3 gap-2 transition-all">
                    En savoir plus
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="btn-gold gap-2">
            <Link href="/programmes">
              Voir tous les programmes
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsPreview;
