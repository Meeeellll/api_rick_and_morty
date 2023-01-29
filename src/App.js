import React from 'react';

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


          <div className='col col-9 right'>
            

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
