import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Container,
    Row,
    Col,
    Table, Alert,
} from "reactstrap";
import CardFooter from "reactstrap/es/CardFooter";
import CFooter from "@coreui/react/es/CFooter";
import Form from "reactstrap/es/Form";
import FormGroup from "reactstrap/es/FormGroup";
import Label from "reactstrap/es/Label";
import Input from "reactstrap/es/Input";
import FormText from "reactstrap/es/FormText";
import axios from "axios";
import {Link} from 'react-router-dom';

class viewAllPayments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[]
        };

    }
    componentDidMount() {
        axios({
            method:"GET",
            url:"http://localhost:3001/payment/getAllPaymentDetails"
        }).then(res=>{
            this.setState({
                data: res.data
            });
        }).catch(err=>{
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <Container>
                    <Alert color="info">
                        <h1 className="my-auto mx-auto text-center text-dark">PAYMENT-DETAILS</h1>
                    </Alert>

                    <Table responsive="md">
                        <thead>
                        <tr>
                            <th>Payment ID</th>
                            <th>Order ID</th>
                            <th>Payment Date</th>
                            <th>Payment amount</th>
                            <th>Payment type</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        {this.state.data.map(payments=>(
                            <tbody>
                            <tr>
                                <td>{payments.payID}</td>
                                <td>{payments.orderID}</td>
                                <td>{payments.payDate}</td>
                                <td>{payments.payAmount}</td>
                                <td>{payments.payType}</td>
                                <td>{payments.paymentStatus}</td>

                            </tr>
                            </tbody>
                        ))}
                    </Table>

                    <CFooter><h6 className="text-right">By <span className="text-danger">PaymentAdmin</span></h6></CFooter>
                </Container>


            </div>
        );
    }
}

export default viewAllPayments;