import axios from "axios";
import AuthService from "./authService";
import authService from "./authService";

export const getUserEvents = () => {
    AuthService.setAxiosAuthHeader();
    return axios.get('/events/users/' + authService.getUserId());
}

export const createEvent = (inputValues, userId) => {
    AuthService.setAxiosAuthHeader();
    return axios.post('/events/', {
        name: inputValues.name,
        startDateTime: inputValues.date + 'T' + inputValues.startTime,
        isPrivate: false,
        description: inputValues.description,
        localization: inputValues.localization,
        photoFilePath: '',
        ownerId: userId,
    });
}