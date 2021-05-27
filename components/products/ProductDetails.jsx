import { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import ItemAddedContext from '../../store/item-added';
import styles from './ProductDetails.module.scss';

const ProductDetails = ({ product }) => {
  const cartCtx = useContext(CartContext);
  const itemAddedCtx = useContext(ItemAddedContext);

  const [quantity, setQuantity] = useState(1);

  const add = () => {
    setQuantity(quantity + 1);
  };

  const remove = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleClick = () => {
    if (!product.quantity) {
      product.quantity = quantity;
    } else {
      product.quantity += quantity;
    }

    cartCtx.addToCart(product);
    itemAddedCtx.toggleDisplay();
  };

  return (
    <section className={styles.productdetails}>
      <div className={styles.container}>
        <img
          src={`https://strapi-krave.herokuapp.com${product.image[0].formats.medium.url}`}
        />
        <div className={styles.text}>
          <h2>{product.name}</h2>
          <h3>{product.description}</h3>
          <var className={styles.price}>${product.price}</var>
          <var className={styles.volume}>({product.volume} ML)</var>
          <div className={styles.action}>
            <div className={styles.quantity}>
              <span className={styles.minus} onClick={remove}>
                -
              </span>
              <span>{quantity}</span>
              <span className={styles.plus} onClick={add}>
                +
              </span>
            </div>
            <div className={styles.add} onClick={handleClick}>
              Add to cart
            </div>
          </div>
          <hr />
          <h4>Details</h4>
          <p>{product.details}</p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
