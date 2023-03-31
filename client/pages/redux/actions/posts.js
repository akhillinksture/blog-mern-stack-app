import * as api from "../../api/index"

// Action Creators
// redux thunk allow us pass the async function, while write function. it means we create a function
// that return another function
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPost();
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: 'CREATE_POST', payload: data })
    } catch (error) {
        console.log(error);
    }
}