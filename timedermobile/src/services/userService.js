import axios from "axios";
import AuthService from "./authService";
import authService from "./authService";

export const getUser = () => {
    AuthService.setAxiosAuthHeader();
    return axios.get('/users/' + authService.getUserId());
}