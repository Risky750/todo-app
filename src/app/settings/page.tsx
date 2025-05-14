'use client'
import Todocard from "../component/todocard";
import TodoCheckbox from "../component/Todocheckbox";
export default function settings(){
    return(
        <div>
        <div className="w-[100%] h-[60px] bg-slate-900" >
            <span className="text-white inline-block">Settings</span>
        </div>
        <div className="m-[20px]">
        <Todocard cardAction={()=>{alert("Redirect")}}
            text={"Notification"}/>
             <Todocard cardAction={()=>{alert("Redirect")}}
            text={"Edit Email"}/>
             <Todocard cardAction={()=>{alert("Done")}}
            text={"Export my task"}/>
            <TodoCheckbox checkAction={()=>{alert("Dark mode on")}} text={"Dark Mode"}/>
                </div>
        </div>
    )
}