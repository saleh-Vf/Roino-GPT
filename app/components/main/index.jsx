'use client'

import Intro from "Components/intro";
import ChatBox from 'Components/chatBox'
import Input from 'Components/InputMessage'
import Menu from "Components/menu";
import { useState,useEffect } from "react";


const Main = ()=>{
    const [status,set_status]=useState('flex');
    const [messages,set_messages] = useState("[]");
    
    function getStatus(result) {
        set_status(result)
    }

    return(
        <>
        <div className="h-full flex flex-col">
        <Menu/>
        <ChatBox status={status} messages={messages}/>
        <Intro display={status} handelDisplay={getStatus} messages={messages} set_messages={set_messages}/>
        
            
        </div>

        </>
    )
}

export default Main