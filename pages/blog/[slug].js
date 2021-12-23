import fs from 'fs'
import path from 'path'

export default function PostPage() {
  return <div>POST</div>
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))
  const paths = files.map((filename) => ({
    params: { slug: filename.replace('.md', '') },
  }))

  console.log({ paths })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = ({ params: { slug } }) => {
  console.log({ slug })
  return {
    props: {},
  }
}