'use client'
import { useState } from "react";
import TodoInput from "../component/Todoinput";
import TodoButton from "../component/Todobutton";
import TodoRadButton from "../component/TodoradBtn";
import TodomenuInput, { option } from "../component/Todomenuinput";
import TodoCheckbox from "../component/Todocheckbox";
export default function Profile(){


    const contries:option[] =[{
        value:'Nigeria',
        title:"Nigeria"},
        {value:'Cameroon',
        title:"Cameroon"},
    {value:'Togo',
        title:"Togo"
    },{value:'Ghana',
        title:"Ghana" }]
return(
    <div>
        <nav className="w-[100%] h-[60px] m-0 bg-slate-900 inline-block">
            <TodoButton  text="menu" btnAction={(()=>{
                alert('hello')
            })}/>
                <ul className=" text-white">
            <li className="p-2 inline"><a href="#">Task</a></li>
   <li className="p-2 inline"><a href="#">profile</a></li>
   <li className="p-2 inline"><a href="#">settings</a></li>
            </ul>
        </nav>
        <form className="block m-2 relative left-[30%] right-[30%] top-[40px] p-2">
       <div className="block">
           <TodoInput  onchange={()=>void("")}text={"Name:"}/>
           <TodoInput onchange={()=>void("")}text={"Age:"} />
           <TodoInput onchange={()=>void("")}text={"Phone:"} />
           <TodoInput onchange={()=>void("")}text={"Email:"} />
        </div>
<TodomenuInput onchange={()=>void("")}
        text={"countries"} options={contries}/>
        <TodoCheckbox checkAction={()=>void("")}text={"Subscribe to newsletter"} />
            <TodoButton btnAction={()=>void("")} text={"submit"}/>
    </form>
    </div>
)
}