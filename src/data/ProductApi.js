import axios from 'axios';
import { uuid } from 'uuidv4';
import { BASEURL } from '../common';
export default class productApi {
    static getAllProducts() {
        return axios.get(`${BASEURL}/products`)
    }
    static saveProduct(product){
    product.id= uuid();
    return axios.post(`${BASEURL}/products`, product)
    }
    static getUser() {
            return axios.get(`${BASEURL}/products`)
        }

        login(username, password) {
       return axios.get(`${BASEURL}/users`)
        }

}
