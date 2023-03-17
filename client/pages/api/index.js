import axios from "axios";

const post_url = "localhost:5000/posts"

export const fetchPost = () => axios.get(post_url);