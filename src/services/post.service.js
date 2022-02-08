import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const postService = {
    getAllPosts: ()=> axiosService.get(urls.posts).then(value => value.data),
    getPostById: (id)=> axiosService.get(`${urls.users}/${id}/posts`).then(value => value.data)
}