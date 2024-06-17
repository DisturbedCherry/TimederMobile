import axios from "axios";
import AuthService from "./authService";

export const reportError = (userId, content) => {
    AuthService.setAxiosAuthHeader();
    return axios.post('/error-reports/', {userId, content});
}