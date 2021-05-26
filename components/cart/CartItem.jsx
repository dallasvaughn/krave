import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import styles from './CartItem.module.scss';

const CartItem = ({ product }) => {
  const cartCtx = useContext(CartContext);

  const handleClick = () => {
    cartCtx.removeFromCart(product);
  };

  return (
    <div className={styles.cartitem}>
      <div className={styles.thumbnail}>
        <img
          src={`https://strapi-krave.herokuapp.com${product.image[0].formats.thumbnail.url}`}
        />
        <span>{product.quantity}</span>
      </div>
      <div className={styles.desc}>
        <h3>{product.name}</h3>
        <h4>{product.volume} mL</h4>
      </div>
      <div>
        <h3>${product.price}</h3>
        <p onClick={handleClick}>Remove</p>
      </div>
    </div>
  );
};

export default CartItem;
