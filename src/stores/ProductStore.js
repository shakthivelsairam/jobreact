import Dispatcher from '../dispatcher/Dispatcher';
import * as ActionTypes from'../constants/ActionTypes';
import { EventEmitter } from 'events';
import _ from 'lodash';

let _products = [];

class ProductStoreClass extends EventEmitter {
addChangeListener(cb) {
this.on('change', cb);
}

emitChange() {
this.emit('change');
}

getAllProducts() {
return _products;
}
}

let ProductStore =  new ProductStoreClass();
export default ProductStore;

Dispatcher.register(action => {
switch(action.actionType) {
case ActionTypes.INITIALIZE:
_products = action.products;
ProductStore.emitChange();
break;
case ActionTypes.ADD_PRODUCT:
_products.push(action.product);
ProductStore.emitChange();
break;
default:
}
})
