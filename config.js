/*
 * ─────────────────────────────────────────────────────────────
 *  EDIT THIS FILE to update your page. No other file needs changing.
 * ─────────────────────────────────────────────────────────────
 *  • Keep the quotes "" and the commas at the end of lines.
 *  • Images live in the /img folder. To swap one, replace the file
 *    (same name) or change the path here.
 *  • To use real platform logos: put the file in /img/logos and set
 *    src: "img/logos/bingx.png"
 *
 *  (The page title and the Facebook share preview text are at the top of
 *   index.html, inside <head>.)
 */

window.SITE = {
  profile: {
    name: "mozzy",
    avatar: "img/avatar.jpg",
    status: "Trading • Community • Resources",
    headline: "Your trading journey starts here.",
    description:
      "Explore the platforms I use and recommend. Need help getting started? I'm just a DM away.",
  },

  // Where every "DM me" button goes (Messenger chat with your Facebook page).
  dm: {
    url: "https://m.me/mahzzie",
    channel: "Messenger",
  },

  /*
   * Contact channels. type "link" opens the url; type "copy" copies `value`
   * (Discord has no public profile link for usernames, so visitors copy it).
   */
  contacts: [
    { platform: "facebook", label: "Facebook page", handle: "facebook.com/mahzzie", type: "link", url: "https://www.facebook.com/mahzzie" },
    { platform: "telegram", label: "Telegram", handle: "@mahzzie", type: "link", url: "https://t.me/mahzzie" },
    { platform: "discord", label: "Discord", handle: "@mahzzie", type: "copy", value: "mahzzie" },
    { platform: "phone", label: "Mobile / Telegram", handle: "0991 381 0547", type: "copy", value: "09913810547" },
  ],

  sections: {
    exchanges: {
      title: "Crypto Exchanges",
      subtitle: "Platforms to explore for your trading journey.",
    },
    propFirms: {
      title: "Prop Firms",
      subtitle: "Explore funding programs and trading challenges.",
    },
    moments: {
      title: "Moments",
      subtitle: "On the trading floor.",
    },
  },

  exchanges: [
    {
      id: "bingx",
      name: "BingX",
      url: "https://bingxdao.com/invite/PLSZRJ/",
      code: "PLSZRJ",
      description:
        "Spot, futures and copy trading in one app. Copy trading lets you follow experienced traders while you learn.",
      tags: ["Spot", "Futures", "Copy trading"],
      cta: "Join BingX",
      logo: { monogram: "BX", src: "img/logos/bingx.png" },
    },
    {
      id: "lbank",
      name: "LBank",
      url: "https://lbank.com/ref/5VQWM",
      code: "5VQWM",
      description:
        "A wide range of tokens, including early listings of new projects, across spot and futures markets.",
      tags: ["Spot", "Futures", "New listings"],
      cta: "Join LBank",
      logo: { monogram: "LB", src: "img/logos/lbank.png" },
    },
  ],

  propFirms: [
    {
      id: "fundingpips",
      name: "FundingPips",
      kind: "Prop firm",
      url: "https://fundingpips.com",
      code: "ZST61RK8",
      description:
        "Pass an evaluation challenge and trade a funded account. Add the code when you check out.",
      cta: "Visit FundingPips",
      logo: { monogram: "FP", src: "img/logos/fundingpips.png" },
    },
    {
      id: "fundednext",
      name: "FundedNext",
      kind: "Prop firm",
      url: "https://fundednext.com",
      code: "REFZ8KG47",
      description:
        "Several challenge types to choose from on the way to a funded account. Add the code when you check out.",
      cta: "Visit FundedNext",
      logo: { monogram: "FN", src: "img/logos/fundednext.png" },
    },
    {
      id: "ultima",
      name: "Ultima Markets",
      kind: "Broker",
      url: "https://ultgo.com/la-com/ENGLISH/51h4hEju",
      code: "", // no code: the card shows "Copy link" instead
      description:
        "Forex and CFD trading account. The referral is built into the link, so there's nothing to enter.",
      cta: "Visit Ultima Markets",
      logo: { monogram: "UM", src: "img/logos/ultima.png" },
    },
  ],

  moments: [
    {
      image: "img/competition.jpg",
      focus: "50% 70%", // which part of the photo stays in frame (x% y%)
      alt: "mozzy and a teammate from behind in matching Mazal jackets at the Ultima Markets trading competition",
      title: "Ultima Markets Trading Competition",
      caption: "Representing Mazal.",
      links: [
        { label: "Ultima Markets", url: "https://www.facebook.com/ultimamarketsglobal" },
        { label: "Mazal", url: "https://www.facebook.com/joinmazal" },
      ],
      mozzy: "img/mozzy/mozzy-05.png",
    },
  ],

  help: {
    headline: "Need help getting started?",
    description:
      "Not sure how to sign up, set up your account, or get started with a platform? Don't worry. I'll help you through the process.",
    cta: "DM Me for Setup Assistance",
    secondary:
      "Whether it's your first account or your next prop firm challenge, feel free to reach out.",
    steps: [
      {
        title: "Pick a platform",
        body: "Choose the exchange or prop firm above that fits how you want to trade.",
        mozzy: "img/mozzy/mozzy-11.png",
      },
      {
        title: "Sign up with my link or code",
        body: "Use the button on the card, or copy the code and paste it when you register or check out.",
        mozzy: "img/mozzy/mozzy-10.png",
      },
      {
        title: "Message me if you get stuck",
        body: "Send a DM and I'll walk you through registration, verification and your first setup.",
        mozzy: "img/mozzy/mozzy-07.png",
      },
    ],
  },

  footer: {
    disclaimer:
      "Trading involves risk. Platforms listed are provided for informational purposes. Always do your own research.",
    disclosure:
      "Some links may be referral links. I may receive benefits when you sign up through them.",
  },
};
