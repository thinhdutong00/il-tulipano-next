export const dynamic = 'force-dynamic';

import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, email, telefono, persone, data, ora, note } = body;

    const dataResend = await resend.emails.send({
      // Mittente autorizzato dal tuo dominio
      from: 'Il Tulipano <prenotazioni@iltulipanocarpi.it>',
      
      // Dove ricevi la mail
      to: ['ristorantetulipanocarpi@gmail.com'], 
      
      // Se rispondi alla mail, risponderai direttamente al cliente
      replyTo: email, 
      
      subject: `Nuova Prenotazione: ${nome}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #800020; text-align: center;">Nuova Prenotazione</h2>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefono:</strong> ${telefono}</p>
          <hr />
          <p><strong>Persone:</strong> ${persone}</p>
          <p><strong>Data:</strong> ${data}</p>
          <p><strong>Ora:</strong> ${ora}</p>
          <p><strong>Note:</strong> ${note || 'Nessuna'}</p>
          <footer style="margin-top: 20px; font-size: 10px; color: #aaa;">
            Email inviata dal sito iltulipanocarpi.it
          </footer>
        </div>
      `,
    });

    return NextResponse.json(dataResend);
  } catch (error) {
    console.error("Errore Resend:", error);
    return NextResponse.json({ error: "Errore durante l'invio" }, { status: 500 });
  }
}