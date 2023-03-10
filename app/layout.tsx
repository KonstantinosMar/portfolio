import './globals.css'

export const metadata = {
  title: 'Konstnatinos Marinopoulos •',
  description: 'Konstnatinos Marinopoulos portfolio' ,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark-grey m-[45px]">{children}</body>
    </html>
  )
}
