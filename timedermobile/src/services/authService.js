import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const AuthService = {
    getToken: function() {
        return localStorage.getItem('token');
    },

    decodeToken: function() {
        const token = this.getToken();
        return jwtDecode(token);
    },

    getUserId: function() {
        const decoded = this.decodeToken();
        return decoded.userId;
    },

    setAxiosAuthHeader: function() {
        const token = this.getToken();
        if (token) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }
    },

    login: function(index, password)  {
        AuthService.setAxiosAuthHeader();
        return  axios.post(`/auth/authenticate`, {index: index, password: password});
    }
};

export default AuthService;