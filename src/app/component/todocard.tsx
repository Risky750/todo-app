interface Cardprops{
    cardAction:()=>void;
    text:string;
}
export default function Todocard({cardAction, text}:Cardprops){
    return(
        <>
        <div className="m-[20px] h-[70px] w-[95%] outline-1 rounded-[10px] outline-slate-400 shadow-slate-400" onClick={cardAction}>
            <span>
                {text}
            </span>
        </div>
        </>
    )
}