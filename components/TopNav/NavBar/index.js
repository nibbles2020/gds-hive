import React from 'react';
import styles from './styles.scss';
import { Link } from 'react-router';
import { link } from 'gatsby-helpers';

const NavBar = ({links}) => {
  const renderLinks = (
    <div className={styles.links}>
      {
        links.map((l) =>
          (
            <Link to={link(l.href)} key={l.href} className={styles.link}>
              {l.title}
            </Link>
          )
        )
      }
    </div>
  );

  return <div className={styles.bar}>{renderLinks}</div>;
};

NavBar.propTypes = {
  links: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default NavBar;
