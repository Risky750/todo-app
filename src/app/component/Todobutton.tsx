interface BtnProps{
    btnAction:()=>void,
    text:string
}
export default function TodoButton({btnAction, text}:BtnProps){
    return(
        
        <button onClick={()=>btnAction} type="button" className="bg-slate-600 text-white m-1">{text}</button>
    )
}