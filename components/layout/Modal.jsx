import { useContext, useEffect } from 'react';
import ModalContext from '../../store/modal-context';
import styles from './Modal.module.scss';
import Link from 'next/link';
import UserContext from '../../store/user-context';
import router from 'next/router';

const Modal = () => {
  const modalCtx = useContext(ModalContext);
  const userCtx = useContext(UserContext);
  const display = modalCtx.display;

  // prevent body from scrolling when modal is open
  useEffect(() => {
    if (modalCtx.display === 'block') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });

  const handleDisplayToggle = () => {
    modalCtx.toggleDisplay();
  };

  const handleLogout = () => {
    userCtx.logout();
    router.push('/');
  };

  return (
    <>
      <div
        className={styles.modal}
        style={{ display: display }}
        onClick={handleDisplayToggle}
      >
        <i className="fas fa-times"></i>

        <ul className={styles.nav}>
          {userCtx.authenticated ? (
            <li onClick={handleLogout}>Logout</li>
          ) : (
            <>
              <Link href="/auth/register">
                <li>Register</li>
              </Link>
              <Link href="/auth/login">
                <li>Login</li>
              </Link>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Modal;
