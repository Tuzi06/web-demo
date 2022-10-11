import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route,Link,Outlet} from "react-router-dom"
import Foods from './page/foods.js'
import Drinks from './page/dinks.js'
import Login from './page/login.js'
import Pay from "./page/payment.js"
import Register from './page/register.js'
function Layout() {
    console.log('layout page');
    return (
        <>
            <nav>
                <ul>
                    <li><Link to='/'>Food</Link></li>
                    <li><Link to='/drink'>Drink</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/payment'>Payment</Link></li>
                </ul>
            </nav>
            <Outlet></Outlet>
        </>
    );
}

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Layout/>}>
                    <Route index element = {<Foods/>}></Route>
                    <Route path='/drink' element = {<Drinks/>}></Route>
                    <Route path='/login' element = {<Login/>}/>
                    <Route path='/payment' element = {<Pay/>}/>
                    <Route path='/register' element = {<Register/>}/>
                    <Route path="*" element={<h1 style={{height:'70%'}}>404</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render( 
    <div style={{height:'100%',width:'100%',margin:10,position:'absolute'}}>
        <h1>this is title</h1>
        <App/>
        <h2>this is bottom</h2>
    </div>
)