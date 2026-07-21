# Rileks Roadmap

Living tracker. Gate rule: never build the next gate before the current one passes. See `business-concept.md` for the full reasoning.

Last updated: 2026-07-20

---

## Where we are

**Gate 1: Smoke test** (validate demand before building the product). Starting from zero — the old mockup was wiped; we rebuild from the ground up.

```
CONCEPT  ██████████ done   what/who/price/wedge/positioning locked (business-concept.md)
LANDING  ░░░░░░░░░░ 0%     to build from scratch
DEPLOY   ░░░░░░░░░░ 0%     no domain wired yet
TRAFFIC  ░░░░░░░░░░ 0%     no outreach yet
SIGNAL   ░░░░░░░░░░ 0%     no waitlist / pilot interest yet
```

---

## Done

- [x] Concept locked. Chat-first F&B ops OS. Staff report via chat (Telegram first), owner/manager dashboard.
- [x] Buyer vs user split defined. Owner/manager pays; low-literacy high-turnover staff report via chat, zero install.
- [x] Scope decided. v0 = Absensi + Tugas + Shift. NOT payroll/BPJS/tax, NOT POS. Keuangan/Inventori/Resep = future teasers.
- [x] Positioning: "Absensi dan operasional lewat chat. Staff nggak perlu install apapun." Empty quadrant = chat-native + ops-focus.
- [x] Pricing: tiered bands — Starter Rp149k / Growth Rp349k / Business Rp699k / Enterprise custom. Quarterly min, annual pay-10-get-12.
- [x] Stack intent: Next.js/Vercel, Neon+Drizzle, grammY (Telegram), custom auth, cron-job.org, vanilla CSS.
- [x] `docs/business-concept.md`: full blueprint (13 sections, diagrams + verbose) for deriving a PRD.
- [x] `PRE-LANDING.md`: smoke-test landing copy + structure.

---

## Now (Gate 1: smoke test)

- [ ] Finalize landing copy from `PRE-LANDING.md` (Bahasa Indonesia primary).
- [ ] Choose waitlist backend (Tally vs Formspree vs Google Form).
- [ ] Build `landing/index.html` — static, no framework, typography-first, no AI-look. Run landing-page-taste ban-list.
- [ ] Wire waitlist form + email capture.
- [ ] Deploy to Vercel. Wire domain (decide: rileks.id / rileks.app / rileks.vercel.app for now).
- [ ] Verify OG/social share tags + mobile on a real device.

## Next (Gate 1: get signal)

- [ ] Warm outreach to Malang F&B owners (intros first).
- [ ] Post in F&B owner FB/WA groups. Help with the pain, drop link where it fits.
- [ ] Run 1-2 weeks. Watch waitlist signups + "kapan bisa dipakai?" replies.
- [ ] **Gate decision:** real interest -> Gate 2. Silence -> re-angle. Saved weeks either way.

---

## Later (only if Gate 1 passes)

**Gate 2: Prototype + Pilot** (prove the loop feels right, then prove staff actually use it)
- [ ] Design system: strict typography-first monochrome (black/white → Inter → muted status color). Target <10KB CSS. No AI-generated look.
- [ ] Emulated in-browser prototype (no backend):
  - [ ] Telegram chat simulator component (device frame, bubbles, inline buttons).
  - [ ] Mock shared state store — chat actions update the dashboard instantly.
  - [ ] Dashboard shell + pages: Ringkasan, Absensi, Tugas. Teasers: Keuangan/Inventori/Resep (Segera Hadir).
- [ ] Real data model + Postgres (Neon + Drizzle). ~15 tables (companies, outlets, users, memberships, sections, shifts, staff_assignments, attendances, task_templates, task_instances, telegram_accounts, invite_tokens, exceptions, audit_logs).
- [ ] Real Telegram bot (grammY webhook): /start invite, check-in/out, task done/skip, status.
- [ ] Owner/manager auth (custom: bcryptjs + jose, HTTP-only cookie).
- [ ] Cron (cron-job.org): absent-marking, shift reminders, task reminders.
- [ ] **1 pilot outlet** on the real bot. Pass = staff tap it daily WITHOUT nagging.

**Gate 3: First dollar** (prove willingness to pay)
- [ ] Billing. Turn on Starter Rp149k (quarterly).
- [ ] Onboarding flow for owner: company → outlet → shift → section → staff → invite.
- [ ] 1 paying outlet = concept sound. Then scale toward 10-15 tenants.

**Growth (after first dollar)**
- [ ] Harden multi-outlet + manager roles + audit log + exceptions review.
- [ ] WhatsApp Cloud API (real F&B customers, once Telegram loop proven).
- [ ] Keuangan / Inventori / Resep modules (turn teasers real, one at a time).
- [ ] SEO pages ("absensi warung", "aplikasi absensi karyawan F&B").
- [ ] Scale toward 50 tenants (profit positive).

---

## Resolved

- Old mockup prototype wiped. Rebuilding from ground up. No prototype currently.
- Chat client first = Telegram (open, free, generous bot API). WhatsApp deferred (approval/BSP/per-message fees) until loop proven.
- Scope guardrail: no payroll/BPJS/tax. That keeps Rileks below HRIS price and out of the regulated-heavy quadrant.

## Open questions to resolve

- Domain: rileks.id vs rileks.app vs other. Register when landing is ready.
- Waitlist backend: Tally vs Formspree vs Google Form.
- Landing language: Bahasa-only, or Bahasa + English toggle?
- Pilot outlet: which Malang F&B owner is the first warm pilot?
