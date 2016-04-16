import React from 'react';
import styles from './styles.scss';
import LogoSVG from './SvgLogo';
import { Link } from 'react-router';
import { link } from 'gatsby-helpers';

const createLink = (l, currentPathname) => {
  // Matches subpaths too, need to slice to remove leading forward slash
  const isCurrentStyle =
    (currentPathname === l.href) || (currentPathname.includes(l.href.slice(1) || '*', 1))
      ? styles.current
      : '';

  if (l.external) {
    return (
      <a target="blank" href={l.href} key={l.href} className={`${styles.link} ${isCurrentStyle}`}>
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
