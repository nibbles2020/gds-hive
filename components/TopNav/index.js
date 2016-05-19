import React from 'react';
import HeroImage from './HeroImage';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

const TopNav = ({ pathname }) => (
  <HeroImage
    pathname={pathname}
    links={config.navLinks}
    fullsize={pathname === prefixLink('/')}
  />
);

TopNav.propTypes = {
  pathname: React.PropTypes.string
};

export default TopNav;
