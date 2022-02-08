import { BaseModel } from "./baseModel.model.js";

export class Product extends BaseModel{

    constructor(props){
        super(props);
        this.assign(props);
        this.hasOne("Category").hasOne("Gender")
        .hasManyThrough("Command","Command_product");
    }

    name = "";
    price = 0;
    description = "";
    img_path = "";
    category_id = 0;
    gender_id = 0;

}