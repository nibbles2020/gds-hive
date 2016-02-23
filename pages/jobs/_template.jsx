import React from 'react';
import DocumentTitle from 'react-document-title';
import access from 'safe-access';
import { config } from 'config';
import styles from './jobs.scss';
import Jobs from 'components/Jobs/Jobs.js';
import md from 'wrappers/md.jsx';

function getJobs(pages) {
  return pages
    .filter((page) => access(page, 'file.ext') === 'md')
    .filter((page) => page.path.includes('/jobs/'))
    .filter((page) => !page.requirePath.includes('jobs/index.md'))
    .sort((a, b) => (a.order || 0) - (b.order || 0));
}

const JobsTemplate = (props) => {
  const jobs = getJobs(props.route.pages);

  const defaultPage = {
    route: {
      page: {
        data: access(jobs, '[0].data')
      }
    }
  };

  // Used to highlight job selector link, props.children is null on root
  if (jobs.length > 0) {
    jobs[0].isDefault = !props.children;
  }

  const children = props.children || md(defaultPage);

  return (
    <DocumentTitle title={config.blogTitle}>
      <div className={styles["jobs-page"]}>
        <div className={styles["jobs-copy"]}>
          <p>Singapore is aspiring to be not just a Smart City, but a Smart Nation, underpinned by Data and Analytics. As a leading organisation and Singapore's Government CIO, IDA is taking a clear leadership role in building Singapore into a Smart Nation. We welcome interested professionals to join us in this journey.</p>
        </div>

        <Jobs
          jobs={jobs}
          render={children}
          {...props}
        />
      </div>
    </DocumentTitle>
  );
};

export default JobsTemplate;
