import React from 'react';

export default class ContactUs extends React.Component{
    constructor(props){
        super(props);
     this.state ={
         name :''
        
     }
     this.handleChangeInput=this.handleChangeInput.bind(this);
     this.onButtonClick=this.onButtonClick.bind(this);
        }
        handleChangeInput(e){
          // console.log(this.state.name)
         //  console.log(e.target.value)
            this.setState({
                name: e.target.value
            })
        }
       
        onButtonClick(e){
            const { onFormSubmit }=this.props;
            e.preventDefault();
         //   console.log(this.target.value)
            onFormSubmit(this.state.name);
            this.setState({
                name:''
                
            })
        }
    render(){
        
        return(
            <>
            <h1>Contact Us Form</h1>
            <form>
              <div> <input value={this.state.name}  onChange={this.handleChangeInput}/></div> 
                <button onClick={this.onButtonClick}>Submit</button>
            </form>
            </>
        )
    }
}