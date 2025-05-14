interface BtnProps{
    btnAction:()=>void,
    text:string
}
export default function TodoButton({btnAction, text}:BtnProps){
    return(
        
        <button onClick={()=>btnAction} type="button">{text}</button>
    )
}