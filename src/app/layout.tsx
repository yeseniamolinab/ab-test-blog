import '../styles/globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { Header } from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yesenia Molina | Blinkist Coding Challenge',
  description: 'Software Engineer Web | Coding Challenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Providers>
          <div className="relative lex flex-col min-h-screen">
            <Header />
            <main id="main-content" className="flex-1">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
