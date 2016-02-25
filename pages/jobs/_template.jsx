import React from 'react';
import DocumentTitle from 'react-document-title';
import access from 'safe-access';
import { config } from 'config';
import styles from './jobs.scss';
import Jobs from 'components/Jobs/Jobs.js';
import md from 'wrappers/md.jsx';

function getJobs(pages) {
  return pages
    .filter((page) => access(page, 'file.ext') === 'md' || access(page, 'file.ext') === 'jsx')
    .filter((page) => page.path.includes('/jobs/'))
    .filter((page) => !page.requirePath.includes('jobs/index.md'))
    .sort((a, b) => (access(a, 'data.order') || 0) - (access(b, 'data.order') || 0));
}

function isIndex(props) {
  return access(props, 'children.props.route.page.requirePath') === 'jobs/index.md';
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

  // Loads highest ordered job posting if on root (ie. /jobs/)
  const children = isIndex(props) ? md(defaultPage) : props.children;

  // Used to highlight job selector link
  if (jobs.length > 0) {
    jobs[0].isDefault = isIndex(props);
  }

  return (
    <DocumentTitle title={config.blogTitle}>
      <div className={styles['jobs-page']}>
        <h1>Jobs</h1>
        <div className={styles['jobs-copy']}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/bpvdDl6KHVQ" frameborder="0" allowfullscreen></iframe>
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
