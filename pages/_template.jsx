import React from 'react';
import { config } from 'config';
import { Container } from 'react-responsive-grid';
import { Link } from 'react-router';
import { link } from 'gatsby-helpers';
import HeroImage from 'components/HeroImage';
import { rhythm } from 'utils/typography';

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
        linkDefinitions.map((l) => <Link to={link(l.href)} key={l.href}>{l.title}</Link>)
      }
    </div>
  );

  return (
    <div>
      <HeroImage />
      <Container
        style={{
          maxWidth: rhythm(32),
          padding: `${rhythm(2)} ${rhythm(1 / 2)}`
        }}
      >
        {links}
        {children}
      </Container>
    </div>
  );
};

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object
};

export default Template;
