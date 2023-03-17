import React from 'react'
import PostsB from "./posts/PostsB"

// redux
import { useSelector } from "react-redux"

const Posts = () => {
    const posts = useSelector((state)=>state.posts);
    console.log(posts);
    return (
        <>
            <div>Posts</div>
            <PostsB />
        </>
    )
}

export default Posts