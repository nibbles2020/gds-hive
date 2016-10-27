/* eslint react/prop-types: 0 */

import React from 'react';
import globals from '../../scss/globals.scss';
import styles from '../../components/Gallery/GalleryContainer.scss';
import { config } from 'config';

// Cannot name the function (Gatsby) or will fail to render
export default (props) => (
  <div className={globals.subpage}>
    <div>{props.children}</div>
    <div className={styles.contact}>
      <a href={`mailto:${config.resumeMailAddress}`}>
        Drop us a line
      </a>
      &nbsp;or find out what&nbsp;
      <a href={config.careersUrl} target="_blank">
        opportunities
      </a>
      &nbsp;are available now.
    </div>
  </div>
);

// JobTemplate.propTypes = {
//   location: React.PropTypes.object,
//   children: React.PropTypes.element
// };

// export default JobTemplate;
