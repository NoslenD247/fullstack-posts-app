const API_URL = import.meta.env.VITE_API_URL

const getPosts = async () => {
    const res = await fetch(`${API_URL}/posts`)
    if (!res.ok) throw new Error('Error fetching posts')
    
    return res.json()
}

export default getPosts