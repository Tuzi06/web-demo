import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route,Link,Outlet} from "react-router-dom";
import Foods from './page/foods.js'
import Drinks from './page/dinks.js'
// const mainpage = (<h1>hello world</h1>)
const Layout =()=>{
    console.log('layout page')
    return (
        <>
            <nav>
                <ul>
                    <li><Link to='/'>Food</Link></li>
                    <li><Link to='/drink'>Drink</Link></li>
                </ul>
            </nav>
            <Outlet></Outlet>
        </>
    )
}

const Foodpage=()=>{
    console.log('go to main page')
    return <Foods/>
}
const Drinkpage =()=>{
    console.log('go to drink page')
    return <Drinks/>
}

const NoPage = () => {
    return <h1>404</h1>;
  };
function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Layout/>}>
                    <Route index element = {<Foodpage/>}></Route>
                    <Route path='/drink' element = {<Drinkpage/>}></Route>
                    <Route path="*" element={<NoPage />} />
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