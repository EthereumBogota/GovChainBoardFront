import React, { useEffect } from "react";
import { useState } from "react";
import SidebarComponent from"./Sidebar/Sidebar.js"
import { MetaMaskButton, MetaMaskUIProvider } from "@metamask/sdk-react-ui";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

function ButtonLogIn(){
	const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);
  	const [isWalletConnected, setIsWalletConnected] = useState(false);

	useEffect(() => {
		if(window.ethereum){
			setIsMetaMaskInstalled(true);
		}
	}, []);

	const checkWalletConnetion = async () => {
		if(window.ethereum){
			try{
				await window.ethereum.request({ method: 'eth_requestAccounts' });
				setIsWalletConnected(true);
			} catch(error){
				alert(error);
			}
		}
	};

    return(
		<MetaMaskUIProvider sdkOptions={{
			logging:{
				developerMode: false,
			},
			dappMetadata: {
			  name: "Demo UI React App",
			}
		  }}>
			<>
				<div className="content">
					<Row>
						<Col md="12">
							<Card id="card__style">
								<CardHeader>
										<h5 className="title">Conecta tu wallet</h5>
										<p className="category">
										De esta manera tendras acceso total a toda nuestra Dapp, ¿que esperas?.
										</p>
								</CardHeader>
								{isMetaMaskInstalled ? (
        						isWalletConnected ? (
									null
        						) : (
									<>
										<CardBody className="all-icons">
											<Row>
												<Col className="font-icon-list col-xs-6 col-xs-6">
													<div className=".main">
														<div className="buttonLogIn">
															<MetaMaskButton onClick={checkWalletConnetion} theme={"dark"} color="black"></MetaMaskButton>
														</div>
													</div>
												</Col>
											</Row>
										</CardBody>
										<SidebarComponent>
											<div className="sidebar"></div>
										</SidebarComponent>
									</>
        							)
      							) : (
									<>
										<CardHeader>
											<h5 className="title">Ups hubo un error</h5>
											<p className="category">
											Instala la extencion de metamask o ingresa tu billetera para disfrutar de las grandes caracteristica de esta Dapp
											</p>
										</CardHeader>
										<SidebarComponent>
											<div className="sidebarInactive"></div>
										</SidebarComponent>
									</>
      								)}
							</Card>
						</Col>
					</Row>
				</div>
			</>
		</MetaMaskUIProvider>
    );
}

export default ButtonLogIn;