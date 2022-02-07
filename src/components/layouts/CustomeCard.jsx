import { Link } from "react-router-dom";

const CustomeCard = (props)=>{
    const {cardClass,cardImg, cardText,cardDesc, handleClick,route}= props;
    return (

        <>
        <Link className="col-12 col-sm-6 col-mg-5 col-lg-4"  to="/ContactScreen">
            <div className={cardClass}>
                <div className="card-body">
                    <span className="card-text-transform">
                        <h4 className="card-text">{cardText}</h4>
                    </span>
                    <p>{cardDesc}</p>
                </div>
                <div className="imgContenaire">
                    <img src={process.env.PUBLIC_URL + cardImg} className="card-img-top cardimage" alt="..."/>
                </div>
            </div>
        </Link>
        </>
    );
};

export default CustomeCard;