// shall we put login and payment feature?????????? (-^-)
import React from 'react'
import Axios from 'axios'
import CryptoJS from 'crypto-js'
import {Link} from "react-router-dom";
import{GoogleLogin,GoogleOAuthProvider} from '@react-oauth/google'

export default class Login extends React.PureComponent{
    constructor(){
        super()
        this.state = {
            username:'',
            password:'',
        }
        this.submit = this.submit.bind(this)
    }
    async submit(){
        console.log('login button clicked')
        console.log(this.state.username, ' ', this.state.password)
        // const data = JSON.stringify(this.state.username+' '+this.state.password)
        // const data = this.state.username+ ' '+ this.state.password
        var username= this.state.username
        var password = this.state.password
        const data =JSON.stringify({username,password})
        console.log('dadasaasd', data)

        const encrypt = CryptoJS.AES.encrypt(data, "Bilibili kanpai").toString();
        console.log(encrypt)
        await Axios.post(`https://localhost:5002/login`,{encrypt}).then((res)=>{
                console.log(res.status,res.data.message)
            },
            (error) => {
                console.log(error);
             })
        // await Axios.get(`https://localhost:5002/login?${encrypt}`).then(res=>{
        //     console.log(res.data)
        // })
    }
    updateUsername(e){
        this.setState({
            username: e.target.value,
        })
    }
    updatePassword(e){
        this.setState({
            password: e.target.value,
        })
    }

    render(){
        return <div style={{height:'70%'}}>
            <h2>Login</h2>
            <label>Username:</label>
            <input type="text" id="username" name="username" onChange={e=>{this.updateUsername(e)}}/><br></br>
            <label style={{marginTop:1}}>Password:</label>
            <input type="text" id="password" onChange={e=>{this.updatePassword(e)}} style={{marginTop:1}}/><br></br>
            <button type="button" onClick={this.submit}>LOGIN</button>
            <nav><Link to='/register'>Register</Link></nav>
            <GoogleOAuthProvider clientId = '682090313848-6558lrp1b7iquvjfmag2ge5ccsvkvs5s.apps.googleusercontent.com'>
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                    useOneTap
                />
            </GoogleOAuthProvider>
            <h3>login page end</h3>
            {/* <form action="/https://localhost:5002/login" method="get">
                <label for="fname">Username:</label>
                <input type="text" id="username" name="username"/><br></br>
                <label for="lname">Password:</label>
                <input type="text" id="password" name="password"/><br></br>
                <input type="submit" value="Submit"/>
            </form> */}
        </div>
    }
}