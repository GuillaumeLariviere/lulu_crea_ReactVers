import { BaseModel } from "./baseModel.model.js";

export class Category extends BaseModel{

    constructor(props){
        super(props);
        this.assign(props);
        this.hasMany("Product");
    }
    
    name = "";
    img_path = "";

}