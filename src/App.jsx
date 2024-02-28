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

  const handleAddCartItem = (item) => {
    setShoppingCartItems(prevData => {
      const alreadyAddedIndex = prevData.findIndex(toFind => toFind.id === item.id);
      if (alreadyAddedIndex === -1) { // Add new item to cart
        return [
          ...prevData,
          { 
            id: item.id, 
            title: item.title, 
            price: item.price, 
            image: item.image, 
            quantity: 1 
          }
        ];
      }
      else { // Increase the quantity of already added item
        return [
          ...prevData.slice(0, alreadyAddedIndex),
          {
            ...prevData[alreadyAddedIndex],
            quantity: prevData[alreadyAddedIndex].quantity + 1
          },
          ...prevData.slice(alreadyAddedIndex + 1)
        ];
      }
    });
  };

  const handleRemoveCartItem = (itemId) => {
    setShoppingCartItems(prevData => {
      const alreadyAddedIndex = prevData.findIndex(toFind => toFind.id === itemId);

      if (prevData[alreadyAddedIndex].quantity > 1) {
        return [
          ...prevData.slice(0, alreadyAddedIndex),
          {
            ...prevData[alreadyAddedIndex],
            quantity: prevData[alreadyAddedIndex].quantity - 1
          },
          ...prevData.slice(alreadyAddedIndex + 1)
        ];
      }
      else {
        return [
          ...prevData.slice(0, alreadyAddedIndex),
          ...prevData.slice(alreadyAddedIndex + 1)
        ];
      }
    });
  }

  const handleCartItemQuantity = (itemId, value) => {
    setShoppingCartItems(prevData => {
      const index = prevData.findIndex(toFind => toFind.id === itemId);

      return [
        ...prevData.slice(0, index),
        {
          ...prevData[index],
          quantity: parseInt(value)
        },
        ...prevData.slice(index + 1)
      ];
    })
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const clothingItems = data
          .filter(item => item.category.includes("cloth"))
          .map(item => ({ 
            id: item.id, 
            title: item.title, 
            price: item.price, 
            image: item.image }));
        setItems(clothingItems);
      });
  }, []);

  return (
    <Router >
      <div className="app">
        <Header headerTitle="Shop Name" shoppingCartItems={shoppingCartItems} />
        <div className="divider"></div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/store" element={<StoreSection items={items} handleAddCartItem={handleAddCartItem} />} />
          <Route path="/cart" element={<Cart
            shoppingCartItems={shoppingCartItems}
            handleAddCartItem={handleAddCartItem}
            handleRemoveCartItem={handleRemoveCartItem} 
            handleCartItemQuantity={handleCartItemQuantity}
            setShoppingCartItems={setShoppingCartItems}
            />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
