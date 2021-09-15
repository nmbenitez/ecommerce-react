import React, { useState, useEffect} from "react";
import { ToastContainer, toast} from 'react-toastify';
import TopMenu from "./components/TopMenu";
import useFetch from "./hooks/useFetch";
import Products from "./components/Products"
import { STORAGE_PRODUCTS_CART } from "./utils/constants"
import { urlApiProducts } from "./utils/constants";

function App() {
    const products = useFetch(urlApiProducts, null);
    const [ productsCart, setProductsCart ] = useState([]);

    useEffect(() => {
      getProductsCart();
    }, []);

    const getProductsCart = () => {
      const idsProducts = localStorage.getItem(STORAGE_PRODUCTS_CART);

      if(idsProducts){
        const idsProductsSplit = idsProducts.split(',');
        setProductsCart(idsProductsSplit);
      }else{
        setProductsCart([]);
      }
    }

    const addProductCart = (id, name) => {
      const idsProducts = productsCart;
      idsProducts.push(id);
      setProductsCart(idsProducts);
      localStorage.setItem( STORAGE_PRODUCTS_CART, productsCart);
      getProductsCart();

      toast.success(`${name} añadido al producto correctamente`)
    };

  return (
    <div className="App">
      <TopMenu products={products} productsCart={productsCart} getProductsCart={getProductsCart} />
      <Products products={products} addProductCart={addProductCart} />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnVisibilityChange={false}
        draggable
        pauseOnHover={false}
      />
    </div>
  );
}

export default App;
