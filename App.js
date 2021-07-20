import './App.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import AddProduct from './Components/AddProduct';
import UpdateProduct from './Components/UpdateProduct';
//import Protected from './Components/Protected';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import SearchProduct from './Components/SearchProduct';


function App() {
  return (
    <div className="App">
      <BrowserRouter>   
      <Switch>
        {/* <h1>Ecom DashBoard Project</h1> */}
        
        <Route path="/add">
        <AddProduct/>
          {/* <Protected Cmp={AddProduct}/> */}
        </Route>
        <Route path="/update">
        <UpdateProduct/>
          {/* <Protected Cmp={UpdateProduct}/> */}
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/search">
          <SearchProduct/>
        </Route>
        <Route path="/">
        <ProductList/>
          {/* <Protected Cmp={ProductList}/> */}
        </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
