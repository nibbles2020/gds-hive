import React from 'react';
import container from './GalleryContainer.scss';
import styles from './GalleryItem.scss';
import { Link } from 'react-router';

export const GalleryContainer = (props) => {
  return <div className={container.gallery}>{props.children}</div>;
};


export const GalleryItem = (props) => {
  return (
    <div className={styles.wrapper}>
      <Link to={props.path}>
        <img className={styles.image} src={props.imgPath} />
        <p className={styles.title}>{props.caption}</p>
        <p>{props.synopsis}</p>
      </Link>
    </div>
  );
};

GalleryItem.propTypes = {
  caption: React.PropTypes.string,
  synopsis: React.PropTypes.string,
  imgPath: React.PropTypes.string,
  path: React.PropTypes.string
};
