interface BtnProps{
    onclick:()=> void
    text:string
}
export default function TodoRadButton({onclick, text, }:BtnProps){
    return(
        <>
        <button onClick={onclick} type="reset">{text}</button>
        </>
    )
}