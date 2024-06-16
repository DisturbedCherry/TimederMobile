import axios from "axios";
import AuthService from "./authService";
import authService from "./authService";

export const getUserEvents = () => {
    AuthService.setAxiosAuthHeader();
    return axios.get('/events/users/' + authService.getUserId());
}