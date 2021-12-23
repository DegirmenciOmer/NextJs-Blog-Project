import Link from 'next/link'
import React from 'react'
import { card } from '../styles/Article.module.css'

export default function ArticleItem({ article }) {
  return (
    <Link href='/article/[id]' as={`/article/${article.id}`}>
      <a className={card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  )
}
