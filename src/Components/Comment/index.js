import React from 'react';

     export default class Comment extends React.Component{
    constructor(props){
        super(props);
     this.state = {
         name :'',
         email :'',
         comment :''
                  }
     this.handleChangeInput1=this.handleChangeInput1.bind(this);
     this.handleChangeInput2=this.handleChangeInput2.bind(this);
     this.handleChangeInput3=this.handleChangeInput3.bind(this);
     this.onButtonClick=this.onButtonClick.bind(this);
 

    // this.handleSubmit=this.handleSubmit.bind(this);

        }
        handleChangeInput1(e){
          // console.log(this.state.name)
         //  console.log(e.target.value)
            this.setState({
                name: e.target.value
            })
        }
        handleChangeInput2(e){
          // console.log(this.state.email)
         //  console.log(e.target.value)
            this.setState({
                email: e.target.value
            })
        }
        handleChangeInput3(e){
          // console.log(this.state.comment)
         //  console.log(e.target.value)
            this.setState({
              comment: e.target.value
            })
        }
    /*    handleSubmit(e){
          // console.log(this.state.name)
         //  console.log(e.target.value)
            this.setState({
                name: e.target.value,
                email: e.target.value,
                comment: e.target.value,


            })
        }*/
        onButtonClick(e){
          const { onFormSubmit }=this.props;
          e.preventDefault();
       //   console.log(this.target.value)
          onFormSubmit(this.state.name,this.state.email,this.state.comment);
          this.setState({
              name:'',
              email:'',
              comment:''
              
          })
      }
          render() {
            return (
              <>
              <h1>Contact Us Form</h1>
              <form>
                <div> <input value={this.state.name}  onChange={this.handleChangeInput1}/></div> 
                <div> <input type="email"  value={this.state.email}  onChange={this.handleChangeInput2}/></div>
                <div>  <textarea rows="10" cols="30" name="comment" value={this.state.comment}  onChange={this.handleChangeInput3}></textarea></div>
                 <button onClick={this.onButtonClick}>Submit</button>
              </form>
              </>
            );
          }    
    
}