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
import URL from 'url';
import { GalleryContainer, GalleryItem } from 'components/Gallery'


export default (props) => {

  const projectsList = props.route.pages
    .filter((page) => access(page, 'file.ext') === 'md')
    .filter((page) => page.path.includes('/projects/'))
    .map((page) => {
      const title = access(page, 'data.title') || page.path;
      console.log(page)
      return (
        <GalleryItem key={link(page.path)} path={link(page.path)} imgPath={URL.resolve(page.path, page.data.thumbnail)} caption={page.data.title}/>
      );
    });

  return (
    <DocumentTitle title={config.blogTitle}>
      <div>
        <h1>Projects</h1>
        <GalleryContainer>
          {projectsList}
        </GalleryContainer>
      </div>
    </DocumentTitle>
  );
};


//<div className="projects-list">
//  <ul>{projectsList}</ul>
//</div>