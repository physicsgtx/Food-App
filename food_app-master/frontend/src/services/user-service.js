import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://swiggi-app.herokuapp.com/api/test/';
const restaurant_URL = 'https://swiggi-app.herokuapp.com/api/restuarant/';
class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'all');
    }
    getrestaurant() {
        return axios.get(restaurant_URL);
    }

    getmenu(restaurantId) {
        return axios.get('https://swiggi-app.herokuapp.com/api/restaurant/1');
    }
    getUserBoard() {
        return axios.get(API_URL + 'user', { headers: authHeader() });
    }

    getModeratorBoard() {
        return axios.get(API_URL + 'mod', { headers: authHeader() });
    }

    getAdminBoard() {
        return axios.get(API_URL + 'admin', { headers: authHeader() });
    }
}

export default new UserService();