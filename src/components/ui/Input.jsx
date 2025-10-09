export default function Input({type,placeholder,...props}){
    return <input className="border border-slate-200 px-3 py-1 h-9 w-full rounded-md text-base shadow-xs outline-none 
    focus-visible:border-blue-500 focus-visible:ring-[2px] focus-visible-ring-blue-500/50 md:text-sm" 
    type={type} placeholder={placeholder} {...props}/>
}