import CoreSeries from './CoreSeries';
import SupplementSeries from './SupplementSeries';
import styles from './ProductList.module.scss';

const ProductList = ({ products }) => {
  const coreSeries = products.filter((product) => product.series === 'core');
  const supplementSeries = products.filter(
    (product) => product.series === 'supplement'
  );

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <section className={styles.pagecontainer}>
          <div className={styles.textcontainer}>
            <h2 className={styles.series}>Core Series</h2>
            <p className={styles.description}>
              Your everyday maintenance. Simple yet effective daily essentials
              to support healthy skin function.
            </p>
          </div>
          <div className={styles.productlist}>
            <CoreSeries products={coreSeries} />
          </div>
        </section>
        <hr />
        <section className={styles.pagecontainer}>
          <div className={styles.textcontainer}>
            <h2 className={styles.series}>Supplement Series</h2>
            <p className={styles.description}>
              Your skin patch-up job, here for when your skin needs them.
              Concentrated formulas that target specific concerns to give skin a
              rebalancing boost.
            </p>
          </div>
          <div className={styles.productlist}>
            <SupplementSeries products={supplementSeries} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductList;
