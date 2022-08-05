import {AiTwotoneStar} from "react-icons/ai";
import { FaShoppingBasket,FaSignInAlt,FaUserAlt } from "react-icons/fa";
import {Link} from "react-router-dom"
import { AuthContext } from '../../contexts/authContext';
import React, { useContext,useState,useEffect } from "react";
import { category } from "../../models/index";





const CustomeNav = () =>{
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        const fetchData = async ()=> {
            let data = category.from(await (await fetch("http://localhost:5000/category")).json());
            setCategories(data);
        };
        fetchData().catch(console.error);
    
    },[]);
    const {auth} = useContext(AuthContext);
    return (
        <>
        <nav className="navbar navbar-light navbar-expand-lg bg-light">
            <div className="container-fluid">
                <div className="col-3">
                    <Link className="navbar-brand" to="/">LuLu<i className="logostars"><AiTwotoneStar /></i>Crea</Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <Link className="offcanvas-title" to="/"><h5  id="offcanvasNavbarLabel" >LuLu<i className="logostars"><AiTwotoneStar /></i>Crea</h5></Link>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="col-10 col-lg-9 col-mg-8">
                            <ul className="navbar-nav flex-grow-1">
                                <li className="nav-item nav-menu">
                                    <Link className="nav-link" aria-current="page" to="/contact"><span>Contact Page</span></Link>
                                </li>
                                <li className="nav-item nav-menu">
                                    <Link className="nav-link" to="/productsReference">Nos Produits Réferences</Link>
                                </li>
                                <li className="nav-item dropdown nav-menu">
                                    <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Boutique
                                    </span>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {categories.map((category)=>{
                                            return (
                                            <>
                                            <Link className ="dropMenuLink" to ="/">
                                             <div className="dropDownContentLink">
                                                {category.name}
                                            </div>
                                            </Link>
                                            </>
                                            );
                                        })}
                                    </ul>
                                </li>
                                <li className="nav-item nav-menu ">
                                    <Link className="nav-link" to="/LuLuCestQui">LuLu c'est qui ?</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <ul className="navbar-nav">
                                <li className="nav-item iconNav">
                                    <Link className="nav-link" to="/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="votre panier"><FaShoppingBasket/></Link>
                                </li>
                                {auth.role === 0 &&(
                                <li className="nav-item iconNav">
                                    <Link className="nav-link" to="/login" data-bs-toggle="tooltip" data-bs-placement="bottom-start" title="Se connecter"><FaSignInAlt/></Link>
                                </li>
                                )}

                                {auth.role > 0 && (
                                <>
                                <li className="nav-item dropdown">
                                    <span className="nav-link dropdown-toggle ConnectLogo" id="navbarDropdown " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                       <FaUserAlt/>
                                    </span>
                                    <ul className="dropdown-menu connectIcon" aria-labelledby="navbarDropdown">
                                     
                                            <li><Link className="dropdown-item Connecte" to="/account" >Mon compte</Link></li>
                                            <li><Link className="dropdown-item Connecte" to="/logout">Deconnexion</Link></li>
                                    </ul>
                                </li>
                                </>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}
export default CustomeNav