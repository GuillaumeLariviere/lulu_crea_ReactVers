import { useContext } from "react";
import { AuthContext} from "../contexts/authContext";

const AccountScreen = (props) =>{
    const {auth} = useContext(AuthContext)
    return(
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