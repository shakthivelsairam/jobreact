import React from "react";
import { Row, Form, Col, Button } from 'react-bootstrap';
import { BASEURL,INITIALVALUE } from '../common';


class EditFamilyForm extends React.Component {
constructor(props) {
        super(props);
        this.state = INITIALVALUE;

         this.handleChange = this.handleChange.bind(this);

    }
    handleChange(event) {
            const name = event.target.name;
            const value = event.target.value;
            this.setState({
                [name]: value
            })

        }
    componentDidMount(props) {
            var Empid = this.props.id;
           this.GetEmployeeById(Empid);
        }


        GetEmployeeById(Empid) {
                const apiUrl = `${BASEURL}/products/${Empid}`;
                fetch(apiUrl)
                    .then(res => res.json())
                    .then(
                        (result) => {
                            if (result) {
                                this.setState({
                                name: result.name,
                                            fathername: result.fathername,
                                            dob: result.dob,
                                            doorno: result.doorno ,Address1: result.Address1, Address2: result.Address2,
                                             city: result.city,state:result.state,pincode:result.pincode,
                                             country:result.country,mobileno:result.mobileno,email:result.email,
                                            aadhar:result.aadhar,lang:result.lang,height:result.height

                                });
                            }
                            else {
                                alert("employeee record not found!")
                            }
                        },
                        (error) => {
                            this.setState({ IsApiError: true });
                        }
                    )
            }

             UpdateEmployee() {
                   if (this.state.name === "" || this.state.name === undefined) {
                                alert("Name is required");
                                return false;
                            } else if (this.state.fathername === "" || this.state.fathername === undefined) {
                                alert("Father Name is required");
                                 return false;
                            } else if (this.state.dob === "" || this.state.dob === undefined) {
                                alert("DOB  is required"); return false;

                            }  else if (this.state.doorno === "" || this.state.doorno === undefined) {
                                alert("Door No  is required"); return false;
                            }  else if (this.state.Address1 === "" || this.state.Address1 === undefined) {
                                alert("Address is required"); return false;
                            } else if (this.state.city === "" || this.state.city === undefined) {
                                alert("City is required"); return false;
                            } else if (this.state.state === "" || this.state.state === undefined) {
                                alert("State is required"); return false;
                            } else if (this.state.pincode === "" || this.state.pincode === undefined) {
                                alert("Pincode is required"); return false;
                            } else if (this.state.country === "" || this.state.country === undefined) {
                                alert("Country is required"); return false;
                            }  else if (this.state.mobileno === "" || this.state.mobileno === undefined) {
                                alert("Mobile Number is required"); return false;
                            }  else if (this.state.email === "" || this.state.email === undefined) {
                                alert("Email is required"); return false;
                            }  else if (this.state.aadhar === "" || this.state.aadhar === undefined) {
                                alert("Aadhar Number is required"); return false;
                            }  else if (this.state.lang === "" || this.state.lang === undefined) {
                                alert("Language is required"); return false;
                            }  else if (this.state.height === "" || this.state.height === undefined) {
                                           alert("Height is required"); return false;
                                       }
               //     let MeetingToken = Math.floor(Math.random() * 100000000 + 1);
                    let body = {
                        Id:this.props.id,
                        name: this.state.name,
                        fathername: this.state.fathername,
                        dob: this.state.dob,
                        doorno: this.state.doorno ,
                        Address1: this.state.Address1,
                        Address2: this.state.Address2,
                        city: this.state.city,
                        state:this.state.state,
                        pincode:this.state.pincode,
                        country:this.state.country,
                        mobileno:this.state.mobileno,
                        email:this.state.email,
                         aadhar:this.state.aadhar,
                         lang:this.state.lang,
                         height:this.state.height
                    };

                    const requestOptions = {
                        method: 'PUT',
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                        },
                        body: JSON.stringify(body),
                    };

