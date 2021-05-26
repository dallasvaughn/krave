import axios from 'axios';
import { useContext, useState } from 'react';
import UserContext from '../../store/user-context';
import styles from './Login.module.scss';
import router from 'next/router';

const Login = () => {
  const userCtx = useContext(UserContext);

  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        'https://strapi-krave.herokuapp.com/auth/local',
        {
          identifier,
          password,
        }
      );

      if (res) {
        userCtx.login();
        router.push('/');
      }
    } catch (error) {
      setError('Invalid credentials - please try again.');
    }
  };

  return (
    <div className={styles.login}>
      <h2>Login</h2>
      <p>Please enter your e-mail or username, and password:</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          placeholder="Email or username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <p className={styles.error}>{error}</p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
