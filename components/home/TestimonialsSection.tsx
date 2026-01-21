"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Grâce à ABM-EDUCATION, j'ai pu obtenir une bourse pour étudier l'informatique au Canada. Ce rêve semblait impossible, mais l'équipe m'a accompagné à chaque étape.",
    author: 'Sarah M.',
    role: 'Étudiante en Informatique',
    location: 'Université de Montréal',
    image: '/placeholder.svg',
  },
  {
    quote:
      "Le programme Tech Club a transformé ma classe. Mes élèves sont maintenant passionnés par le coding et envisagent des carrières dans la technologie.",
    author: 'Jean-Pierre K.',
    role: 'Enseignant',
    location: 'Kinshasa, RDC',
    image: '/placeholder.svg',
  },
  {
    quote:
      "La Bourse Denis Mukwege m'a donné une seconde chance. Après tout ce que j'ai traversé, pouvoir continuer mes études est un miracle.",
    author: 'Grace N.',
    role: 'Boursière Mukwege',
    location: 'Bukavu, RDC',
    image: '/placeholder.svg',
  },
  {
    quote:
      "En tant que partenaire, nous voyons l'impact direct de notre collaboration avec ABM. Ces jeunes ont un potentiel extraordinaire.",
    author: 'Marie L.',
    role: 'Directrice Partenariats',
    location: 'ONG Internationale',
    image: '/placeholder.svg',
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className=" bg-muted">
      {/* <div className="container mx-auto px-4">
        <SectionHeading
          badge="Témoignages"
          title="Ils racontent leur histoire"
          subtitle="Les voix de ceux dont la vie a été transformée par ABM-EDUCATION."
        />

        <div className="max-w-4xl mx-auto mt-12">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-2xl p-8 md:p-12 shadow-(--shadow-lg) border border-border/50"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-secondary" />
                </div>

                <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-muted overflow-hidden">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </div>
                    <div className="text-sm text-secondary">
                      {testimonials[currentIndex].location}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-card border border-border hover:border-secondary hover:bg-secondary/5 flex items-center justify-center transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-secondary w-8'
                        : 'bg-border hover:bg-muted-foreground'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-card border border-border hover:border-secondary hover:bg-secondary/5 flex items-center justify-center transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="h-112.5 bg-neutral-800">
        <Image
          src="/images/main1.png"
          alt="Apprendre avec ABM-EDUCATION"
          width={1200}
          height={450}
          className="object-cover h-full w-full"
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
