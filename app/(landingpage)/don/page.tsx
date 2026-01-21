"use client";
import { Hero } from "@/components/hero";
import Layout from "@/components/layout/Layout";
import Image from "next/image";


const donationWays = [
  {
    title: "Don d’ordinateurs",
    subtitle: "Matériel pour apprendre, coder et créer",
    icon: "💻",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=2000&q=80",
    bullets: [
      "Ordinateurs portables (neufs ou reconditionnés)",
      "Écrans, claviers, souris, accessoires",
      "Kits robotique / électronique (optionnel)",
      "Collecte et remise via un point ABM (Kinshasa/Bukavu)",
    ],
    note:
      "Nous valorisons chaque équipement reçu : tri, tests, optimisation, puis attribution transparente aux bénéficiaires.",
  },
  {
    title: "Contribution financière",
    subtitle: "Soutenir les programmes et la logistique",
    icon: "💳",
    image:
      "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=2000&q=80",
    bullets: [
      "Financer des bourses et des formations",
      "Acheter du matériel (PC, kits, logiciels)",
      "Soutenir l’organisation d’ateliers et d’événements",
      "Renforcer l’accès à l’éducation technologique",
    ],
    note:
      "Votre contribution peut être ponctuelle ou mensuelle, selon vos moyens et votre engagement.",
  },
  {
    title: "Parrainage éducatif",
    subtitle: "Accompagner un élève sur la durée",
    icon: "🎓",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=80",
    bullets: [
      "Frais de formation / ateliers",
      "Support pédagogique et suivi",
      "Accès aux outils (ordinateur, connexion, ressources)",
      "Coaching motivation et orientation",
    ],
    note:
      "Le parrainage est une aide structurée : un élève, un parcours, un suivi, des résultats mesurables.",
  },
  {
    title: "Expertise & mentorat",
    subtitle: "Partager une compétence qui ouvre des portes",
    icon: "🤝",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80",
    bullets: [
      "Mentorat (carrière, tech, orientation)",
      "Ateliers (coding, robotique, soft skills)",
      "Coaching (CV, portfolio, entretiens)",
      "Interventions en école / webinaires",
    ],
    note:
      "Votre temps et votre expérience peuvent accélérer une trajectoire : une heure peut changer une vie.",
  },
];

const impactItems = [
  {
    title: "Réduction de la fracture numérique",
    desc: "En donnant un ordinateur ou en finançant du matériel, vous permettez à des élèves d’apprendre, pratiquer et produire.",
  },
  {
    title: "Accès réel aux métiers du futur",
    desc: "Votre soutien alimente des programmes concrets (coding, robotique, leadership) orientés compétences et portfolio.",
  },
  {
    title: "Stabilité & persévérance",
    desc: "Le parrainage et les bourses renforcent la continuité scolaire et l’ambition, même dans des contextes difficiles.",
  },
  {
    title: "Effet multiplicateur",
    desc: "Un bénéficiaire formé devient souvent un modèle : il impacte sa classe, sa famille et sa communauté.",
  },
];

export default function DonatePage() {
  const email = "contact@abm-education.org";
  const phoneDisplay = "+243 XXX XXX XXX";
  const phoneE164 = "+243XXXXXXXXX"; // remplace
  const whatsappLink = `https://wa.me/${phoneE164.replace("+", "")}`;

  return (
    <Layout>
      {/* HERO */}
      <Hero title="Chaque don contribue directement à transformer des vies." subtitle="Vous pouvez soutenir ABM par le don d’ordinateurs, une contribution
            financière, un parrainage éducatif ou encore par votre expertise et
            mentorat. Ensemble, nous construisons des opportunités réelles." url="/programmes" urlTitle="Découvrir nos programmes" />
      {/* <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=2400&q=80"
            alt="Faire un don ABM Education"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-white" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
            Faire un don — ABM Education
          </span>

          <h1 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Chaque don contribue directement à transformer des vies.
          </h1>

          <p className="mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
            Vous pouvez soutenir ABM par le don d’ordinateurs, une contribution
            financière, un parrainage éducatif ou encore par votre expertise et
            mentorat. Ensemble, nous construisons des opportunités réelles.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#don"
              className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              Je veux soutenir ABM
            </a>
            <a
              href="/contact"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-white/90"
            >
              Contacter ABM
            </a>
          </div>
        </div>
      </section> */}

      {/* INTRO + IMPACT */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold">Pourquoi donner ?</h2>
            <p className="mt-4 leading-relaxed text-neutral-700">
              Chez ABM-EDUCATION, nous croyons que l’éducation, la technologie et
              le leadership sont les leviers les plus puissants pour transformer
              durablement l’Afrique. Votre don n’est pas un geste symbolique :
              c’est une action directe qui crée des résultats visibles.
            </p>
            <p className="mt-4 leading-relaxed text-neutral-700">
              Nous structurons nos actions autour de programmes concrets, d’un
              suivi transparent et d’un impact mesurable sur les bénéficiaires.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
            <h3 className="text-lg font-semibold">Impact concret de votre soutien</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {impactItems.map((x) => (
                <div
                  key={x.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
                >
                  <div className="font-semibold">{x.title}</div>
                  <div className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {x.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WAYS TO DONATE */}
      <section id="don" className="bg-neutral-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Comment soutenir ABM</h2>
              <p className="mt-2 text-neutral-600">
                Choisissez la forme de don qui correspond le mieux à votre
                capacité et votre intention.
              </p>
            </div>
            <div className="text-sm text-neutral-600">
              📍 Kinshasa & Bukavu — RDC
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {donationWays.map((w) => (
              <div
                key={w.title}
                className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm"
              >
                <div className="relative h-48">
                  <Image src={w.image} alt={w.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                      <span>{w.icon}</span>
                      <span>{w.subtitle}</span>
                    </div>
                    <h3 className="mt-2 text-xl font-semibold text-white">{w.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {w.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-neutral-700">
                        <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-emerald-600" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                    {w.note}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <a
                      href={`mailto:${email}?subject=${encodeURIComponent(
                        `Don / Soutien — ${w.title}`
                      )}`}
                      className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-xs font-semibold hover:bg-neutral-50"
                    >
                      Écrire par email
                    </a>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact strip */}
          <div className="mt-10 rounded-3xl border border-neutral-200 bg-white p-8">
            <div className="grid gap-6 md:grid-cols-3 md:items-center">
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold">Prêt à contribuer ?</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Dites-nous le type de don (ordinateur, contribution financière, parrainage ou mentorat),
                  votre ville, et la meilleure manière de vous contacter. Notre équipe vous répond rapidement.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 md:justify-end">
                <a
                  href={`mailto:${email}?subject=${encodeURIComponent("Je veux faire un don à ABM")}`}
                  className="rounded-xl bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800"
                >
                  {email}
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 text-sm text-neutral-600">
              <span className="rounded-full bg-neutral-100 px-3 py-1">📍 Kinshasa</span>
              <span className="rounded-full bg-neutral-100 px-3 py-1">📍 Bukavu</span>
              <span className="rounded-full bg-neutral-100 px-3 py-1">📞 {phoneDisplay}</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
