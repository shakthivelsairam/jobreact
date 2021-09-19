import React from 'react';
import Productlist from "./Productlist";
import ProductApi from "../data/ProductApi";
import { Link } from 'react-router-dom';
export default class Allproductspage extends React.Component {
    constructor() {
        super();
        this.state = {
            product:[],
            currentUser: '',
            role: ''
        }
    }
    componentDidMount() {
this.setState({currentUser: localStorage.getItem('username')})
this.setState({role: localStorage.getItem('role')})
    const productData = ProductApi.getAllProducts();
    productData.then(res => {
                         this.setState({'product': res.data})
                              })
    }

    render() {
        return(
            <div>
                             {this.state.product.length >= 1 ? <button className='btn btn-success addbtn'><Link to='/addFamily'>Add Family Member</Link></button>: ''}<br/>
                {this.state.role === 'Admin' && this.state.product.length < 1 ? <div className="familycontent">Family members are not added.<Link to='/addFamily'>Click Here</Link> to add</div> : <Productlist data={this.state.product}/>}


                <br/>

            </div>
        )
    }
}
