import React from 'react';
import { config } from 'config';
import { Container } from 'react-responsive-grid';
import TopNav from 'components/TopNav';
import { rhythm } from 'utils/typography';

const Template = (props) => {
  const { children, location } = props;
  return (
    <div>
      <TopNav {...location}/>
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
