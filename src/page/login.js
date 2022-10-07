// shall we put login and payment feature?????????? (-^-)
import React from 'react'
import Axios from 'axios'
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
        await Axios.get(`https://localhost:5002/login?${this.state.username}=${this.state.password}`,{
            header:{
                'Access-Control-Allow-Origin': '*'
            }
        }).then(res=>{
            console.log(res.data)
        })
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
            <input type="text" id="username" name="username" onChange={e=>{this.updateUsername(e)}} value={this.state.username}/><br></br>
            <label style={{marginTop:1}}>Password:</label>
            <input type="text" id="password" onChange={e=>{this.updatePassword(e)}} value={this.state.password }style={{marginTop:1}}/><br></br>
            <button type="button" onClick={this.submit}>LOGIN</button>
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