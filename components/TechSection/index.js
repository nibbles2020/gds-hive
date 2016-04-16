import React from 'react';
import styles from './techSection.scss';
import TechIcon from './TechIcon';

export const TechSection = ({ icons }) =>
  <div className={styles.wrapper}>
    { icons.map(name => <TechIcon name={name} key={name} />) }
  </div>;

TechSection.propTypes = {
  icons: React.PropTypes.arrayOf(React.PropTypes.string)
};

export default TechSection;
