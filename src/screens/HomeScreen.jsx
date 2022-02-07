import CustomeCard from "../components/layouts/CustomeCard";
import "../style/CustomeCard-Caroussel.css"

const HomeScreen = () => {

    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 MonCarouselContainer">

                </div>
            </div>
            <div className="row">
            <CustomeCard cardClass={'card bg-color1'}
                    cardDesc ={"une Description"}
                    cardImg = {"Category.img_path"}
                    cardText={"Category.name"}/>

        <CustomeCard cardClass={'card bg-color1'}
                    cardDesc ={"une Description"}
                    cardImg = {"Category.img_path"}
                    cardText={"Category.name"}/>

        <CustomeCard cardClass={'card bg-color1'}
                    cardDesc ={"une Description"}
                    cardImg = {"Category.img_path"}
                    cardText={"Category.name"}/>

        <CustomeCard cardClass={'card bg-color1'}
                    cardDesc ={"une Description"}
                    cardImg = {"Category.img_path"}
                    cardText={"Category.name"}/>

        <CustomeCard cardClass={'card bg-color1'}
                    cardDesc ={"une Description"}
                    cardImg = {"Category.img_path"}
                    cardText={"Category.name"}/>

        <CustomeCard cardClass={'card bg-color1'}
                    cardDesc ={"une Description"}
                    cardImg = {"Category.img_path"}
                    cardText={"Category.name"}/>
            </div>
            
         </div>
 

       
        </>
    );
}

export default HomeScreen;