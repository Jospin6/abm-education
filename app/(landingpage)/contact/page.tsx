"use client";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { Hero } from "@/components/hero";
import Layout from "@/components/layout/Layout";


export default function ContactPage() {
    const email = "contact@abm-education.org";
    const phoneDisplay = "+243 XXX XXX XXX";
    const phoneE164 = "+243XXXXXXXXX"; // <- remplace par le vrai numéro (sans espaces)
    const whatsappLink = `https://wa.me/${phoneE164.replace("+", "")}`;

    return (
        <Layout>
            {/* HERO */}
            <Hero title="Parlons de votre besoin." subtitle="Une question, une collaboration, un programme à déployer dans une école ?
            Écrivez-nous. Nous répondons rapidement." url="/programmes" urlTitle="Découvrir nos programmes" />


            {/* CONTENT */}
            <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
                <div className="grid gap-8 lg:grid-cols-5">
                    {/* Left: info cards */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                            <h2 className="text-xl font-semibold">Coordonnées</h2>

                            <div className="mt-4 space-y-4 text-sm text-neutral-700">
                                <div className="flex gap-3">
                                    <span className="mt-0.5">📍</span>
                                    <div>
                                        <div className="font-semibold">Présence</div>
                                        <div className="text-neutral-600">
                                            Kinshasa & Bukavu – RDC
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <span className="mt-0.5">✉️</span>
                                    <div>
                                        <div className="font-semibold">Email</div>
                                        <a
                                            className="text-emerald-700 hover:underline"
                                            href={`mailto:${email}`}
                                        >
                                            {email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <span className="mt-0.5">📞</span>
                                    <div>
                                        <div className="font-semibold">Téléphone / WhatsApp</div>
                                        <div className="text-neutral-600">{phoneDisplay}</div>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            <a
                                                href={`tel:${phoneE164}`}
                                                className="rounded-xl border border-neutral-200 bg-white px-3 py-2 text-xs font-semibold hover:bg-neutral-50"
                                            >
                                                Appeler
                                            </a>
                                            <a
                                                href={whatsappLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="rounded-xl bg-emerald-600 px-3 py-2 text-xs font-semibold text-white hover:bg-emerald-700"
                                            >
                                                WhatsApp
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <span className="mt-0.5">📝</span>
                                    <div>
                                        <div className="font-semibold">Formulaire</div>
                                        <div className="text-neutral-600">
                                            Disponible en ligne (ci-dessous).
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Small “why contact” card */}
                        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
                            <h3 className="font-semibold">Pourquoi nous contacter ?</h3>
                            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                                {[
                                    "Déployer un programme ABM dans votre école ou institution",
                                    "Partenariat (sponsoring, bourses, matériel, événements)",
                                    "Orientation et accompagnement international",
                                    "Questions générales sur ABM Education",
                                ].map((x) => (
                                    <li key={x} className="flex gap-2">
                                        <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-emerald-600" />
                                        <span>{x}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right: form */}
                    <div className="lg:col-span-3">
                        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                            <h2 className="text-xl font-semibold">Envoyer un message</h2>
                            <p className="mt-2 text-sm text-neutral-600">
                                Remplissez ce formulaire. Nous vous répondrons par email ou WhatsApp.
                            </p>

                            <div className="mt-6">
                                <ContactForm />
                            </div>
                        </div>

                        {/* Trust strip */}
                        <div className="mt-6 grid gap-4 sm:grid-cols-3">
                            {[
                                { t: "Réponse rapide", d: "Nous traitons les demandes avec priorité." },
                                { t: "Confidentialité", d: "Vos infos restent strictement privées." },
                                { t: "Accompagnement", d: "Un échange clair, orienté solutions." },
                            ].map((b) => (
                                <div
                                    key={b.t}
                                    className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm shadow-sm"
                                >
                                    <div className="font-semibold">{b.t}</div>
                                    <div className="mt-1 text-neutral-600">{b.d}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
