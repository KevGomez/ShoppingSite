import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Redirect, Route, Switch,BrowserRouter as Router } from "react-router-dom";
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import Register from "../Register"
import '../../../css/flaticon.css';
import '../../../css/font-awesome.min.css';
import fakeAuth from "../fakeAuth"
class Login extends Component {
    constructor(props) {
		super(props);
		this.state = {
		  large: false,
      redirectToReferrer:false
      
    };
	
	
		this.toggleLarge = this.toggleLarge.bind(this);
		
    }
    
    login = () => {
      fakeAuth.authenticate(() => {
        this.setState(() => ({
          redirectToReferrer: true
        }))
      })
    }

	toggleLarge() {
		this.setState({
		  large: !this.state.large,
		});
	  }
    render() { 

      //const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to="/" />
    }
        return (<div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col >
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h3>Login to proceed</h3>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="flaticon-profile"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="flaticon-unlock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button onClick={this.login} color="primary" className="px-4">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '100%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Join Divisima and get all your clothin items under one roof. All convinient methods to provide 
                          you with the best services. Don't wait. Hurry join us!!!!
                      </p>
                      <Link to="/Register">
                    <Button onClick={this.props.toggle} >Sign Up</Button>
                    </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div> );
    }
}
 
export default Login;