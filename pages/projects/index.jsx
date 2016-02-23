// import React from 'react';
// import '../css/styles.css';
// import { config } from 'config';
// import { Link } from 'react-router';
// import { link } from 'gatsby-helpers';

// const Template = (props) => {
//   const { children } = props;

//   const linkDefinitions = [
//     { href: '/', title: config.blogTitle },
//     { href: '/jobs/', title: 'Jobs' },
//     { href: '/projects/', title: 'Projects' }
//   ];

//   const linkFactory = (l) => {
//     return <Link to={link(l.href)}>{l.title}</Link>;
//   };
//   const links = <div>{linkDefinitions.map(linkFactory)}</div>;

//   return (
//     <div>
//       {links}
//       <div>children start</div>
//       {children}
//       <div>children end</div>
//     </div>
//   );
// };

// Template.propTypes = {
//   children: React.PropTypes.any,
//   location: React.PropTypes.object,
//   route: React.PropTypes.object
// };

// export default Template;



import React from 'react';
import { Link } from 'react-router';
import sortBy from 'lodash/sortBy';
import DocumentTitle from 'react-document-title';
import { link } from 'gatsby-helpers';
import access from 'safe-access';
import { config } from 'config';

export default (props) => {
  const projectsList = props.route.pages
    .filter((page) => access(page, 'file.ext') === 'md')
    .filter((page) => page.path.includes('/projects/'))
    .map((page) => {
      const title = access(page, 'data.title') || page.path;
      return (
        <li key={page.path}>
          <Link to={link(page.path)}>{title}</Link>
        </li>
      );
    });

  return (
    <DocumentTitle title={config.blogTitle}>
      <div>
        <p>Projects Index</p>
        <div className="projects-list">
          <ul>{projectsList}</ul>
        </div>
      </div>
    </DocumentTitle>
  );
};


