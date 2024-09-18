import React, {createContext, useState} from 'react';
import { getProduct } from './services/ProductsService.js';
export const CartContext = createContext();
export function CartProvider(props) {
  const [items, setItems] = useState([]);

  function addItemToCart(id) {
    const product = getProduct(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => (item.id == id));
      if(!item) {
          return [...prevItems, {
              id,
              qty: 1,
              product,
              totalPrice: product.price 
          }];
      }
      else { 
          return prevItems.map((item) => {
            if(item.id == id && item.qty < product.qty) {
              item.qty ++;
              item.totalPrice += product.price;
            }
            return item;
          });
      }
    });
}
function addItemToCart2 (id) {
  const product = getProduct(id);
  setItems((prevItems) => {
    const item = prevItems.find((item) => (item.id == id));
    if(!item) {
        return [...prevItems, {
            id,
            qty: 1,
            product,
            totalPrice: product.price 
        }];
    }
    else { 
        return prevItems.map((item) => {
          if(item.id == id && item.qty > 0) {
            item.qty --;
            item.totalPrice -= product.price;
          }
          return item;
        });
    }
  });
}
function getItemsCount() {
      return items.reduce((sum, item) => (sum + item.qty), 0);
  }

  function getTotalPrice() {
      return items.reduce((sum, item) => (sum + item.totalPrice), 0);
  }  

  return (
    <CartContext.Provider 
      value={{items, setItems, getItemsCount, addItemToCart,addItemToCart2, getTotalPrice}}>
      {props.children}
    </CartContext.Provider>
  );
}