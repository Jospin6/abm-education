"use client"
import { HeroSection } from '@/components/home/HeroSection';
import { PrioritiesSection } from '@/components/home/PrioritiesSection';
import { ProgramsPreview } from '@/components/home/ProgramsPreview';
import { ImpactSection } from '@/components/home/ImpactSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { PartnersSection } from '@/components/home/PartnersSection';
import { CTASection } from '@/components/home/CTASection';
import Layout from '@/components/layout/Layout';


export default function LandingPage() {
    return <Layout>
        <HeroSection />
        <PrioritiesSection />
        <ProgramsPreview />
        <ImpactSection />
        <TestimonialsSection />
        <PartnersSection />
        <CTASection />
    </Layout>;
}