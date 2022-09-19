import React from "react";

import Header from "./Components/Header";
import Drawer from "./Components/Drawer";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import Favorites from "./Pages/Favorites";
import Home from "./Pages/Home";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpend, setCartOpend] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("https://62e1997ae8ad6b66d84ce058.mockapi.io/items/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://62e1997ae8ad6b66d84ce058.mockapi.io/items/cart")
      .then((res) => {
        setCartItems(res.data);
      });
      axios
      .get("https://62e1997ae8ad6b66d84ce058.mockapi.io/items/favs")
      .then((res) => {
        setFavorites(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://62e1997ae8ad6b66d84ce058.mockapi.io/items/cart", obj);
    setCartItems(
      cartItems.includes(obj)
        ? (cartItems) => [...cartItems]
        : (prev) => [...prev, obj]
    );
  };
  const onRemoveItem = (id) => {
    axios.delete(
      `https://62e1997ae8ad6b66d84ce058.mockapi.io/items/cart/${id}`
    );
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
    if(favorites.find((favObj)=>favObj.id===obj.id)){
      axios.delete( 
        `https://62e1997ae8ad6b66d84ce058.mockapi.io/items/favs/${obj.id}`
        ); 
       // setFavorites((prev) => prev.filter((el) => el.id !== obj.id));
      } else{
       const {data}=await axios.post("https://62e1997ae8ad6b66d84ce058.mockapi.io/items/favs", obj);
    setFavorites((prev) => [...prev, data]);
      }
    }catch(error){
      alert("не удалось добавить в избранное")
    }
  
  };


  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="Wrapper">
      {cartOpend ? (
        <Drawer
          items={cartItems}
          onCloseCart={() => setCartOpend(false)}
          onRemove={onRemoveItem}
        />
      ) : null}
      <Header onClickCart={() => setCartOpend(true)} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }
        />
        <Route path="/favorites" element={<Favorites items={favorites}  onAddToFavorite={ onAddToFavorite}/>} />
      </Routes>
    </div>
  );
}

export default App;
