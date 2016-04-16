/* eslint react/prop-types: 0 */

import React from 'react';
import globals from '../../scss/globals.scss';
import { config } from 'config';

// Cannot name the function (Gatsby) or will fail to render
export default (props) => {
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

// JobTemplate.propTypes = {
//   location: React.PropTypes.object,
//   children: React.PropTypes.element
// };

// export default JobTemplate;
