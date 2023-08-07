 import productData from "./productData.json";
 
 export default function ProductList(){
    return(
        <>
    <img
      src={productData[0].honey[1].src}
          alt={productData[0].honey[1].alt}
          />
        </>
    )
 }