import React from "react";
import "../styles/style.css";

function Inst(prop) {
    const updateCart = prop.updateCart;
    const cart = prop.cart;
    const item = prop.item;
    
    const cartUpdate = () => {
        console.log(prop.item.name);
        updateCart([...cart, item]);
    }
        
    return (
        <div class="items">
            <img src={item.image} />
            <h3>{item.name}</h3>
            <p>${item.price}</p><button onClick={cartUpdate}>Add to Cart</button>
        </div>
    );
}

export default Inst;