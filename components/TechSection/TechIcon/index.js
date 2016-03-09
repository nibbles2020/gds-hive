import React from 'react';
import styles from './techIcon.scss';

export default (props) => {
  if (props.name.startsWith('devicon')) {
    return <i className={`${props.name} ${styles['cbp-ig-icon']}`}></i>;
  } else {
    return <img src={props.name} className={styles['cbp-ig-icon']}/>;
  }
};
