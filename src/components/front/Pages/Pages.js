import React from 'react';
import { Routes, Route } from "react-router-dom";
import Products from '../Products/Products';
import Signup from "../Signup/Signup";
import Cart from "../Cart/Cart";

const Pages = ({
    productItems,
    cartItems,
    handleAddProduct,
    handleRemoveProduct,
    handleCartClearance }) => {
    return (
        <div className='routes'>
            
                <Routes>
                    <Route path="/" element={<Products productItems={productItems} handleAddProduct={handleAddProduct} />}>
                         
                    </Route>
        
                    <Route path="/signup" element={<Signup />}>
                         
                    </Route>

                    <Route path="/cart" element={<Cart cartItems={cartItems}
                           handleAddProduct={handleAddProduct}
                           handleRemoveProduct={handleRemoveProduct}
                            handleCartClearance={handleCartClearance}
                         />}>
    
                    </Route>

                </Routes>
                        
        </div>
    )
};

export default Pages;
