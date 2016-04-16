import React from 'react';
import styles from './techIcon.scss';

export const TechIcon = (props) => {
  if (props.name.startsWith('devicon')) {
    return <i className={`${props.name} ${styles['cbp-ig-icon']}`}></i>;
  }

  return <img src={require(`./svg/${props.name}.svg`)} className={styles['cbp-ig-icon']} alt={props.name} />;
};

TechIcon.propTypes = {
  name: React.PropTypes.string,
};

export default TechIcon;
