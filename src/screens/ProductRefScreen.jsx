import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { product_reference, product_image, category } from '../models/index';
import "../style/CustomeCard-Caroussel.css";
import CustomeCardMultiIgm from "../components/layouts/CustomeCardMultiImg";

const ProductRefScreen = () => {
    const [products, setProducts] = useState([]);
    const [imgProducts, setImgProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const categoriesRef = useRef([]);
    const productRef = useRef([]);
    const imgProductsRef = useRef([]);

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
            const categories = category.from(
                await (await fetch("http://localhost:5000/category")).json()
            );
            categoriesRef.current = categories;
            setCategories(categories);
            const products = product_reference.from(
                await (await fetch("http://localhost:5000/product_reference")).json()
            );
            productRef.current = products;

            setProducts(products);
            if (products.length > 0) {
                products.forEach(async product => {
                    const imgProducts = product_image.from(
                        await (await fetch("http://localhost:5000/product_image")).json()
                    );
                    imgProductsRef.current = imgProducts.filter((img) => img.product_reference_id === +product.id);

                    setImgProducts(imgProducts);
                })



                console.log(imgProducts);
            }
        };
        fetchData().catch(console.error);
    }, []);

    const productsListe = productRef.current;
    const imgProductListe = imgProductsRef.current;
    const categoriesListe = categoriesRef.current;


    return (
        <>
            {categoriesListe.map((category, i) => {
                return (
                    <>
                    <div className="contentPage">
                        <div className="paddingcont">
                            <h1>{category.name}</h1>
                            <div className="row">
                                {productsListe.map((product, i) => {
                                    if (product.category_id === category.id) {
                                        return (
                                            <div className="col-12 col-sm-6 col-mg-5 col-lg-4" key={product.id}>
                                                <CustomeCardMultiIgm cardClass={'card bg-color' + PairOrNot(i) + ' productRef'}
                                                    cardDesc={product.description}
                                                    cardImg={imgProductListe}
                                                    cardText={product.name}
                                                    route={"/productsdetails/" + product.id}
                                                />
                                            </div>
                                        );
                                    }
                                })}

                            </div>
                        </div>
                    </div>
                    </>
                )
            })}

        </>
    )

}
export default ProductRefScreen;