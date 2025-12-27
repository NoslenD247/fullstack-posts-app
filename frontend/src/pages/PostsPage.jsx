import { useState } from 'react'
import { usePosts } from '../hooks/usePosts'

import SearchBar from '../components/SearchBar'
import DataTable from '../components/DataTable'

const PostsPage = () => {
  const { posts, loading, error } = usePosts()

  const [search, setSearch] = useState('')

  const filteredPosts = posts.filter(post =>
    post.name.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) return <p>Cargando...</p>
  if (error) return <p>Error</p>

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <DataTable items={filteredPosts} />
    </div>
  )
}

export default PostsPage
