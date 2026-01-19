"use client";
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const CTASection = () => {
  return (
    <section className="py-24 bg-muted relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-secondary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-8"
          >
            <Sparkles className="w-10 h-10 text-secondary" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            L'éducation aujourd'hui,
            <br />
            <span className="text-secondary">l'excellence demain.</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Rejoignez le mouvement ABM-EDUCATION et participez à la transformation 
            de l'éducation en Afrique. Ensemble, formons les leaders de demain.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="btn-gold gap-2 px-8 h-14 text-base">
              <Link href="/programmes">
                Découvrir nos programmes
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-8 h-14 text-base border-2"
            >
              <Link href="/contact">Prendre contact</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
