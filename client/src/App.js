import "./App.module.css"
import Home from "./components/home/Home.jsx"
import {BrowserRouter, Route, Switch} from 'react-router-dom' 
import CreateProduct from "./components/createProduct/CreateProduct"
import ProductDetail from "./components/productDetail/ProductDetail"
import StorePage from "./components/storePage/StorePage"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/tienda" component={StorePage}/> 
          <Route path="/tienda/:producto" componente={ProductDetail}/>
          {/* <Route path="/edit" component={editPage}/>  */}
          <Route path="/crearproducto" component={CreateProduct}/> 
          {/* <Route path="/nosotros" component={weAreTheChampions}/> */}
          <Route exact path="/create" component={CreateProduct}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
