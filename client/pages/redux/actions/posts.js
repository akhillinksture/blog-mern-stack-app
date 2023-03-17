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