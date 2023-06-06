import React,{useRef, useState} from "react";
import Input from "../Cart/Input";
import Button from "../Cart/Button/Button";

const MainForm = ()=>{
 
    // const [formInfo, setFormInfo] = useState([""]);
    // const name = useRef();
    // const discription = useRef();
    // const price = useRef();
    // const amount = useRef();


    const submitDataHandelr = (event) =>{
        event.preventDefault();
    
//    const NAME = name.current.value
//    const DISCRIPTION = discription.current.value;
//    const PRICE = price.current.value;
//    const AMOUNT = amount.current.value
//    setFormInfo({NAME,DISCRIPTION,PRICE,AMOUNT})
        
    }
    
    return (
       <div>
            <form >
                <Input
               
                label = "Medicine"
            input = {{
                //ref:{name},
                id:"name",
                name : 'name',
                type : "text"
            }}   
            />
                
                <Input 
                
                label="Discription"
                input = {{   
                    //ref:{discription},                
                    id:"info",
                    discription : 'discription',
                type : "text"
                }}/>

                <Input 
               
                label="Price"
                input = {{
                    //ref:{price},
                    id:"price",
                    price : 'price',
                type : "number"
                }}
                />

                <Input 
                
                label="Availabel amount"
                input = {{
                    //ref:{amount},
                    id:"amount",
                    amount : 'amount',
                type : "number"
                }}/>

                <Button onClick = {submitDataHandelr} >Add Product</Button>

            </form>

            {/* <div>
                <h1>{formInfo.NAME}</h1>
            </div> */}
            </div>

            
       
    )
}
export default MainForm;