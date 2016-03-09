import React from 'react';
import styles from './index.scss';
import { config } from 'config';
import DocumentTitle from 'react-document-title';
import TechSection from 'components/TechSection';
import variables from '../scss/variables.scss';

export default () =>
  (
    <DocumentTitle title={config.blogTitle}>
      <div>
          index start
        <div>
          <div className={styles.section}>
            <h1 className={styles.header}> Mission </h1>
            <p className={styles['body-text']}>
              One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a
              horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown
              belly, slightly domed and divided by arches into stiff sections.
            </p>
          </div>
          <div className={`${styles.section} ${variables.bggray}`}>
            <h1 className={styles.header}> Technology </h1>
            <TechSection
              icons={[
                'devicon-react-original',
                'devicon-d3js-plain',
                'devicon-rails-plain',
                'devicon-linux-plain',
                'devicon-android-plain',
                'devicon-apple-original',
                'devicon-redhat-plain',
                'devicon-nodejs-plain',
                'devicon-docker-plain',
                'devicon-postgresql-plain',
                'http://instantlogosearch.com/svg/logomono/ansible-circle.svg'
              ]}
            />
          </div>
        </div>
      </div>
    </DocumentTitle>
  );
