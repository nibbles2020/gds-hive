import React from 'react';
// import NavBar from './NavBar';
import HeroImage from './HeroImage';
import { link } from 'gatsby-helpers';
import { config } from 'config';

const TopNav = ({ pathname }) => (
  <HeroImage
    pathname={pathname}
    links={config.navLinks}
    fullsize={pathname === link('/')}
  />
);

TopNav.propTypes = {
  pathname: React.PropTypes.string
};

export default TopNav;
