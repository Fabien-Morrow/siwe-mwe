import Link from "next/link";
import styles from "./menu.module.css";

export default function Menu() {
  return (
    <nav>
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/api-example">
            <a>api-example</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/client">
            <a>client</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/server">
            <a>server</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/protected">
            <a>protected</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/protected-unstable">
            <a>protected-unstable</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
