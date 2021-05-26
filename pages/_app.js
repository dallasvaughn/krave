import Layout from '../components/layout/Layout';
import { CartContextProvider } from '../store/cart-context';
import { UserContextProvider } from '../store/user-context';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartContextProvider>
    </UserContextProvider>
  );
}

export default MyApp;
