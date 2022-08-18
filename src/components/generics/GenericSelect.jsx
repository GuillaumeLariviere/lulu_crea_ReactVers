import CustomeOption from "../layouts/CustomeOption";

const GenericSelect = (props) => {
    if(!props.name){
        throw new Error("props.name not set");
    };

    const { 
        labelText ="",
        name,
        value ,
        listOption,
        required,
        pattern,
        ...rest
    } = props;

    return (
        <>
            <div {...rest}>
            <label for={name}>{labelText}</label>
                <select id={name}>
                 
                    {listOption?.map((val)=>{
                      return(  <CustomeOption valeur = {val.name}
                                            isColor = "color-Select"
                      />
                      ) })}
                </select>
            </div>
        </>
    );
};
export default GenericSelect;