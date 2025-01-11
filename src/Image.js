import React from 'react';
import product from './Product.js';

function Image() {
    return <img src={product.image} alt={product.name} style={{ width: '200px', height: 'auto' }} />;
  }
  
  export default Image;