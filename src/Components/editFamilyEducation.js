import React from "react";
import { Row, Form, Col, Button } from 'react-bootstrap';
import { BASEURL,EDUCATIONINITIALVALUE } from '../common';


class EditFamilyEducation extends React.Component {
constructor(props) {
        super(props);
        this.state = EDUCATIONINITIALVALUE;

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
        }

             UpdateEmployee() {
                    if (this.state.level === "" || this.state.level === undefined) {
                        alert("Level of education is required");
                        return false;
                    } else if (this.state.field === "" || this.state.field === undefined) {
                        alert("Field of study is required");
                    } else if (this.state.school === "" || this.state.school === undefined) {
                        alert("school is required");
                    } else if (this.state.city === "" || this.state.city === undefined) {
                        alert("City is required");
                    } else if (this.state.month === "" || this.state.month === undefined) {
                        alert("From Month is required");
                    }else if (this.state.tomonth === "" || this.state.tomonth === undefined) {
                        alert("To Month  is required");
                    }else if (this.state.year === "" || this.state.year === undefined) {
                        alert("Year is required");
                    }else if (this.state.toyear === "" || this.state.toyear === undefined) {
                        alert("To Year is required");
                    }

                  //  let MeetingToken = Math.floor(Math.random() * 100000000 + 1);
                    let body = {
                        Id:this.props.id,
                        level: this.state.level,
                        field: this.state.field,
                        school: this.state.school,
                        city: this.state.city,
                        month: this.state.month ,
                        year: this.state.year,
                        tomonth: this.state.tomonth,
                        toyear: this.state.toyear,

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
                <h4>Education Details</h4>
                                        <Form onSubmit={this.handleSubmit}>

                <Row>
                    <Col sm={2}>
                            <Form.Group controlId="level">
                                <Form.Label>Level of education</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="level"
                                    value={this.state.level}
                                    onChange={this.handleChange}
                                    placeholder="Level" />
                            </Form.Group>
                              <Form.Group controlId="tomonth">
                                                                                <Form.Label>To Month</Form.Label>
                                                                                <Form.Control
                                                                                    type="month"
                                                                                    name="tomonth"
                                                                                    value={this.state.tomonth}
                                                                                    onChange={this.handleChange}
                                                                                    placeholder="To Month" />
                                                                            </Form.Group>
                            <br/>
                            <Form.Group>
                                <Button variant="success" onClick={() => this.UpdateEmployee()}>Save</Button>
                            </Form.Group>


                    </Col>
                    <Col sm={2}>
                                                <Form.Group controlId="field">
                                                                               <Form.Label>Field of study</Form.Label>
                                                                               <Form.Control
                                                                                   type="text"
                                                                                   name="field"
                                                                                   value={this.state.field}
                                                                                   onChange={this.handleChange}
                                                                                   placeholder="Field of study" />
                                                                           </Form.Group>
                                                <Form.Group controlId="toyear">
                                                    <Form.Label>To Year</Form.Label>
                                                    <Form.Control
                                                        type="number"
                                                        min="1900" max="2099"
                                                        name="toyear"
                                                        value={this.state.toyear}
                                                        onChange={this.handleChange}
                                                        placeholder="To Year" />
                                                </Form.Group>



                                        </Col>
                                        <Col sm={2}>
                                                                                        <Form.Group controlId="school">
                                                                                                                                                                                    <Form.Label>School/College/University</Form.Label>
                                                                                                                                                                                    <Form.Control
                                                                                                                                                                                        type="text"
                                                                                                                                                                                        name="school"
                                                                                                                                                                                        value={this.state.school}
                                                                                                                                                                                        onChange={this.handleChange}
                                                                                                                                                                                        placeholder="Address" />
                                                                                                                                                                                </Form.Group>


                                                                                </Col>
                                                                                <Col sm={2}>
                                                                                                                                <Form.Group controlId="city">
                                                                                                                                                               <Form.Label>City/District</Form.Label>
                                                                                                                                                               <Form.Control
                                                                                                                                                                   type="text"
                                                                                                                                                                   name="city"
                                                                                                                                                                   value={this.state.city}
                                                                                                                                                                   onChange={this.handleChange}
                                                                                                                                                                   placeholder="City/District" />
                                                                                                                                                           </Form.Group>




                                                                                                                        </Col>
                                                                                                                                      <Col sm={2}>
                                                                                                                                                                                                                                                        <Form.Group controlId="month">
                                                                                                                                                                                                                                                                                       <Form.Label>From Month</Form.Label>
                                                                                                                                                                                                                                                                                       <Form.Control
                                                                                                                                                                                                                                                                                           type="month"
                                                                                                                                                                                                                                                                                           name="month"
                                                                                                                                                                                                                                                                                           value={this.state.month}
                                                                                                                                                                                                                                                                                           onChange={this.handleChange}
                                                                                                                                                                                                                                                                                           placeholder="From Month" />
                                                                                                                                                                                                                                                                                   </Form.Group>




                                                                                                                                                                                                                                                </Col>
                                  <Col sm={2}>
                                                                                                                                                    <Form.Group controlId="year">
                                                                                                                                                                                   <Form.Label>From Year</Form.Label>
                                                                                                                                                                                   <Form.Control
                                                                                                                                                                                       type="number"
                                                                                                                                                                                       min="1900" max="2099"
                                                                                                                                                                                       name="year"
                                                                                                                                                                                       value={this.state.year}
                                                                                                                                                                                       onChange={this.handleChange}
                                                                                                                                                                                       placeholder="From Year" />
                                                                                                                                                                               </Form.Group>






                                                                                                                                            </Col>


                </Row>

                 </Form>
            </div>   )
    }


  };

export default EditFamilyEducation;

