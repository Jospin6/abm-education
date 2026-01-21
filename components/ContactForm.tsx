"use client";

import { useMemo, useState } from "react";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  subject: "Partenariat",
  message: "",
  consent: false,
};

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<
    | { type: "idle" }
    | { type: "loading" }
    | { type: "success"; msg: string }
    | { type: "error"; msg: string }
  >({ type: "idle" });

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormState, string>> = {};

    if (!form.fullName.trim()) e.fullName = "Votre nom est requis.";
    if (!form.email.trim()) e.email = "Votre email est requis.";
    else if (!isEmail(form.email)) e.email = "Email invalide.";

    if (!form.message.trim()) e.message = "Votre message est requis.";
    else if (form.message.trim().length < 20)
      e.message = "Message trop court (min. 20 caractères).";

    if (!form.consent) e.consent = "Veuillez accepter la politique de confidentialité.";

    return e;
  }, [form]);

  const canSubmit = Object.keys(errors).length === 0;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!canSubmit) {
      setStatus({ type: "error", msg: "Veuillez corriger les champs du formulaire." });
      return;
    }

    try {
      setStatus({ type: "loading" });

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const json = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(json?.error || "Une erreur est survenue. Réessayez.");
      }

      setStatus({ type: "success", msg: "Message envoyé avec succès. Merci !" });
      setForm(initialState);
    } catch (err: any) {
      setStatus({ type: "error", msg: err?.message || "Erreur inattendue." });
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Row */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Nom complet"
          value={form.fullName}
          onChange={(v) => setForm((s) => ({ ...s, fullName: v }))}
          placeholder="Ex. John Doe"
          error={errors.fullName}
        />
        <Field
          label="Email"
          value={form.email}
          onChange={(v) => setForm((s) => ({ ...s, email: v }))}
          placeholder="vous@exemple.com"
          error={errors.email}
          type="email"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Téléphone / WhatsApp (optionnel)"
          value={form.phone}
          onChange={(v) => setForm((s) => ({ ...s, phone: v }))}
          placeholder="+243..."
        />
        <div className="space-y-1">
          <label className="text-sm font-semibold">Sujet</label>
          <select
            value={form.subject}
            onChange={(e) => setForm((s) => ({ ...s, subject: e.target.value }))}
            className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-emerald-600"
          >
            <option>Partenariat</option>
            <option>Programmes scolaires</option>
            <option>Accompagnement international</option>
            <option>Bourses / Awards</option>
            <option>Autre</option>
          </select>
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-sm font-semibold">Message</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
          placeholder="Décrivez votre demande (contexte, objectifs, ville, établissement, etc.)"
          className="min-h-[140px] w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-emerald-600"
        />
        {errors.message ? (
          <p className="text-xs text-red-600">{errors.message}</p>
        ) : (
          <p className="text-xs text-neutral-500">
            Astuce : plus votre message est précis, plus notre réponse sera rapide.
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label className="flex items-start gap-2 text-sm text-neutral-700">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => setForm((s) => ({ ...s, consent: e.target.checked }))}
            className="mt-1 h-4 w-4 rounded border-neutral-300"
          />
          <span>
            J’accepte que mes informations soient utilisées uniquement pour me recontacter.
          </span>
        </label>
        {errors.consent ? <p className="text-xs text-red-600">{errors.consent}</p> : null}
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={!canSubmit || status.type === "loading"}
          className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status.type === "loading" ? "Envoi..." : "Envoyer"}
        </button>

        {status.type === "success" ? (
          <p className="text-sm text-emerald-700">{status.msg}</p>
        ) : null}
        {status.type === "error" ? (
          <p className="text-sm text-red-600">{status.msg}</p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  error,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  error?: string;
  type?: string;
}) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-semibold">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-emerald-600"
      />
      {error ? <p className="text-xs text-red-600">{error}</p> : null}
    </div>
  );
}
