import React from 'react'

const Footer = ({descripcion,fecha}) => {
    return (
        <footer> 
            <p>{descripcion}, {fecha}</p>
        </footer>
      );
}
 
export default Footer;
