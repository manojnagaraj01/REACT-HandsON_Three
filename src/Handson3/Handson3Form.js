import React, {Component} from 'react';
import Display from './Display';
import "./Handson3.css"

class Handson3 extends Component{
    constructor(){
        super()
        this.state = {
            name : '',
            dept : '',
            rating : '',
            dataToggle : true,
            error : {},
            StuData : [],
        }
    }

    handleChange = (event) =>{
        this.setState({[event.target.name] : event.target.value})
    }

    ToggleVariable = () =>{
      this.setState({dataToggle : !this.state.dataToggle})
    }
    validate = () =>{
        //Name
        if(!this.state.name){
            this.state.error.name = "Please Fill your name"
        }
        //dept
        if(!this.state.dept){
            this.state.error.dept = "Please Fill your Dept"
        }
        if(!this.state.rating || parseInt(this.state.rating) < 1 || parseInt(this.state.rating) > 5 ){
            this.state.error.rating = " Rating should be 1 to 5"
        }
    }
    handleSubmit = () =>{ 
        this.validate();
        const tempObj = { 
            name : this.state.name ,
            dept : this.state.dept,
            rating : this.state.rating
        }
        this.state.StuData.push(tempObj)
        this.setState({StuData : this.state.StuData, dataToggle : !this.state.dataToggle})
        this.setState(
            {StuData : this.state.StuData, name : '', dept : '', rating : ''}
        )

    }
    render(){
        return (
            <>
                {
                this.state.dataToggle 
                ?
                <div className='parent'>
                    <h1>EMPLOYEE FEEDBACK FORM</h1>
                    <label>Name : 
                    <input type='text' name='name'  id="name" value={this.state.name} placeholder='Enter Your Name' onChange={this.handleChange}/> </label><br></br>
                        <div className='derror'>
                            {this.state.error.name && <span>Please fill the Name field</span>}
                        </div>
                    <label>Dept :
                    <input type='text' name='dept' id="dept" value={this.state.dept} placeholder='Enter Your Dept' onChange={this.handleChange}/> </label><br></br>
                        <div className='derror'>
                            {this.state.error.dept && <span>Please fill the Dept field</span>}
                        </div>
                    <label>Rating :
                    <input type='number' name='rating' id="rating" value={this.state.rating} placeholder='Enter Your Rating' onChange={this.handleChange}/> </label><br></br>
                        <div className='derror'>
                            {this.state.error.rating && <span>Rating 1 - 5 </span>}
                        </div>
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
                : 
                <Display value={this.state.StuData} ToggleVariable = {this.ToggleVariable}/>
                
                }
            </>
        )
    }
}

export default Handson3;