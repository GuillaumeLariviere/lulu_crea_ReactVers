
const CustomeOption =(props)=>{
    const {valeur, isColor} = props;

    return(
        <>
         <div className={isColor}>color</div>
            <option value={valeur} data-style="background-color: blue;">
               
                {valeur}
            </option>
        </>
    );

};

export default CustomeOption;