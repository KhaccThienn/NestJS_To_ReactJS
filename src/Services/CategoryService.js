import * as http from '../Https/http';

const urlAPI = 'http://localhost:8888';

export const getAllCategory = async () => {
    return await http.get(`${urlAPI}/api/category`);
}

export const getProdByCateID = async (id) => {
    return await http.get(`${urlAPI}/api/category/${id}`);
}