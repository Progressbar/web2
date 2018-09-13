import React from 'react';
import { HMR } from '@pwa/preset-react';
import style from './index.sass';

function Login() {
  return (
    <div className={style.login}>
      <div>Login</div>
    </div>
  );
}

export default HMR(Login, module);
