export default function Input({label, invalid, ...props}){
    let lebelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase";
    let inputClasses = "w-full px-3 py-2 leading-tight bg-stone-300 border rounded shadow";

    if(invalid){
        lebelClasses += ' text-red-400';
        inputClasses += ' text-red-500 bg-red-100 border-red-300';
    } else{
        lebelClasses += ' text-stone-300';
        inputClasses += ' text-gray-700  bg-stone-300';
    }

    return(
        <p>
            <label className={lebelClasses}>{label}</label>
            <input className={inputClasses} {...props}/>
        </p>
    );
}