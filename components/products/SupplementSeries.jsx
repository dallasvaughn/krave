import Product from './Product';

const SupplementSeries = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
};

export default SupplementSeries;
