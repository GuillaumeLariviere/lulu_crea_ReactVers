const GenericInput = (props) => {
    if(!props.name){
        throw new Error("props.name not set");
    };

    const { 
        labelText ="",
        type ="text", 
        name,
        value ,
        invalidText="saisie invalide",
        required,
        pattern,
        ...rest
    } = props;

    return (
        <>
            <div {...rest}>
                <label htmlFor={name} className="form-label">
                    {labelText}
                </label>
                <input
                    type={type}
                    className="form-control"
                    id={name +type.capitalize()+"Input"}
                    name={name}
                    required={required}
                    patterne={pattern}
                    defaultValue ={value}
                />
                <div className="invalid-feedback">{invalidText}</div>
            </div>
        </>
    );
};
export default GenericInput;