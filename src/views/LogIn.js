import React from "react";
import "src/assets/scss/black-dashboard-react.css"

function buttonLogIn(){
    return(
        <div className="main">
            <a className="main__link">
                <button className="main__link--button">¡Ingresa!</button>
            </a>
        </div>
    );
}

export default buttonLogIn;