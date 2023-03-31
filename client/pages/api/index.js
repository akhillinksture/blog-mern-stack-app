import axios from "axios";

const post_url = "http://localhost:5000/posts"

export const fetchPost = () => axios.get(post_url);

export const createPost = (newPost) => axios.post(post_url, newPost)