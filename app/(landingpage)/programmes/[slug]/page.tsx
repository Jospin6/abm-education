"use client";
import { programmesData } from '@/lib/data';
import { Metadata } from 'next';
import { notFound, useParams } from 'next/navigation';
import { Hero } from '@/components/hero';
import Layout from '@/components/layout/Layout';

type PageProps = {
  params: {
    slug: string;
  };
};


export default function ProgrammesPage() {
   const params = useParams<{ slug: string }>(); // si ton segment = [id]
  const slug = params?.slug;
  const programme = programmesData.find((item) => item.slug === slug);

  if (!programme) {
    notFound();
  }

  return (
    <Layout>
      <Hero title={programme.title} subtitle={programme.subtitle} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {programme.title}
              </h2>
              <p className="text-lg text-gray-600">{programme.shortDescription}</p>
            </div>

            <div className="space-y-4 text-gray-700">
              {programme.fullDescription.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
              <img
                src={programme.imageUrl}
                alt={programme.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="grid gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              {programme.duration && (
                <div>
                  <div className="text-sm font-semibold text-gray-500">Duree</div>
                  <div className="text-gray-900">{programme.duration}</div>
                </div>
              )}
              {programme.ageGroup && (
                <div>
                  <div className="text-sm font-semibold text-gray-500">Tranche d'age</div>
                  <div className="text-gray-900">{programme.ageGroup}</div>
                </div>
              )}
              {programme.priceInfo && (
                <div>
                  <div className="text-sm font-semibold text-gray-500">Tarification</div>
                  <div className="text-gray-900">{programme.priceInfo}</div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Fonctionnalites</h3>
            <ul className="space-y-3 text-gray-700">
              {programme.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Objectifs</h3>
            <ul className="space-y-3 text-gray-700">
              {programme.objectives.map((objective) => (
                <li key={objective} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600" />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Public cible</h3>
            <ul className="space-y-3 text-gray-700">
              {programme.targetAudience.map((audience) => (
                <li key={audience} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-indigo-600" />
                  <span>{audience}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Benefices</h3>
            <ul className="space-y-3 text-gray-700">
              {programme.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-purple-600" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {programme.stats && (
          <div className="mt-14 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-700 p-8 text-white shadow-xl">
            <h3 className="text-3xl font-bold mb-8 text-center">
              Notre impact en chiffres
            </h3>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {programme.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 text-center bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Interesse par ce programme ?
          </h3>
          <p className="text-gray-600 mb-6 text-lg">
            Que vous soyez un eleve, un enseignant, une ecole ou un partenaire,
            nous avons une solution adaptee a vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={programme.cta.link}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              {programme.cta.text}
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
