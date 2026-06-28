import './globals.css';
import type { Metadata } from 'next';
export const metadata:Metadata={title:'Rileks — Operasional F&B lewat chat',description:'Mockup operasional F&B chat-first untuk bisnis makanan Indonesia.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="id"><body>{children}</body></html>}
