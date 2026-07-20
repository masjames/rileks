# Rileks — pre-landing (Gate 1 smoke test)

> Single source for the smoke-test page. Copy + structure live here first, then port to `landing/index.html` once wording is settled. There is no product yet. Goal of this page: prove demand. One job = capture emails/WA from F&B owners who feel this pain. Primary language: Bahasa Indonesia.

---

## Positioning (the moat, pinned)

For owners and managers of small F&B businesses whose staff report attendance and daily tasks on paper, in WhatsApp groups, or not at all. Rileks lets staff clock in and run their daily checklist through a chat bot they already have — no app to install, no account to create. The owner sees who showed up, whether closing got done, and what needs attention, live, without standing in the outlet.

Not a payroll system. Not a POS. Not another app your staff will ignore. Attendance and daily operations through chat.

One line: **Absensi dan operasional lewat chat. Staff nggak perlu install apapun.**
(Attendance and operations through chat. Staff install nothing.)

---

## Page structure

### 1. Hero

**Headline (ID):** Staff lapor lewat chat. Anda tahu kondisi outlet, tanpa harus di tempat.

**Sub (ID):** Staff absen dan selesaikan tugas harian lewat chat yang sudah ada di HP mereka — tanpa install aplikasi, tanpa bikin akun. Anda lihat siapa masuk, siapa telat, dan tugas mana yang belum beres. Real-time.

**Primary CTA:** Daftar akses awal
**Field:** email atau nomor WhatsApp + button. No other fields.

**Trust line under CTA:** Tanpa spam. Satu pesan saja saat sudah siap.

> Embed rule: put a real interactive demo here, not a screenshot. A working "tap Masuk in a fake chat → dashboard row appears" mini-demo running on localStorage. Show the loop in 5 seconds.

### 2. The problem (three real moments, not features)

- Anda nggak di outlet, dan nggak tahu siapa yang benar-benar masuk hari ini.
- Tutup toko harusnya ada checklist, tapi Anda cuma bisa percaya "katanya sudah".
- Grup WhatsApp penuh, absensi kertas hilang, dan Anda capek nanya satu-satu.

Copy: Kepala Anda bukan sistem absensi. Kertas gampang hilang. Grup WA berantakan. Aplikasi absensi biasa? Staff Anda nggak akan install-nya.

### 3. How it works (three steps)

1. **Staff absen lewat chat.** Buka Telegram (sudah ada), tap "Masuk". Telat dihitung otomatis. Tugas hari ini langsung muncul.
2. **Kerjakan tugas harian.** Tiap tugas tinggal di-tap kalau selesai. Tap "Keluar" saat pulang — yang belum beres langsung ketahuan.
3. **Anda lihat semuanya.** Dashboard update real-time: siapa masuk, siapa telat, tugas selesai berapa, apa yang perlu perhatian.

### 4. Why not just an attendance app / paper / WhatsApp group

Plain-spoken, no hype:
- Aplikasi absensi biasa: staff harus download, bikin akun, belajar. Turnover tinggi = ribet tiap ada orang baru. Rileks: cukup chat yang sudah ada.
- Kertas & grup WA: gampang hilang, susah ditarik jadi laporan. Rileks: otomatis jadi catatan yang rapi.
- Bukan payroll, bukan BPJS, bukan pajak. Fokus: absensi, tugas harian, shift. Makanya lebih murah dan lebih simpel.

### 5. Pricing peek (optional, keep light)

- Mulai dari Rp149.000/bulan untuk 1 outlet, sampai 15 staff.
- Bayar per triwulan. Tahunan lebih hemat (~16%).
- Harga naik sesuai jumlah staff & outlet. Detail menyusul.

> Smoke-test note: show ONE anchor price (Rp149k) + one CTA. Full tier table comes after someone proves they'll pay.

### 6. Waitlist CTA (repeat)

**Headline:** Mau tahu kondisi outlet tanpa harus di tempat?
**CTA:** Daftar akses awal (same capture as hero).

### 7. Footer

- One line on who's building it (founders, Malang).
- Contact: email + WhatsApp.
- No fake social links.

---

## Copy ban list (applied)

- No em-dashes in copy.
- No pill-everything. Mix button/badge shapes.
- No purple/blue gradient, no glassmorphism.
- No "Revolusi / Ubah cara Anda / Supercharge" hype.
- No symmetric 3-card grid as default layout.
- Real demo widget over stock imagery.
- Voice: plain founder talking to a busy warung/cafe owner, not SaaS template.
- Typography-first, monochrome base, status color only where it means something.

---

## Decisions to resolve before HTML (log in docs/roadmap.md)

| Question | Options |
|----------|---------|
| Waitlist backend | Tally vs Formspree vs Google Form |
| Capture field | email vs WhatsApp number vs both |
| Hosting | Vercel static (default) |
| Demo widget | Live localStorage chat→dashboard vs static |
| Language | Bahasa only vs Bahasa + English toggle |
| Domain | rileks.id vs rileks.app vs other |

---

## Next after this page

- [ ] Port this copy to `landing/index.html`, static, no framework.
- [ ] Wire capture field to chosen form backend.
- [ ] Build the localStorage chat→dashboard demo widget for the hero.
- [ ] Deploy to Vercel, wire domain.
- [ ] Warm outreach to Malang F&B owners + F&B groups (see docs/roadmap.md Gate 1).
