# Rileks — Business Concept & Blueprint

> Purpose of this document: give an AI agent (and the founders) a single, unambiguous source of truth to derive a PRD, a design spec, and a build plan. Every section pairs a diagram with a verbose explanation of what it means, why it exists, and what decision it locks. Read top to bottom; nothing here is decoration. There is no prototype yet — this is the ground-up blueprint.

---

## 0. One-paragraph summary

Rileks is a chat-first operations OS for small Indonesian F&B businesses (warung, kedai, cafe, small chains). Staff report their work through a chat bot they already use — Telegram now, WhatsApp later — instead of installing and learning an app. A staffer taps "Masuk" to check in, taps to complete daily tasks, and the manager's dashboard updates instantly while the owner gets a plain summary of how the business is running. The wedge is zero-install operations: the people doing the work (kitchen, service, cashier staff, often low digital literacy, high turnover) never touch a dashboard, never make an account, never learn software — they press buttons in a chat. The target buyer is the owner or manager of a 5-to-100-staff F&B operation who today tracks attendance and daily tasks on paper, WhatsApp groups, or in their head. v0 proves one loop: attendance, daily tasks, and shift management. The moat is not the feature (attendance apps are copyable); it is the chat-native zero-install UX for a workforce that will never adopt a traditional app, priced below full HRIS because Rileks deliberately does not do payroll, BPJS, or tax.

---

## 1. What this is

```
 ┌─────────────────────────────────────────────────────┐
 │                      RILEKS                          │
 │                                                      │
 │   "Staff lapor lewat chat.                           │
 │    Manager lihat operasional.                        │
 │    Owner paham kondisi bisnis."                      │
 │                                                      │
 │   A chat-first ops OS for small F&B:                 │
 │                                                      │
 │   ┌──────────┐   ┌──────────┐   ┌──────────┐         │
 │   │  STAFF   │   │ MANAGER  │   │  OWNER   │         │
 │   │ report   │   │ live     │   │ plain    │         │
 │   │ via chat │   │ dashboard│   │ summary  │         │
 │   │ 2 taps,  │   │ tables + │   │ of the   │         │
 │   │ no app,  │   │ stats,   │   │ business │         │
 │   │ no login │   │ exceptions│  │ health   │         │
 │   └──────────┘   └──────────┘   └──────────┘         │
 │                                                      │
 │   NOT a full HRIS. NOT payroll. NOT a POS.           │
 │   NOT an app staff must install. Chat is the client. │
 └─────────────────────────────────────────────────────┘
```

**Explanation.** The product is one idea bolted into three views of the same data. Staff — the hardest users to onboard in any F&B tool — never install anything. They open the chat app already on their phone, and a bot walks them through check-in, check-out, and their daily task list with inline buttons. Everything they do writes to a shared operational record. The manager sees that record as a live dashboard: attendance tables, task completion, and a "needs attention" list of exceptions (late, absent, missed task). The owner sees the calm top-level summary: who is in, what got done, what is off.

The negatives define the scope as much as the positives. It is **not a full HRIS** — no payroll runs, no BPJS, no PPh21, no tax compliance; that is the heavy, regulated, expensive quadrant Rileks deliberately avoids. It is **not a POS** and **not accounting** — the Keuangan and Inventori modules are future teasers, not v0. And critically, it is **not an app staff must install**: the chat client is the interface for the workforce. That single decision — chat as the staff client — is what makes Rileks adoptable by a high-turnover, low-digital-literacy workforce that would abandon a downloaded app on day one.

---

## 2. Target market and niches

