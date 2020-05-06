import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col} from 'reactstrap';
import CardFooter from "reactstrap/es/CardFooter";
import CFooter from "@coreui/react/es/CFooter";
import CanvasJSReact from "./Assets/canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dataPoints =[];

class payAdmin extends Component {
    state = {  }
    render() {

        //for 1st graph
        const options = {
            animationEnabled: true,
            exportEnabled: false,
            theme: "light2", //"light1", "dark1", "dark2"
            title:{
                text: "Credit/Debit card payments"
            },
            data: [{
                type: "column", //change type to bar, line, area, pie, etc
                //indexLabel: "{y}", //Shows y value on all Data Points
                indexLabelFontColor: "#5A5757",
                indexLabelPlacement: "outside",
                dataPoints: [
                    { x: 10, y: 71 },
                    { x: 20, y: 55 },
                    { x: 30, y: 50 },
                    { x: 40, y: 65 },
                    { x: 50, y: 71 },
                    { x: 60, y: 68 },
                    { x: 70, y: 38 },
                    { x: 80, y: 92, indexLabel: "Highest" },
                    { x: 90, y: 54 }
                ]
            }]
        };
        //for 2nd graph
        const options2 = {
            animationEnabled: true,
            exportEnabled: false,
            theme: "light2", // "light1", "dark1", "dark2"
            title:{
                text: "Bank payments"
            },
            data: [{
                type: "pie",
                indexLabel: "{label}: {y}%",
                startAngle: -90,
                dataPoints: [
                    { y: 20, label: "Bank payments" },
                    { y: 24, label: "On date" },
                    { y: 20, label: "Late" },
                    { y: 14, label: "Refunds" },
                    { y: 12, label: "Denied" }
                ]
            }]
        };

        //for 3rd graph
        const options3 = {
            animationEnabled: true,
            theme: "light2",
            title:{
                text: "Refund requests"
            },
            axisX:{
                valueFormatString: "DD MMM",
                crosshair: {
                    enabled: true,
                    snapToDataPoint: true
                }
            },
            axisY: {
                title: "Amount",
                includeZero: false,
                valueFormatString: "€##0.00",
                crosshair: {
                    enabled: true,
                    snapToDataPoint: true,
                    labelFormatter: function(e) {
                        return "€" + CanvasJS.formatNumber(e.value, "##0.00");
                    }
                }
            },
            data: [{
                type: "area",
                xValueFormatString: "DD MMM",
                yValueFormatString: "€##0.00",
                dataPoints: [
                    { x: new Date("2018-03-01"), y: 85.3},
                    { x: new Date("2018-03-02"), y: 83.97},
                    { x: new Date("2018-03-05"), y: 83.49},
                    { x: new Date("2018-03-06"), y: 84.16},
                    { x: new Date("2018-03-07"), y: 84.86},
                    { x: new Date("2018-03-08"), y: 84.97},
                    { x: new Date("2018-03-09"), y: 85.13},
                    { x: new Date("2018-03-12"), y: 85.71},
                    { x: new Date("2018-03-13"), y: 84.63},
                    { x: new Date("2018-03-14"), y: 84.17},
                    { x: new Date("2018-03-15"), y: 85.12},
                    { x: new Date("2018-03-16"), y: 85.86},
                    { x: new Date("2018-03-19"), y: 85.17},
                    { x: new Date("2018-03-20"), y: 85.99},
                    { x: new Date("2018-03-21"), y: 86.1},
                    { x: new Date("2018-03-22"), y: 85.33},
                    { x: new Date("2018-03-23"), y: 84.18},
                    { x: new Date("2018-03-26"), y: 85.21},
                    { x: new Date("2018-03-27"), y: 85.81},
                    { x: new Date("2018-03-28"), y: 85.56},
                    { x: new Date("2018-03-29"), y: 88.15}
                ]
            }]
        };

        return (
            <div>
                <Container>
                    <h3 className="my-5 mx-auto text-center text-danger">PAYMENT-ADMIN</h3>
                    <Row className="my-2">
                        <Col className="mx-auto mb-5 -align-right" xl="4">
                            <CanvasJSChart options = {options}/>

                        </Col>
                        <Col className="mx-auto mb-5" xl="4">
                            <CanvasJSChart options = {options2}/>
                        </Col>
                        <Col className="mx-auto mb-5" xl="4">
                            <CanvasJSChart options = {options3}
                            />
                        </Col>
                    </Row>
                    <CFooter><h6 className="text-right">By <span className="text-danger">PaymentAdmin</span></h6></CFooter>
                </Container>
            </div>
        );
    }

}

export default payAdmin;