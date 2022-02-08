import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const userService = {
    getAllUsers:()=>axiosService.get(urls.users).then(value => value.data),
}