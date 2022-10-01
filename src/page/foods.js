import React from 'react'
import Food from './food.js'
export default class Foods extends React.Component{


    foodlist = [
        {
            name: 'title 1',
            discription: 'this is the discription 1',
            picture: "../data/logo.png"
        },
        {
            name: 'title 2',
            discription: 'this is the discription 2 ',
            picture: '../data/logo.png'
        },
        {
            name: 'title 3',
            discription: 'this is the discription 3',
            picture: '../data/logo.png'
        },
        {
            name: 'title 4',
            discription: 'this is the discription 4',
            picture: '../data/logo.png'
        },
        {
            name: 'title 5',
            discription: 'this is the discription 5',
            picture: '../data/logo.png'
        },
    ]
    listItem = this.foodlist.map((item)=>
    <Food 
    data={item}
    key={item.name}
    ></Food>)
    render(){
        return <div>
            {this.listItem}
            {/* <h1>hello</h1> */}
        </div>
    }
}