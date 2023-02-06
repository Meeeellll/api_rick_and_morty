import React from 'react';
import Desarrolladoras from './components/Desarrolladoras';

// import Parent from './components/Parent';
import PersonajesInfo from './components/PersonajesInfo';
import Sidebar from './components/Sidebar';
import Estilos from './Estilos.css';

function App() {
  
  return (
    <div className="App">

      <div className='container-fluid'>
        <div className='row '>

          <div className='col col-3 left'>
            <Sidebar />
            
          </div>


          <div className='col col-8 right'>
            <Desarrolladoras />

            <div className='contenedor-cards'>
              <PersonajesInfo />
            </div>
          </div>

        </div>
      </div>
      
      

    </div>
  );
}

export default App;
