import React from "react";
import React, { useState } from "react";
import { MetaMaskButton } from "@metamask/sdk-react-ui";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

function buttonLogIn(){
    return(
			<>
				<div className="content">
					<Row>
						<Col md="12">
							<Card id="card__style">
								<CardHeader>
										<h5 className="title">Conecta tu wallet</h5>
										<p className="category">
										De esta manera tendras acceso total a toda nuestra Dapp, ¿que esperas?.
										{/* <a href="https://nucleoapp.com/?ref=1712">NucleoApp</a> */}
										</p>
								</CardHeader>
								<CardBody className="all-icons">
									<Row>
										<Col className="font-icon-list col-xs-6 col-xs-6">
											<div className=".main">
												<div className="buttonLogIn">
      										<MetaMaskButton theme={"light"} color="white"></MetaMaskButton>
    										</div>
											</div>
										</Col>
									</Row>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</div>
			</>
    );
}

export default buttonLogIn;