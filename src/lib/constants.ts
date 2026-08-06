// Content as data. Sections that repeat a card/row pattern map over these
// arrays instead of hand-duplicating near-identical JSX blocks.

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Why PalmTec", href: "#why-palmtec" },
  { label: "How it works", href: "#how-it-works" },
] as const;

export type Platform = {
  name: string;
  mark: string;
  eyebrow: string;
  headline: string;
  body: string;
  featured?: boolean;
};

export const PLATFORMS: Platform[] = [
  {
    name: "Google",
    mark: "G",
    eyebrow: "Google · capture active demand",
    headline: "Show up right when someone's ready to buy.",
    body: "You get put in front of people already searching for exactly what you sell, then sent to something built to turn that search into a call or a booked job.",
    featured: true,
  },
  {
    name: "Meta",
    mark: "∞",
    eyebrow: "Meta · create demand",
    headline: "Get noticed on a crowded scroll.",
    body: "Honest targeting and creative worth stopping for, so the businesses who'd actually hire you stop scrolling instead of tapping past.",
  },
  {
    name: "TikTok",
    mark: "♪",
    eyebrow: "TikTok · enter discovery",
    headline: "Reach people while they're still discovering you.",
    body: "Platform-native creative that earns attention, built for a place where people notice fast and move on faster.",
  },
  {
    name: "Reddit",
    mark: "r/",
    eyebrow: "Reddit · join trusted conversations",
    headline: "Earn a seat where people compare notes.",
    body: "Show up credibly inside the communities your future customers already trust for recommendations.",
  },
];

export const QUALIFIERS = [
  "You want leads, not a dashboard full of vanity numbers.",
  "You'd rather hear the truth than another sales pitch.",
  "You're ready to test something and actually learn from it.",
  "You want one person accountable for the whole thing, not a rotating cast.",
] as const;

export type Service = {
  title: string;
  body: string;
};

export const SERVICES: Service[] = [
  {
    title: "Ad strategy & management",
    body: "Offer, audience, setup, optimization, and reporting you can actually read.",
  },
  {
    title: "Creative that gets used",
    body: "Fresh static, video, and copy, or we work with what you already have.",
  },
  {
    title: "A website built to close",
    body: "A fast, clear landing experience built to turn a click into a real conversation.",
  },
  {
    title: "Local visibility that backs it up",
    body: "Google Business Profile and local SEO that reinforce every dollar you spend on ads.",
  },
];

export const ADVERTISING_OPTIONS = [
  "Not running ads yet",
  "Google",
  "Meta (Facebook/Instagram)",
  "TikTok",
  "Reddit",
  "A mix of the above",
] as const;
