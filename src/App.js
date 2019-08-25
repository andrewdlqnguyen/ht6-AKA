import React from 'react';
import {Button, Jumbotron} from 'react-bootstrap';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Quote from './components/Quote/Quote';

import './App.css';

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="App">
      <NavigationBar/>
      <header className="App-header">
            <Jumbotron className="background-image" >
              <h1>Finding the best way to discover the right insurance for you.</h1>
              <p>
              Quote Estimation Made Simple
              </p>
              <p>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                Get A Quote
                </Button>
          
                <Quote
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </p>
            </Jumbotron>
      </header>
    </div>
  );
}

export default App;
