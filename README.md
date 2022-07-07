# Next js Tutorial
from video tutorial by traversy media https://www.youtube.com/watch?v=mTz0GXj8NN0

## Naming conventions
generally components are inn Upper case while pages are lower

### Static Folder
The public folder is considered to be the static folder because the items inside it are navigable via the browser

# Routing in NextJS
routing in next js is easy. the page dir is used as a source and all pages inside can be easily accesd

# Styles
when importing global styles into the app regular syntax is but this is for the *main app page only*. When adding styles to components there is a specific way to import and use them.
importing to components requires the file to be named with ".modules.css" at the end and then they are called as a method of the imported style for example:
```
(Snippet from style sheet "layout_styles.module.css")
.container {
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
```

```
import styles from "../styles/layout_styles.module.css"

const Layout = () => {
  return(
    <div className={styles.container}>

    </div>
  )
}
```



## Next/head
```
import Head from 'next/head'
```
nexdt head alooss you to place a tag and description wich will we findable via search engines

This is a starter template for [Learn Next.js](https://nextjs.org/learn).

# Fetching data
making requests comes out of the box with next js. U can simply make a function that makes arequest and add it above or below the component of the index page. Once the data is returned it can be passed into component as props

# Next Router 
next router allows destructuring of any obj thats passes through it buy using the .query method on whatever is passed through it.
