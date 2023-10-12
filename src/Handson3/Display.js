// import { render } from '@testing-library/react'
import React, { Component } from 'react'
import "./Handson3.css"


class Display extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        return (
            <>
                <div  className='parentChild'>
                    {this.props.value.map((item, index) => {
                        return (
                            <div className='child' key={index}>
                                <span>Name : {item.name}</span>||
                                <span>Dept : {item.dept}</span>||
                                <span>Rating : {item.rating}</span>
                            </div>   
                        )                        
                    })}
                </div>
                <div className='buttonDisplay'>
                    <button  onClick={this.props.ToggleVariable}>Go Back</button>
                </div>

            </>
        )
    }
  
}

export default Display