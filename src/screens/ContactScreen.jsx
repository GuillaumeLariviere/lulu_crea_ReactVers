import GenericForm from "../components/generics/GenericForm";
import GenericInput from "../components/generics/GenericInput";
import '../style/ContactForm.css'
import { ImLocation2, ImPhone } from "react-icons/im";
import { SiMaildotru } from "react-icons/si";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

const ContactScreen = () => {

    const {auth} =useContext(AuthContext)
    
    return (
        <>

            <div className="row contactRow">
                <div className="col-6 leftColumn">
                    <div className="col-12">
                        <div className="contentPage">
                            <div className="paddingcont">
                                <h1 className="contactTitle">Me contacter</h1>
                                <div className="contactData">
                                    <h5 className=''><span className="iconSp"><i className="iconForm"><ImLocation2 /></i></span> Adresse</h5>
                                    <div className="infoForm">
                                        530 rue du Chêne Crupeau, 59230 Saint-Amand-les-Eaux
                                    </div>
                                    <h5 className=''><span className="iconSp"><i className="iconForm"><ImPhone /></i></span> Tel</h5>
                                    <div className="infoForm">
                                        06.76.45.29.01
                                    </div>
                                    <h5 className=''><span className="iconSp"><i className="iconForm"><SiMaildotru /></i></span> Mail</h5>
                                    <div className="infoForm">
                                        lmilliez200@gmail.com
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="contentPage">
                            <div className="paddingcont">
                                <h1 className="contactTitle">Par Messages</h1>
                                <GenericForm endpoint="http://localhost5000/send">
                                    <GenericInput className="mb-3 contentForm"
                                        name="email"
                                        type="email"
                                        value={auth&&(
                                            auth.email
                                        )}
                                        labelText="Adresse mail"
                                        required={true}
                                        pattern={'^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'}
                                        invalidText="Saisr un email valide" />
                                    <GenericInput className="mb-3 contentForm"
                                        name="name"
                                        labelText="Votre Nom"
                                        required={true} />

                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">
                                            Message
                                        </label>
                                        <textarea required
                                            className="form-control"
                                            id="message"
                                            name="message"
                                            rows="5"
                                        ></textarea>
                                        <div className="invalid-feedback">Saisir un message</div>
                                    </div>
                                </GenericForm>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 rightColumn">
                    <div className="contentPage">
                        <div className="contentMap">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.0002567030956!2d3.448548615697478!3d50.441095879474055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2e8c7ff5bb553%3A0x3c7817809f76a773!2s530%20Rue%20du%20Ch%C3%AAne%20Crupeau%2C%2059230%20Saint-Amand-les-Eaux!5e0!3m2!1sfr!2sfr!4v1638277249268!5m2!1sfr!2sfr" allowFullScreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ContactScreen;