```
 GEOGRAPHY
 ┌────────────────────────────────────────────┐
 │   Indonesia (Malang first, then national)   │
 └────────────────────────────────────────────┘

 THE BUYER (pays)                THE USER (reports)
 ┌──────────────────────┐        ┌──────────────────────┐
 │ owner / manager of    │        │ kitchen / service /   │
 │ small F&B             │        │ cashier staff         │
 │ - 5 to 100 staff      │        │ - high turnover       │
 │ - 1 to 8 outlets      │        │ - low digital literacy│
 │ - tracks ops on paper,│        │ - WON'T install an app│
 │   WA groups, or memory│        │ - ALREADY on Telegram/│
 │ - wants control, not  │        │   WhatsApp daily      │
 │   a payroll system    │        │                       │
 └──────────────────────┘        └──────────────────────┘

 NICHES (who this fits hardest)
 ┌─────────────┬─────────────┬─────────────┐
 │ kedai kopi /│ warung /    │ bakery /    │
 │ cafe        │ rumah makan │ cloud kitchn│
 ├─────────────┼─────────────┼─────────────┤
 │ small resto │ franchise   │ catering /  │
 │ chains      │ outlets     │ meal prep   │
 └─────────────┴─────────────┴─────────────┘

 NOT for: enterprise HR, companies that need payroll/BPJS/tax,
          solo operators (1 person, nothing to manage),
          non-shift office teams
```

**Explanation.** Rileks is a two-sided product with a split between who pays and who uses. The **buyer** is the owner or manager: they feel the pain of not knowing who showed up, whether opening/closing tasks got done, and whether the outlet ran right while they were away. They currently cobble this together with paper attendance books, chaotic WhatsApp groups, and memory. They want control and visibility, but they do not want — and cannot afford the complexity of — a full payroll HRIS. The **user** is the staff: high turnover, low digital literacy, and allergic to installing apps. This is the load-bearing insight of the whole business: any tool that requires staff to download software, create accounts, and learn a UI will fail in this workforce. Chat is the only client they will actually use.

The band matters. Below 5 staff (a solo warung) there is nothing to manage and no buyer. Above ~100, or anywhere payroll/BPJS/tax compliance is required, the customer needs a real HRIS (Talenta, Gadjian) and Rileks is out of scope by design. The niches are shift-based F&B operations where opening/closing routines and attendance actually matter: cafes, warung, bakeries, small chains, franchise outlets, catering. The "not for" line is the guardrail against scope creep — every feature request that implies payroll, tax, or a staff-facing installed app is out of scope by definition.

---

## 3. User intention

```
 OWNER/MANAGER wants...          STAFF wants...
 ──────────────────              ───────────
 "know who showed up"            "clock in without hassle"
 "know closing got done"         "know what I have to do today"
 "stop chasing people on WA"     "not get yelled at unfairly"
 "see it without being there"    "no app to download/learn"
 "control across outlets"        "just tap a button, done"
        │                              │
        ▼                              ▼
 ┌──────────────────────────────────────────┐
 │  SHARED INTENTION: the outlet runs right  │
 │  without the owner standing in it.        │
 │                                           │
 │  owner: visibility + accountability        │
 │  staff: zero-friction reporting            │
 └──────────────────────────────────────────┘

 The whole product = make "what happened at the outlet
 today" a fact, not a guess or an argument.
```

**Explanation.** Two parties, one shared intention, and the product only wins if it serves both at once. The owner/manager's pains are about blindness and chasing: not knowing who is in, whether the closing checklist happened, and burning energy interrogating a WhatsApp group to reconstruct the day. They want the outlet to run correctly whether or not they are physically present. The staff's pains are about friction and fairness: they want to clock in fast, know exactly what is expected today, not be blamed unfairly for things outside their control, and above all not be forced to install and learn software.

