/* eslint react/prop-types: 0 */

import React from 'react';
import globals from '../../scss/globals.scss';
import styles from '../../components/Gallery/GalleryContainer.scss';
import { config } from 'config';

export default (props) => (
  <div className={globals.subpage}>
    <div>{props.children}</div>
    <div className={styles.contact}>
      <a href={`mailto:${config.resumeMailAddress}`} className={globals.pill}>
        Drop us a line
      </a>
      &nbsp;or find out what&nbsp;
      <a href={config.careersUrl} className={globals.pill} target="_blank">
        opportunities
      </a>
      &nbsp;are available now.
    </div>
  </div>
);
