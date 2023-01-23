import React from 'react';
import styles from './Button.module.css';

type Props = {
  children: JSX.Element
  | JSX.Element[];
  onClick?: any;
}

const Button = ({ children, onClick }:Props ) => {
  return (
    <div onClick={onClick} className={styles.button}>
      {children}
    </div>
  )
}

export default Button