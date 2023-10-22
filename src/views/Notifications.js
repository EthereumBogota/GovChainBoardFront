/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

// reactstrap components
import {
  Alert,
  UncontrolledAlert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import { useSDK } from "@metamask/sdk-react-ui";

function Notifications() {
  const { connected } = useSDK();



  const notificationAlertRef = React.useRef(null);
  const notify = (place) => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>Black Dashboard React</b> - a beautiful freebie for
            every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "tim-icons icon-bell-55",
      autoDismiss: 7,
    };
    notificationAlertRef.current.notificationAlert(options);
  };

  return (
    <>
      <div className="content">
        <div className="react-notification-alert-container">
          <NotificationAlert ref={notificationAlertRef} />
        </div>
        <Row>
          <Col md="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Notifications Style</CardTitle>
                <p>Here you can see the differents notifications that you have</p>
              </CardHeader>
              <CardBody>
                <Alert color="info">
                  <span>Enjoy our Dapp and its differents feature😁</span>
                </Alert>
                <UncontrolledAlert color="info">
                  <span>In dashboard you will find info about differents DAO🔍</span>
                </UncontrolledAlert>
                <UncontrolledAlert color="info">
                  <span>The stats are interactive and totally uploaded📈</span>
                </UncontrolledAlert>
                <UncontrolledAlert color="info">
                  <span>If you have feedback, you can do it in our github🤩</span>
                </UncontrolledAlert>
                <UncontrolledAlert className="alert-with-icon" color="info">
                  <span className="tim-icons icon-bell-55" data-notify="icon" />
                  <span data-notify="message">
                    Some of the notifications will appear in your screen when you're in other section of the website
                  </span>
                </UncontrolledAlert>
                <UncontrolledAlert className="alert-with-icon" color="info">
                  <span className="tim-icons icon-bell-55" data-notify="icon" />
                  <span data-notify="message">
                    We would like to send you notifications not only in our website, we would like to send you these notifications to your metamask wallet, in this way you will be update to any new in our website
                  </span>
                </UncontrolledAlert>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Notification states</CardTitle>
                <p>The colors will represent several types of notification, in this way you will be able to see how important it can be only seeing the color</p>
              </CardHeader>
              <CardBody>
                <UncontrolledAlert color="primary">
                  <span>
                    <b>Primary - </b>
                    This is a normal or basic notification
                  </span>
                </UncontrolledAlert>
                <UncontrolledAlert color="info">
                  <span>
                    <b>Info - </b>
                    This notification will give you information about changes or inforvative aspects to our website
                  </span>
                </UncontrolledAlert>
                <UncontrolledAlert color="success">
                  <span>
                    <b>Success - </b>
                    This notification will active when you vote in your DAO or you make an specific action in our website
                  </span>
                </UncontrolledAlert>
                <UncontrolledAlert color="warning">
                  <span>
                    <b>Warning - </b>
                    It will be active when you don't vote or when is missing a few minutes to finish the votes
                  </span>
                </UncontrolledAlert>
                <UncontrolledAlert color="danger">
                  <span>
                    <b>Danger - </b>
                    This notification will work when you active an alart about a speacial category you would like to participate or when a specific user vote
                  </span>
                </UncontrolledAlert>
              </CardBody>
            </Card>
          </Col>
      {/* <Col md="12">
            <Card>
              <CardBody>
                <div className="places-buttons">
                  <Row>
                    <Col className="ml-auto mr-auto text-center" md="6">
                      <CardTitle tag="h4">
                        Notifications Places
                        <p className="category">Click to view notifications</p>
                      </CardTitle>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ml-auto mr-auto" lg="8">
                      <Row>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                            onClick={() => notify("tl")}
                          >
                            Top Left
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                            onClick={() => notify("tc")}
                          >
                            Top Center
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                            onClick={() => notify("tr")}
                          >
                            Top Right
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ml-auto mr-auto" lg="8">
                      <Row>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                            onClick={() => notify("bl")}
                          >
                            Bottom Left
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                            onClick={() => notify("bc")}
                          >
                            Bottom Center
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                            onClick={() => notify("br")}
                          >
                            Bottom Right
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col> */}
        </Row>
      </div>
    </>
  );
}

export default Notifications;
