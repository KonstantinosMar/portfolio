import './globals.css'

export const metadata = {
  title: 'Konstantinos Marinopoulos •',
  description: 'Konstantinos Marinopoulos portfolio' ,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark-grey mt-[45px] mb-0 m-[25px] sm:m-[45px]">{children}</body>
    </html>
  )
}
