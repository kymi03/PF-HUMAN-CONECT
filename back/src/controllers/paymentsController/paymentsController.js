const mercadopago = require("mercadopago");
const Donation = require("../../models/donation");
const donation = require("../../models/donation");
const { ACCESS_TOKEN } = process.env;
const paymentsController = async (req, res) => {
  mercadopago.configure({
    access_token: ACCESS_TOKEN,
  });
  const { items } = req.body;
  const { userID } = req.query;

  try {
    const result = await mercadopago.preferences.create({
      items: items,
      back_urls: {
        success: "localhost:3001/payments/success",
        failure: "localhost:3001/payments/failure",
        pending: "localhost:3001/payments/pendig",
      },
    });

    let amounts = {};
    items.map((item) => {
      amounts = {
        ...amounts,
        [item.title]: item.unit_price,
      };
    });
    const newDonation = new Donation({
      paymentID: result.body.id,
      owner: userID,
      amounts,
      amounts,
      paymentMethod: "",
      paid: false,
      date: new Date(),
    });
    await newDonation.save();
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = paymentsController;
