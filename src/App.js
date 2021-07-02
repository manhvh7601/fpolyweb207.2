import './dashboard.css'
import Header from './components/admin/header';
import Nav from './components/admin/nav';
import Main from './components/admin/main';
import { useState } from 'react';

export default function App() {
  // const products = [
  //   {id: 1, name: "product 1", price: 200, status: true},
  //   {id: 2, name: "product 2", price: 300, status: false},
  //   {id: 3, name: "product 3", price: 400, status: true},
  // ];
  const [products, setProducts] = useState([
    {id: 1, name: "product 1", price: 200, status: true},
    {id: 2, name: "product 2", price: 300, status: false},
    {id: 3, name: "product 3", price: 400, status: true},
  ]);
  const onHandleAdd = (id) => {
    const newProducts = products.filter(item => item.id != id);
    setProducts(newProducts);
  }
  return (
    <div className="">
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Nav />
            <Main products={products} onAdd={onHandleAdd} />
          </div>
        </div>
      </div>
    </div>
  );
}


// export default App;
