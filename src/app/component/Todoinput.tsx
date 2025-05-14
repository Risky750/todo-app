import React from "react";

interface InputProps{
    onchange:()=>void;
    text: string;
    
}
export default function TodoInput({onchange, text}:InputProps){
    return(
        <>
        <div>
            <label>{text}</label>
        <input onChange={onchange} type="text" className="rounded-[10px] m-3 border-gray-500 border-[0.5px] p-2"/>
        </div>
        </>
    )
}