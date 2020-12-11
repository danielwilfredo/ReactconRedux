import React from 'react';
import Header from './components/Header';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
    
    <Header/>
    <div className="container mt-5">
     
      <Switch>
        <Route exact path="/" component={Productos} />
        <Route exact path="/productos/nuevo" component={NuevoProducto}/>
        <Route exact path="/productos/editar/:id" component={EditarProducto}/>
      </Switch>
    </div>
    </Router>
    

  );
}
/*NOTA: Lo que esta dentro del switch solamente mostrara lo que es de esa pagina

Y todo lo que este fuera del switch mostrara el contenido en todas las paginas como en este caso
el HEADER
*/
export default App;
