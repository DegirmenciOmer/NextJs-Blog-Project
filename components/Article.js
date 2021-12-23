import React from 'react'
import { grid } from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'

const Article = ({ articles }) => {
  return (
    <ul>
      {articles.map((article) => (
        <li key={article.id}>
          <ArticleItem article={article} />
        </li>
      ))}
    </ul>
  )
}

export default Article
