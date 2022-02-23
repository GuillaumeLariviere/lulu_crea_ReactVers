import GenericForm from "../components/generics/GenericForm";
import GenericInput from "../components/generics/GenericInput";

const ContactScreen = () =>{

    return(
        <>
        <GenericForm endpoint={'http://localhost:5000/'}
                submitButtonText={"envoyer"}
                callback={handleSubmit}
                validation={true}>
            <GenericInput className="mb-3"
                    name="email"
                    type="email"
                    labelText="Adresse mail"
                    required={true}
                    pattern={'^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'}
                    invalidText="Saisr un email valide" />
            <GenericInput className="mb-3"
                    onBlur ={checkPasswords}
                    name="password"
                    type="password"
                    labelText="Password"
                    required={true}
                    invalidText="Saisr un mot de passe valide"/>
            <GenericInput className="mb-3"
                    onBlur ={checkPasswords}
                    name="password"
                    type="password"
                    labelText="Password"
                    required={true}
                    invalidText="Saisr un mot de passe valide"/>
        </GenericForm>
        </>
    )
}
export default ContactScreen;