/* ============================================================
   EDIT YOUR SITE HERE.
   Change the words and links below, save, and the whole site updates.
   - To add a journal post: copy a { ... } block inside POSTS and edit it.
   - To add a past event: copy a { ... } block inside EPISODES and edit it.
   - To link an Episode 1 photo album: paste the link into albumUrl.
   Keep every quote mark, comma and bracket exactly as it is.
   ============================================================ */
var LINKS = {
  tickets:   "https://clooza.com/events/WHODIDIT",
  whatsapp:  "https://chat.whatsapp.com/KDs0jEbpfRT4gBWcntghli",
  instagram: "https://www.instagram.com/the_loadeddice",
  email:     "theloadeddice12@gmail.com"
};
var NEXT_EVENT_DATE = "2026-11-07";   /* year-month-day of the next event */
var EPISODES = [
  {
    status: "closed",
    title: "The Dinner Party",
    meta: "29 August 2026, Vybz Lifestyle, Lagos",
    blurb: "Dead on Arrival. Lagos, 1999. Chief Emmanuel Okafor is dead at his own dinner and six people in the room had a reason.",
    albumUrl: ""   /* paste a Google Photos or Drive album link here, e.g. "https://photos.app.goo.gl/..." */
  },
  {
    status: "open",
    title: "Èkó After Dark",
    meta: "7 November 2026, Adrenaline Lounge, Yaba",
    blurb: "An Ìsàlẹ̀ Èkó Special. A cooperative's annual dinner where everybody is smiling and somebody is lying.",
    ticketUrl: "https://clooza.com/events/WHODIDIT"
  },
  {
    status: "secret",
    title: "Case 03",
    meta: "Venue and date are classified",
    blurb: "The next victim has not been chosen yet. Join the tribe and you will hear first."
  }
];
var POSTS = [
  {
    id: "what-to-wear-part-one",
    title: "What should I wear to Èkó After Dark? Part one",
    date: "October 2026",
    summary: "The dress code is trendy traditional Nigerian. Here is how to get it right.",
    body: [
      "The dress code is trendy traditional Nigerian. That is a wide door, so here is how to walk through it.",
      "Start with a fabric that has history: aso-oke, lace, adire, ankara or brocade. Then make it sharp. A tailored agbada with a structured hat. A corset buba with a statement sleeve. A gele tied like you have somewhere important to be.",
      "The room is a Lagos night, so think in black, oxblood red and gold, with one loud piece. Beads, brass cuffs, big earrings and a good bag do a lot of talking.",
      "Remember the story too. Everyone in the room is a suspect, so dress like someone with a secret and a good alibi. Stripes and sunglasses work for the calm and cool. Velvet and beads work for the dramatic.",
      "You will be on your feet, so let your shoes be comfortable and stylish at the same time.",
      "Part two is coming soon."
    ]
  },
  {
    id: "what-to-expect",
    title: "What to expect at Èkó After Dark",
    date: "October 2026",
    summary: "Collect your tag, join your team and expect a night with a twist.",
    body: [
      "Arrive, collect your tag and join your team. From that moment, you are on the case.",
      "The night begins as a dinner party. Eat, drink, dance and play. Just do not get too comfortable, because this night comes with a twist.",
      "Pay attention, talk to everyone and trust no one. By the end, you will be asked one question: who did it?",
      "Bring friends you can trust. Or don't."
    ]
  }
];
