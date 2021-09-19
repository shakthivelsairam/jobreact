import React from 'react';
import {Link } from 'react-router-dom';
export default class Product extends React.Component {
    render() {
        return(
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.fathername}</td>
                <td>{this.props.city}</td>
                <td>{this.props.state}</td>
                <td><Link to={`/editfamily/${this.props.id}`}><button className='btn btn-outline-danger'>Edit</button></Link></td>
            </tr>
        )
    }
}
