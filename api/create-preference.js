export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const accessToken = process.env.MP_ACCESS_TOKEN;
  const siteUrl = process.env.SITE_URL || `https://${req.headers.host}`;
  if (!accessToken) {
    return res.status(500).json({ error: 'MP_ACCESS_TOKEN no está configurado en Vercel.' });
  }
  try {
    const { items } = req.body || {};
    if (!Array.isArray(items) || !items.length) return res.status(400).json({ error: 'Carrito vacío.' });
    const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` },
      body: JSON.stringify({
        items,
        back_urls: {
          success: `${siteUrl}/success.html`,
          failure: `${siteUrl}/failure.html`,
          pending: `${siteUrl}/pending.html`
        },
        auto_return: 'approved',
        statement_descriptor: 'MONTPARNASSE'
      })
    });
    const data = await response.json();
    if (!response.ok) return res.status(response.status).json({ error: data.message || 'Error creando preferencia', detail: data });
    return res.status(200).json({ id: data.id, init_point: data.init_point, sandbox_init_point: data.sandbox_init_point });
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Error interno' });
  }
}
