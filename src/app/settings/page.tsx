'use client'
import Todocard from "../component/todocard";
import TodoCheckbox from "../component/Todocheckbox";
export default function settings(){
    return(
        <div>
        <div className="w-[100%] h-[60px] bg-slate-900" >
            <span className="text-white inline-block">Settings</span>
        </div>
        <div className="block p-[8px]">
        <Todocard cardAction={()=>{alert("Redirecting")}}
            text={"Notification"}/>
             <Todocard cardAction={()=>{alert("Redirecting")}}
            text={"Edit Email"}/>
             <Todocard cardAction={()=>{alert("Done")}}
            text={"Export my task"}/>
            <TodoCheckbox checkAction={()=>{alert("Dark mode on")}} text={"Dark Mode"}/>
                </div>
        </div>
    )
}