// shall we put login and payment feature?????????? (-^-)
import React from 'react'
export default class Login extends React.PureComponent{
    render(){
        return <div style={{height:'70%'}}>
            <h2>Login</h2>
            <form action="/action_page.php" method="get">
                <label for="fname">Username:</label>
                <input type="text" id="username" name="username"/><br></br>
                <label for="lname">Password:</label>
                <input type="text" id="password" name="password"/><br></br>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    }
}