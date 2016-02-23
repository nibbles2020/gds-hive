import React from 'react';
import DocumentTitle from 'react-document-title';

import '../css/zenburn.css';

export default (props) => {
  const { route } = props;
  const post = route.page.data;

  return (
    <div>
      <DocumentTitle title={post.title}>
        <div className="markdown">
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      </DocumentTitle>
    </div>
  );
};
