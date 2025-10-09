import Logo from "@components/logo/Logo";
import Input from "@components/ui/Input";
import { useState } from "react";
import http from "../../../../api/apiClient";

export default function Login(){
    const[form, setForm] = useState({
        email: "",
        password:"",
    })

    const[spot, setSpots] = useState({})

    const handleFormChange = (e) => {
        const {name, value} = e.target

        setForm({
            ...form,  //mengambil form dari state
            [name] : value
        })
    }
    const fetchSpots = async()=>{
        const response = await http.get("/spot")
        console.log(response.data.data.data)
        setSpots(response.data.data.data)
    }

    const handleLogin = async (e) =>{
        e.preventDefault();

        // const response = await http.post("/login", {
        //     email : form.email,
        //     password: form.password,
        // }) // atau

        const response = await http.post("/login", form)
        console.log(response)
        if(response.status == 200){
            sessionStorage.setItem("token", response.data.token)
            fetchSpots()
        }
    }    

    return <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
    <div className="hidden bg-image p-5 md:block">
        <div className="flex h-full flex-col justify-between">
            <div className="flex items-center space-x-3">
                <Logo />
                
                <div className="font-semibold text-2xl text-white tracking-tight">
                    Wawan Ohim
                </div>
            </div>
            <div className="font-semibold text-center text-white">
                &copy; 2025 Wawan Ohim : Class IF31 Project
            </div>
        </div>
    </div>
    <div className="flex items-center justify-center ">
        <form onSubmit={handleLogin} className="border border-slate-500 rounded-2xl p-3 w-[50%]">
            {JSON.stringify(form)}
            <div>
                <h1 className="text-2xl mb-2">Login Form</h1>
                <hr />
                <div className="flex flex-col gap-y-2 font-semibold">
                    <div className="space-y-1.5">
                        <label htmlFor="email">Email</label>
                        <Input onChange={handleFormChange} name="email" type="email" value={form.email} placeholder="example@example.com"></Input>
                    </div> 
                    <div className="space-y-1.5">
                        <label htmlFor="password">Password</label>
                        <Input onChange={handleFormChange} name="password" type="password" value={form.password} placeholder="*********"></Input>
                    </div> 
                    <button type="submit" className="bg-blue-500 text-white p-3 rounded-md hover:cursor-pointer w-[20%]">Login</button> 
                </div>
            </div>
        </form>
    </div>
</div>    

}