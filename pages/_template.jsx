import React from 'react';
import TopNav from 'components/TopNav';

const Template = (props) => {
  const { children, location } = props;
  return (
    <div>
      <TopNav {...location} />
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
