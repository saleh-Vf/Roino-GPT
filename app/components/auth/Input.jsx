import {RiEyeLine,RiEyeOffLine} from "react-icons/ri"
import { useState } from "react";
import Image from "next/image";
export default function Input({type,placeholder,icon}) {
    const [eye,Seteye] = useState(<RiEyeOffLine/>);
    const [inputType,setInputType] = useState(type);

    return(
    <div className="flex items-center gap-2 bg-main px-2 rounded-lg w-11/12 sm:w-2/3" >

        <label className='py-2' htmlFor={type}>
        <Image src={icon}/>
        </label>
        <input id={type} className="outline-0 bg-main w-11/12 h-full" type={inputType} placeholder={placeholder}/>
        <i  onClick={changeIcon} className={` ${ type=="password"?"block":"hidden"} text-primary cursor-pointer`} >
            {eye}
        </i>

    </div>
    );
    function changeIcon() {
        
        if (eye.type.name == "RiEyeOffLine") {
            Seteye(<RiEyeLine/>);
            setInputType("text")
        }
        else{
            Seteye(<RiEyeOffLine/>)
            setInputType("password")

        }
    }
};
