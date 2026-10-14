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
    blurb: "An Ìsàlẹ̀ Èkó Special. A cooperative's annual dinner, a blackout and a body on the stage.",
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
      "You will be on your feet and moving between corners of the room, so let your shoes be comfortable and stylish at the same time.",
      "Part two is coming soon."
    ]
  },
  {
    id: "what-to-expect",
    title: "What to expect at Èkó After Dark",
    date: "October 2026",
    summary: "Squads, a blackout, 90 seconds with a suspect and one chance to name the killer.",
    body: [
      "You arrive, pick up a bead colour and meet your squad. Six squads share the room, and each one starts in a different corner.",
      "The night begins as a dinner party. Then the lights go out. When they come back, somebody is dead on the stage and every person in the room is a suspect.",
      "To question a suspect, your squad wins a quick challenge. A trivia question, a riddle or a mini-game gets you 90 seconds with them. You only get three attempts for the whole night, so choose carefully.",
      "You cannot reach every suspect yourselves. Every squad also caught a different fragment of the blackout, so trade clues with other squads and work out who is telling the truth.",
      "At the end you hand in your verdict. The host reveals who did it.",
      "Bring friends you can trust. Or don't."
    ]
  }
];
