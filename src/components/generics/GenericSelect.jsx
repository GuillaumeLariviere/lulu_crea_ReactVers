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
                  {props.isColor && ( 
                    <span className="color-Select"></span>
                  )} 
                    {listOption?.map((val)=>{
                      return  <option value={val.name}>{val.name}</option>
                    })}
                </select>
            </div>
        </>
    );
};
export default GenericSelect;