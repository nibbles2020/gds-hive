import React from 'react';
import styles from './techIcon.scss';

export default (props) => {
  return <i className={`${props.name} ${styles['cbp-ig-icon']}`}></i>;
};
