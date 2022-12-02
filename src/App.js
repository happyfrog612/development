import logo from './logo.svg';
import './App.css';
import Inst from "./components/Inst";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";
import React from "react";
import "./styles/style.css"
import { Radio } from '@mui/material';

const instruments = [
  {name: "Steinway Grand Piano", type: "Piano", acoustic: 1, price: 10000, image: "./images/steinway.png", favorite: false},
  {name: "Martin Acoustic Guitar", type: "Guitar", acoustic: 1, price: 3000, image: "./images/martin.jpeg", favorite: false},
  {name: "Rhodes MK8", type: "Keyboard", acoustic: 0, price: 5000, image: "./images/rhodes.jpeg", favorite: false},
  {name: "Yamaha YPG 235", type: "Keyboard", acoustic: 0, price: 300, image: "./images/ypg.jpeg", favorite: false},
  {name: "Gibson SG Special", type: "Guitar", acoustic: 0, price: 400, image: "./images/gibson.jpeg", favorite: false},
  {name: "Taylor Acoustic-Electric Guitar", type: "Guitar", acoustic: 2, price: 3000, image: "./images/taylor.jpeg", favorite: false},
  {name: "AKG Microphone", type: "Microphone", acoustic: 0, price: 400, image: "./images/akg.jpeg", favorite: false},
  {name: "Neuman Microphone", type: "Microphone", acoustic: 0, price: 700, image: "./images/neuman.jpeg", favorite: false},
  {name: "Shure SM58", type: "Microphone", acoustic: 0, price: 300, image: "./images/sm58.jpeg", favorite: false},
  {name: "Moog Synthesizer", type: "Synthesizer", acoustic: 0, price: 1000, image: "./images/synth.jpeg", favorite: false},
  {name: "Moog Theremin", type: "Theremin", acoustic: 0, price: 15000, image: "./images/theremin.jpeg", favorite: false},
  {name: "Yamaha Violin", type: "Violin", acoustic: 1, price: 2000, image: "./images/violin.jpeg", favorite: false}
]
const ogArr = [...instruments];
function App() {

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  // const [currArr, setcurrArr] = useState([...ogArr]);
  const [misc, setMisc] = useState("clear");
  const [instr, setInst] = useState("clear");
  // const [ref, setRef] = useState(false);
  let arr = ogArr;
  let loaded = false;
  const updatePrice = () => {
    let sum = 0;
    cart.forEach(i => sum += i.price);
    setTotal(sum);
  }
  const stackFilters = () => {
    // console.log(misc);
    // console.log(instr);
      switch(misc) {
        case "all":
          arr = ogArr;
          break;
        case "acoustic":
          arr = ogArr.filter((item) => {
            return item.acoustic > 0;
          });
          break;
        case "electric":
          arr = ogArr.filter((item) => {
            return item.acoustic !== 1;
          });
          break;
        case "price":
          arr = instruments.sort((a, b) => {
            return a.price - b.price;
          });
          break;
        default:
          // console.log(arr);
          break;
      }
      // console.log(arr);
      switch(instr) {
        case "clear":
          // console.log(arr);
          break;
        case "guitar":
          arr = arr.filter((item) => {
            return item.type === "Guitar";
          });
          // console.log("here");
          // console.log(arr);
          break;
        case "piano":
          arr = arr.filter((item) => {
            return item.type === "Piano";
          });
          break;
        case "keyboard":
          arr = arr.filter((item) => {
            return item.type === "Keyboard";
          });
          break;
        case "mic":
          arr = arr.filter((item) => {
            return item.type === "Microphone";
          });
          break;
        case "synth":
          arr = arr.filter((item) => {
            return item.type === "Synthesizer";
          });
          break;
        case "theremin":
          arr = arr.filter((item) => {
            return item.type === "Theremin";
          });
          break;
        case "violin":
          arr = arr.filter((item) => {
            return item.type === "Violin";
          });
          break;
        default:
          // console.log(arr);
          break;
      }
      // console.log(arr);
      // loaded = true;
      return arr;    
  }
  // console.log("LOOOK", arr);
  stackFilters();
  // console.log("LOOOK", arr);
  useEffect(() => {
      updatePrice();
      // stackFilters();
  })
  // const acousticArray = currArr.filter((item) => {
  //   return item.acoustic > 0;
  // })
  // const electricArray = currArr.filter((item) => {
  //   return item.acoustic != 1;
  // })
  // const guitarArray = currArr.filter((item) => {
  //   return item.type == "Guitar";
  // })
  // const sortedArray = currArr.sort((a, b) => {
  //   return a.price - b.price;
  // })
  // const keyArray = currArr.map((item) => {
  //   return item.name;
  // })
  return (
    <div className="App">
      <h1>Music Shoppe</h1>
      {/* <header className="App-header">
      </header> */}
      <div class="criteria">
         
        <form id="filtering">
          <button type="reset" name="misc1" onClick={() => {setMisc("all"); setInst("clear"); stackFilters();}}>No filter</button>          
          <h2 class="miscName">Miscellaneous</h2>
          <label>
            <input type="radio" name="misc" onClick={() => {setMisc("acoustic"); stackFilters();}}/>
            Acoustic
          </label>
          <label>
            
            <input type="radio" name="misc" onClick={() => {setMisc("electric"); stackFilters();}}/>
            Electric
          </label>
          <label>
            
            <input type="radio" name="misc" onClick={() => {setMisc("price"); stackFilters();}}/>
            By Price
          </label>
          <h2>Instrument</h2>
          <label>
            <input type="radio" name="inst" onClick={() => {setInst("guitar"); stackFilters();}}/>
            Guitar
          </label>
          <label>
          <input type="radio" name="inst" onClick={() => {setInst("piano"); stackFilters();}}/>
            Piano
          </label>
          <label>
          <input type="radio" name="inst" onClick={() => {setInst("keyboard"); stackFilters();}}/>
            Keyboard
          </label>
          <label>
            
            <input type="radio" name="inst" onClick={() => {setInst("mic"); stackFilters();}}/>
            Microphone
          </label>
          <label>
            
            <input type="radio" name="inst" onClick={() => {setInst("synth"); stackFilters();}}/>
            Synth
          </label>
          <label>
            
            <input type="radio" name="inst" onClick={() => {setInst("theremin"); stackFilters();}}/>
            Theremin
          </label>
        </form>
      </div>
      <div class="instruments">
        {arr.map((item, index) => (
          <Inst item={item} key={index} cart={cart} updateCart={setCart} total={total} setTotal={setTotal}/>
        ))}
      </div>
      
      <div class="cart">
        <Cart cart={cart} total={total} setCart={setCart}/>
      </div>
    </div>
  );
}
// setCart(cart.splice(i, 1)); 
export default App;
