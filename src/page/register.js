import React from 'react'
import Axios from 'axios'
import CryptoJS from 'crypto-js'
import {Link} from "react-router-dom";
export default class Register extends React.PureComponent{
    constructor(){
        super()
        this.state = {
            username:'',
            password:'',
            confirm:'',
        }
        this.submit = this.submit.bind(this)
    }
    async submit(){
        console.log('login button clicked')
        console.log(this.state.username, ' ', this.state.password)
        // const data = JSON.stringify(this.state.username+' '+this.state.password)
        // const data = this.state.username+ ' '+ this.state.password
        if(this.state.password !== this.state.confirm){
            console.log('confim is not right')
            return
        }
        var username= this.state.username
        var password = this.state.password
        const data =JSON.stringify({username,password})
        console.log('dadasaasd', data)

        const encrypt = CryptoJS.AES.encrypt(data, "Bilibili kanpai").toString();
        console.log(encrypt)
        await Axios.post(`https://localhost:5002/setup`,{encrypt}).then((res)=>{
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
    updateConfirm(e){
        this.setState({
            confirm: e.target.value,
        })
    }
    render(){
        return <div style={{height:'70%'}}>
            <h2>Register</h2>
            <label>Username:</label>
            <input type="text" id="username" name="username" onChange={e=>{this.updateUsername(e)}} value={this.state.username}/><br></br>
            <label style={{marginTop:1}}>Password:</label>
            <input type="text" id="password" onChange={e=>{this.updatePassword(e)}} value ={this.state.password}style={{marginTop:1}}/><br></br>
            <label style={{marginTop:1}}>Retype Password:</label>
            <input type="text" id="confirm" onChange={e=>{this.updateConfirm(e)}} value = {this.state.confirm}style={{marginTop:1}}/><br></br>
            <button type="button" onClick={this.submit}>Submit</button>
            <nav><Link to ='/login'>Login</Link></nav>
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