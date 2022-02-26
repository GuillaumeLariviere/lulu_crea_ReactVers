import GenericForm from "../components/generics/GenericForm";
import GenericInput from "../components/generics/GenericInput";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import React, { useContext, useEffect } from "react";
import {AuthContext} from '../contexts/authContext'
import {Link, useNavigate} from "react-router-dom";

const LogAndRegScreen = (props) => {
    const {auth , setAuth} = useContext(AuthContext)
    const navigate = useNavigate();
    useEffect(() => {
        {props.isRegister&&(
            loadCaptchaEnginge(2)
        )};
        
    })
    const handleSubmit = async (evt,response)=>{
        const text = await response.text();
        const data = text.toJson();
        if (props.isLogin){
            if(data.completed){
                document.cookie =`auth=${data.cookie}; max-age=${60*60*24}`;
                setAuth(data);
                navigate('/')
            }
            else{
                document.cookie=`auth=null;max-age=0`;
            }
        }

    }
    return (
        <>
        <div className="contentPage mt-3">
            <div className="paddingcont">
                <h1>{props.isLogin ? "Se Connecter" : "Créer un compte"}</h1>
                <GenericForm endpoint={'http://localhost:5000/auth/' + (props.isLogin ? "login" : "register")} 
                            callback={handleSubmit}
                >
                    <GenericInput className="mb-3"
                        name="email"
                        type="email"
                        labelText="Adresse mail"
                        required={true}
                        pattern={'^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'}
                        invalidText="Saisr un email valide" />
                    <GenericInput className="mb-3"
                        name="password"
                        type="password"
                        labelText="Password"
                        required={true}
                        invalidText="Saisr un mot de passe valide" />
                    {props.isRegister && (
                    <>
                        <GenericInput className="mb-3"
                            name="password_confirm"
                            type="password"
                            labelText="Confirm Password"
                            required={true}
                            invalidText="Saisr un mot de passe identique" />
                            
                        <div>
                            <LoadCanvasTemplateNoReload />
                        </div>
                        <GenericInput className="mb-3"
                            name="user_captcha_validate"
                            type="text"
                            labelText=""
                            required={true}
                            invalidText="captcha no match" />
                    </>
                    )}



                </GenericForm>
                <div style={{ postion: "relative", top: -40, letf: 90 }} className={props.isLogin && "ms-4"}>
                    {props.isLogin ? (
                        <>
                            <Link className="nav-link" to="/register"> créer un compte</Link>
                            <Link className="nav-link" to="/renewpass"> mot de passe oublier?</Link>
                        </>
                    ) : (
                        <Link className="nav-link" to="/login">deja un compte ? se connecter</Link>
                    )}
 
                </div>
            </div>
        </div>

        </>
    );
};

export default LogAndRegScreen;