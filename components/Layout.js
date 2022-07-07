import styles from "../styles/layout_styles.module.css"
import Nav from "./Nav.js"
import Header from './Header.js'
import Meta from './Meta'

const Layout = ({children}) => {
  return (
    <>
    <Meta />
    <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  )
}
export default Layout
