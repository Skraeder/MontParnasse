// Vercel Serverless Function — Mercado Pago Checkout Pro
// TODO: configurar MP_ACCESS_TOKEN en Vercel. Nunca expongas el access token en el frontend.
// Variables recomendadas: MP_ACCESS_TOKEN, SITE_URL, DEFAULT_CURRENCY, MP_NOTIFICATION_URL.

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const accessToken = process.env.MP_ACCESS_TOKEN;
  if (!accessToken) {
    return res.status(503).json({
      message: 'Mercado Pago no está configurado. Agrega MP_ACCESS_TOKEN en Vercel.'
    });
  }

  try {
    const { items = [], payer_note = '' } = req.body || {};
    const cleanItems = items
      .filter(item => item && item.title && item.quantity > 0 && item.unit_price > 0)
      .map(item => ({
        id: String(item.id || ''),
        title: String(item.title).slice(0, 250),
        quantity: Number(item.quantity),
        unit_price: Number(item.unit_price),
        currency_id: item.currency_id || process.env.DEFAULT_CURRENCY || 'MXN',
        picture_url: item.picture_url || undefined
      }));

    if (!cleanItems.length) {
      return res.status(400).json({ message: 'El carrito no contiene productos con precio válido.' });
    }

    const siteUrl = process.env.SITE_URL || `https://${req.headers.host}`;
    const body = {
      items: cleanItems,
      statement_descriptor: 'MONTPARNASSE',
      external_reference: `montparnasse-${Date.now()}`,
      metadata: { payer_note: String(payer_note).slice(0, 900) },
      back_urls: {
        success: `${siteUrl}/success.html`,
        pending: `${siteUrl}/pending.html`,
        failure: `${siteUrl}/failure.html`
      },
      auto_return: 'approved',
      notification_url: process.env.MP_NOTIFICATION_URL || undefined
    };

    const mpRes = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    const data = await mpRes.json();
    if (!mpRes.ok) {
      return res.status(mpRes.status).json({ message: 'Mercado Pago rechazó la preferencia.', detail: data });
    }

    return res.status(200).json({
      id: data.id,
      init_point: data.init_point,
      sandbox_init_point: data.sandbox_init_point
    });
  } catch (error) {
    return res.status(500).json({ message: 'Error al crear la preferencia de pago.', error: error.message });
  }
};
