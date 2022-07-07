import { articles }from '../../../data.js'

// Accepts a query id and the list of articles then filters it to return
// the article id that matches the query id
export default function handler ({query: {id}}, res) {
  const filtered = articles.filter(article => article.id === id)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({mesage:`Article with id of ${id} is not found`})
  }
}
