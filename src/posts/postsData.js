const modules = import.meta.glob('./data/*.json', { eager: true })

function keyFromPath(path) {
  return path.split('/').pop().replace(/\.json$/, '')
}

const posts = Object.entries(modules)
  .map(([path, mod]) => ({
    key: keyFromPath(path),
    title: mod.default.title,
    body: mod.default.body,
  }))
  .sort((a, b) => a.key.localeCompare(b.key))

export function getPosts() {
  return posts
}

export function getPostByKey(key) {
  return posts.find((post) => post.key === key)
}
