import axios from "axios";
import AuthService from "./authService";
import authService from "./authService";

export const getUserGroups = () => {
    AuthService.setAxiosAuthHeader();
    return axios.get('/groups/users/' + authService.getUserId());
}