import React from 'react'
export default class Food extends React.PureComponent{
    constructor(props){
        super(props)
        this.state={
            hide: 'hidden',
            status: "pic is hidden"
        }
        console.log('this is food prop:',this.props.data.picture)
    }

    showPicture=()=>{
        this.setState(()=>{
            const newState = this.state.hide === ''? {hide:'hidden',status:'pic is hidden'}:{hide:'',status:'pic is shown'}
            return newState
        })
    }

    render(){
        return <div>
            <div style={{display:'flex',alignItems: 'center'}}>
                <h1>{this.props.data.name}</h1>
                <button onClick={this.showPicture} style={{height:40,marginRight:2,marginLeft:'auto',display:'block'}}>{this.state.status}</button>
            </div>
            <p>{this.props.data.discription}</p>
            <img src={this.props.data.picture} alt='this is a example render' hidden={this.state.hide} style={{textIndent:-99999}}></img>
            {/* <h1>helloworld</h1> */}
            <hr style={{borderTop:'2px solid'}}></hr>
        </div>
    }
}