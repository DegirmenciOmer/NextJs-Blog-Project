import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'
import Post from '../components/Post'

export default function Home({ posts }) {
  console.log(posts[0].frontmatter.title)
  return (
    <>
      <Head>
        <title>Webdev Next</title>
      </Head>
      <ul>
        {posts.map((post) => (
          <Post key={post.slug} post={post} />
        ))}
      </ul>
    </>
  )
}

export async function getStaticProps(context) {
  //get files from the posts directory
  const files = fs.readdirSync(path.join('posts'))
  console.log(files)

  //Get slug andfrontmatter from posts
  const posts = files.map((filename) => {
    //create slug
    const slug = filename.replace('.md', '')
    //frontmatter
    const mdWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontmatter } = matter(mdWithMeta)
    console.log(frontmatter)

    return { slug, frontmatter }
  })
  console.log({ posts })

  if (!files) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts }, // will be passed to the page component as props
  }
}
