import axios from "axios";
import AuthService from "./authService";
import authService from "./authService";

export const getUserGroups = () => {
    AuthService.setAxiosAuthHeader();
    return axios.get('/groups/users/' + authService.getUserId());
}

export const createGroup = (inputValues, userId) => {
    AuthService.setAxiosAuthHeader();
    return axios.post('/groups/', {
        name: inputValues.name,
        description: inputValues.description,
        currentSize: 1,
        totalSize: inputValues.totalSize,
        isPrivate: !inputValues.isPrivate,
        joinCode: inputValues.joinCode,
        ownerId: userId,
    });
}