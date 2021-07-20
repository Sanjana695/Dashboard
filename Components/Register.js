import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import Header from './Header';
function Register() {

    // useEffect(()=>{
    //  if(localStorage.getItem("user-info"))
    //  {
    //      history.push('/add')
    //  }
    // },[])
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [email, setEmail] = useState("");

    //object of useHistory
    // const history = useHistory()

    async function SignUp() {
        let info = { name, pass, email }
        console.warn({ info })
        let result = await fetch("", {
            method: "GET",
            headers: {
                "content-Type": "application/json",
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

                <h1>User Registration Page</h1>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter UserName" />
                <br />

                <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} className="form-control" placeholder="Enter Password" />
                <br />

                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter Email" />
                <br />
                <button onClick={SignUp} className="btn btn-primary">Registration</button>
            </div>
        </>
    )
}
export default Register;