import React from 'react';
import '../Styles/headers.css';
import Modal from 'react-modal';
import axios from 'axios';
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      backgroundColor       : '#fde17e',
      height:'550px'
    }
  };
class Header extends React.Component{
    constructor() {
        super();
        this.state = {
            signUpModalIsOpen:false,
            loginModalIsOpen:false,
            email:'',
            password:'',
            firstname:'',
            lastname:'',
            isloggedin:'false'
        }
    }
    handleChange=(event,state)=>{
        this.setState({[state]:event.target.value});
    }
    signUp = () => {
        this.setState({signUpModalIsOpen:true})
    }
    handleCancelsignup = ()=>{
        this.setState({signUpModalIsOpen:false})
    }
    login = () => {
        this.setState({loginModalIsOpen:true})
    }
    handleCancellogin = ()=>{
        this.setState({loginModalIsOpen:false})
    }
    handlesignup = ()=>{
        const {email,password,firstname,lastname} = this.state;
        const signupobj = {
            email:email,
            password:password,
            firstname:firstname,
            lastname:lastname
        };
        axios({
            method: 'POST',
            url: 'http://localhost:5000/api/signup',
            headers: {'Content-Type': 'application/json'},
            data:signupobj
            }).then(response =>{
                if (response.data.message =="User SignedUp Successfully"){
                    this.setState({signUpModalIsOpen:false, email:'',
                    password:'',
                    firstname:'',
                    lastname:''});
                    alert(response.data.message);
                }
            })
            .catch(err => console.log(err))
    }
    handlelogin = ()=>{
        const {email,password} = this.state;
        const signupobj = {
            email:email,
            password:password
        };
        axios({
            method: 'POST',
            url: 'http://localhost:5000/api/login',
            headers: {'Content-Type': 'application/json'},
            data:signupobj
            }).then(response =>{
                this.setState({isloggedin:response.data.isAuthenticated,loginModalIsOpen:false,email:'',
                    password:''});
                sessionStorage.setItem('isloggedin',response.data.isAuthenticated);
                alert(response.data.message)
            })
            .catch(err => console.log(err))
    }

    render() {
        const {signUpModalIsOpen,loginModalIsOpen,email,password,firstname,lastname} = this.state;
        return (
            <div>
        <div className="rect"></div>
        <div className="logos">
            <h1 className="ee">e!</h1>
        </div>
        <div className="login">
            <button onClick={this.login} >login</button>
        </div>
        <div className="account">
        <button onClick={this.signUp}>Create account</button>
        </div>
        <Modal
          isOpen={signUpModalIsOpen}
          style={customStyles}>
          <div>
              
              <div className="logoss">
            <h1 className="ee">e!</h1>
        </div>
        <h3 className="user">SignUp User</h3>
        <br/><br/>
              <div> <label ><b >Email:</b></label><input className="input" type="text" value={email} onChange={(event)=>this.handleChange(event,'email')}/></div>
              <div><label><b>Password:</b></label><input className="input" type="password" value={password} onChange={(event)=>this.handleChange(event,'password')}/></div>
              <div><label><b>FirstName:</b></label><input className="input" type="text" value={firstname} onChange={(event)=>this.handleChange(event,'firstname')}/></div>
              <div><label><b>LastName:</b></label><input className="input" type="text" value={lastname} onChange={(event)=>this.handleChange(event,'lastname')}/></div>
              <button  onClick={this.handlesignup}>Sign Up</button>
              <button style={{'backgroundColor':'red'}} onClick={this.handleCancelsignup}>Cancel</button>
          </div>
        </Modal>
        <Modal
          isOpen={loginModalIsOpen}
          style={customStyles}>
          <div>
          <div className="logoss">
            <h1 className="ee">e!</h1>
        </div>
        <h3 className="user">Login User</h3>
        <br/><br/>
              
              <div><span><b>Email:</b></span><input className="input" type="text" value={email} onChange={(event)=>this.handleChange(event,'email')}/></div>
              <div><span><b>Password:</b></span><input className="input" type="password" value={password} onChange={(event)=>this.handleChange(event,'password')}/></div>
              <button onClick={this.handlelogin}>Login</button>
              <button style={{'backgroundColor':'red'}} onClick={this.handleCancellogin}>Cancel</button>
          </div>
        </Modal>
          
         </div>
        )
    }
}
export default Header;