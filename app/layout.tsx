import './globals.css'
import Script from 'next/script';

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
    <>
    <html lang="en" className="dark">
      
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-225RPY1284"/>
      <Script id='google-analytics' strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-225RPY1284', {
            page_path: window.location.pathname,
          });`,
        }}/>

      <body className="bg-light-grey dark:bg-dark-grey mt-[45px] mb-0 m-[25px] sm:m-[45px]">{children}</body>
    </html>
    </>
    
  )
}
