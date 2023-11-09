import { Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";

export default function Shop(){
    return(
   <div style={{width:'100%',height:'auto', backgroundImage: 'linear-gradient(to top, #fbe386, #fce58c, #fde792, #fde897, #feea9d, #ffe7aa, #ffe6b8, #ffe5c5, #ffe7dc, #ffeef2, #fff7fe, #ffeca4)'}}>
          <ProductList/>
      </div>
    )
}

