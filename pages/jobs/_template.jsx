import React from 'react';
import globals from '../../scss/globals.scss';
import { config } from 'config';

export const Jobs = (props) => {
  const emailLink = props.location.pathname !== '/jobs/'
    ? (
        <a href={`mailto:${config.resumeMailAddress}`}>
          Interested? Drop us a message at {config.resumeMailAddress}.
        </a>
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
