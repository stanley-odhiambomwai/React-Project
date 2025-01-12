
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Name from './Name.js';
import Price from './Price.js';
import Description from './Description.js';
import Image from './Image.js';

function App() {
  const firstName = "Stanley"; 

  return (
    <div className="App">
      <Card style={{ width: '18rem', margin: '20px auto', padding: '10px' }}>
        <Image />
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <Price />
          </Card.Subtitle>
          <Card.Text>
            <Description />
          </Card.Text>
          <Button variant="primary" className='product'>Buy Now</Button>
        </Card.Body>
      </Card>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {firstName ? (
          <>
            <p>Hello, {firstName}!</p>
            <img
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ubuy.ke%2Fen%2Fproduct%2FDU2II1IQ-onn-bluetooth-on-ear-headphones&psig=AOvVaw3NQAO2YPmoMq94Uj_0c_dl&ust=1736607545076000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODvoea164oDFQAAAAAdAAAAABAe"
              style={{ width: '100px', borderRadius: '50%' }}
            />
          </>
        ) : (
          <p>Hello, there!</p>
        )}
      </div>
    </div>
  );
}

export default App;
