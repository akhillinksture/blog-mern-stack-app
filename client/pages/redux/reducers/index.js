import { combineReducers } from "redux";
import posts from "./posts"
export default combineReducers({ posts })
//destructuring here if your key and value is same like => posts:posts, then we can also write posts.