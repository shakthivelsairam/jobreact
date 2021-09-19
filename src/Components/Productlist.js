import React from 'react';
import Product from './Product';
export default class Productlist extends React.Component {
    render() {
let productData = this.props.data.map(product => (
    <Product key={product.id} id={product.id} name={product.name} fathername={product.fathername} city={product.city} state={product.state}>

    </Product>
))
        return(
            <table class="table table-condensed">
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Father Name</td>
                    <td>City</td>
                    <td>State</td>
                    <td>Action</td>
                </tr>
                </thead>
                <tbody>
                {productData}
                </tbody>

            </table>
        )
    }
}
