// Walk Data — suggested circles and reflective prompts for Chat & Stroll
const suggestedWalks = {
  // Each location includes a walk name, meeting spot, and emotional theme
  oslo: { name: "Chat & Stroll Circle in Frogner Park", location: "in front of the fountain, Frogner Park, Oslo, Norway", promptTheme: "Resilience" },
  edinburgh: { name: "Chat & Stroll Circle in Grassmarket", location: "by the benches near Victoria Street, Edinburgh", promptTheme: "Discovery" },
  berlin: { name: "Chat & Stroll Circle in Tiergarten", location: "by the Goethe monument, Berlin", promptTheme: "Letting Go" },
  "new york": { name: "Chat & Stroll Circle in Central Park", location: "at the Literary Walk entrance, New York", promptTheme: "Connection" },
  london: { name: "Chat & Stroll Circle in Hyde Park", location: "near the Serpentine Café, London", promptTheme: "Joy" }
};

const prompts = [
  // Reflective questions used when no match is found — designed to support solo walks
  "What would you say to someone who feels the way you do right now?",
  "What’s something you’ve been carrying that you’re ready to set down?",
  "If your thoughts were clouds, which ones would you let drift away?",
  "What’s a memory that makes you feel quietly strong?",
  "What kind of connection are you craving most right now?",
  "What does your body need from you today — movement, stillness, kindness?",
  "If you could walk with your younger self, what would you say?",
  "What’s one thing you’d like to feel more of this week?"
];
