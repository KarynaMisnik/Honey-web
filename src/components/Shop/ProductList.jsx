 import productData from "./productData.json";
 
 export default function ProductList(){
    return(
        <>
    <img
      src={productData[0].honey[0].src}
          alt={productData[0].honey[0].alt}
          />
        </>
    )
 }