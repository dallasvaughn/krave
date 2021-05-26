import Product from './Product';

const CoreSeries = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
};

export default CoreSeries;
