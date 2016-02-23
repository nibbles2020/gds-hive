import React from 'react';
import '../css/styles.css';
import { config } from 'config';
import { Link } from 'react-router';
import { link } from 'gatsby-helpers';

const Template = (props) => {
  const { children } = props;

  const linkDefinitions = [
    { href: '/', title: config.blogTitle },
    { href: '/jobs/', title: 'Jobs' },
    { href: '/projects/', title: 'Projects' }
  ];

  const links = (
    <div>
      {
        linkDefinitions.map((l) => {
          return <Link to={link(l.href)} key={l.href}>{l.title}</Link>;
        })
      }
    </div>
  );

  return (
    <div>
      {links}
      {children}
    </div>
  );
};

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object
};

export default Template;
