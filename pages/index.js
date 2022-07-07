import Head from 'next/head'
// import styles from '../styles/header_styles.module.css';

export default function Home({articles}) {
  console.log(articles)
  return (
    <div>
      <Head>
        <title>Yea Yea</title>
        <meta name='keywords' content='web development, programming'/>
      </Head>
      {articles.map(article =>
        <div>
          <h3>{article.title}</h3>
          <img src={article.thumbnailUrl} alt="pic" />
        </div> 
      )
    }
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/?_limit=5`)
  const articles = await res.json()

  return {
    props: {
      articles,
    }
  }
}
