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
      <p className={yea}>
        You Already know, Dont even trip. Yeah
      </p>
      <style jsx>
        {`
        .yes {
          color: green;
        }
        `}
      </style>
    </div>

  )
}

export default Header
