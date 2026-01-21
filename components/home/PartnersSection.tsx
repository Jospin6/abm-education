"use client";
import { motion } from 'framer-motion';
import { ArrowRight, Building2, GraduationCap, Handshake, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import Link from 'next/link';

const partnerTypes = [
  {
    icon: Building2,
    title: 'Entreprises',
    description: 'Sponsorisez des programmes et investissez dans les talents de demain.',
  },
  {
    icon: GraduationCap,
    title: 'Universités',
    description: 'Accueillez nos étudiants et créez des passerelles académiques.',
  },
  {
    icon: Handshake,
    title: 'ONG & Fondations',
    description: 'Collaborez sur des projets d\'impact à grande échelle.',
  },
  {
    icon: Heart,
    title: 'Particuliers',
    description: 'Devenez mentor, parrain ou donateur pour changer des vies.',
  },
];

export const PartnersSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Partenariats"
          title="Ensemble, nous pouvons plus"
          subtitle="Rejoignez notre réseau de partenaires engagés pour l'éducation africaine."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {partnerTypes.map((partner, index) => (
            <motion.div
              key={partner.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card-premium p-6 h-full text-center group hover:border-secondary/30">
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/10 transition-colors">
                  <partner.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{partner.title}</h3>
                <p className="text-sm text-muted-foreground">{partner.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-[#08233E] from-primary to-primary/90 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Prêt à faire la différence ?
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Que vous soyez une entreprise, une institution ou un particulier, 
              votre contribution peut transformer des vies. Rejoignez-nous.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="btn-gold gap-2">
                <Link href="/contact">
                  Devenir partenaire
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Link href="/don">Faire un don</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
