import React from "react";
import "../styles/style.css";


function Cart(prop) {
    const cart = prop.cart;
    const setCart = prop.setCart;
    const total = prop.total;
    return (
        <div class="cart">
            <h2 class="cartName">Cart  </h2>
            <div>
                {cart.map((e, i) => <p key={i}>{e.name}    <button onClick={() => {console.log(i, cart.splice(i, 1)); setCart([...cart])}}>-</button></p>)} 
            </div>    
            <h4>Total: ${total}</h4>
        </div>
    );
}

export default Cart;