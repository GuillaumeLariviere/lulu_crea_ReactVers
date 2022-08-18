import { useParams } from "react-router-dom";
import { useState ,useEffect } from "react";
import { product_image, product_reference } from "../models";
import GenericForm from "../components/generics/GenericForm";
import "../style/commandProduct.css"
import GenericInput from "../components/generics/GenericInput";
import GenericSelect from "../components/generics/GenericSelect";




const CommandProduct = () =>{
    const{id} = useParams();
    const [product,setProduct] = useState([]);
    const [textileList,setTextileList]=useState([]);
    const [policeList,setPoliceList]=useState([]);
    const [motifList,setMotifList]=useState([]);
    const [motifColorList,setMotifColorList]=useState([]);
    const [textileColorList,seTextileColorList]=useState([]);
    const[colorList,setColorList]=useState([]);
    const [image,setImage] = useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            const product = (
                await(await fetch (`http://localhost:5000/product_reference/${id}?with=Product_image&with=Motif|Color&with=Textile|Color&with=Police&with=Color`)).json()
            );
            setImage(product.product_imageList[0]);
           
            setProduct(product);
            const motifs = [];
            const polices=[];
            const textiles=[];
            const colorTextiles=[];
            const colorMotifs=[];
            const colors=[];
            product.colorList.map(color=>{
                colors.push(color.color)
            })
            product.motifList.map(mot=>{
                motifs.push(mot.motif)
                mot.motif.colorList.map(ct=>{
                    colorMotifs.push(ct.color);
                })
            })
            product.policeList.map(po=>{
                polices.push(po.police)
            })
            product.textileList.map(tex=>{
                textiles.push(tex.textile)
                tex.textile.colorList.map(ct=>{
                    colorTextiles.push(ct.color);
                })
            })
            setMotifList(motifs);
            setPoliceList(polices);
            setTextileList(textiles);
            setColorList(colors);
            setMotifColorList(colorMotifs);
            seTextileColorList(colorTextiles);
        }
        fetchData().catch(console.error)
    },[]);
    const listeOptions =["option1","option2"];
    const img=image.img_path;
    console.log(img)
    return(
        <>
        <div className="content-fluid">
            <div className="row px-2">
                <div className="contentPage mt-1">
                    <div className="paddingcont">
                    <h1>{product.name}</h1>
                        <div className="d-flex">
                            <div className="col-3 p-3">
                                <img src={"."+img} className="d-block w-100 h-99 img-cmdPr" alt="" />
                            </div>
                            <div className="col-8">
                                <GenericForm endpoint="http://localhost5000/">
                                    <GenericInput className="mb-3 contentForm"
                                                    name="name"
                                                    labelText="Votre Nom"
                                                    required={true} />
                                    <div className="row">
                                        <div className="col-6">
                                        <GenericSelect name="textile"
                                                        listOption ={textileList}
                                                        labelText="selectionner le textile"
                                                        value ="coton" />
                                        </div>
                                        <div className="col-6">
                                        <GenericSelect isColor name="textile-Color"
                                                        listOption={textileColorList}
                                                        labelText="Couleur du textile"
                                                        />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                        <GenericSelect name="motif"
                                                        listOption ={motifList}
                                                        labelText="selectionner le motif"
                                                        value ="coton" />
                                        </div>
                                        <div className="col-6">
                                        <GenericSelect name="motif-Color"
                                                        listOption={motifColorList}
                                                        labelText="Couleur du motif"
                                                        />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                        <GenericSelect name="police"
                                                        listOption ={policeList}
                                                        labelText="selectionner la police"
                                                        value ="coton" />
                                        </div>
                                        <div className="col-6">
                                        <GenericSelect name="police-Color"
                                                        listOption={colorList}
                                                        labelText="Couleur de la police"
                                                        />
                                        </div>
                                    </div>
                                </GenericForm>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
};

export default CommandProduct;