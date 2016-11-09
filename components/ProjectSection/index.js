import React from 'react';
import styles from './projectSection.scss';
import { projects } from './projects.toml';

const Project = ({ title, subtitle, url, image }) =>
  <div key={url} className={styles.project}>
    <a
      href={url}
      className={styles.image}
      style={{ backgroundImage: `url(${require(image)})` }}
    />

    <a href={url}>
      <h3 className={styles.title}>{title}</h3>
    </a>

    <a href={url}>
      <div className={styles.subtitle}>{subtitle}</div>
    </a>
  </div>;

export const ProjectSection = () =>
  <div className={styles.wrapper}>
    <div className={styles.description}>
      Here are some of the projects we’ve worked on
    </div>
    {projects.map(Project)}
  </div>;

Project.propTypes = {
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
  url: React.PropTypes.string,
  image: React.PropTypes.string
};

export default ProjectSection;
