// in the reducer 1st parameter is the "State" and 2ne parameter is our "action".
const reducers = (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        // here payload is out actual post
        case 'CREATE_POST':
            return [...posts, action.payload];
        default:
            return posts
    }

}
export default reducers