import React from "react";

interface InputProps{
    onchange:(e:any)=>void;
    text: string;
    
}
export default function TodoInput({onchange, text}:InputProps){
    return(
        <>
        <div>
            <label>{text}</label>
        <input onChange={onchange} type="text" className="block rounded-[5px] m-1 border-gray-000 border-[0.5px]"/>
        </div>
        </>
    )
}