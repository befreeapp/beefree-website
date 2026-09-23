// BeFree Plus — single source of truth for the marketing site.
// Mirrors the app's entitlements (app/src/features/plus/entitlements.ts):
// £3.99/mo or £38/yr (~21% saved). Update here if the app's pricing changes.

export const PLUS_PRICES = {
  monthly: '£3.99',
  yearly: '£38',
} as const;

export const PLUS_YEARLY_SAVING = '~21%';

// Introductory offer on both plans (Play Console `free-trial-14d`, new
// subscribers only). The app reads the real value from the store; keep in sync.
export const PLUS_TRIAL_DAYS = 14;

export interface PlusBenefit {
  title: string;
  body: string;
}

export const PLUS_BENEFITS: PlusBenefit[] = [
  {
    title: 'Unlimited AI chat',
    body: 'Full conversations with your companion, any time — no monthly limit.',
  },
  {
    title: 'App & content blocking',
    body: 'A full app blocker: lock the apps that pull you in and filter sites during your focus hours.',
  },
  {
    title: 'Short-form blocker',
    body: 'Gently steps you out of YouTube Shorts and Instagram Reels — the feed closes, the rest of the app stays open.',
  },
  {
    title: 'Check-ins from your partner',
    body: 'A warm message at the time of day you find hardest — tap it to talk.',
  },
];

// What everyone gets, free, forever — never gated behind Plus.
export const FREE_FEATURES = [
  'Your AI companion — name them and talk any time',
  'Daily check-ins and your streak',
  'Your screen time, app by app (Android)',
  'A support library of articles, podcasts, and links to counselling',
  'Crisis lines, always one tap away',
];