                    let baseurl = BASEURL + "/products/?id="+this.props.id;
                    fetch(baseurl, requestOptions)
                        .then((res) => {
                            return res.json();
                        })
                        .then((results) => {
                            if (results) {
                                alert("Updated successfully!");


                            }
                        })
                        .catch((e) => {
                            alert(e);
                        });
                }


    render() {

   return(
 <div>
                <h4>Edit Family Member Details</h4>
                                        <Form onSubmit={this.handleSubmit}>

                <Row>
                    <Col sm={3}>
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    placeholder="Employee Name" />
                            </Form.Group>
                            <Form.Group controlId="Address1">
                                <Form.Label>Address Line 1</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Address1"
                                    value={this.state.Address1}
                                    onChange={this.handleChange}
                                    placeholder="Address Line 1" />
                            </Form.Group>
                            <Form.Group controlId="pincode">
                                <Form.Label>Pin code</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="pincode"
                                    value={this.state.pincode}
                                    onChange={this.handleChange}
                                    placeholder="pincode" />
                            </Form.Group>
                            <Form.Group controlId="aadhar">
                                                                                <Form.Label>Aadhar Number</Form.Label>
                                                                                <Form.Control
                                                                                    type="text"
                                                                                    name="aadhar"
                                                                                    value={this.state.aadhar}
                                                                                    onChange={this.handleChange}
                                                                                    placeholder="Aadhar No" />
                                                                            </Form.Group><br/>
                            <Form.Group>
                                <Button variant="success" onClick={() => this.UpdateEmployee()}>Save</Button>
                            </Form.Group>


                    </Col>
                    <Col sm={3}>
                                                <Form.Group controlId="fathername">
                                                                               <Form.Label>Fathers Name</Form.Label>
                                                                               <Form.Control
                                                                                   type="text"
                                                                                   name="fathername"
                                                                                   value={this.state.fathername}
                                                                                   onChange={this.handleChange}
                                                                                   placeholder="Employee Salary" />
                                                                           </Form.Group>
                                                <Form.Group controlId="Address2">
                                                    <Form.Label>Address Line 2</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="Address2"
                                                        value={this.state.Address2}
                                                        onChange={this.handleChange}
                                                        placeholder="Address Line 2" />
                                                </Form.Group>
                                                <Form.Group controlId="country">
                                                    <Form.Label>Country</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="country"
                                                        value={this.state.country}
                                                        onChange={this.handleChange}
                                                        placeholder="Country" />
                                                </Form.Group>
<Form.Group controlId="lang">
                                                                                            <Form.Label>Languages Known</Form.Label>
                                                                                            <Form.Control
                                                                                                type="text"
                                                                                                name="lang"
                                                                                                value={this.state.lang}
                                                                                                onChange={this.handleChange}
                                                                                                placeholder="Languages" />
                                                                                        </Form.Group>


                                        </Col>
                                        <Col sm={3}>
                                                                                        <Form.Group controlId="dob">
                                                                                                                                                                                    <Form.Label>DOB</Form.Label>
                                                                                                                                                                                    <Form.Control
                                                                                                                                                                                        type="date"
                                                                                                                                                                                        name="dob"
                                                                                                                                                                                        value={this.state.dob}
                                                                                                                                                                                        onChange={this.handleChange}
                                                                                                                                                                                        placeholder="Address" />
                                                                                                                                                                                </Form.Group>
                                                                                        <Form.Group controlId="city">
                                                                                            <Form.Label>City</Form.Label>
                                                                                            <Form.Control
                                                                                                type="text"
                                                                                                name="city"
                                                                                                value={this.state.city}
                                                                                                onChange={this.handleChange}
                                                                                                placeholder="City" />
                                                                                        </Form.Group>
                                                                                        <Form.Group controlId="mobileno">
                                                                                            <Form.Label>Mobile No</Form.Label>
                                                                                            <Form.Control
                                                                                                type="text"
                                                                                                name="mobileno"
                                                                                                value={this.state.mobileno}
                                                                                                onChange={this.handleChange}
                                                                                                placeholder="Mobile No" />
                                                                                        </Form.Group>
<Form.Group controlId="height">
                                                                                                                                    <Form.Label>Height (Meters)</Form.Label>
                                                                                                                                    <Form.Control
                                                                                                                                        type="text"
                                                                                                                                        name="height"
                                                                                                                                        value={this.state.height}
                                                                                                                                        onChange={this.handleChange}
                                                                                                                                        placeholder="Height" />

 </Form.Group>
                                                                                </Col>
                                                                                <Col sm={3}>
                                                                                                                                <Form.Group controlId="doorno">
                                                                                                                                                               <Form.Label>Door No</Form.Label>
                                                                                                                                                               <Form.Control
                                                                                                                                                                   type="text"
                                                                                                                                                                   name="doorno"
                                                                                                                                                                   value={this.state.doorno}
                                                                                                                                                                   onChange={this.handleChange}
                                                                                                                                                                   placeholder="Door No" />
                                                                                                                                                           </Form.Group>
                                                                                                                                <Form.Group controlId="state">
                                                                                                                                    <Form.Label>State</Form.Label>
                                                                                                                                    <Form.Control
                                                                                                                                        type="text"
                                                                                                                                        name="state"
                                                                                                                                        value={this.state.state}
                                                                                                                                        onChange={this.handleChange}
                                                                                                                                        placeholder="State" />
                                                                                                                                </Form.Group>
                                                                                                                                <Form.Group controlId="email">
                                                                                                                                    <Form.Label>Email</Form.Label>
                                                                                                                                    <Form.Control
                                                                                                                                        type="text"
                                                                                                                                        name="email"
                                                                                                                                        value={this.state.email}
                                                                                                                                        onChange={this.handleChange}
                                                                                                                                        placeholder="Email" />
                                                                                                                                </Form.Group>


                                                                                                                        </Col>
                </Row>

                 </Form>
            </div>   )
    }


  };

export default EditFamilyForm;

