import axios from "axios";
import AuthService from "./authService";

export const getNotifications = () => {
    AuthService.setAxiosAuthHeader();
    return axios.get('/notifications/');
}
