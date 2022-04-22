import { useEffect, useState ,useContext } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { AuthContext} from "../contexts/authContext";

const AccountScreen = (props) =>{
    const {auth} = useContext(AuthContext);

    const[searchParams] = useSearchParams();
    const token = searchParams.get("t");
    const{id} =useParams();

    const [message , setMessage] =useState(null);
    const [app_user, setApp_user] =useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
          if (props.toValidate){
          const response = await fetch("http://localhost:5000/auth/validate", {
            method: "post",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ token }),
          });
          const text = await response.text();
          const data = await text.toJson();
          setMessage({
            color: data.completed ? "alert-success" : "alert-danger",
            text: data.message,
          });
          if (data.completed) {
            setTimeout(() => navigate("/login"), 4000);
            // document
            //   .querySelector(".alert")
            //   .addEventListener("closed.bs.alert", function () {
            //     navigate("/login");
            //   });
          }
        }
        else {
          const data = 
          await (await fetch(`http://localhost:5000/app_user/${id}`,{method:"get"})).json();
  
        setApp_user(data);

        }
    }
    fetchData().catch(console.error);
  },[]);
  

    return(
        //TODO validate accout and redirect to account
        <>
        {props.toValidate && (
            <h1>Validate account Page</h1>
        )}
        {props.isRenew &&(
            <h1>Renew password page</h1>
        )}
        {props.yourAcc &&(
            <>
            <h1>Your account page</h1>
            <div>{auth.email}</div>
            </>
        )}
            
        </>
    );
};

export default AccountScreen;