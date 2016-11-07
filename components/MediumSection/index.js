import React from 'react';
import styles from './mediumSection.scss';
import { articles } from './articles.toml';
import { config } from 'config';

const MediumArticle = ({ url, title, subtitle, image }) => (
  <div className={styles.article} key={url}>
    <div className={styles['image-wrapper']}>
      <a href={url} style={{ backgroundImage: `url(${image})` }} className={styles.preview}></a>
    </div>

    <div className={styles.description}>
      <a href={url}>
        <span className={styles.title}>
          {title}
        </span>

        <div className={styles.subtitle}>
          {subtitle}
        </div>

        <span className={styles['read-more']}>
          read more ↪
        </span>
      </a>
    </div>
  </div>
);

MediumArticle.propTypes = {
  url: React.PropTypes.string,
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
  image: React.PropTypes.string
};

const MediumSection = () =>
  <div className={styles.wrapper}>
    {articles.map(MediumArticle)}

    <div className={styles['visit-blog']}>
      <a href={config.blogUrl} className={styles.pill}>visit blog</a>
    </div>
  </div>;

export default MediumSection;
