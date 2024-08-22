"use client"
import Vectore from 'Icon/Vector.svg'
import {useEffect} from "react";
import Replay from './replay.jsx'
const ChatBox =(props)=>{
    useEffect(() => {
        document.getElementById("chatboxgpt").scrollTop = document.getElementById("chatboxgpt").scrollHeight;
    });
    return(
        <>
            <div id="chatboxgpt" className={"w-full h-full flex flex-col scroll-smooth	 transition-all overflow-y-scroll snap-end mb-[8px] px-4 rounded-[10px] " + (props.status == "flex"?"hidden":"flex")}>
                {JSON.parse(props.messages).map((item,index)=>{
                    return (
                        <>
                    <div className="lg:max-w-[48vw] relative max-w-[80vw] w-fit text-white px-5 py-3 bg-primary rounded-2xl my-2">
                        <div className='absolute -bottom-[1.8px] -right-[5.7px]'>
                        <Vectore/>
                    </div>
                        <p>{item.text}</p>
                    </div>
                        <Replay hour={item.hour} min={item.min}/>
                        </>
                    )

                })}
                
            </div>

            
        </>
    )
}
export default ChatBox