
"use client"

import { Hero } from "@/components/hero";
import Layout from "@/components/layout/Layout"
import Image from "next/image";

export default function AproposPage() {
  return <Layout>
    <Hero title=" À propos d’Africa Bright Minds Education" subtitle="Africa Bright Minds Education (ABM-EDUCATION) est un organisme éducatif
            engagé dans la transformation durable de l’Afrique par l’éducation,
            la technologie et le leadership." url="/programmes" urlTitle="Découvrir nos programmes" />
    {/* QUI SOMMES-NOUS */}
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-2xl font-semibold">Qui sommes-nous ?</h2>
          <p className="mt-4 leading-relaxed text-neutral-700">
            <strong>Africa Bright Minds Education (ABM-EDUCATION)</strong> est un
            organisme éducatif fondé par <strong>Jerry Salumu Nalweshe</strong>,
            Président Fondateur, et <strong>Rahab Njoki Njoroge</strong>,
            Co-fondatrice.
          </p>

          <p className="mt-4 leading-relaxed text-neutral-700">
            ABM-EDUCATION œuvre pour bâtir une nouvelle génération africaine
            compétente, innovante et capable de s’imposer dans un monde
            globalisé, tout en restant profondément ancrée dans les réalités et
            les valeurs du continent africain.
          </p>

          <p className="mt-4 leading-relaxed text-neutral-700">
            À travers des programmes éducatifs, technologiques et
            internationaux, nous créons des passerelles concrètes entre le
            potentiel des talents africains et les opportunités locales et
            mondiales.
          </p>
        </div>

        <div className="relative aspect-4/3 overflow-hidden rounded-3xl">
          <Image
            src="/images/logo.png"
            alt="Équipe éducative et collaboration"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>

    {/* VISION & MISSION */}
    <section className="bg-neutral-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold">Notre vision</h3>
            <p className="mt-4 leading-relaxed text-neutral-700">
              Former une jeunesse africaine excellente, autonome et capable de
              transformer durablement l’Afrique grâce à une éducation de
              qualité, à la maîtrise des technologies et à un leadership
              responsable.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold">Notre mission</h3>
            <p className="mt-4 leading-relaxed text-neutral-700">
              Créer et faciliter des opportunités d’éducation, de formation
              technologique et d’études internationales pour les élèves,
              enseignants et professionnels africains, en réduisant les
              inégalités d’accès au savoir et aux outils du futur.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* VALEURS */}
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-semibold">Nos valeurs fondamentales</h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Excellence",
            desc: "Nous visons des standards élevés dans la qualité de nos programmes, de notre accompagnement et de notre impact.",
          },
          {
            title: "Équité & inclusion",
            desc: "Nous croyons que chaque talent mérite une chance, indépendamment du genre, du milieu social ou du contexte.",
          },
          {
            title: "Innovation",
            desc: "Nous intégrons les technologies et les nouvelles méthodes pédagogiques pour préparer aux métiers du futur.",
          },
          {
            title: "Responsabilité",
            desc: "Nous agissons avec éthique, transparence et responsabilité envers les bénéficiaires et partenaires.",
          },
          {
            title: "Engagement communautaire",
            desc: "Nous travaillons avec les écoles, familles et communautés pour un impact durable et collectif.",
          },
        ].map((v) => (
          <div
            key={v.title}
            className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
          >
            <h3 className="font-semibold">{v.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              {v.desc}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* FONDATEURS */}
    <section className="bg-neutral-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold">Leadership & gouvernance</h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="/images/jery.jpg"
                alt="Équipe éducative et collaboration"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="mt-4 font-semibold">
              Jerry Salumu Nalweshe
            </h3>
            <p className="text-sm text-neutral-600">
              Président Fondateur
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Visionnaire éducatif engagé dans la transformation de l’éducation
              africaine par l’innovation, la technologie et la structuration
              d’opportunités durables pour la jeunesse.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="/images/jery.jpg"
                alt="Équipe éducative et collaboration"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="mt-4 font-semibold">
              Rahab Njoki Njoroge
            </h3>
            <p className="text-sm text-neutral-600">
              Co-fondatrice
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Actrice clé de l’accompagnement académique et humain, engagée pour
              l’inclusion, l’excellence et l’ouverture internationale des
              talents africains.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* FOOTER CTA */}
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="rounded-3xl bg-neutral-900 p-10 text-white">
        <h2 className="text-2xl font-semibold">
          Ensemble, investissons dans l’avenir de l’Afrique
        </h2>
        <p className="mt-4 max-w-2xl text-white/80">
          ABM-EDUCATION travaille avec les écoles, institutions, partenaires
          techniques et financiers pour construire un écosystème éducatif
          africain fort, inclusif et tourné vers l’avenir.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/contact"
            className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-white/90"
          >
            Nous contacter
          </a>
          <a
            href="/programmes"
            className="rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/15"
          >
            Découvrir nos programmes
          </a>
        </div>
      </div>
    </section>

  </Layout>;
}