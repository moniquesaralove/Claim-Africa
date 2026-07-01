import './globals.css'

export const metadata = {
  title: 'Claim Africa',
  description: 'Two-player geography game',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
