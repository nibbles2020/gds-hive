import React from 'react';
import globals from '../../scss/globals.scss';
import { config } from 'config';
import styles from './styles.scss';

export const Jobs = (props) => {
  const emailLink = props.location.pathname !== '/jobs/'
    ? (
        <div className={styles['email-link']}>
          <a href={`mailto:${config.resumeMailAddress}`}>
            Interested? Drop us a message at {config.resumeMailAddress}.
          </a>
        </div>
      )
    : '';

  return (
    <div className={globals.page}>
      <div>{props.children}</div>
      {emailLink}
    </div>
  );
};

Jobs.propTypes = {
  location: React.PropTypes.object,
  children: React.PropTypes.element
};

export default Jobs;
