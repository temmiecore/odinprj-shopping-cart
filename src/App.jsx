import { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Homepage from './components/homepage/Homepage'
import StoreSection from './components/storeSection/StoreSection'
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Cart from './components/cart/Cart';

// Change <a> tags to <links> in:
// Nav.jsx
// Header.jsx

function App() {
  const [items, setItems] = useState([]);
  const [shoppingCartItems, setShoppingCartItems] = useState([]);

  const handleAddingItemToCart = (item) => {
    setShoppingCartItems(prevData => [
      ...prevData,
      item
    ]);
    console.log(shoppingCartItems);
  };

  useEffect(()=>{
      fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const clothingItems = data
        .filter(item => item.category.includes("cloth"))
        .map(item => ({id:item.id, title:item.title, price:item.price, image:item.image}));
        setItems(clothingItems);
      });
  }, []);

  return (
    <Router >
      <div className="app">
        <Header headerTitle="Shop Name" shoppingCartItems={shoppingCartItems}/>
        <div className="divider"></div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/store" element={<StoreSection items={items} handleAddingItemToCart={handleAddingItemToCart} />} />
            <Route path="/cart" element={<Cart shoppingCartItems={shoppingCartItems}/>} />
          </Routes>
      </div>
    </Router>
  )
}

export default App
