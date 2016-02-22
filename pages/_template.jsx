import React from 'react';
import '../css/styles.css';
import { config } from 'config';
import { Link } from 'react-router';
import { link } from 'gatsby-helpers';

const Template = (props) => {
  const { children } = props;

  const header = (
    <div>
      <Link
        style={{
          textDecoration: 'none',
          color: 'inherit'
        }}
        to={link('docs/')}
      >
        {config.blogTitle}
      </Link>
    </div>
  );

  return (
    <div>
      {header}
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