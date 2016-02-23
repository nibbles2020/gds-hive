import React from 'react';
import styles from './styles.scss';
import JobSelector from './Selector/Selector.js';
import JobDescription from './Description/Description.js';

const Jobs = (props) => {
  return (
    <div className={styles["job-listings"]}>
      <JobSelector
        className={styles["job-selector"]}
        list={props.jobs}
        {...props}
      />

      <JobDescription
        className={styles["job-description"]}
        render={props.render}
        {...props}
      />
    </div>
  );
};

Jobs.propTypes = {
  jobs: React.PropTypes.array,
  render: React.PropTypes.node
};

export default Jobs;
