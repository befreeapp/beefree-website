# BeFree — Privacy Policy

**Effective date: 10 July 2026**  ·  **Last updated: 10 July 2026**

BeFree ("BeFree", "we", "us") helps people reduce compulsive phone use with a
supportive AI companion, optional on-device app/content blocking, and a library of
real help. We built BeFree to reduce shame, and we treat your privacy the same way:
**we collect as little as possible, keep what we can on your device, never sell your
data, and never use it for advertising.**

This policy explains what we handle and why.

## Our principles
- **Local-first.** Your day-to-day data (check-ins, streak, wins, chat history,
  blocking rules, any places you set) lives **on your device** by default.
- **No ads. No selling.** We never sell your data and never use it for advertising
  or profiling.
- **Minimised.** We only handle what a feature needs, and only while you use it.
- **You're in control.** Permissions are requested transparently, are optional, and
  can be turned off any time. You can delete everything from inside the app.

## What we handle, and why

### Stays on your device (not sent to us)
- **Check-ins, streak, wins, and what you're working on** — stored locally.
- **AI companion chat history** — your conversation transcripts are stored **only on
  your device**. They are not synced to our servers (see "AI companion" for how
  replies are generated).
- **Blocking rules and places** — the apps you choose to block, schedules, and any
  locations you create for place-based rules are stored **on your device only**.
  Location coordinates are **never sent to or stored by us.**

### Only if you turn it on
- **Cloud backup (optional).** If you enable backup so your progress survives a new
  phone, we create an account and store your check-ins/streak/profile in our secure
  backend (Supabase). This requires an **email address** (or an anonymous account
  identifier). You can turn backup off and delete this at any time.
- **AI companion replies.** When you message your companion, the text of your
  message and recent conversation context is sent **through our secure server to our
  AI provider (Anthropic)** to generate a reply, then returned to you. This is used
  **only** to produce the response — it is **not used for advertising, not sold, and
  not used to train models on your data**. Transcripts remain on your device; we do
  not retain your chat history on our servers beyond what's needed to process the
  request.
- **Maps & address search (only when you use the place picker).** If you add a
  place for a location-based rule, map tiles and any address you type are requested
  from **OpenStreetMap**. Only the text you search leaves your device for this; your
  saved coordinates stay local.

### Handled by others, not by us
- **Payments (BeFree Plus subscription).** Subscriptions are processed by **Google
  Play Billing** (and, in future, the Apple App Store). **We never receive or store
  your card or payment details** — the app store handles all payment data under its
  own privacy policy. We only receive confirmation that an entitlement is active.

## What we do NOT do
- We do **not** sell your data.
- We do **not** use your data for advertising.
- We do **not** access your screen content. The optional accessibility-based blocker
  only detects **which app is in the foreground** so it can show a calm "blocked"
  screen — it does not read, log, or transmit screen contents.
- We do **not** track your location on our servers. Location is used **on-device
  only**, for the place-based rules you create.

## Permissions (Android)
Each is optional and used only for the stated feature; you can revoke any of them in
your device settings:
- **Accessibility** — detect the foreground app to show your chosen block screen
  (no screen-content reading).
- **Display over other apps** — draw the calm block screen.
- **Query installed apps** — let you choose which apps to block.
- **Location (incl. background)** — only if you create place-based rules; coordinates
  stay on your device.
- **VPN (on-device) + foreground service** — the optional adult-content filter is a
  **local** filter; it only resolves whether a web address is on the block list and
  **sends nothing off your device** beyond normal DNS lookups to the family-safe
  resolver you choose.
- **Notifications** — opt-in reminders and companion check-ins.
- **Device admin (optional, "strict mode")** — adds friction to uninstalling BeFree
  while a strict commitment is active; requests **no other powers** and never wipes
  or locks your device. Removable when strict mode ends.

## Security
Data in transit is encrypted with TLS. Authentication tokens are stored in the
device's secure storage (Keystore/Keychain). Our backend uses row-level security so
your backed-up data is accessible only to your account.

## Your choices and rights
- **Delete everything.** In the app: **Account → Danger zone → Delete account &
  data**. This erases your on-device data and, if you used cloud backup, your account
  and backed-up data on our servers.
- **Turn features off.** Backup, notifications, blocking, location, and the content
  filter are all optional and reversible.
- Depending on where you live (e.g. UK/EU under UK GDPR / GDPR), you may have rights
  to access, correct, export, or erase your personal data, and to object to or
  restrict processing. Contact us to exercise these.

## Sensitive topics & not medical advice
BeFree supports people working on compulsive behaviour. It is a **support tool, not
medical treatment**, and does not provide medical or clinical advice. A crisis /
helpline path is always available within the app. If you are in crisis, please use
those resources or contact your local emergency services.

## Children
BeFree is not directed at children. We do not knowingly collect data from children
under 13 (or under 16 where required by local law). If you believe a child has
provided us data, contact us and we will delete it.

## Changes to this policy
We may update this policy as the app evolves. We'll change the "Last updated" date
and, for material changes, surface a notice in the app.

## Contact
Questions or requests: **info@befreeapp.net**.

BeFree is operated by Patrick Gillespie, an independent developer based in the
United Kingdom. If BeFree's operation moves to a company, we'll update this policy
with the new entity's details.
