import { Link } from 'react-router-dom'

function stripMarkdown(text) {
  return text
    .replace(/```[\s\S]*?```/g, '')
    .replace(/[#*_`>]/g, '')
    .replace(/\n+/g, ' ')
    .trim()
}

export function PostCard({ post }) {
  const plainText = stripMarkdown(post.body)
  const excerpt =
    plainText.length > 160 ? `${plainText.slice(0, 160)}…` : plainText

  return (
    <Link to={`/posts/${post.key}`} className="card post-card">
      <h2>{post.title}</h2>
      <p>{excerpt}</p>
    </Link>
  )
}
