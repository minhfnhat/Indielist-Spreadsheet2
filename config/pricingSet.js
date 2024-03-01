const pricingTiers = [
  {
    title: "LemonSqueezy Payment",
    price: "$9",
    features: [
      "Get access to all the leads",
      "Ability to download Leads",
      "View Rich data",
      "Contribute to the data",
    ],
    paymentProvider: "LemonSqueezy",
    lemonSqueezy: {
      buyLink:
        "https://xpage.lemonsqueezy.com/checkout/buy/cc173c6e-d80a-4a50-a107-0afd31bddcc4?embed=1",
    },
    stripe: {},
  },
  {
    title: "Stripe Payment",
    price: "$19",
    features: [
      "Get access to all the leads",
      "Ability to download Leads",
      "View Rich data",
      "Contribute to the data",
    ],
    paymentProvider: "Stripe",
    lemonSqueezy: {},
    stripe: {
      lineItems: [
        {
          price: "price_1OUacyGNooMUlLQ02zOmeYdX",
          quantity: 1,
        },
      ],
    },
  },
];

export default pricingTiers;
