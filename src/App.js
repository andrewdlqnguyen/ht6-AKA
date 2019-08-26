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
              <h1>The Quickest Way To Discover The Right Insurance For You.</h1>
              <p>
              Quote Estimation Made Simple
              </p>
              <p>
                <Button className="orange" variant="primary" onClick={() => setModalShow(true)}>
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
