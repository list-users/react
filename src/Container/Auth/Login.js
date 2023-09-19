import TextInput from "../../Component/TextInput/TextInput";

import React, { useEffect, useState } from "react"

import axios from 'axios'
const Login = (props) => {
    let [authMode, setAuthMode] = useState("signin")


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNo, setPhoneNo] = useState()
    const [password, setPassword] = useState('')


    useEffect(() => {
        getCustomersData()
    }, [])

    const getCustomersData = () => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((response) => {
                console.log('response===>>>', response.data)
            }).catch((error) => {
                console.log(error)
            });
    };

    const handleUpload = (event) => {

        event.preventDefault()


        const data = {
            name: name,
            email: email,
            phoneno: phoneNo,
            password: password,
        }
        console.log('data===>>>>', data)


        axios({
            url: "http://localhost:8082/api/mobile/ragistration",
            method: "POST",
            data: data,
        }).then((res) => {
            console.log('res==>>>>', res)
        }).catch((err) => {
            console.log('err===>>>>>', err)
        });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="Auth-form-container">
                        <form className="Auth-form">
                            <div className="Auth-form-content">
                                <h3 className="Auth-form-title text-center">Sign In</h3>
                                <div className="form-group mt-3">
                                    <label>Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control mt-1"
                                        placeholder="e.g Jane Doe"
                                        onChange={(e) => { setName(e.target.value) }}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label>Email address</label>
                                    <input
                                        type="email"
                                        className="form-control mt-1"
                                        placeholder="Email Address"
                                        onChange={(e) => { setEmail(e.target.value) }}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label>Phone</label>
                                    <input
                                        type="number"
                                        className="form-control mt-1"
                                        placeholder="phone No.."
                                        onChange={(e) => { setPhoneNo(e.target.value) }}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control mt-1"
                                        placeholder="Password.."
                                        onChange={(e) => { setPassword(e.target.value) }}
                                    />
                                </div>
                                <div className="gap-2 mt-5">
                                    <button
                                        className="btn btn-primary"
                                        onClick={handleUpload}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )









}
export default Login;