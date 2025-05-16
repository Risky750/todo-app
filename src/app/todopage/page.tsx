'use client'
import TodoInput from "../component/Todoinput"
import createTodo from "@/lib/todoapi"
import { todoItems } from "@/types/todo"
import { useState } from "react"
import TodoButton from "../component/Todobutton"
export default function todopage(){
    const [text, setText] = useState<string>("")
    const [date, setdate] = useState<string>("")
    const [time, setTime]= useState<string>("")
    return(
        <>
        <div>
            <nav className="w-[100%] h-[60px] bg-slate-900">
                <span>Task</span>
            </nav>
            <div className="relative left-[40%] right-[30%]">
            <TodoInput onchange={(e)=>{
                setText(e.target.value)
            }} text={"Task:"}/>
            <TodoInput onchange={(e)=>{setTime(e.target.value)}} text={"Time:"} />
                <TodoInput onchange={(e)=>{setdate(e.target.value)}} text={"Due date:"} />
                    <TodoButton btnAction={ ()=>{alert("submitted")
                    } } text={"submit"}/>
              </div>
        </div>
        </>
    )
}