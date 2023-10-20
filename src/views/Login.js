import React from "react";
import { useState } from "react";
import { MetaMaskButton } from "@metamask/sdk-react-ui";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

import { useSelector, useDispatch } from 'react-redux'

import {setLogged, setUnlogged} from 'features/login/loginSlice'


function Login(){

	const logged = useSelector((state) => state.logged.value) // guarda valor de si esta logeado
  	const dispatch = useDispatch() // se usa para cambiar el valor de si está logeado

	// const [isWalletConnected, setIsWalletConnected] = useState(false);
	// const checkWalletConnetion = async () => {
	// 	if(window.ethereum){
	// 		try{
	// 			await window.ethereum.request({ method: 'eth_requestAccounts' });
	// 			setIsWalletConnected(true);
	// 			console.log("connected")
				
	// 		} catch(error){
	// 			alert(error);
	// 		}
	// 	}
	// };
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
      										<MetaMaskButton theme={"dark"} 
											// onClick={checkWalletConnetion}
											
											 color="black"></MetaMaskButton>
    										</div>
											</div>
										</Col>
									</Row>
									<br/>
									<button style={{backgroundColor: "white"}} 
									onClick={() => {logged? dispatch(setUnlogged()) : dispatch(setLogged())}}>
										{logged? "Click me to Log Out": "Click me to Login" }
									</button>
								</CardBody>
								<p>
									<strong>TODO: </strong>
									<br/>
									<br/>- Cuando se recage la pagina revisar con un useEffect si ya esta logeado y en dado caso dispatch(setLogged())
									<br/>- Cuando haga login redireccionar a /dashboard/proposal
									<br/>- cuando haga login mostrar demas tabs de la barra lateral y cambiar login por logout (poner logica correspondiente que le informe a metamas que se logout) 
									<br/>- cuando no este logeado configurar para que desde ninguna ruta ejm si va a /dashboard/proposal vea nada! ahorita solo esconde los links pero la idea es que si va a esa ruta no se vea nada
								</p>
							</Card>
						</Col>
					</Row>
				</div>
			</>
    );
}

export default Login;