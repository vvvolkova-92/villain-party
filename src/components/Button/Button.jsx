import React from 'react';
import style from './Button.module.scss';

function Button({ children, onClick, disabled}) {

  return (
    <button className={style.button} onClick={onClick} disabled={disabled}>{children}</button>
  )
}

export default Button