import "./App.css";
import {BrowserRouter as  Router , Routes , Route} from "react-router-dom"
import { Shop } from "./pages'/shop/shop";
import { Cart } from "./pages'/cart/cart";
import { Nav } from "./component/nav/navigation";
import { ShopProvider } from "./component/coustom-hooks/usecontext";
import { Welcome } from "./component/nav/welcome/welcome";
 function App() {
  
   return (
    <div className="App">
      <ShopProvider>
      <Router>
        <Nav/>
        <Welcome/>
        <Routes>
          <Route path="/" element={<Shop/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
      </Router>
      </ShopProvider>
    </div>
  );
}

export default App;