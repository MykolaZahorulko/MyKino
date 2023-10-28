import React from 'react';
import styles from './Loading.module.scss'
const LoadingAnimation = () => {
  return (
    <div className={styles.loading_container}>
      <div className={styles.loading_spinner}></div>
    </div>
  );
};

export default LoadingAnimation;
