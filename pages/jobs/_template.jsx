import React from 'react';
import { Link } from 'react-router';
import sortBy from 'lodash/sortBy';
import DocumentTitle from 'react-document-title';
import { link } from 'gatsby-helpers';
import access from 'safe-access';
import { config } from 'config';
import styles from './jobs.scss';

export default (props) => {
  const jobsList = props.route.pages
    .filter((page) => access(page, 'file.ext') === 'md')
    .filter((page) => page.path.includes('/jobs/'))
    .map((page) => {
      const title = access(page, 'data.title') || page.path;
      return (
        <li key={page.path}>
          <Link to={link(page.path)}>{title}</Link>
        </li>
      );
    });

  return (
    <DocumentTitle title={config.blogTitle}>
      <div className={styles["jobs-page"]}>
        <div className={styles["jobs-copy"]}>
          <p>Jobs Index</p>
        </div>

        <div className={styles["job-listings"]}>
          <div className={styles["job-selector"]}>
            <ul>{jobsList}</ul>
          </div>
          <div className={styles["job-description"]}>
            {props.children}
            <div>
              <a href={config.resumeMailAddress}>$EMAIL_US_COPY_OR_BUTTON</a>
            </div>
          </div>
        </div>
      </div>
    </DocumentTitle>
  );
};
