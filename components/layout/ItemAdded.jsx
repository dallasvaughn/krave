import { useContext } from 'react';
import ItemAddedContext from '../../store/item-added';
import styles from './ItemAdded.module.scss';

const ItemAdded = () => {
  const itemAddedCtx = useContext(ItemAddedContext);
  const display = itemAddedCtx.display;

  return (
    <div className={styles.itemadded} style={{ display: display }}>
      <div className={styles.container}>
        <p>
          <i class="fas fa-check"></i>Item added to cart
        </p>
      </div>
    </div>
  );
};

export default ItemAdded;
