
import './App.css';
import Header from "./common/header/Header";
import { BrowserRouter as Router, Route, Switch, Routes} from 'react-router-dom';
import Pages from './pages/pages';
import Home from './components/mainpage/Home';
import { useState } from 'react';
import Data from './components/FlashDeals/Data';
import Categories from './components/mainpage/Categories';
import Cart from './common/cart/Cart';
function App() {

const {productItems} = Data;


const [CartItem, setCardItem] = useState([]);

// const addToCart = (product) =>{
//   const productExit = CartItem.find((item) => item.id === product.id)
//   if(productExit){
//     setCardItem(CartItem.map((item) =>
//     (item.id === product.id ? {...productExit, qty: productExit.qty + 1} : item)))
//   }else{
//     setCardItem([...CartItem, {...product, qty:1}])
//   }
// }
  return (
<>
   
 <Router>
  <Header/>
  <Switch>
      <Route path="/" exact>
         <Pages productItems = {productItems}/>
      </Route>
      <Route path="/cart" exact>
         <Cart/>
      </Route>
  </Switch>
 </Router>

    </>
  );
}

export default App;
