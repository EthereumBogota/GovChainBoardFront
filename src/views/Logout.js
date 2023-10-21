import React, { useEffect } from "react";
import { useState } from "react";
import { MetaMaskButton, useSDK } from "@metamask/sdk-react-ui";

import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

import { useSelector, useDispatch } from 'react-redux'

import {setLogged, setUnlogged} from 'features/login/loginSlice'
import { useNavigate } from "react-router-dom";

function Logout(){
    const navigate = useNavigate();

	const logged = useSelector((state) => state.logged.value) // guarda valor de si esta logeado
  	const dispatch = useDispatch() // se usa para cambiar el valor de si está logeado
	
	const [account, setAccount] = useState();
	const { sdk, connected, connecting, provider, chainId } = useSDK();

	// const connect = async () => {
	// 	try {
	// 	const accounts = await sdk?.connect();
	// 	setAccount(accounts?.[0]);
	// 	console.log(accounts);
	// 	} catch(err) {
	// 	console.warn(`failed to connect..`, err);
	// 	}
	// };
	
	// useEffect(() => {
	// 	if(connected){
	// 		// navigate('/dashboard/proposal')
	// 		navigate("/dashboard/proposal");
	// 	}
	//   }, [connected]);


    return(
			<>
				<div className="content">
					<Row>
						<Col md="12">
							<Card id="card__style">
								<CardHeader>
										<h5 className="title">Wallet:</h5>
										<p className="category">
										{/* De esta manera tendras acceso total a toda nuestra Dapp, ¿que esperas?. */}
										{/* <a href="https://nucleoapp.com/?ref=1712">NucleoApp</a> */}
										</p>
								</CardHeader>
								<CardBody className="all-icons">
									<Row>
										<Col className="font-icon-list col-xs-6 col-xs-6">
											<div className=".main">
												<div className="buttonLogIn">
      										<MetaMaskButton theme={"dark"} 

											 color="black">
											 </MetaMaskButton>
    										</div>
											</div>
										</Col>
									</Row>
									<br/>
									{/* <button style={{backgroundColor: "white"}} 
									onClick={() => {logged? dispatch(setUnlogged()) : dispatch(setLogged())}}>
										{connected? "Click me to Log Out": "Click me to Login" }
									</button> */}
								</CardBody>

							</Card>
						</Col>
					</Row>
				</div>
			</>
    );
}

export default Logout;