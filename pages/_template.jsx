import React from 'react';
import TopNav from 'components/TopNav';

const Template = (props) => (
  <div>
    <TopNav {...props.location} />
    {props.children}
  </div>
);

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object
};

export default Template;
