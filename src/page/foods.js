import React from 'react'
import Food from './component/food.js'
export default class Foods extends React.Component{
    foodlist = [
        {
            name: 'title 1',
            discription: 'this is the discription 1',
            picture: "./assets/images/bilibili.jpeg"
        },
        {
            name: 'title 2',
            discription: 'this is the discription 2 ',
            picture: "./assets/images/bilibili.jpeg"
        },
        {
            name: 'title 3',
            discription: 'this is the discription 3',
            picture: "./assets/images/bilibili.jpeg"
        },
        {
            name: 'title 4',
            discription: 'this is the discription 4',
            picture: "./assets/images/bilibili.jpeg"
        },
        {
            name: 'title 5',
            discription: 'this is the discription 5',
            picture: "./assets/images/bilibili.jpeg"
        },
    ]
    // componentDidMount(){

    // }

    // async getFoodList(){
        
    // }

    listItem = this.foodlist.map((item)=>
    <Food 
    data={item}
    key={item.name}
    ></Food>
    )
    render(){
        return<ul style={{height:'70%',padding:0,margin:0,overflow:'scroll',scrollbarWidth:'none', overflowY:'dropdown',overflowX:'hidden'}}>
                {this.listItem}
            </ul>
 
    }
}