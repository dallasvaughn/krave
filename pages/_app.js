import Layout from '../components/layout/Layout';
import { CartContextProvider } from '../store/cart-context';
import { UserContextProvider } from '../store/user-context';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Krave Skincare eCommerce" />
        <meta
          name="keywords"
          content="Krave, skincare, eCommerce, shop, cleanser, moisturizer, SPF, serum, AHA, exfoliator"
        />
        <meta name="author" content="Dallas Vaughn" />
        <title>Krave</title>
      </Head>
      <UserContextProvider>
        <CartContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CartContextProvider>
      </UserContextProvider>
    </>
  );
}

export default MyApp;
