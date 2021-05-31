import React ,{useState,useEffect}from 'react';
import styled from 'styled-components';

function App() {
 const [items,setitems] = useState([]);
 useEffect(async()=>{
   const data = await fetch('https://fakestoreapi.com/products');
   const result = await data.json();
   console.log(result);
 })
  return (
     <div>
       <h1>Hello world!</h1>
     </div>
  );
}

export default App;
