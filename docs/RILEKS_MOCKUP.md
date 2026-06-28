# Rileks Mockup

## 1. What this mockup is

A presentation-ready prototype for a chat-first operations OS for small Indonesian F&B businesses. It shows staff reporting through chat, manager dashboard updates, owner summaries, and connected Absensi, Daily Task, Resep, Inventori, and Keuangan modules.

## 2. What is intentionally fake

All data is local mock data. Chat messages, attendance updates, inventory changes, and finance transactions are simulated in React state. There is no real WhatsApp, Telegram, Supabase, database, auth, payment, OCR, AI assistant, payroll, or accounting integration.

## 3. How to run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## 4. How to deploy on Vercel

Connect this GitHub repository to Vercel and use the default Next.js settings. No environment variables are required for the mockup phase.

## 5. Demo script for customers

1. Open `/` and explain: “Staff lapor lewat chat. Manager melihat operasional. Owner paham kondisi bisnis.”
2. Click **Lihat Demo**.
3. In the chat simulator, choose Absensi → Masuk and show the dashboard summary updating.
4. Mark a daily task complete.
5. Update inventory and show low-stock attention.
6. Add sales/expense/closing cash and show finance updates.
7. Open `/dashboard` and module pages to show the manager/owner view.

## 6. Future connection plan

- Phase 2: Supabase database.
- Phase 3: Telegram bot for internal prototype.
- Phase 4: WhatsApp Cloud API for real F&B customers.

## 7. Required environment variables

None required for mockup phase.

Later Supabase, not needed yet:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

Later Telegram, not needed yet:
- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_WEBHOOK_SECRET`

Later WhatsApp, not needed yet:
- `WHATSAPP_ACCESS_TOKEN`
- `WHATSAPP_PHONE_NUMBER_ID`
- `WHATSAPP_VERIFY_TOKEN`
- `WHATSAPP_APP_SECRET`
