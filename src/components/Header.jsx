import React, { Fragment } from 'react'; // se debe ejecytar siempre cada vez que creas un component
import QRCode from "react-qr-code";


function Header({titulo}){

    return(
        <Fragment>
        <h1>{titulo}</h1>
        </Fragment>
       
    )
}

export default Header;