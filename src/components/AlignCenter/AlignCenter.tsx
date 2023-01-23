import React from 'react';
import styles from "./AlignCenter.module.css";

type Props = {
  children: JSX.Element
  | JSX.Element[];
}

const AlignCenter = ({ children }: Props) => {
  return (
    <div className={styles.alignCenter}>
      {children}
    </div>
  )
}

export default AlignCenter;
