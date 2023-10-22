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

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";
import { useSDK } from "@metamask/sdk-react-ui";

function Chat() {
  const { connected } = useSDK();

  if (!connected) {
    return (<div>You need to Sign In First!</div>)
  }
  return (
    <>
      <div className="content">
        <Row>
          <h2>Long-term goals</h2>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4" style={{fontWeight:"bold"}}>Notifications</CardTitle>
              </CardHeader>
              <CardBody>
                <p style={{paddingBottom:"12px"}}>The third section, 'Notifications', is where you will receive important messages and relevant notifications related to your participation on the platform. You can set alerts to stay informed about the latest updates and events of special interest.</p>
                <p style={{paddingTop:"12px", borderTop:"2px solid #1a1e31"}}>We want to use XMTP as a technology to use the technologies, our goal is that our users can receive notifications either in the wallet such as metamask or right here in the Dapp. We know that this feature will provide a great help to all those who use our dapp</p>
              </CardBody>
            </Card>
          </Col>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4" style={{fontWeight:"bold"}}>Implement an AI</CardTitle>
              </CardHeader>
              <CardBody>
                <p style={{paddingBottom:"12px"}}>We want to create an environment in which, through a notification and chat system, supported by AI, the members of the DAO are aware of the proposals, votes and decisions of interest about their organization, also allowing us to establish alerts on a topic in DAO specific</p>
                <p style={{paddingTop:"12px", borderTop:"2px solid #b0b0b0"}}>An AI can be implemented and adapted to too many things, in addition to providing millions of tools that help the development of our dapp, the objective is to create a chatbot where the AI notifies the user of the different proposals that have been made, in addition to providing them with an analysis of how the voting results have been so that if the user has any doubt or question it can be resolved by this bot</p>
              </CardBody>
            </Card>
          </Col>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4" style={{fontWeight:"bold"}}>Decentralized Storage</CardTitle>
              </CardHeader>
              <CardBody>
                <p style={{paddingBottom:"12px"}}>We will also store enriched valuable information that can be accessed through web3.storage so that your data has the value it deserves and can be consulted and analyzed today, tomorrow and for future generations.</p>
                <p style={{paddingTop:"12px", borderTop:"2px solid #1a1e31"}}>Privacy is a right and we want the information of the DAOs that trust our service to be in a safe place where their data cannot be vulnerable, much less accessible. Therefore, using a decentralized storage is the most effective solution, because the information is always encrypted and protected.</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Chat;
