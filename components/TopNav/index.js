import React from 'react';
import NavBar from './NavBar';
import HeroImage from './HeroImage';
import { link } from 'gatsby-helpers';
import { config } from 'config';

const TopNav = ({pathname}) =>
  (pathname === link('/') ?
    <HeroImage links={config.navLinks}/> :
    <NavBar links={config.navLinks}/>);

TopNav.propTypes = {
  pathname: React.PropTypes.string
};

export default TopNav;
