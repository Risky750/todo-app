interface CheckProps{
    checkAction:()=> void;
    text:string
}
export default function TodoCheckbox({ checkAction, text}:CheckProps){
    return(
        <div>
            <input type="checkbox" name="newsletter" onChange={checkAction}/>
            <span>{text}</span>
        </div>
    )
}