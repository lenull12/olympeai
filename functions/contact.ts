interface ContactBody {
  email: string
  prenom?: string
  token: string
}

export async function onRequestPost(context: { request: Request; env: Record<string, string> }) {
  const { request, env } = context
  const body: ContactBody = await request.json()

  // 1. Vérifier Turnstile
  const verify = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ secret: env.TURNSTILE_SECRET_KEY, response: body.token }),
  })
  const verifyData = await verify.json()
  if (!verifyData.success) {
    return new Response(JSON.stringify({ error: "Validation anti-spam échouée." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    })
  }

  // 2. Envoyer l'email via Resend
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "OlympeAI <contact@propulsedev.fr>",
      to: [env.CONTACT_EMAIL],
      subject: `Nouveau contact OlympeAI — ${body.prenom || body.email}`,
      html: `
        <h2 style="font-family:sans-serif">Nouvelle demande de contact — OlympeAI</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif">
          <tr>
            <td style="padding:8px 12px;background:#f5f5f5;font-weight:600">Prénom</td>
            <td style="padding:8px 12px">${body.prenom || "—"}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;background:#f5f5f5;font-weight:600">Email</td>
            <td style="padding:8px 12px"><a href="mailto:${body.email}">${body.email}</a></td>
          </tr>
        </table>
        <p style="font-family:sans-serif;color:#666;margin-top:24px;font-size:12px">
          Envoyé depuis le site olympeai.fr
        </p>
      `,
    }),
  })

  if (!res.ok) {
    return new Response(JSON.stringify({ error: "Erreur d'envoi de l'email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}
