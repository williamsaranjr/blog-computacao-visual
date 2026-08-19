import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { getPostByKey } from '../posts/postsData'

export function PostDetail() {
  const { key } = useParams()
  const post = getPostByKey(key)

  if (!post) {
    return (
      <section>
        <h1>Post não encontrado</h1>
        <Link to="/">Voltar para o início</Link>
      </section>
    )
  }

  return (
    <article className="post-detail">
      <h1>{post.title}</h1>
      <div className="post-content">
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </div>
      <Link to="/">Voltar para o início</Link>
    </article>
  )
}