The synthesis is the design north star: **the outlet runs right without the owner standing in it**, and "what happened today" becomes a recorded fact rather than a guess or an argument. For the owner that means visibility and accountability captured automatically. For the staff that means reporting so frictionless it happens by reflex — two taps in a chat they already have open. Any feature that adds friction for staff is suspect (they will silently stop using it, and then the owner's data goes dark). Any feature that gives the owner truth without effort earns its place.

---

## 4. Product flow

```
 OWNER SETUP (one-time)
 ┌────────┐   ┌────────┐   ┌────────┐   ┌────────┐
 │ sign up│──►│ add    │──►│ add    │──►│ invite │
 │ +company   │ outlet,│   │ staff, │   │ staff  │
 │        │   │ shift, │   │ assign │   │ via TG │
 │        │   │ section│   │ shift  │   │ deeplink│
 └────────┘   └────────┘   └────────┘   └────────┘

 STAFF DAILY (in chat, zero install)
 Telegram bot
     │
     ▼
 ┌──────────────┐  tap    ┌──────────────┐   ┌──────────────┐
 │ "Masuk"      │────────►│ bot logs      │──►│ generates     │
 │ (check in)   │  button │ check-in +    │   │ today's tasks │
 │              │         │ late calc     │   │ for that shift│
 └──────────────┘         └──────────────┘   └──────┬───────┘
                                                     │ tap "Selesai"
                                                     ▼
                          ┌──────────────┐   ┌──────────────┐
                          │ "Keluar"     │◄──│ tasks marked  │
                          │ (check out)  │   │ complete      │
                          └──────┬───────┘   └──────────────┘
                                 │ writes to shared record
                                 ▼
 MANAGER/OWNER (dashboard, live)
 ┌──────────────────────────────────────────────┐
 │ attendance table + task completion + stats +  │
 │ "Perlu Perhatian" exceptions update instantly  │
 └──────────────────────────────────────────────┘

 engine: chat button -> webhook -> shared record -> dashboard
```

**Explanation.** There are two flows and they must not be confused. The owner setup flow is one-time and happens on the web: register the company, define outlets, shifts, and sections, add staff and assign each to an outlet/section/shift, then invite each staffer via a Telegram deep link. This is the only "admin" surface, and only the owner/manager touches it.

The staff daily flow runs on every shift and lives entirely inside chat. A staffer opens the Telegram bot and taps "Masuk"; the bot records the check-in, calculates lateness against the shift start time, and generates that day's task list for their section and shift. They tap each task done as they complete it, then tap "Keluar" to check out; if tasks remain incomplete the bot surfaces them. No install, no login, no typing beyond optional notes.

Every chat action flows through a webhook into a shared operational record, and the manager/owner dashboard reads that record live: attendance tables, task completion counts, stat cards, and a "Perlu Perhatian" (needs attention) list of exceptions. The engine line is the whole technical truth: a chat button hits a webhook, the webhook writes the shared record, the dashboard renders it. Cron jobs close the loop for things staff don't do — marking absent after a shift ends, sending shift and task reminders.

---

## 5. System architecture

```
  STAFF SIDE                      OWNER/MANAGER SIDE
  ┌──────────────┐                ┌──────────────┐
  │ Telegram app │                │ Browser      │
  │ (already     │                │ dashboard    │
  │  installed)  │                │              │
  └──────┬───────┘                └──────┬───────┘
         │ taps button                   │ loads pages
         │ (webhook)                     │ (auth cookie)
         ▼                               ▼
  ┌─────────────────────────────────────────────┐
  │              RILEKS  (Next.js on Vercel)     │
  │  ┌────────────┐    ┌──────────────────────┐  │
  │  │ TG webhook │───►│  Shared operational  │  │
  │  │ (grammY)   │    │  record (Postgres)   │  │
  │  │ check-in,  │◄───│  attendance, tasks,   │  │
  │  │ tasks      │    │  exceptions, audit    │  │
  │  └────────────┘    └──────────┬───────────┘  │
  │  ┌────────────┐               ▼              │
  │  │ Dashboard  │    ┌──────────────────────┐  │
  │  │ (SSR pages)│◄───│  Drizzle ORM / Neon   │  │
  │  └────────────┘    └──────────────────────┘  │
  └───────────────────────────────▲──────────────┘
                                  │ GET /api/cron/*
                        ┌────────────────────┐
                        │  cron-job.org       │
                        │  absent-marking,    │
                        │  shift/task reminders│
                        └────────────────────┘

  NOTE: staff never install anything. Chat is the client.
        = adoption by a workforce that abandons apps.
```

**Explanation.** The system has a clean split by user type. On the staff side sits Telegram — an app they already have — talking to the backend through a single webhook. On the owner/manager side sits a browser loading the dashboard behind an auth cookie. Between them sits one Next.js app on Vercel doing three jobs: process the Telegram webhook (grammY handles check-in, check-out, and task callbacks), render the dashboard server-side, and hold everything in one shared operational record in Postgres (Neon) via Drizzle. A separate external cron (cron-job.org) pings the app on a schedule to mark absences after shifts end and to push shift/task reminders — the actions that happen when nobody taps a button.

The architectural note is the business's foundation, not a footnote. By making chat the staff client, Rileks removes the single biggest failure point of every F&B ops tool: staff adoption. There is no app to install, no account to create, no UI to learn for the people doing the work. The tradeoff, tracked in the risk section, is dependence on the chat platform's bot API and its rules — which is exactly why Telegram (open, free, generous bot API) comes first and WhatsApp (approval, BSP, per-message fees) comes only once demand is proven.

---

## 6. The wedge, up close (zero-install chat reporting)

```
  A staffer starts a shift. Compare the two worlds.

  TRADITIONAL APP HRIS:          RILEKS (chat):
  1. download app                1. open Telegram (already open)
  2. create account              2. tap "Masuk"
  3. verify phone/email          3. done. late auto-calculated,
  4. learn the UI                   tasks appear as buttons
  5. remember to open it daily
  6. (turnover: repeat for
      every new hire)            new hire: 1 deep-link tap to join

  ┌─────────────────────────────────────┐
  │  check_in  -> log time, calc late   │
  │  generate tasks for shift+section   │  ← the daily loop
  │  task_done -> mark complete         │
  │  check_out -> flag incomplete tasks  │
  │  no show   -> cron marks absent     │  ← truth without staff action
  └─────────────────────────────────────┘

  Simple. No app. No login. Just chat buttons + a few rules.
```

**Explanation.** The wedge is worth stating as a side-by-side because the gap is the whole business. A traditional app HRIS asks a low-literacy, high-turnover F&B worker to download, register, verify, learn, and remember an app — and then repeat that gauntlet for every new hire in a workforce that churns constantly. Rileks collapses onboarding to a single deep-link tap and daily reporting to two taps inside an app the worker already lives in. The bot auto-calculates lateness, auto-generates the right task list for the shift and section, and flags incomplete work at checkout, so the staffer never types or decides anything they don't have to.

The boxed rules are the operational core, and they are deliberately small: check-in logs the time and computes lateness; task generation is driven by templates per section and shift; task completion is a button; checkout surfaces anything unfinished; and a cron marks absent anyone who never showed. The closing line is the point — there is no AI and no heavy machinery here, just chat buttons and a handful of rules. The feature is cheap to build and cheap to run, and its defensibility is not the logic (copyable) but the zero-install adoption it unlocks for a workforce nobody else can onboard.

---

## 7. Sitemap (what to build)

```
  STAFF (Telegram bot)            OWNER/MANAGER (web dashboard)
  ─────────────────                ─────────────────────────
  /start invite_<token>            /  landing / marketing
   └ link account                  /dashboard  (Ringkasan/overview)
  check-in / check-out              ├ Absensi (attendance)
  today's tasks                     ├ Tugas (daily tasks)
  task done / skip + reason         ├ Staff
  status                            ├ Bagian (sections)
                                    ├ Shift
                                    ├ Exception
                                    ├ Manager (owner only)
                                    ├ Outlet (owner only)
                                    ├ Audit Log
                                    ├ Pengaturan (owner only)
                                    └ teasers: Keuangan / Inventori /
                                               Resep (Segera Hadir)

  AUTH: owner email+password. Staff never log in (chat = identity).

  BUILD ORDER (ground up):
   1. landing + waitlist        ← NOW (no product yet)
   2. design system (mono, typography-first, no AI look)
   3. mock/emulated prototype   ← chat simulator + dashboard, in-browser
   4. real data model + Postgres
   5. Telegram bot (real webhook) + auth
   6. cron (absent/reminders)
   7. WhatsApp + Keuangan/Inventori/Resep modules (later phases)
```

**Explanation.** The surface splits by user. Staff never see a web page — their entire interface is the Telegram bot: link account via deep link, check in and out, see and complete today's tasks, check status. Owner/manager pages live behind auth: the overview, attendance, tasks, and the supporting management pages (staff, sections, shifts, exceptions, and owner-only outlet/manager/settings), plus an audit log. Keuangan, Inventori, and Resep exist only as "Segera Hadir" (coming soon) teasers in v0 — they hold the shape of the product's future without pulling scope into the present. Auth is owner/manager only; staff identity is their linked Telegram account, so staff never have a password.

The build order is the anti-overwhelm plan and, given there is no prototype today, it starts from zero. Landing and waitlist first, because they test demand with no product. Then the design system (strict typography-first monochrome, deliberately not the generic AI-generated look). Then an emulated in-browser prototype — a chat simulator wired to a mock dashboard — to prove the loop feels right before any backend exists. Only then the real data model, the live Telegram bot with auth, and the cron jobs. WhatsApp and the finance/inventory/recipe modules are explicitly later phases. Each step is gated by the previous one passing.

---

## 8. Pricing

```
┌───────────┬───────────┬───────────┬──────────────┐
│ STARTER   │ GROWTH    │ BUSINESS  │ ENTERPRISE   │
│ Rp149k/mo │ Rp349k/mo │ Rp699k/mo │ from ~Rp1.2jt│
├───────────┼───────────┼───────────┼──────────────┤
│ 15 staff  │ 40 staff  │ 100 staff │ 100+ staff   │
│ 1 outlet  │ 3 outlets │ 8 outlets │ unlimited    │
│ attendance│ + more    │ + more    │ custom quote │
│ + tasks   │ outlets   │ staff     │ white-glove  │
│ + shifts  │ + staff   │ + support │ onboarding   │
└───────────┴───────────┴───────────┴──────────────┘

 Implied per-staff: Rp7,000 - Rp9,900 / staff / month.
 (below full-payroll HRIS: no payroll/BPJS/tax)

 TERMS: no monthly plan. Quarterly minimum.
        Annual = pay 10, get 12 (~16.7% off, cash forward).

 MONEY MATH (blended ~Rp250k/tenant):
   breakeven ~23 tenants. 50 tenants = profit positive.
   100 tenants = ~Rp4.7jt/mo profit, ~Rp58k/founder-hour.
```

**Explanation.** Pricing is tiered bands by staff count, not flat-per-company and not pure per-seat. The reasoning: marginal cost per extra staffer is near zero (a few DB rows, a few chat messages), while the real cost is founder support time, which scales per **account**, not per **seat**. Bands give big customers per-seat fairness without saddling a two-person founding team with per-seat billing churn. Four tiers — Starter (Rp149k, 15 staff, 1 outlet), Growth (Rp349k, 40 staff, 3 outlets), Business (Rp699k, 100 staff, 8 outlets), Enterprise (custom, from ~Rp1.2jt) — put the implied price at Rp7,000–9,900 per staff per month, deliberately below full-payroll HRIS competitors because Rileks does not do payroll, BPJS, or tax.

Terms carry cash discipline: no monthly plan, quarterly minimum commitment, annual prepay at pay-ten-get-twelve (~16.7% off) to pull cash forward. The money math sets the concrete goal. Against a blended ~Rp250k/tenant early mix, fixed cost is ~Rp1.96jt/month and breakeven lands around 23 tenants; profit turns positive near 50 tenants, and at 100 tenants each founder-hour earns ~Rp58k. The near-term realistic target is the 10–15 tenant band (still slightly negative, but the proving ground). Benchmarks: GajiHub Rp10k–16.9k, Gadjian Rp12.5k–30k, Talenta ~Rp20k–50k per employee — all payroll-heavy; Rileks undercuts on price and wins on chat-native zero-install UX they don't have.

---

## 9. Positioning

```
                CHAT-NATIVE / zero-install
                        ▲
                        │    ● RILEKS  ◄── empty quadrant.
                        │      attendance +      nobody here.
                        │      tasks + shifts     YOU own it.
                        │      via chat, no app
   no ops focus ◄───────┼───────────► ops / attendance focus
                        │
     Linktree-style     │    ● Gadjian / Talenta / GajiHub
     generic tools      │      full HRIS, payroll, BPJS, tax
     (not for F&B ops)  │      staff must install app + account
                        │      heavy, expensive, office-shaped
                        ▼
                APP-FIRST / install required
```

**Explanation.** The map has two axes: chat-native-and-zero-install versus app-first-install-required on the vertical, and ops/attendance focus versus no ops focus on the horizontal. The HRIS incumbents (Gadjian, Talenta, GajiHub) cluster bottom-right: strong on attendance and payroll, but app-first — staff must install software and create accounts — and shaped for office teams with full payroll/BPJS/tax needs. They are heavy and expensive for a warung that just wants to know who showed up and whether closing got done.

The top-right quadrant — real ops focus **and** chat-native zero-install — is empty, and that is the position Rileks takes. The one-line articulation: "Absensi dan operasional lewat chat. Staff nggak perlu install apapun." (Attendance and operations through chat. Staff install nothing.) Important honesty: this is a positioning and UX wedge, not a hard technical moat. Attendance logic is copyable. The defensibility comes from owning the chat-native-for-F&B position first, from a workforce-fit UX incumbents won't retrofit (their whole model assumes an installed app), and from speed and price.

---

## 10. Go-to-market

```
 Founders in Malang. Buyers = local + national F&B owners. $0 budget.

 ┌──────────────────────┬────────┬──────┬─────┐
 │ CHANNEL              │ effort │ fit  │ $0? │
 ├──────────────────────┼────────┼──────┼─────┤
 │ local F&B owners     │ high   │ ★★★  │ yes │ ← start here
 │  (Malang, warm intros)│       │      │     │
 │ F&B owner FB/WA groups│ high  │ ★★★  │ yes │
 │ IG/TikTok build-in-   │ med    │ ★★   │ yes │
 │  public (Indo SMB)    │       │      │     │
 │ SEO "absensi warung", │ slow   │ ★★★  │ yes │ compounds
 │  "aplikasi absensi kar"│       │      │     │
 │ Meta/TikTok ads       │ $$$    │ ★★★  │ NO  │ later
 └──────────────────────┴────────┴──────┴─────┘

 THE BET: warm local rollout proves the loop, then organic scales.
 THE RISK: F&B owners are busy, skeptical, paper-habituated.
           Smoke test + first pilot outlets test this.
```

**Explanation.** Distribution starts where the founders have an unfair advantage: Malang, local F&B owners, warm introductions. Getting a handful of real outlets running the loop is worth more than any amount of cold marketing, because it produces proof, testimonials, and the operational feedback that hardens the product. From there, F&B owner communities (Facebook and WhatsApp groups where owners already complain about staff and attendance) and build-in-public content aimed at Indonesian SMBs extend reach at zero cost. SEO around high-intent local terms ("absensi warung", "aplikasi absensi karyawan") compounds slowly but fits perfectly. Paid ads are the natural channel eventually but are deferred until there is budget and a proven conversion path.

The bet and the risk are stated plainly. The bet is that a warm local rollout proves the loop and seeds organic growth. The risk is real: F&B owners are busy, skeptical of software, and deeply habituated to paper and WhatsApp groups; convincing them to change is the hard part, harder than the build. That risk is what the smoke test and the first pilot outlets exist to measure, not to plan away.

---

## 11. Assumptions and risks

```
 LEAP-OF-FAITH assumptions (if any is false, business dies):

 1. staff adoption → will low-literacy, high-turnover staff
    actually tap the bot daily?
    kill test: do pilot outlet staff use it without nagging?

 2. owner willingness → will owners pay Rp149k+/mo for
    visibility they currently get "free" (badly) on paper?
    kill test: does anyone join waitlist / pilot / pre-pay?

 3. chat platform holds → does Telegram/WhatsApp bot API
    keep allowing this flow at acceptable cost?
    risk: WhatsApp fees/approval; TG policy change. Watch, can't control.

 4. no fast-follow → an HRIS incumbent doesn't ship a
    chat-native zero-install mode next quarter.

 RANK: #1 and #2 are the real gates. Test #1 with a pilot outlet,
       #2 with the landing page + pilot.
```

**Explanation.** Four assumptions hold the business up, and if any collapses the business collapses with it. Staff adoption is first and most existential: the entire thesis is that chat removes the adoption barrier, but it must be proven that real F&B staff — not motivated early adopters — actually tap the bot every shift without being chased. The kill test is a pilot outlet where usage is observed, not assumed. Owner willingness is second: owners get a crude version of this visibility "free" today via paper and WhatsApp, so they must value the upgrade enough to pay Rp149k+/month; the kill test is waitlist signups, pilot commitments, or pre-payment. Chat-platform durability is third — Telegram is generous now, but WhatsApp brings approval, BSP, and per-message fees, and any platform can change rules; this is watched, not controlled. Fast-follow is fourth: an incumbent bolting on a chat mode.

The ranking is the important part. Assumptions one and two are the real gates. Adoption is tested by a live pilot outlet; willingness is tested by the landing page and the same pilot. Assumptions three and four are watched but cannot be pre-solved, and they are not reasons to keep planning instead of shipping the test.

---

## 12. Moat

```
 THREAT: an HRIS (Talenta/Gadjian) adds a chat check-in mode → erases the wedge

 YOUR DEFENSES (thin but real):
  - workforce fit: whole product built around staff who won't install apps;
    incumbents' model assumes an installed app + account
  - speed: ship the F&B-perfect loop while they serve office HR broadly
  - brand: "Rileks = absensi lewat chat" own the position first
  - local depth: real Malang F&B pilots + word of mouth incumbents can't buy
  - bundle: chat check-in + task loop + shift logic + F&B UX, not one feature

 TRUTH: no hard moat early. Moat = speed + workforce-fit UX +
        being first into the F&B owner's mind, defended by staying
        closer to this buyer than a generalist HRIS will bother to.
```

**Explanation.** The honest threat is that a well-funded HRIS incumbent adds a chat-based check-in and erases the wedge overnight. The defenses are real but thin, and pretending otherwise would be a mistake. The strongest is workforce fit: Rileks is built end-to-end for a workforce that will not install apps, while incumbents' entire architecture and business model assume an installed app with per-user accounts — retrofitting genuine zero-install is a deeper change than it looks. Speed lets a small team ship the F&B-perfect loop while a generalist serves broad office HR. Brand means owning "absensi lewat chat" in owners' minds before a latecomer fights for it. Local depth — real Malang pilots and word of mouth — is distribution incumbents can't simply buy. And the paid value is a bundle (chat check-in plus task loop plus shift logic plus F&B-tuned UX), harder to match wholesale than any single feature.

The closing truth is a mindset, not a cope. Early-stage products rarely have a hard moat. Rileks's moat is the compound of speed, workforce-fit UX, and being first into the F&B owner's mind, defended by continuing to move faster and stay closer to this specific buyer than a generalist HRIS will bother to.

---

## 13. Validation roadmap (gates)

```
 GATE 1: SMOKE TEST         ← you are HERE (no product)
 ┌──────────────────────┐
 │ landing page + wait-  │
 │ list. Show the pitch. │
 │ Warm local outreach.  │
 │ 1-2 weeks.            │
 └──────────┬───────────┘
            │ PASS = signups + owners saying "I want this"
            │ FAIL = nobody bites → re-angle. saved weeks.
            ▼
 GATE 2: PROTOTYPE + PILOT (emulated loop, then 1 real outlet)
 ┌──────────────────────┐
 │ build ONLY if gate 1  │
 │ passes. in-browser    │
 │ chat sim + dashboard, │
 │ then 1 pilot outlet    │
 │ on a real TG bot.     │
 └──────────┬───────────┘
            │ PASS = staff tap the bot daily WITHOUT nagging
            ▼
 GATE 3: FIRST DOLLAR
 ┌──────────────────────┐
 │ turn on billing.      │
 │ 1 paying outlet =     │
 │ concept SOUND. scale  │
 │ toward 10-15, then 50.│
 └──────────────────────┘

 RULE: never build gate N+1 before gate N passes.
```

**Explanation.** The business advances through three gates, and the rule is absolute: never build gate N+1 before gate N passes. Gate one is the smoke test, where the founders are now with no product: a landing page plus waitlist, backed by warm local outreach to F&B owners, run for one to two weeks. Passing looks like signups and owners actively saying they want it; failing is a win because it saves weeks of building the wrong thing. Gate two is prototype plus pilot, built only if gate one passes: first an emulated in-browser loop (chat simulator wired to a mock dashboard) to prove the experience feels right with zero backend, then one real pilot outlet on a live Telegram bot. Passing means the hardest assumption holds — staff tap the bot every shift without being nagged. Gate three is the first dollar: billing goes live, and a single paying outlet proves willingness, after which the work is scaling toward the 10–15 tenant near-term band and onward to 50.

The rule is also protection against building a full HRIS before knowing anyone will use or pay for it. It converts an overwhelming "build an ops OS" into a sequence of small, reversible bets, each funded only by evidence from the last. The next action is not to build the product; it is to ship the landing page that tests gate one.

---

## Appendix: decisions locked by this document

- Product mechanic: chat-native (Telegram first, WhatsApp later) attendance + daily-task + shift loop for staff; web dashboard for owner/manager. Staff install nothing.
- Buyer vs user: owner/manager pays; kitchen/service/cashier staff report via chat. Two-sided.
- Scope: v0 = Absensi + Tugas + Shift. NOT payroll/BPJS/tax, NOT POS, NOT accounting. Keuangan/Inventori/Resep are future teasers only.
- Wedge: zero-install chat reporting for a workforce that abandons apps. Empty "chat-native + ops-focus" quadrant.
- Moat: workforce-fit UX + speed + local depth + brand ("absensi lewat chat"). Each leg copyable; the bundle + niche focus is the defense.
- Pricing: tiered bands by staff count — Starter Rp149k / Growth Rp349k / Business Rp699k / Enterprise custom. Quarterly minimum, annual pay-10-get-12. ~Rp7k–9.9k/staff, below payroll HRIS.
- Stack intent: Next.js on Vercel, Neon Postgres + Drizzle, grammY for Telegram, custom auth, cron-job.org, vanilla CSS. Solo/lean, free-tier first.
- Design: strict typography-first monochrome, deliberately not AI-generated-looking. (Design spec is a separate doc when Gate 2 begins.)
- Build order: landing + waitlist, then design system, then emulated prototype, then real data model, then live bot + auth, then cron, then WhatsApp + extra modules.
- Gate rule: never build the next gate before the current one passes. Smoke test first.
