import styles from "../styles/layout_styles.module.css"

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {children}
      </main>

    </div>
  )
}
export default Layout
