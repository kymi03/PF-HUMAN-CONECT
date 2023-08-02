const mercadopago = require("mercadopago");
const Donation = require("../../models/donation");
const { ACCESS_TOKEN } = process.env;
const paymentsController = async (req, res) => {
  mercadopago.configure({
    access_token: ACCESS_TOKEN,
  });
  const { items } = req.body;
  /* items: [
    {
      //NECESITAMOS ID DEL USUARIO POR BODY O QUERY
      title: "Donativo a Human Conet",
      unit_price: 5000,
      currency_id: "COP",
      quantity: 1,
    },
  ], */
  //guardar el preference_id
  try {
    const result = await mercadopago.preferences.create({
      items: items,
      back_urls: {
        success: "localhost:3001/payments/success",
        failure: "localhost:3001/payments/failure",
        pending: "localhost:3001/payments/pendig",
      },
    });
    console.log(result.body.id);

    const newDonation = new Donation({
      paymentID: result.body.id,
      owner: "64bc515ba61ba847b6bf167e"
    });
    await newDonation.save()

    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = paymentsController;
