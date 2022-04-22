import CustomeCard from "../components/layouts/CustomeCard";
import "../style/CustomeCard-Caroussel.css"
import { useEffect, useState } from "react";
import CustomeCaroussel from "../components/layouts/CustomeCaroussel";
import { category } from "../models/index";

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

const [categories, setCategories] = useState([]);

useEffect(()=>{
    const fetchData = async ()=> {
        let data = category.from(await (await fetch("http://localhost:5000/category")).json());
        setCategories(data);
    };
    fetchData().catch(console.error);

},[]);
console.log(categories);
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
                {categories.map((category,i)=>{
                return (
                <div className="col-12 col-sm-6 col-mg-5 col-lg-4"  key ={category.id}>
                         <CustomeCard cardClass={'card bg-color'+PairOrNot(i)}
                                 cardDesc ={category.description}
                                 cardImg = {category.img_path}
                                 cardText={category.name}
                                 route ={"/productsdetails/"+category.id}
                                />
                </div>
                );
               })}

            </div>
        </>
    );
}

export default HomeScreen;