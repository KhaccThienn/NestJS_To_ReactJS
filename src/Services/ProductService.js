import * as http from '../Https/http';

const urlAPI = 'http://localhost:8888';

export const getAllProduct = async () => {
    return await http.get(`${urlAPI}/api/product`);
}

export const getProdByReq = async (params) => {
    return await http.get(`${urlAPI}/api/product?${params}`);
}

export const searchData = async (keySearch) => {
    return await http.get(`${urlAPI}/api/product?s=${keySearch}`);
}