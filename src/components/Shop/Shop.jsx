import { Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";

export default function Shop(){
    return(
   <div style={{width:'100%',height:'auto', background:'var(--light-yellow)'}}>
          <ProductList/>
      </div>
    )
}

