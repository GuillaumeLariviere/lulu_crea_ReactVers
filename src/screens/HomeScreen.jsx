import CustomeCard from "../components/layouts/CustomeCard";
import "../style/CustomeCard-Caroussel.css"
import { useEffect, useState } from "react";
import CustomeCaroussel from "../components/layouts/CustomeCaroussel";
import { product } from "../models/index";

const HomeScreen = () => {
   
function PairOrNot(itemNB){
    if(itemNB % 2 ){
      itemNB='1';
      return itemNB;
    }
    else {
      itemNB="2";
      return itemNB;
    }
  
}

const [products, setProducts] = useState([]);

useEffect(()=>{
    const fetchData = async ()=> {
        let data = (await (await fetch("http://localhost:5000/product?with=Product_image")).json());
        // let data = (await( await fetch('http://localhost:5000/category?with=Product_reference')
        // .then((resp) => resp.text())
        // .then((text) => JSON.parse(text))));
    
        setProducts(data);
    };
    fetchData().catch(console.error);

},[]);
console.log(products);
    return (
        <>
            <div className="row">
                <div className="col-12 MonCarouselContainer">
                    <CustomeCaroussel carouselImg1="./assets/img/BBGJJH.jpg"
                                    carouselImg2="./assets/img/BBHmyj.jpg"
                                    carouselImg3="./assets/img/BBIcl9.jpg"
                    />
                </div>
            </div>
            <div className="row">
                {products.map((product,i)=>{
                return (
                <div className="col-12 col-sm-6 col-mg-5 col-lg-4"  key ={product.id}>
                         <CustomeCard cardClass={'card bg-color'+PairOrNot(i)}
                                 cardDesc ={product.description}
                                 cardImg ={product.product_imageList[0].img_path}
                                 cardText={product.name}
                                 route ={"/productsdetails/"+product.id}
                                />
                </div>
                );
               })}

            </div>
        </>
    );
}

export default HomeScreen;