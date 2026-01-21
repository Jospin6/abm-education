"use client";
import { Hero } from "@/components/hero";
import Layout from "@/components/layout/Layout";
import Image from "next/image";

type LearningOption = {
  title: string;
  subtitle: string;
  tag: string;
  href: string;
  image: string;
  bullets: string[];
};

type Track = {
  title: string;
  desc: string;
  icon: string;
  href: string;
  image: string;
};

const tracks: Track[] = [
  {
    title: "ABM TECH CLUB",
    desc: "Apprendre le coding, la programmation et la robotique à travers des ateliers concrets et des projets.",
    icon: "💻",
    href: "/programmes/abm-tech-club",
    image:
      "/images/code.jpg",
  },
  {
    title: "ABM ÉLITE INTERNATIONALE",
    desc: "Orientation, préparation du dossier et intégration pour les études/formation à l’international.",
    icon: "🌍",
    href: "/programmes/abm-elite-internationale",
    image:
      "/images/class.jpg",
  },
  {
    title: "Un élève, un ordinateur",
    desc: "Accès à des laptops abordables pour apprendre, pratiquer et progresser durablement.",
    icon: "🧠",
    href: "/programmes/un-eleve-un-ordinateur",
    image:
      "/images/ordi.jpg",
  },
  {
    title: "ABM Education Award",
    desc: "Célébrer l’excellence éducative et inspirer la performance scolaire et pédagogique.",
    icon: "🏆",
    href: "/programmes/education-award",
    image:
      "/images/ward.png",
  },
  {
    title: "Bourse Mukwege",
    desc: "Soutenir la persévérance et la résilience, et permettre l’accès à des études en Afrique ou à l’étranger.",
    icon: "🎓",
    href: "/programmes/bourse-mukwege",
    image:
      "/images/bourse.png",
  },
];

const options: LearningOption[] = [
  {
    title: "Programmation & Coding",
    subtitle:
      "Apprendre à résoudre des problèmes, écrire du code et créer des projets web/app.",
    tag: "Compétences tech",
    href: "#",
    image:
      "/images/coding.jpg",
    bullets: [
      "Algorithmique, logique et bonnes pratiques",
      "Projets concrets (portfolio)",
      "Collaboration (Git, travail en équipe)",
      "Progression débutant → intermédiaire",
    ],
  },
  {
    title: "Robotique & Innovation",
    subtitle:
      "Découvrir l’électronique, les capteurs et la construction de prototypes utiles.",
    tag: "STEM",
    href: "#",
    image:
      "/images/robotic.jpg",
    bullets: [
      "Prototypage et méthode d’innovation",
      "Capteurs, moteurs, logique embarquée",
      "Défis et mini-compétitions",
      "Démonstrations & démo day",
    ],
  },
  // {
  //   title: "Orientation & Études Internationales",
  //   subtitle:
  //     "Un accompagnement structuré pour choisir, préparer et réussir son projet international.",
  //   tag: "International",
  //   href: "/programmes/abm-elite-internationale",
  //   image:
  //     "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=2200&q=80",
  //   bullets: [
  //     "Stratégie pays/écoles + calendrier",
  //     "Dossier (CV, lettres, justificatifs)",
  //     "Préparation aux entretiens (si requis)",
  //     "Intégration et plan de réussite",
  //   ],
  // },
  // {
  //   title: "Accès au matériel (Laptop)",
  //   subtitle:
  //     "Apprendre sérieusement nécessite des outils : ABM facilite l’accès à des ordinateurs abordables.",
  //   tag: "Équipement",
  //   href: "/programmes/un-eleve-un-ordinateur",
  //   image:
  //     "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2200&q=80",
  //   bullets: [
  //     "Ordinateurs reconditionnés (selon disponibilité)",
  //     "Paiement flexible et échelonné",
  //     "Utilisation pendant la formation",
  //     "Possession finale après paiement complet",
  //   ],
  // },
  // {
  //   title: "Excellence & Performance (Awards)",
  //   subtitle:
  //     "Motiver la qualité : récompenser les meilleurs enseignants, élèves et écoles.",
  //   tag: "Reconnaissance",
  //   href: "/programmes/abm-education-award",
  //   image:
  //     "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2200&q=80",
  //   bullets: [
  //     "Culture du mérite et de la discipline",
  //     "Transparence des critères",
  //     "Visibilité et opportunités",
  //     "Communauté des lauréats",
  //   ],
  // },
  // {
  //   title: "Bourses & Parrainage",
  //   subtitle:
  //     "Soutien éducatif pour les apprenants persévérants : financement, mentoring et suivi.",
  //   tag: "Opportunités",
  //   href: "/programmes/bourse-excellent-denis-mukwege",
  //   image:
  //     "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=2200&q=80",
  //   bullets: [
  //     "Bourses Afrique ou international",
  //     "Mentorat et accompagnement",
  //     "Suivi de progression",
  //     "Approche humaine et confidentielle",
  //   ],
  // },
];

