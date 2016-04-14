import React from 'react';
import styles from './techSection.scss';
import TechIcon from './TechIcon';

export default ({icons}) => <div className={styles.wrapper}>
    { icons.map(name => <TechIcon name={name}/>) }
  </div>;
