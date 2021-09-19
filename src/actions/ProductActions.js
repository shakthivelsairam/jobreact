import Dispatcher from '../dispatcher/Dispatcher';
import ProductApi from '../data/ProductApi';
import * as ActionTypes from '../constants/ActionTypes';

export default class ProductActions {
static addProducts(product) {
console.log(product)
let newProducts = ProductApi.saveProduct(product);

Dispatcher.dispatch({
actionType: ActionTypes.ADD_PRODUCT,
product: newProducts
})
}


}