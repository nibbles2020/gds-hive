import React from 'react';
import styles from './index.scss';
import { config } from 'config';
import DocumentTitle from 'react-document-title';
import TechSection from 'components/TechSection';
import ContactSection from 'components/ContactSection';
import variables from '../scss/variables.scss';
import 'scss/globals.scss';

export default () =>
  (
    <DocumentTitle title={config.title}>
      <div>
        <div className={styles.section}>
          <h1 className={styles.header}> Mission </h1>
          <p className={styles['body-text']}>
            Deliver effective and well-designed digital solutions for the citizen<br />
            Enable data-driven decision making in public policy<br />
            Develop “build” tech capability: software engineers, designers, data scientists<br />
            Innovation for the public good
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
              'swift',
              'devicon-nodejs-plain',
              'devicon-redhat-plain',
              'devicon-postgresql-plain',
              'ansible',
              'devicon-github-plain',
              'devicon-docker-plain',
              'devicon-angularjs-plain',
              'devicon-amazonwebservices-original',
              'hadoop'
            ]}
          />
        </div>
        <ContactSection />
      </div>
    </DocumentTitle>
  );
