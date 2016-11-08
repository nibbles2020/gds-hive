import React from 'react';
import container from './GalleryContainer.scss';
import styles from './GalleryItem.scss';

export const GalleryContainer = (props) =>
  <div className={container.gallery}>{props.children}</div>;

GalleryContainer.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.element)
};

export const GalleryItem = (props) =>
  (
    <div className={styles.wrapper}>
      <img className={styles.image} src={props.imgPath} role="presentation" />
      <p className={styles.title}>{props.caption}</p>
      <div className={styles.synopsis}>{props.synopsis}</div>
    </div>
  );

GalleryItem.propTypes = {
  caption: React.PropTypes.string,
  synopsis: React.PropTypes.string,
  imgPath: React.PropTypes.string,
  path: React.PropTypes.string
};
