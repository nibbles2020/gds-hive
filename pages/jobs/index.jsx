/* eslint react/prop-types: 0 */

import React from 'react';
import DocumentTitle from 'react-document-title';
import { link } from 'gatsby-helpers';
import access from 'safe-access';
import { config } from 'config';
import { GalleryContainer, GalleryItem } from 'components/Gallery';
import styles from '../index.scss';

// Cannot name the function (Gatsby)
export default (props) => {
  const jobsList = props.route.pages
    .filter((page) => access(page, 'file.ext') === 'md')
    .filter((page) => page.path.includes('/jobs/'))
    .map((page) =>
        <GalleryItem
          key={link(page.path)}
          path={link(page.path)}
          imgPath={link(`/jobs/icons/${page.data.thumbnail}`)}
          caption={page.data.title}
          synopsis={page.data.synopsis}
        />
    );

  return (
    <DocumentTitle title={config.title}>
      <div className={styles.section}>
        <h1 className={styles.header}>Careers</h1>
        <GalleryContainer>{jobsList}</GalleryContainer>
      </div>
    </DocumentTitle>
  );
};

// Jobs.propTypes = {
//   route: React.PropTypes.object
// };

// export default Jobs;
