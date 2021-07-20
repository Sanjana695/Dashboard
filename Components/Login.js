import Header from './Header';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import {Button} from 'react-bootstrap';
function Login() {
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    // const history = useHistory()
    // useEffect(() => {
    //     if (localStorage.getItem("user-info")) {
    //         history.push('/add')
    //     }
    // }, [])
    async function login(){
        console.warn("data",email,pass)
        let info={email,pass}
        let result=fetch("",{
            method:"POST",
            headers:{
               "Content-Type": "application/json",
               "Accept": "application/json"
            },
            body: JSON.stringify({ info })
        });
        result = await result.json();
        console.warn("result", result)
        // localStorage.setItem("user-info", JSON.stringify(result));
        //history.push("/add")
    }
    return (
        <>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Login Page</h1>
                <input type="text" className="form-control" placeholder="Enter UserName" 
                value={email} onChange={(e)=>setEmail(e.target.value)} />
                <br />

                <input type="password" className="form-control" placeholder="Enter Password"
                value={pass} onChange={(e)=>setPass(e.target.value)} />
                <br /> <br/>

                <Button onClick={login} variant="dark">Login</Button>
            </div>
        </>
    )
}
export default Login;