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

  const linkFactory = (l) => {
    return <Link to={link(l.href)}>{l.title}</Link>;
  };
  const links = <div>{linkDefinitions.map(linkFactory)}</div>;

  return (
    <div>
      {links}
      <div>children start</div>
      {children}
      <div>children end</div>
    </div>
  );
};

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object
};

export default Template;
