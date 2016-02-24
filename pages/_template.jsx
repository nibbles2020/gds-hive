import React from 'react';
import { config } from 'config';
import { Container } from 'react-responsive-grid';
import NavBar from 'components/NavBar';
import { rhythm } from 'utils/typography';

const Template = (props) => {
  const { children } = props;

  const links = [
    { href: '/', title: config.blogTitle },
    { href: '/jobs/', title: 'Jobs' },
    { href: '/projects/', title: 'Projects' }
  ];

  return (
    <div>
      <NavBar links={links} />
      <Container
        style={{
          maxWidth: rhythm(32),
          padding: `${rhythm(2)} ${rhythm(1 / 2)}`
        }}
      >
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
