import { Link } from "react-router-dom";

const CustomeCard = (props)=>{
    const {cardClass,cardImg, cardText,cardDesc,route,key}= props;

    const inner = (
        <>
                <div className="card-body">
                    <span className="card-text-transform">
                        <h4 className="card-text">{cardText}</h4>
                    </span>
                    <p>{cardDesc}</p>
                </div>
                <div className="imgContenaire">
                    <img src={process.env.PUBLIC_URL + cardImg} className="card-img-top cardimage" alt="..."/>
                </div>
        </>
    )
    return (

        <>
        <div className={cardClass}>
           {route ?  <Link to={route}>{inner}</Link> : route}
        </div>
        </>
    );
};

export default CustomeCard;