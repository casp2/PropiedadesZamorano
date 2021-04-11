import React, { Component } from 'react';
import MenuAppBar from './Components/AppBar.js';
import Contenedor from './Components/Contenedor.js';
import FooterPage from './Components/FooterPage.js';






class App extends Component {
  render(){
  return (
    <div className="App">
      <div className="card">
      <MenuAppBar/>
      </div>
      <div className="card">
      <Contenedor/>
      </div>
      <FooterPage/>
    </div>
  );
  }
  
}

export default App;
