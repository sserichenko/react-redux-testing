import {types} from "./types";
import axios from "axios";

export const fetchPosts = () => async (dispatch) => {
    await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then(response => {
        dispatch(setPosts(response.data))
    })
    .catch(err => console.log(err))
}
export const setPosts = (items) => ({
    type: types.GET_POSTS, 
    payload: items
})