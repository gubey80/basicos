import React, { Fragment , useState} from 'react';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {

  const [productos, guardarProducto] = useState([
    { id:1, nombre:'camisa ReactJS', precio: 50},
    { id:2, nombre:'camisa VueJS', precio: 40},
    { id:3, nombre:'camisa NodeJS', precio: 30},
    { id:4, nombre:'camisa Angular', precio: 20},
  ]);

  const fecha = new Date().getFullYear();
  return (
    <Fragment>
      <Header 
        titulo = 'Mi Tienda Virtual'
      />

      <Footer 
        descripcion = 'Todos los derechos reservados &copy;'
        fecha = {fecha}
      />
    </Fragment>

  );
}

export default App;
