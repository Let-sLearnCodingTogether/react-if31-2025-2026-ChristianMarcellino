import Logo from "../../../../assets/components/logo/Logo";

export default function Login(){
    return <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
    <div className="hidden bg-image p-5 md:block">
        <div className="flex flex-col justify-between">
            <div className="flex items-center space-x-3">
                <Logo />
                <div className="font-semibold text-2xl text-white tracking-tight">
                    Wawan Ohim
                </div>
            </div>
            <div className="top-0 font-semibold text-center text-white">
                &copy; 2025 Wawan Ohim : Class IF31 Project
            </div>
         </div>
    </div>
    <div className="flex items-center justify-center">
        Right
    </div>
</div>    

}