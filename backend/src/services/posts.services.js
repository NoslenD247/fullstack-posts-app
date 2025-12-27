import { groupPostsByName } from "../utils/groupPosts.js"

const API_URL = "https://687eade4efe65e5200875629.mockapi.io/api/v1/posts"

export const fetchAndGroupPosts = async (name)=> {
    const res = await fetch(API_URL)

    if(!res.ok){
        throw new Error("External API failed")
    }

    const posts = await res.json()

    const filtered = name
        ? posts.filter(p =>
            p.name?.toLowerCase().includes(name.toLowerCase())
        ) : posts

    return groupPostsByName(filtered)
}