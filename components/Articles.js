import articleStyles from '../styles/article_styles.module.css';
import ArticleItem from './ArticleItem.js'

const Articles= ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
      <ArticleItem article={article}/>
      ))}
    </div>
  )
}

export default Articles
