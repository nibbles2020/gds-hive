import React from 'react';
import DocumentTitle from 'react-document-title';
import { link } from 'gatsby-helpers';
import access from 'safe-access';
import { config } from 'config';
import URL from 'url';
import { GalleryContainer, GalleryItem } from 'components/Gallery';

export default (props) => {
  const jobsList = props.route.pages
    .filter((page) => access(page, 'file.ext') === 'md')
    .filter((page) => page.path.includes('/jobs/'))
    .map((page) =>
      (
        <GalleryItem
          key={link(page.path)}
          path={link(page.path)}
          imgPath={link(URL.resolve(page.path, page.data.thumbnail))}
          caption={page.data.title}
        />
      )
    );

  return (
    <DocumentTitle title={config.blogTitle}>
      <div>
        <h1>Jobs</h1>
        <GalleryContainer>{jobsList}</GalleryContainer>
      </div>
    </DocumentTitle>
  );
};
