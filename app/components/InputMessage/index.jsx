"use client"
import SendIcon from "Icon/Send.svg";
import Image from "next/image";
import { useState } from "react";
const InputMessage = (props)=>{
    const [text_input,set_text_input] = useState("");
    const [buttonStatus,set_buttonStatus] = useState(true)
    const [buttonColor,set_buttonColor] = useState("bg-[#7d8cfd]")
    function onSendHandle(){
        if(!buttonStatus){
            var messages_list = JSON.parse(props.messages);
        
            messages_list.push({text:text_input , hour:new Date().getHours(),min:new Date().getMinutes()}); 
            
            props.set_messages(JSON.stringify(messages_list))
            
            props.handelDisplay("hidden")
            set_text_input("")
            
            set_buttonStatus(true)
            set_buttonColor("bg-[#7d8cfd]")
            console.log(props.messages)
        }
        
    }
    function checkValue(element) {
        let value =element.target.value;
        if (value.trim().length !== 0) {
            set_buttonStatus(false)
            set_buttonColor("bg-primary")
        }
        else{
            set_buttonStatus(true)
            set_buttonColor("bg-[#7d8cfd]")
        }
    }
    return (
        <div className="flex flex-row lg:px-[120px] md:px-[77px] px-[15px]  pb-[15px] gap-[14px] w-full flex-1 outline-none">
            <button disabled={buttonStatus} onClick={onSendHandle} className={"transition-all duration-500 cursor-pointer rounded-[14px] drop-shadow-2xl flex items-center justify-center px-[10px] py-[10px] "+buttonColor}>
                <div className="w-[28px] h-[28px]">
                    <SendIcon />
                </div>
                
            </button>
            <input onChange={(e)=>{set_text_input(e.currentTarget.value);checkValue(e)}} value={text_input} type="text" placeholder="سوال خود را وارد نمایید ..." className="w-full rounded-[14px] px-[15px] py-[10px] border-[0.5px] border-[#455BF6] opacity-[0.5] focus:opacity-[1] !outline-none focus:ring-0 bg-[#E1E3E67A] drop-shadow-xl hover:drop-shadow-2xl transition-all duration-500"></input>
            
        </div>
    )
}

export default InputMessage