
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

import Stripe from "stripe";

const stripe = new Stripe("sk_test_51MZuqaSCbCK97gg6gGnvvrndrm1jbGKZKH4oy2b5i6DFKjVBFCmS8Y3Zy7fQUaODfrSyGeyNKVKxSn55PANBbdMj00KTV5OLjC");

export const processPayment = async (req, res, next) => {
  try {
    const myPayment = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "inr",
      metadata: {
        company: "SmartBuyer",
      },
    });

    res.status(200).json({ success: true, client_secret: myPayment.client_secret });
  } catch (error) {
    res.status(200).json({ success: false, error: error.message });
  }
};

export const sendStripeApiKey = async (req, res, next) => {
  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
};
