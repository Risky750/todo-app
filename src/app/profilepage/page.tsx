'use client'
import TodoInput from "../component/Todoinput";
import TodoButton from "../component/Todobutton";
import TodoRadButton from "../component/TodoradBtn";
import TodomenuInput, { option } from "../component/Todomenuinput";
export default function Profile(){

    const contries:option[] =[{
        value:'Nigeria',
        title:"nigeria"
     },{
value:'Cameroon',
        title:"cameroon"
     }]
return(
    <div>
        <nav className="w-[100%] h-[60px] m-0 bg-slate-900">
            <TodoButton  text="menu" btnAction={(()=>{
                alert('hello')
            })}/>
                <ul className=" text-white">
            <li className="p-2 inline"><a href="#">Task</a></li>
   <li className="p-2 inline"><a href="#">profile</a></li>
   <li className="p-2 inline"><a href="#">settings</a></li>
            </ul>
        </nav>
       <div className="block">
           <TodoInput  onchange={()=>void("")}text={"Name:"}/>
           <TodoInput onchange={()=>void("")}text={"Age:"} />
           <TodoInput onchange={()=>void("")}text={"Phone Number:"} />
           <TodoInput onchange={()=>void("")}text={"Email:"} />
        </div>
<TodomenuInput onchange={()=>void("")}
        text={"countries"} options={contries}/>

    </div>
)
}