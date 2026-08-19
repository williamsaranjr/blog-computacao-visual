import { getPosts } from '../posts/postsData'
import { PostCard } from '../components/PostCard'

export function Home() {
  const posts = getPosts()

  return (
    <section>
      <h1>Publicações</h1>
      {posts.length === 0 && <p>Ainda não há publicações.</p>}
      <div className="post-list">
        {posts.map((post) => (
          <PostCard key={post.key} post={post} />
        ))}
      </div>
    </section>
  )
}
