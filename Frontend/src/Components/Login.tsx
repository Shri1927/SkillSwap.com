import { Input } from "./ui/input"
import { Card, 
    CardHeader,
    CardContent,
    CardFooter,
    CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handlelogin() {
            const res = await axios.post("http://localhost:8082/user/login",{
                username: username,
                password: password
            });
            let data = res.data;
            localStorage.setItem('token', data.token);
            navigate('/addskills');
    }
    return (
        <div className="flex mt-20 justify-center items-center ">
            <Card style={{
                height:"400px",
                width:"400px",
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-between",
                alignItems:"center"
            }} >
                <CardHeader>
                    <CardTitle className="text-3xl font-mono font-bold mt-8">Login</CardTitle>
                </CardHeader>
                <CardContent className="w-full">
                    <label htmlFor="username" className="font-bold">Username</label>
                    <Input style={{
                        height:"50px",
                        marginBottom:"10px",
                        marginTop:"5px"
                    }}
                     id="username"
                     placeholder="username" type="text" 
                     onChange={ (e) =>{
                        setUsername(e.target.value);
                     }}/>
                     <label htmlFor="username" className="font-bold">Password</label>
                    <Input style={{
                        height:"50px",
                        marginTop:"5px"
                    }}
                    id="password"
                    placeholder="password" type="password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }} />
                </CardContent>
                <CardFooter>
                    <Button
                    onClick={handlelogin}>Login</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Login
