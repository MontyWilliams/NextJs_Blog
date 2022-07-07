import navStyles from '../styles/nav_styles.module.css';
import Link from 'next/Link'

export default const Nav() => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
    )
}
