import { AppShell, AttendanceTable } from '@/components/rileks/components';import { attendanceLogs } from '@/lib/mock/rileks-data';
export default function Page(){return <AppShell><h1>Absensi</h1><p className="lead">Check-in, check-out, status, dan lokasi mock staff hari ini.</p><AttendanceTable rows={attendanceLogs}/></AppShell>}
