/* eslint react/prop-types: 0 */

import React from 'react';
import DocumentTitle from 'react-document-title';
import { link } from 'gatsby-helpers';
import '../scss/zenburn.css';

// Don't name function (Gatsby), or props.children will fail in components
export default (props) => {
  const post = props.route.page.data;

  return (
    <div>
      <DocumentTitle title={post.title}>
        <div className="markdown">
          <a href="javascript:history.back()">◄ Jobs list</a>
          <h1>{post.title}</h1>
          <div>{post.schedule}</div>
          <div>{post.status}</div>
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      </DocumentTitle>
    </div>
  );
};

// MarkdownWrapper.propTypes = {
//   route: React.PropTypes.object
// };

// export default MarkdownWrapper;
