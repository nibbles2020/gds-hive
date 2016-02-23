import React from 'react';
import styles from './styles.scss';
import { config } from 'config';

export default (props) => {
  return (
    <div className={props.className}>
      {props.render}
      <div>
        <a href={config.resumeMailAddress}>$EMAIL_US_COPY_OR_BUTTON</a>
      </div>
    </div>
  );
};
