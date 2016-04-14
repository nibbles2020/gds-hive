import React from 'react';
import styles from './styles.scss';
import LogoSVG from './SvgLogo';
import { Link } from 'react-router';
import { link } from 'gatsby-helpers';

const createLink = (l, currentPathname) => {
  const isCurrentStyle = (currentPathname === l.href) ? styles.current : '';

  if (l.external) {
    return (
      <a href={l.href} key={l.href} className={`${styles.link} ${isCurrentStyle}`}>
        {l.title}
      </a>
    );
  }

  return (
    <Link to={link(l.href)} key={l.href} className={`${styles.link} ${isCurrentStyle}`}>
      {l.title}
    </Link>
  );
};

export default ({ pathname, links, fullsize }) => {
  const renderLinks = (
    <div className={styles.links}>
      {links.map((l) => createLink(l, pathname))}
    </div>
  );

  return (
    <div className={`${styles.gdsbackground} ${fullsize ? styles.fullsize : ''}`}>
      {renderLinks}
      {fullsize ? <LogoSVG /> : ''}
    </div>
  );
};
