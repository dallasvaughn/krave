import ProductDetails from '../../components/products/ProductDetails';

const ProductPage = ({ product }) => {
  return <ProductDetails product={product} />;
};

export async function getStaticPaths() {
  const data = await fetch('https://strapi-krave.herokuapp.com/products');
  const products = await data.json();

  const paths = products.map((product) => ({
    params: { id: product.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const res = await fetch(`https://strapi-krave.herokuapp.com/products/${id}`);
  const product = await res.json();

  return {
    props: { product },
  };
}

export default ProductPage;
