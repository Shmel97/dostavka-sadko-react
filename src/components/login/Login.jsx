import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Login.module.scss';

function Login() {
  const navigate = useNavigate();
  const [fields, setFields] = React.useState({
    email: '',
    password: '',
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    const resp = await fetch(
      `https://mentor.archakov.im/api/mock/login?email=${fields.email}&password=${fields.password}`,
    );

    if (resp.ok) {
      const { token } = await resp.json();
      window.localStorage.setItem('token', token);
      navigate('/profile');
    } else {
      alert('Ошибка! Неверные почта или пароль!');
    }
  };

  const handleChangeInput = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };
  console.log(fields);

  return (
    <div className={styles.login}>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          onChange={handleChangeInput}
          name="email"
          value={fields.email}
          placeholder="Почта"
        />
        <input
          type="password"
          onChange={handleChangeInput}
          name="password"
          value={fields.password}
          placeholder="Пароль"
        />
        <button variant="primary" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
