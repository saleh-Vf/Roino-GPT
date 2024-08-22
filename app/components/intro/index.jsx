"use client"

import GptIcon from 'Image/intro/gpt.png';
import Image from "next/image";
import InputMessage from "Components/InputMessage/index";
import { useEffect, useState } from 'react';

const texts = [
    {
        small:"پاسخ همه ی سوالات شما",
        title:"( هر چیزی که دوس داری ازم بپرس)"
    },
    {
        small:"پاسخ همه ی سوالات شما",
        title:"( هر چیزی که دوس داری ازم بپرس)"
    },
    {
        small:"پاسخ همه ی سوالات شما",
        title:"( هر چیزی که دوس داری ازم بپرس)"
    },
]


const Box  = (props)=>{
    return(
        <>
            <div className='bg-gray-300 rounded-xl text-center text-gray shadow-xl py-3 px-12'>
                <small>{props.small}</small>
                <p>{props.title}</p>
            </div>
        </>
    )
}

const Intro =(props)=>{ 
    console.log("is Set state")
    return(
        <> 
        <div className={"w-full flex flex-col justify-center items-center  " + (props.display=="flex"?"h-full overflow-y-scroll":"h-fit")}>
            <div className={'flex flex-col justify-center items-center w-full  h-full gap-3 ' + props.display}>
                <div className='w-full flex flex-col justify-center items-center '>
                    <Image src={GptIcon} alt='ROINO GPT'/>
                    <p className='font-bold text-gray mt-2'>ROINO GPT</p>
                </div>
                <div className='flex flex-wrap justify-center items-center gap-5'>
                    {
                        texts.map(
                            item=>{
                                return <Box small={item.small} title={item.title} />
                            }
                        )
                    }
                </div>
                <div>
                    <p className='text-gray mt-3 text-center'>اینها نمونه هایی برای اینکه بدونید چطور از برنامه بهره ببرید.</p>
                </div>
            </div>
            <InputMessage handelDisplay={props.handelDisplay} messages={props.messages} display={props.display} set_messages={props.set_messages} />
        </div>
        </>
    )
}

export default Intro