const methods = [
  {
    title: "Apprentissage par projets",
    desc: "On apprend en construisant : mini-projets, prototypes, présentations, portfolio.",
    icon: "🧩",
  },
  {
    title: "Progression structurée",
    desc: "Du niveau débutant au niveau avancé : étapes, objectifs, évaluations et feedback.",
    icon: "📈",
  },
  {
    title: "Mentorat & coaching",
    desc: "Un accompagnement qui renforce la confiance, la discipline et la vision de carrière.",
    icon: "🤝",
  },
  {
    title: "Communauté & événements",
    desc: "Démo day, challenges, cérémonies : motivation et culture d’excellence.",
    icon: "🌟",
  },
];

export default function ApprendrePage() {
  return (
    <Layout>
      {/* HERO */}
      <Hero title="Choisissez votre voie d’apprentissage." subtitle="ABM-EDUCATION propose plusieurs options : technologie, robotique,
            orientation internationale, accès au matériel, reconnaissance de
            l’excellence et bourses. Tout est conçu pour créer des résultats
            concrets et durables." url="/programmes" urlTitle="Découvrir nos programmes"/>

      {/* TRACKS (parcours principaux) */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Parcours ABM</h2>
            <p className="mt-2 text-neutral-600">
              Des parcours complets, structurés et orientés impact.
            </p>
          </div>
          <div className="text-sm text-neutral-500">📍 Kinshasa & Bukavu — RDC</div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tracks.map((t) => (
            <a
              key={t.title}
              href={t.href}
              className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative h-44">
                <Image src={t.image} alt={t.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    <span>{t.icon}</span>
                    <span>Parcours</span>
                  </div>
                  <div className="mt-2 text-lg font-semibold text-white">
                    {t.title}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm leading-relaxed text-neutral-700">
                  {t.desc}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
                  Découvrir <span className="transition group-hover:translate-x-0.5">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* METHODS */}
      <section className="bg-neutral-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold">Comment on apprend chez ABM</h2>
          <p className="mt-2 max-w-2xl text-neutral-600">
            Notre pédagogie vise la progression réelle : compétences, discipline,
            confiance et résultats mesurables.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {methods.map((m) => (
              <div
                key={m.title}
                className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <div className="text-2xl">{m.icon}</div>
                <div className="mt-3 font-semibold">{m.title}</div>
                <div className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {m.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPTIONS (cards détaillées) */}
      <section id="options" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold">Options d’apprentissage</h2>
        <p className="mt-2 max-w-2xl text-neutral-600">
          Sélectionnez une option pour voir le programme associé et les détails.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {options.map((o) => (
            <a
              key={o.title}
              href={o.href}
              className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative h-52">
                <Image src={o.image} alt={o.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {o.tag}
                  </div>
                  <div className="mt-2 text-xl font-semibold text-white">
                    {o.title}
                  </div>
                  <div className="mt-1 text-sm text-white/90">{o.subtitle}</div>
                </div>
              </div>

              <div className="p-6">
                <ul className="grid gap-2 sm:grid-cols-2">
                  {o.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-neutral-700">
                      <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-emerald-600" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
                  En savoir plus <span className="transition group-hover:translate-x-0.5">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-3xl bg-[#08233E] p-10 text-white">
          <h2 className="text-2xl font-semibold">
            Vous ne savez pas quoi choisir ?
          </h2>
          <p className="mt-3 max-w-2xl text-white/80">
            Nous vous aidons à sélectionner la meilleure option selon le profil
            (élève, enseignant, professionnel), l’objectif (tech, international,
            bourse) et le contexte (école, ville, ressources).
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-white/90"
            >
              Nous contacter
            </a>
            {/* <a
              href="/programmes"
              className="rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/15"
            >
              Voir tous les programmes
            </a> */}
          </div>
        </div>
      </section>
      <div className="my-10 h-112.5 bg-neutral-800">
            <Image
              src="/images/main1.png"
              alt="Apprendre avec ABM-EDUCATION"
              width={1200}
              height={450}
              className="object-cover w-full"
            />
      </div>
    </Layout>
  );
}
