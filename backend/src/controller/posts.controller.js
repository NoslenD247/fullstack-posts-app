import { fetchAndGroupPosts } from '../services/posts.services.js'

export const getPosts = async (req, res)=> {
    try{
        const { name } = req.query
        const result = await fetchAndGroupPosts(name)
        res.json(result);
    } catch(e){
        res.status(500).json({message: "Internal server error"})
    }
}