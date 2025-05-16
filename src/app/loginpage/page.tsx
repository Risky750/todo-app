'use client'
import TodoInput from "../component/Todoinput";
import { useState} from "react";
import createTodo from "@/lib/todoapi";
import createLog from "@/lib/todologapi";
import TodoButton from "../component/Todobutton";
 export default function lgnPage(){
    const [Username, setUsername] = useState<string>('')
    const [Password, setPassword] = useState<string>('')
    return(
        <div>
            <nav className="w-[100%] h-[60px] bg-gray-900">
                <span> Log In </span>
            </nav>
            <form className=" relative left-[40%] right-[40%] mt-2[">
                <TodoInput onchange={(e)=>{
                setUsername(e.target.value)}} 
                 text={"Username"}/>
                <TodoInput onchange={(e)=>{
                setPassword(e.target.value)}} 
                    text={"Password"}/>
               <TodoButton btnAction={()=>void("")}
                text={"submit "}/>
            </form>
        </div>
    )
 }