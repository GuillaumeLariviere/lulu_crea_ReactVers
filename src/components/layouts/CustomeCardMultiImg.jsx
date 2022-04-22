import { Link } from "react-router-dom";

const CustomeCardMultiIgm = (props) => {
    const { cardClass, cardImg, cardText, cardDesc, route, key } = props;
    let count=0;


    return (

        <>
            
            <div className={cardClass}>
                <div className="card-body">
                    <span className="card-text-transform">
                        <h4 className="card-text">{cardText}</h4>
                    </span>
                    <p>{cardDesc}</p>
                </div>
                
                    <div id="myCardCarousel" className=" imgContenaire carousel slide d-flex" data-bs-ride="carousel">
                        <div className="carousel-inner">
                        {cardImg.map((img)=>{
                            count ++;
                            return (
                                <div className={count ===1 ? "carousel-item active":"carousel-item"}>
                                    <img src={process.env.PUBLIC_URL + "."+img.img_path} className="d-block w-100" alt="..."/>
                                </div>
                            );
                        })} 
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#myCardCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#myCardCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="button-container">
                        <button type="button" className="btn btn-command">commander ce produit</button>
                    </div>
                </div>

           
        </>
    );
};

export default CustomeCardMultiIgm;