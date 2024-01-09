import { useEffect, useState } from 'react';
import './index.css';

function App() {
  const [products, setProducts] = useState([
    {name: 'product1', price: 100.0},
    {name: 'product2', price: 200.0}
  
  ]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  },[]);

  function addProduct(){
    // setProducts([...products,{name: 'product3', price: 300.0}])
    setProducts(prevState => [...prevState,{name: 'product'+(prevState.length + 1), price: (prevState.length*100 + 100)}])
  }
  return (
    <div>
      <h1>ReStore</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  )
}

export default App
