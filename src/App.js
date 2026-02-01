import "./App.css";
import {BrowserRouter as  Router , Routes , Route} from "react-router-dom"
import { Shop } from "./pages'/shop/shop";
import { Cart } from "./pages'/cart/cart";
import { Nav } from "./component/navigation";
 function App() {
  
   return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Shop/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;