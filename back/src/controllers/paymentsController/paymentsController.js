const mercadopago = require("mercadopago");
const { ACCESS_TOKEN } = process.env;
const paymentsController = async (req, res) => {
  mercadopago.configure({
    access_token: ACCESS_TOKEN,
  });
  const { items } = req.body;
  /* items: [
    {
      title: "Donativo a Human Conet",
      unit_price: 5000,
      currency_id: "COP",
      quantity: 1,
    },
  ], */
  try {
    const result = await mercadopago.preferences.create({
      items: items,
      back_urls: {
        success: "http://localhost:3001/payments/success",
        failure: "http://localhost:3001/payments/failure",
        pending: "http://localhost:3001/payments/pendig",
      },
    });
    console.log(result.body);
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = paymentsController;
