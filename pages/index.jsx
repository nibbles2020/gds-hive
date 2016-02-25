import React from 'react';
import styles from './index.scss';
import { config } from 'config';
import DocumentTitle from 'react-document-title';
import TechIcon from 'components/TechIcon';

export default () =>
  (
    <DocumentTitle title={config.blogTitle}>
      <div>
          index start
        <div className={styles.section}>
          <h1 className={styles.header}> Mission </h1>
          <p className={styles['body-text']}>
            One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.
          </p>
        </div>
        <div className={`${styles.section} ${styles['color-background']}`}>
          <h1 className={styles.header}> Technology </h1>
          <div className={styles.center}>
            <TechIcon name="devicon-javascript-plain"/>
            <TechIcon name="devicon-react-original"/>
            <TechIcon name="devicon-d3js-plain"/>
            <TechIcon name="devicon-ruby-plain"/>
            <TechIcon name="devicon-rails-plain-wordmark"/>
            <TechIcon name="devicon-python-plain"/>
            <TechIcon name="devicon-linux-plain"/>
            <TechIcon name="devicon-dot-net-plain"/>
            <TechIcon name="devicon-android-plain"/>
            <TechIcon name="devicon-java-plain"/>
            <TechIcon name="devicon-apple-original"/>
            <TechIcon name="devicon-redhat-plain"/>
            <TechIcon name="devicon-apache-plain"/>
            <TechIcon name="devicon-docker-plain"/>
            <TechIcon name="devicon-postgresql-plain"/>
          </div>
        </div>
          index end
      </div>
    </DocumentTitle>
  );
