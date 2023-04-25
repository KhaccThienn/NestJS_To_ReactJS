import * as http from '../Https/http';

const urlAPI = 'http://localhost:8888';

export const register = async (data) => {
    return await http.post(`${urlAPI}/auth/register`, data);
}

export const login = async (data) => {
    return await http.post(`${urlAPI}/auth/login`, data);
}