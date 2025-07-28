import { header } from '../data/header';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles.a} href='/'>{header.title}</a>
      <a className={styles.a} href='/'>{header.titleEn}</a>
    </header>
  );
};

export default Header;