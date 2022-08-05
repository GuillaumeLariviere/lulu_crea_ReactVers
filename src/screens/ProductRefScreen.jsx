import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { product_reference, product_image, category } from '../models/index';
import "../style/CustomeCard-Caroussel.css";
import CustomeCardMultiIgm from "../components/layouts/CustomeCardMultiImg";

const ProductRefScreen = () => {
    const [categories, setCategories] = useState([]);
    const [productRef,setProducRef] = useState([]);
    // const categoriesRef = useRef([]);
    // const productRef = useRef([]);
    // const imgProductsRef = useRef([]);

    function PairOrNot(itemNB) {
        if (itemNB % 2) {
            itemNB = '1';
            return itemNB;
        }
        else {
            itemNB = "2";
            return itemNB;
        }

    }

    useEffect(() => {
        const fetchData = async () => {
            const categories = (
                await (await fetch("http://localhost:5000/category")).json()
            );
         
            setCategories(categories);
            // const products = product_reference.from(
            //     await (await fetch("http://localhost:5000/product_reference")).json()
            // );
         

            // setProducts(products);
            // const imgProducts = product_image.from(
            //     await (await fetch("http://localhost:5000/product_image")).json()
            // );
            
            // setImgProducts(imgProducts);
                // console.log(imgProductListe);
                const productRef = (await(await fetch("http://localhost:5000/product_reference?with=Product_image")).json());
                setProducRef(productRef);
        }
        fetchData().catch(console.error);
    }, []);

    const productsListe = productRef;

    const imgProductListe = productRef;
    const categoriesListe = categories;


    return (
        <>
        <div className="row refColumn">
            {categoriesListe.map((category, i) => {
                return (
                    <>

                    <div className="contentPage mt-1">
                        <div className="paddingcont">
                            <h1 className="contactTitle">{category.name}</h1>
                            <div className="row">
                                {productsListe.map((product, i) => {
                                    if (product.category_id === category.id) {
                                        return (
                                            // console.log(imgProductListe[product.id-1])
                                            <div className="col-12 col-sm-6 col-mg-5 col-lg-4" key={product.id}>
                                                <CustomeCardMultiIgm cardClass={'card bg-color' + PairOrNot(i) + ' productRef'}
                                                    cardDesc={product.description}
                                                    cardImg={product.product_imageList}
                                                    cardText={product.name}
                                                    route={"/commandProduct/" + product.id}
                                                    idCaroussel = {product.id}
                                                />
                                            </div>
                                        );
                                    }
                                })}

                            </div>
                        </div>
                    </div>
                  
                    </>
                );
            })}
        </div>
        </>
    )

}
export default ProductRefScreen;