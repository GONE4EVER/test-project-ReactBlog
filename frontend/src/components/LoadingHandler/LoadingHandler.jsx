import React from 'react'

import styles from './LoadingHandler.css';

const LoadingHandler = () => (
  <div className={styles.spinnerBox}>
    <div className={styles.circleBorder}>
      <div className={styles.circleCore}></div>
    </div>  
  </div>
)

export default LoadingHandler
