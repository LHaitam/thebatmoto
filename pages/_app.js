import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Script from 'next/script';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Google Tag Manager */}
<<<<<<< HEAD
      <Script async
=======
      <Script
>>>>>>> 8341a4fc7edf60027117f29de372fef12fe08c91
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K5GCBDD8');
          `,
        }}
      />
      {/* End Google Tag Manager */}
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
