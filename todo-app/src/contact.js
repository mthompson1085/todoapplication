import React from 'react';


class contact extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    comment: ''
  }

  handleOnChange = (e) =>{
    this.setState({[e.target.name]:e.target.value})
  }

  render(){

      return (
        <div class="field">
            <h1>Contact Us For Help</h1>
            <form class="field">
              First Name: <input type = 'text' name = 'firstName' value = {this.state.firstName} onChange = {this.handleOnChange}/> <br></br>
              Last Name: <input type = 'text' name = 'lastName' value = {this.state.lastName} onChange = {this.handleOnChange}/> <br></br>
              Email: <input type = 'text' name = 'email' value = {this.state.email} onChange = {this.handleOnChange}/> <br></br>
              Comments: <input type = 'textarea' name = 'comments' value = {this.state.coments} onChange = {this.handleOnChange}/>
              <button type="submit">Submit</button>
            </form>
        </div>
      );
  }
}

export default contact;
