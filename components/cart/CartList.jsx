import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import styles from './CartList.module.scss';
import OrderForm from './OrderForm';

const CartList = () => {
  const cartCtx = useContext(CartContext);
  const total = cartCtx.cart
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);

  return (
    <div className={styles.cartlist}>
      <div>
        {cartCtx.cart.map((item) => (
          <CartItem key={item.id} product={item} />
        ))}
        <hr />
        <div className={styles.total}>
          <h2>Total</h2>
          <div className={styles.price}>
            <span className={styles.usd}>USD</span>
            <span className={styles.amount}>${total}</span>
          </div>
        </div>
      </div>
      <OrderForm />
    </div>
  );
};

export default CartList;
