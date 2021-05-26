import { useContext, useState } from 'react';
import styles from './Register.module.scss';
import router from 'next/router';
import axios from 'axios';
import UserContext from '../../store/user-context';

const Register = () => {
  const userCtx = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        'https://strapi-krave.herokuapp.com/auth/local/register',
        {
          email,
          username,
          password,
        }
      );

      if (res) {
        userCtx.login();
        router.push('/');
      }
    } catch (error) {
      setError('Email or username already taken.');
    }
  };

  console.log(userCtx.authenticated);

  return (
    <div className={styles.register}>
      <h2>Register</h2>
      <p>Please fill in the information below:</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
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
        <button type="submit">Create my account</button>
      </form>
    </div>
  );
};

export default Register;
