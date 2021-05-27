import styles from './Header.module.scss';
import { useContext } from 'react';
import ModalContext from '../../store/modal-context';
import Link from 'next/link';
import UserContext from '../../store/user-context';

const Header = () => {
  const modalCtx = useContext(ModalContext);
  const userCtx = useContext(UserContext);

  const handleDisplayToggle = () => {
    modalCtx.toggleDisplay();
  };

  const handleLogout = () => {
    userCtx.logout();
  };

  return (
    <header className={styles.header}>
      <i
        className={`fas fa-bars ${styles.modal}`}
        onClick={handleDisplayToggle}
      ></i>
      <nav className={styles.nav}>
        {userCtx.authenticated ? (
          <span onClick={handleLogout}>Logout</span>
        ) : (
          <>
            <Link href="/auth/register">
              <span>Register</span>
            </Link>
            <Link href="/auth/login">
              <span>Login</span>
            </Link>
          </>
        )}
      </nav>
      <Link href="/">
        <h1>Krave</h1>
      </Link>
      <Link href="/cart">
        <i className="fas fa-shopping-cart"></i>
      </Link>
    </header>
  );
};

export default Header;
