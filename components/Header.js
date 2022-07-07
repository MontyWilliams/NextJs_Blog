import headerStyles from '../styles/header_styles.module.css';

const Header =() => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Awwe Yeah</span> Goin Doun
      </h1>
      <p className={headerStyles.description}>
        You Already know, Dont even trip. Yeah
      </p>
     
    </div>

  )
}

export default Header
