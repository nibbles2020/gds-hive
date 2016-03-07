import React from 'react';
import { config } from 'config';
import { Container } from 'react-responsive-grid';
import TopNav from 'components/TopNav';
import { rhythm } from 'utils/typography';
import '../scss/variables.scss';

const Template = (props) => {
  const { children, location } = props;
  return (
    <div>
      <TopNav {...location}/>
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
