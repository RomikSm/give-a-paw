import Navbar from "../Navbar/Navbar";
import Logo from "../../components/Logo/Logo";
import styles from "./Header.module.css";

const Header = () => {
  const links = [
    { href: "/about", text: "про нас" },
    { href: "/tape", text: "стрічка" },
    { href: "/my-account", text: "мій акаунт" },
    { href: "/login", text: "увійти" },
  ];
  return (
    <header className={styles.header}>
      <div className={styles.wrapp}>
        <Logo />
        <Navbar links={links} />
      </div>
    </header>
  );
};

export default Header;
