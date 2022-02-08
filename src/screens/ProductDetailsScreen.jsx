import { useEffect,useRef ,useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from '../models/product.model';

const ProductDetailsScreen =() =>{
    const[products , setProducts] = useState([]);
    const {id} = useParams();
    const productRef = useRef([]);
    
    useEffect(() =>{
        const fetchData = async () =>{
            const products = Product.from(
                await(await fetch("/data/products.json")).json()
            );
            productRef.current = products.filter((prod) => prod.category_id === +id);

            setProducts(products);
        };
        fetchData().catch(console.error);
    },[id]);

    const productsListe=productRef.current;

    return (
        <>
           {productsListe.map(product=> {

               return <h1>{product.name}</h1>
           })}
        </>
    )

}
export default ProductDetailsScreen;