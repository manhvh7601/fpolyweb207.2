import './dashboard.css'
import Header from './components/admin/header';
import Nav from './components/admin/nav';
import Main from './components/admin/main';

export default function App() {
  const products = [
    {id: 1, name: "product 1", price: 200, status: true},
    {id: 2, name: "product 2", price: 300, status: false},
    {id: 3, name: "product 3", price: 400, status: true},
  ]
  return (
    <div className="">
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Nav />
            <Main products={products}/>
          </div>
        </div>
      </div>
    </div>
  );
}


// export default App;
