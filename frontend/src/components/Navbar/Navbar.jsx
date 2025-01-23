import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = ({ links }) => {
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      {links.map((link, index) => {
        const isActive = location.pathname === link.href;
        return (
          <a
            href={link.href}
            key={index}
            className={`${styles.navbar} ${isActive ? styles.active : ""}`}
          >
            {link.text}
          </a>
        );
      })}
    </nav>
  );
};

Navbar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navbar;
