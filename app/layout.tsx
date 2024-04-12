import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Konstantinos Marinopoulos •",
  description: "Konstantinos Marinopoulos portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" className="dark">
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-225RPY1284"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-225RPY1284', {
            page_path: window.location.pathname,
          });`,
          }}
        />

        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PC47F6ZH');
          `}
        </Script>

        <body className="bg-light-grey dark:bg-dark-grey mt-[45px] mb-0 m-[25px] sm:m-[45px]">
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PC47F6ZH"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
          {children}
        </body>
      </html>
    </>
  );
}
