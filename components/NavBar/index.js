import React from 'react';
import styles from './styles.scss';
import { Link } from 'react-router';
import { link } from 'gatsby-helpers';

const NavBar = (props) => {
  const links = (
    <div className={styles.links}>
      {
        props.links.map((l) =>
          (
            <Link to={link(l.href)} key={l.href} className={styles.link}>
              {l.title}
            </Link>
          )
        )
      }
    </div>
  );

  return <div className={styles.bar}>{links}</div>;
};

NavBar.propTypes = {
  links: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default NavBar;
