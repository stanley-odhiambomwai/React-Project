// src/App.js
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
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {firstName ? (
          <>
            <p>Hello, {firstName}!</p>
            <img
              src="https://images.app.goo.gl/qQzxohpUm3wQQABt6" 
              alt="Profile"
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
