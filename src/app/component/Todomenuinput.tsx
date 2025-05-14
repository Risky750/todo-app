
export type option={
    value: string;
    title:string;
}
interface InputProps{
    onchange:()=>void;
    text: string;
    options:option[]
}
export default function TodomenuInput({onchange, text,options}:InputProps){
    return(
        <>
        <div>
            <label>{text}</label>
        <select onChange={onchange}  className=" ml-2 rounded-[10px] border-gray-500 border-[0.5px] p-2">
            {options.map((val, index)=>(
                <option value={val.value} key={index}>
                    {val.title}
                </option>
            ))}
            </select>
        </div>
        </>
    )
}