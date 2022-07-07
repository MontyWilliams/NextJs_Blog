import articleStyles from '../../../styles/article_styles.module.css';


const article = () => {
  return (
    <div className={articleStyles.card} >
      The articles have a default rendering behavior based on the directory structure of 
      how the Next app is set up
    </div>
  )
}

export default article
