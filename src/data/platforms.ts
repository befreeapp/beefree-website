// What's available on each platform — single source of truth for the website.
// Mirrors the app: Android has the device-power features (accessibility
// service, VPN filter, usage access); iPhone v1 is companion-first, with app
// blocking following via Apple's Screen Time framework. Keep this honest —
// the store listings and the in-app paywall must never promise more.
import { APP_STORE_URL } from './links';

export const IOS_LIVE = APP_STORE_URL !== null;

export type Availability =
  | { state: 'yes' }
  | { state: 'coming'; note: string }
  | { state: 'no'; note: string };

export interface PlatformFeature {
  name: string;
  tier: 'Free' | 'Plus';
  android: Availability;
  ios: Availability;
}

const yes: Availability = { state: 'yes' };

export const PLATFORM_FEATURES: PlatformFeature[] = [
  { name: 'AI companion you name and talk to', tier: 'Free', android: yes, ios: yes },
  { name: 'Daily check-ins and your streak', tier: 'Free', android: yes, ios: yes },
  { name: 'Support library and crisis lines', tier: 'Free', android: yes, ios: yes },
  {
    name: 'Screen time, app by app',
    tier: 'Free',
    android: yes,
    ios: { state: 'no', note: 'iPhone doesn’t let apps read per-app usage.' },
  },
  { name: 'Unlimited AI chat', tier: 'Plus', android: yes, ios: yes },
  { name: 'Check-ins from your partner', tier: 'Plus', android: yes, ios: yes },
  {
    name: 'App & content blocking, strict mode',
    tier: 'Plus',
    android: yes,
    ios: { state: 'coming', note: 'Arriving via Apple Screen Time after launch.' },
  },
  {
    name: 'Short-form blocker (Shorts & Reels)',
    tier: 'Plus',
    android: yes,
    ios: { state: 'no', note: 'Relies on an Android accessibility service; iPhone has no equivalent.' },
  },
  { name: '14-day free trial of Plus', tier: 'Plus', android: yes, ios: yes },
];
