import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateUsername, updatePassword, updateProfile, updateId} from '../../ducks/reducer';

class Auth extends Component{
    constructor(props){
    super(props);

    this.state = {
        id: '',
        username: '',
        password: '',
        profile_pic: ''
      }
      this.updateNamePass = this.updateNamePass.bind(this);
      this.addUser = this.addUser.bind(this); 
      this.loginUser=this.loginUser.bind(this);
    }
    updateNamePass(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    addUser(props){
        const newUser = {
            username: this.state.username,
            password: this.state.password
        }
        const {updateUsername, updatePassword, updateProfile, updateId} = this.props;
        axios.post('/api/register', newUser)
            .then(res => {
                updateProfile(res.data[0].profile_pic);
                updateUsername(res.data[0].username);
                updatePassword(res.data[0].password); 
                updateId(res.data[0].id);
        })
    }

    loginUser(props){
        const existingUser = {
            username: this.state.username,
            password: this.state.password
        }
        const {updateUsername, updatePassword, updateProfile, updateId} = this.props;
        axios.post('/api/login', existingUser)
            .then(res => {
                updateProfile(res.data[0].profile_pic);
                updateUsername(res.data[0].username);
                updatePassword(res.data[0].password); 
                updateId(res.data[0].id);
        })
    }

    render(){
        return(
            <div className= "auth">Helo
                <div>
                Username:
                <input name='username'  onChange={(e)=> this.updateNamePass(e)}></input>
                </div>
                <div>
                Password:
                <input name='password' onChange={(e) => this.updateNamePass(e)}></input>
                </div>
                <div className="loginOrRegister">
                <Link to="/dashboard"><button onClick={this.loginUser}>Login</button></Link>
                <Link to="/dashboard"><button onClick={this.addUser}>Register</button></Link>
                </div>
            </div>
        )
    }
}

export default connect(null, {updateId, updateUsername, updatePassword, updateProfile})(Auth);