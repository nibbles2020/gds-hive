import React from 'react';
import container from './GalleryContainer.scss';
import item from './GalleryItem.scss';
import { Link } from 'react-router';

export const GalleryContainer = (props) => {
  return <div className={container.gallery}>{props.children}</div>;
};


export const GalleryItem = (props) => {
  return (
    <figure className={item.wrapper}>
      <Link to={props.path}>
        <img className={item.image} src={props.imgPath}/>
        <figcaption> {props.caption} </figcaption>
      </Link>
    </figure>
  );
};
