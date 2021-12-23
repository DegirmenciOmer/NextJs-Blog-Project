import Head from 'next/head'
import Image from 'next/image'
import Article from '../components/Article'
import styles from '../styles/Layout.module.css'

export default function Home({ articles }) {
  console.log({ articles })
  return (
    <>
      <Head>
        <title>Webdev Next</title>
      </Head>
      <Article articles={articles} />
    </>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  if (!articles) {
    return {
      notFound: true,
    }
  }

  return {
    props: { articles }, // will be passed to the page component as props
  }
}
