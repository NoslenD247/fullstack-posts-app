export const groupPostsByName = (posts) => {
    const counter = {}

    posts.forEach((post) => {
        if (!post || !post.name) return

        const name = post.name.trim()
        if(!name) return;

        counter[name] = (counter[name] || 0) +1
    })
    
    return Object.entries(counter).map(([name, postCount]) => ({
        name,
        postCount
    }));
}