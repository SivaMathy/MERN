import React, {Component,useState} from "react";
import "../styles/login.scss";
import "../styles/textStyle.scss";
import MainImg from "../assets/login.svg";
import Google from "../assets/google.svg";
import Apple from "../assets/apple.svg";
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom"
export default class Signin extends Component {
      constructor(props){
        super(props);
        this.state={
            formData:{
                username:'',
                password:''
            }
        };
      }  
      navigate = useNavigate;
     handleInputChange = async (event)=>{
        const {name,value}= event.target;
        this.setState((prevState)=>({
            formData:{
                ...prevState.formData,
                [name]:value
            }
        }))
     }

      
     handleSubmit = async (event)=>{
        const { navigate } = this.props;
        const { username, password } = this.state.formData;
        event.preventDefault();
        try{
         const response=await axios.post("https://dummyjson.com/auth/login",{ username, password });
         localStorage.setItem('access_token',response.data.accessToken);
         localStorage.setItem('username',response.data.username)
         console.log(response.data);
         this.setState({
            formData: {
                username: '',
                password: '',
            }
        });
        alert("You have successfuly loged in");
        this.props.navigate('http://localhost:3000/signup');
        }catch{
         console.error("Error");
        }
     }
  render() {
    return (
      <div className="loginForm">
        <div className="left">
          <div className="img-wrapper">
            <img src={MainImg} alt="" className="img" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <div className="h1-style header">Sign In</div>
            <p className="bodyText content">Sign in with open account</p>
            <div className="open-accounts">
              <div className="google iocns">
                <img src={Google} alt="" className="img-icon" />
                <p className="h3-style icon-name">Google</p>
              </div>
              <div className="apple iocns">
                <img src={Apple} alt="" className="img-icon" />
                <p className="h3-style icon-name">Apple</p>
              </div>
            </div>
            <div className="hr-line"></div>
            <div className="form-wrapper">
              <p className="bodyText content">Or continue with email address</p>
              <form  onSubmit={this.handleSubmit}>
                <input type="text" name="username"  className="input email bodyText" placeholder="email" value={this.state.formData.username}
                  onChange={this.handleInputChange} />
                <input type="password" name="password" className="input password bodyText" placeholder="password" value={this.state.formData.password}
                  onChange={this.handleInputChange} />
                <button type="submit" className="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
