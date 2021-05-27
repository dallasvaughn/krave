import styles from './Product.module.scss';
import Link from 'next/link';
import { useContext } from 'react';
import ItemAddedContext from '../../store/item-added';
import CartContext from '../../store/cart-context';

const Product = ({ product }) => {
  const cartCtx = useContext(CartContext);
  const itemAddedCtx = useContext(ItemAddedContext);

  const handleClick = () => {
    if (!product.quantity) {
      product.quantity = 1;
    } else {
      product.quantity += 1;
    }

    cartCtx.addToCart(product);
    itemAddedCtx.toggleDisplay();
  };

  return (
    <div className={styles.product}>
      <Link href={`/products/${product.id}`}>
        <img src={product.url} />
      </Link>
      <div className={styles.container}>
        <Link href={`/products/${product.id}`}>
          <h3>{product.name}</h3>
        </Link>
        <h4>{product.description}</h4>
        <div className={styles.button} onClick={handleClick}>
          Add to cart - ${product.price}
        </div>
      </div>
    </div>
  );
};

export default Product;
