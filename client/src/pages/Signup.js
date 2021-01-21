import React, { Component } from "react";

import userAPI from "../utils/userAPI";
import {  Redirect, Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import SignupImage from "../img/signup.jpg"

class Signup extends Component {
  state = {
    fullname: "",
    email: "",
    username: "",
    password: "",
    passwordConf: ""
  };

  componentDidMount() {
  }
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      userAPI.signup({
        username: this.state.username,
        fullname: this.state.fullname,
        email: this.state.email,
        password: this.state.password,
        passwordConf: this.state.passwordConf,

      })
        .then(res => {
          if(res.status === 200 ){
            this.props.authenticate();
            //return <Redirect to="/comments" />
            window.location.href = "/comments";
             
          }
        })
        .catch(err => console.log(err.response.data));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size='md-6'>
          <div>
            <img src={SignupImage} className="img_Post" alt="Add Post"  /> 
          </div>
        </Col>
			    <Col size="6">
            <form>
              <label>
                Username: 
              </label>
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="Username (required)"
              />
              <label>
                Full Name: 
              </label>
              <Input
                value={this.state.fullname}
                onChange={this.handleInputChange}
                name="fullname"
                placeholder="Full name (required)"
              />
              <label>
                Email: 
              </label>
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email (required)"
              />
              <label>
                Password: 
              </label>
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password (required)"
                type="password"
              />
              <label>
                Confirm password: 
              </label>
              <Input
                value={this.state.passwordConf}
                onChange={this.handleInputChange}
                name="passwordConf"
                placeholder="Confirm password (required)"
                type="password"
              />
              
              <FormBtn
                // disabled={!(this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                signup
              </FormBtn>
              <Link to="/">
               <FormBtn> Login </FormBtn>
             </Link>
            </form>
          </Col>
          
        </Row>
        {/* redirect on authenticated */}
        {this.props.authenticated ? <Redirect to='/comments'/>: <div></div>}


      </Container>
    );
  }
}

export default Signup;