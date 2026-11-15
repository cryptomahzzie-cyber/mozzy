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
    // Shown as a badge under your name; links to the community page.
    role: { title: "Lead Analyst", org: "Mazal", url: "https://www.facebook.com/joinmazal" },
    avatar: "img/avatar.jpg",
    status: "Trading • Community • Mentorship",
    headline: "Hey, glad you made it.",
    description:
      "These are the platforms I actually trade on, with my codes ready to copy. Stuck anywhere? Just message me and we'll sort it out together.",
  },

  // Where every "DM me" button goes (Messenger chat with your Facebook page).
  dm: {
    url: "https://www.facebook.com/messages/t/mahzzie", // computers: opens the chat inside facebook.com
    mobileUrl: "https://m.me/mahzzie", // phones: opens the chat straight in the Messenger / Facebook app
    channel: "Messenger",
  },

  /*
   * Contact channels. type "link" opens the url; type "copy" copies `value`
   * (Discord has no public profile link for usernames, so visitors copy it).
   */
  contacts: [
    { platform: "facebook", label: "Facebook page", handle: "facebook.com/mahzzie", type: "link", url: "https://www.facebook.com/mahzzie" },
    { platform: "telegram", label: "Telegram", handle: "@mahzzie", type: "link", url: "https://t.me/mahzzie" },
    { platform: "discord", label: "Discord", handle: "@mahzzie", type: "link", url: "https://discord.com/users/679678650492387359" },
    { platform: "phone", label: "Mobile", handle: "0991 381 0547", type: "copy", value: "09913810547" },
  ],

  // Business enquiries line in the footer.
  business: { label: "Sponsorships & collaborations", email: "cryptomahzzie@gmail.com", subject: "Sponsorship / collaboration with mozzy" },

  sections: {
    exchanges: {
      title: "Crypto Exchanges",
      subtitle: "Where I trade day to day. Take your pick.",
    },
    propFirms: {
      title: "Prop Firms",
      subtitle: "Ready to trade bigger capital? Start here.",
    },
    moments: {
      title: "Moments",
      subtitle: "A few wins we've shared along the way.",
    },
  },

  exchanges: [
    {
      id: "bingx",
      name: "BingX",
      url: "https://bingxdao.com/invite/PLSZRJ/",
      code: "PLSZRJ",
      description:
        "Easy to start with. You can copy experienced traders while you find your feet.",
      tags: ["Spot", "Futures", "Copy trading"],
      cta: "Join BingX",
      logo: { monogram: "BX", src: "img/logos/bingx.png" },
    },
    {
      id: "lbank",
      name: "LBank",
      url: "https://www.lbk.pub/ref/5VQWM?qcode=9i49x",
      code: "5VQWM",
      description:
        "Great if you like catching new coins early. Lots to explore.",
      tags: ["Spot", "Futures", "New listings"],
      cta: "Join LBank",
      // Best closed trades on LBank. Tap to view full size.
      pnl: [
        { src: "img/pnl/gold-388.jpg", pnl: "+388.42%", pair: "Gold short · 500×", date: "14 Aug 2026" },
        { src: "img/pnl/gold-356.jpg", pnl: "+356.59%", pair: "Gold short · 500×", date: "29 Jul 2026" },
        { src: "img/pnl/zec-110.jpg", pnl: "+110.90%", pair: "ZEC long · 35×", date: "16 Jun 2026" },
        { src: "img/pnl/zec-105.jpg", pnl: "+105.87%", pair: "ZEC long · 75×", date: "20 Aug 2026" },
      ],
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
        "Pass the challenge, then trade their capital. A solid first prop firm.",
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
        "Plenty of challenge types, so you can pick the pace that suits you.",
      cta: "Visit FundedNext",
      logo: { monogram: "FN", src: "img/logos/fundednext.png" },
    },
    {
      id: "ultima",
      name: "Ultima Markets",
      kind: "Broker",
      url: "https://ultgo.com/la-com/ENGLISH/51h4hEju",
      code: "51h4hEju",
      description:
        "My go-to for forex and gold. The link already has my code, so you're set.",
      cta: "Visit Ultima Markets",
      logo: { monogram: "UM", src: "img/logos/ultima.png" },
    },
  ],

  // One highlight for everything with Mazal. Tap any photo to view it full size.
  moments: [
    {
      mosaic: true,
      kicker: "As Mazal's Lead Analyst",
      title: "Moments with Mazal",
      caption: "Calls and wins shared with the community.",
      images: [
        { src: "img/xau-call.jpg", label: "The call", alt: "mozzy's XAUUSD short posted in the Mazal Discord on 17 Jun 2026" },
        { src: "img/xau-result.jpg", label: "The result", alt: "Chart from 18 Jun 2026 showing gold falling from 4320 to the 4219 target" },
        { src: "img/analyst.jpg", label: "The analyst", alt: "Mazal 'Meet the Analyst' graphic introducing mozzy" },
        { src: "img/trade-setup.jpg", label: "Live setup", alt: "mozzy's XAUUSD short setup shared with Mazal on 01 Oct 2026" },
      ],
      highlights: [
        { title: "A $100+ move on gold", text: "Called XAUUSD short with the Mazal fam. Gold slid from 4320 to our 4219 target, +$100.73." },
        { title: "Live calls for the community", text: "Setups shared in real time, like this XAUUSD short on 01 Oct 2026." },
      ],
      links: [{ label: "Join Mazal", url: "https://www.facebook.com/joinmazal" }],
      mozzy: "img/mozzy/mozzy-05.png",
    },
    {
      mosaic: true,
      kicker: "Trader Fest 2026 · Brooklyn Warehouse Manila",
      title: "Ultima Markets Trading Competition",
      caption: "Five of us, one team. Repping Mazal in the 5v5 crypto and forex qualifiers on 30 Jul 2026.",
      images: [
        { src: "img/trader-fest-lineup.jpg", label: "The lineup", alt: "Mazal's Trader Fest 2026 lineup: Isura, Mahzzie, Preta, Shujin and Ketsu" },
        { src: "img/competition.jpg", label: "On the floor", alt: "mozzy and a teammate in matching Mazal jackets at the competition", focus: "50% 70%" },
      ],
      highlights: [
        { title: "The team", text: "Isura, Mahzzie, Preta, Shujin and Ketsu." },
        { title: "The format", text: "5v5 crypto and forex trading, presented by Ultima and powered by Crypto Esports League." },
      ],
      links: [
        { label: "Ultima Markets", url: "https://www.facebook.com/ultimamarketsglobal" },
        { label: "Mazal", url: "https://www.facebook.com/joinmazal" },
      ],
      mozzy: "img/mozzy/mozzy-08.png",
    },
  ],

  // Certificates, grouped by prop firm. Tap a stack to flip through it.
  certificates: {
    title: "Along the way",
    groups: [
      {
        firm: "FundingPips",
        logo: "img/logos/fundingpips.png",
        summary: "Phase 1 and Phase 2 passed",
        items: [
          { src: "img/certs/fp-phase-2.jpg", label: "Phase 2", alt: "FundingPips Phase Two evaluation certificate" },
          { src: "img/certs/fp-phase-1.jpg", label: "Phase 1", alt: "FundingPips Phase One evaluation certificate" },
        ],
      },
      {
        firm: "FundedNext",
        logo: "img/logos/fundednext.png",
        summary: "Elite Trader, Crown Trader, performance reward",
        items: [
          { src: "img/certs/fn-elite-sep.jpg", label: "Elite Trader", alt: "FundedNext Elite Trader certificate for MAHZZIE" },
          { src: "img/certs/fn-performance-reward.jpg", label: "Performance reward", alt: "FundedNext lifetime performance reward certificate for MAHZZIE" },
          { src: "img/certs/fn-crown-trader.jpg", label: "Crown Trader", alt: "FundedNext Crown Trader certificate for MAHZZIE" },
          { src: "img/certs/fn-elite-apr.jpg", label: "Elite Trader", alt: "FundedNext Elite Trader certificate for MAHZZIE" },
          { src: "img/certs/fn-elite-mar.jpg", label: "Elite Trader", alt: "FundedNext Elite Trader certificate for MAHZZIE" },
        ],
      },
    ],
  },

  help: {
    headline: "Let's get you set up.",
    description:
      "Signing up, verifying, funding your account. Whatever step you\'re on, I\'ve been there and I\'m happy to help.",
    cta: "Message me, I'll help you set up",
    secondary:
      "First account or your next challenge, my DMs are always open.",
    steps: [
      {
        title: "Pick what feels right",
        body: "Any exchange or prop firm above works. Not sure? Ask me and we'll figure it out.",
        mozzy: "img/mozzy/mozzy-11.png",
      },
      {
        title: "Sign up with my link or code",
        body: "Tap the button on the card, or copy my code and paste it when you register.",
        mozzy: "img/mozzy/mozzy-10.png",
      },
      {
        title: "Ping me anytime",
        body: "Verification, deposits, your first trade. I'll walk you through it, no question too small.",
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
