import articleStyles from '../styles/article_styles.module.css';

const Articles= ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
       <div>
        <h3>{article.title}</h3>
        <img src={article.thumbnailUrl} alt="" />
       </div>
      ))}
    </div>
  )
}

export default Articles
