/* Rileks demo: shared client-side mock resources. Replace endpoint methods with fetch calls later. */
(function (global) {
  'use strict';
  var KEY = 'rileks_demo_warung_bayu_v1';
  var listeners = [];
  var seed = {
    onboarded: false,
    onboardingStep: 0,
    business: { name: 'Warung Bayu', outlet: 'Warung Bayu Malang', city: 'Malang' },
    telegram: { connected: false, handle: '@rileks_warung_bayu_bot' },
    staff: [
      { id: 'rina', name: 'Rina', role: 'Kepala shift', section: 'Layanan', status: 'hadir', time: '07.54' },
      { id: 'dika', name: 'Dika', role: 'Dapur', section: 'Dapur', status: 'belum', time: '—' },
      { id: 'budi', name: 'Budi', role: 'Kasir', section: 'Kasir', status: 'hadir', time: '08.01' },
      { id: 'sari', name: 'Sari', role: 'Layanan', section: 'Layanan', status: 'hadir', time: '07.58' },
      { id: 'ayu', name: 'Ayu', role: 'Persiapan', section: 'Dapur', status: 'hadir', time: '07.49' }
    ],
    tasks: [
      { id: 't1', title: 'Nyalakan kompor & cek gas', assignee: 'Dika', section: 'Dapur', done: false, order: 1 },
      { id: 't2', title: 'Siapkan bumbu dan sambal', assignee: 'Dika', section: 'Dapur', done: false, order: 2 },
      { id: 't3', title: 'Bersihkan meja depan', assignee: 'Sari', section: 'Layanan', done: true, order: 3 },
      { id: 't4', title: 'Hitung modal kas', assignee: 'Budi', section: 'Kasir', done: true, order: 4 },
      { id: 't5', title: 'Cek stok ayam & sayur', assignee: 'Ayu', section: 'Dapur', done: true, order: 5 }
    ],
    issues: [{ id: 'i1', category: 'Stok', title: 'Ayam hampir habis', detail: 'Sisa kira-kira 3 kg untuk makan siang. Perlu belanja sebelum pukul 11.00.', status: 'baru', assignee: '', source: 'Dika', time: '08.12' }],
    activity: [
      { id: 'a1', text: 'Ayu menyelesaikan cek stok ayam & sayur', time: '08.05', tone: 'done' },
      { id: 'a2', text: 'Budi masuk untuk shift pagi', time: '08.01', tone: 'normal' },
      { id: 'a3', text: 'Sari menyelesaikan bersihkan meja depan', time: '07.59', tone: 'done' },
      { id: 'a4', text: 'Rina masuk untuk shift pagi', time: '07.54', tone: 'normal' }
    ]
  };
  function copy(v) { return JSON.parse(JSON.stringify(v)); }
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || copy(seed); } catch (_) { return copy(seed); } }
  var state = load();
  function persist() { localStorage.setItem(KEY, JSON.stringify(state)); listeners.forEach(function (fn) { fn(copy(state)); }); }
  function now() { return new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', hour12: false }); }
  function log(text, tone) { state.activity.unshift({ id: 'a' + Date.now(), text: text, time: now(), tone: tone || 'normal' }); }
  function get(id) { return state.staff.find(function (s) { return s.id === id; }); }
  global.RileksAPI = {
    resources: ['businesses', 'outlets', 'telegramConnections', 'staff', 'attendance', 'checklists', 'issues', 'activity'],
    getState: function () { return copy(state); }, subscribe: function (fn) { listeners.push(fn); return function () { listeners = listeners.filter(function (f) { return f !== fn; }); }; },
    resetDemo: function () { state = copy(seed); localStorage.removeItem(KEY); persist(); },
    onboarding: {
      saveBusiness: function (name, outlet) { state.business.name = name || 'Warung Bayu'; state.business.outlet = outlet || 'Warung Bayu Malang'; state.onboardingStep = 1; persist(); },
      connectTelegram: function () { state.telegram.connected = true; state.onboardingStep = 2; log('Telegram terhubung ke ' + state.telegram.handle, 'done'); persist(); },
      addStaff: function () { state.onboardingStep = 3; persist(); },
      finish: function () { state.onboarded = true; state.onboardingStep = 4; log('Setup Warung Bayu selesai. Dashboard siap dipakai.', 'done'); persist(); }
    },
    telegram: {
      checkIn: function (id) { var s = get(id); if (s && s.status !== 'hadir') { s.status = 'hadir'; s.time = now(); log(s.name + ' masuk untuk shift pagi', 'normal'); persist(); } },
      completeTask: function (id) { var task = state.tasks.find(function (t) { return t.id === id; }); if (task && !task.done) { task.done = true; log(task.assignee + ' menyelesaikan ' + task.title.toLowerCase(), 'done'); persist(); } },
      reportIssue: function (title, detail) { var exists = state.issues.some(function (i) { return i.title === title && i.status !== 'selesai'; }); if (!exists) { state.issues.unshift({ id: 'i' + Date.now(), category: 'Stok', title: title, detail: detail, status: 'baru', assignee: '', source: 'Dika', time: now() }); } log('Dika melaporkan: ' + title, 'issue'); persist(); }
    },
    issues: {
      acknowledge: function (id) { var i = state.issues.find(function (x) { return x.id === id; }); if (i) { i.status = 'diakui'; log('Rina mengakui isu: ' + i.title, 'issue'); persist(); } },
      assign: function (id, name) { var i = state.issues.find(function (x) { return x.id === id; }); if (i) { i.assignee = name; i.status = 'ditugaskan'; log(i.title + ' ditugaskan ke ' + name, 'issue'); persist(); } },
      progress: function (id) { var i = state.issues.find(function (x) { return x.id === id; }); if (i) { i.status = 'diproses'; log((i.assignee || 'Tim') + ' mulai menangani ' + i.title.toLowerCase(), 'issue'); persist(); } },
      resolve: function (id) { var i = state.issues.find(function (x) { return x.id === id; }); if (i) { i.status = 'selesai'; log(i.title + ' ditandai selesai', 'done'); persist(); } },
      create: function (data) { state.issues.unshift({ id: 'i' + Date.now(), category: data.category, title: data.title, detail: data.detail, status: 'baru', assignee: '', source: 'Manager', time: now() }); log('Isu baru dicatat: ' + data.title, 'issue'); persist(); }
    },
    checklists: {
      toggle: function (id) { var task = state.tasks.find(function (t) { return t.id === id; }); if (task) { task.done = !task.done; log((task.done ? 'Checklist selesai: ' : 'Checklist dibuka lagi: ') + task.title, task.done ? 'done' : 'normal'); persist(); } },
      save: function (data) { var task = state.tasks.find(function (t) { return t.id === data.id; }); if (task) { task.title = data.title; task.assignee = data.assignee; task.section = data.section; } else { state.tasks.push({ id: 't' + Date.now(), title: data.title, assignee: data.assignee, section: data.section, done: false, order: state.tasks.length + 1 }); } persist(); },
      reorder: function (id, direction) { var idx = state.tasks.findIndex(function (t) { return t.id === id; }); var target = idx + direction; if (idx >= 0 && target >= 0 && target < state.tasks.length) { var item = state.tasks.splice(idx, 1)[0]; state.tasks.splice(target, 0, item); state.tasks.forEach(function (t, n) { t.order = n + 1; }); persist(); } }
    }
  };
}(window));
