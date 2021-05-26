import styles from './OrderForm.module.scss';

const OrderForm = () => {
  return (
    <form className={styles.orderform}>
      <h2>Shipping information</h2>
      <input type="text" placeholder="Address" />
      <input type="text" placeholder="City" />
      <div>
        <input type="text" placeholder="Country" />
        <input type="text" placeholder="State" />
        <input type="text" placeholder="ZIP code" />
      </div>
      <input type="text" placeholder="Phone" />
      <button type="submit">Submit order</button>
    </form>
  );
};

export default OrderForm;
