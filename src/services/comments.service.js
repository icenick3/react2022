import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const commentsService = {
    getCommentsById: (id)=> axiosService.get(`${urls.posts}/${id}/comments`).then(value => value.data)
}