import { ModalContextProvider } from '../../store/modal-context';
import Header from './Header';
import Modal from './Modal';
import styles from './Layout.module.scss';
import { ItemAddedContextProvider } from '../../store/item-added';
import ItemAdded from './ItemAdded';

const Layout = (props) => {
  return (
    <ModalContextProvider>
      <ItemAddedContextProvider>
        <Modal />
        <ItemAdded />
        <Header />
        <main className={styles.layout}>{props.children}</main>
      </ItemAddedContextProvider>
    </ModalContextProvider>
  );
};

export default Layout;
