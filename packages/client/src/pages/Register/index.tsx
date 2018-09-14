import React from 'react';
import { HMR } from '@pwa/preset-react';
import style from './index.sass';

function Register() {
  return (
    <div className={style.register}>
      <div>Register</div>
    </div>
  );
}

export default HMR(Register, module);
