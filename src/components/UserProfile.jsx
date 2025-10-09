export default function UserProfile({
    avatar = "https://avatar.iran.liara.run/public/9", 
    username = "Wawan Heker", 
    email= "wawan@gmail.com"}
)    {
    return <div className="flex items-center space-x-3">
        <div>
            <img src = {avatar} className = "rounded-full size-10" alt ={username}/>
        </div>
        <div>
            <div className="font-bold capitalize">{username}</div>
            <div className="text-xs italic">{email}</div>
        </div>
    </div>    
}