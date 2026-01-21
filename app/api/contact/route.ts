import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ✅ petite validation serveur
    if (!body?.fullName || !body?.email || !body?.message) {
      return NextResponse.json(
        { error: "Champs requis manquants." },
        { status: 400 }
      );
    }

    // Ici tu pourras brancher:
    // - Resend / Nodemailer
    // - WhatsApp API
    // - sauvegarde DB (Supabase/Postgres)
    // Pour l’instant on simule OK
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json(
      { error: "Erreur serveur. Réessayez." },
      { status: 500 }
    );
  }
}
