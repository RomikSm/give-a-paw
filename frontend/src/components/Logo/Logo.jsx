import logoImage from "../../../public/images/logo.svg";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <>
      <div className={styles.hoop}>
        <div className={styles.circle}>
          <a href="/about">
            {" "}
            <img src={logoImage} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Logo;
