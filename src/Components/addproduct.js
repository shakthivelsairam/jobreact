import React from 'react';
import ProductActions from '../actions/ProductActions';
import ProductForm from './productform';
class AddProduct extends React.Component {
constructor(props) {
super(props);
this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit(product){
console.log("good")
ProductActions.addProducts(product);
this.props.history.push('/');
window.location.reload();
}
render() {
return(
<div className="addfamily">
<h4>Add Family Member</h4>
<div className="addform">
<ProductForm onSave={this.handleSubmit}/>
</div>
     </div>
)
}
}

export default AddProduct;