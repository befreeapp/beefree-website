// BeFree Plus — single source of truth for the marketing site.
// Mirrors the app's entitlements (app/src/features/plus/entitlements.ts):
// £3.99/mo or £38/yr (~21% saved). Update here if the app's pricing changes.

export const PLUS_PRICES = {
  monthly: '£3.99',
  yearly: '£38',
} as const;

export const PLUS_YEARLY_SAVING = '~21%';

export interface PlusBenefit {
  icon: string;
  title: string;
  body: string;
}

export const PLUS_BENEFITS: PlusBenefit[] = [
  {
    icon: '💬',
    title: 'Unlimited AI chat',
    body: 'Full conversations with your companion, any time — no monthly limit.',
  },
  {
    icon: '🛡️',
    title: 'App & content blocking',
    body: 'Lock the apps that pull you in and filter sites during your focus hours.',
  },
  {
    icon: '💌',
    title: 'Check-ins from your partner',
    body: 'A warm message at the time of day you find hardest — tap it to talk.',
  },
];

// What everyone gets, free, forever — never gated behind Plus.
export const FREE_FEATURES = [
  'Your AI companion — name them and talk any time',
  'Daily check-ins and your streak',
  'A support library of articles, podcasts, and links to counselling',
  'Crisis lines, always one tap away',
];
