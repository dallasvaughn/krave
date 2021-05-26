import ProductList from '../components/products/ProductList';

const Home = ({ products }) => {
  return <ProductList products={products} />;
};

export async function getStaticProps() {
  const data = await fetch('https://strapi-krave.herokuapp.com/products');
  const products = await data.json();

  return {
    props: {
      products,
    },
  };
}

export default Home;
