import React from 'react';
import { Link } from 'react-router-dom';

export default class ViewProduct extends React.Component {

constructor() {
super();
this.handleBack = this.handleBack.bind(this);
}
handleBack(){
this.props.history.push('/');
}
render() {
return(
<div>
<h2>Product Details </h2>
<h4>Product Name: {this.props.match.params.id}</h4>
<br/>
<Link to='/'>Back</Link></div>
)
}
}