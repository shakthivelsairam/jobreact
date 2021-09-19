import Dispatcher from '../dispatcher/Dispatcher';
import ProductApi from '../data/ProductApi';
import * as ActionTypes from '../constants/ActionTypes';

export default class InitializeActions {
static initProducts() {
const initialProducts = ProductApi.getAllProducts();

Dispatcher.dispatch({
actionType : ActionTypes.INITIALIZE,
products: initialProducts
});
}
}