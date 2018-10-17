import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {updateProfile, updateUsername} from '../../ducks/reducer';

function Nav(props) {
    // const {location} = props;
    // if(!(location.pathname === "/")){
     
    return (
        <div className="nav">
              <div>{props.username}</div>
              <div className="userPic"><img className="userPic" alt='profilepic' src={props.profile_pic}/></div>
            <Link to="/dashboard">
                <button>Home</button>
            </Link>
            <Link to="/new">
                <button>New Post</button>
            </Link>
            <Link to="/">
                <button>Logout</button>
            </Link>
        
        </div>
    )} 
//     else {
//         return( <div></div>);
//     }
// }

function mapStateToProps(props){
  return {
      username: props.username,
      profile_pic: props.profile_pic
  }
}

export default connect(mapStateToProps, {updateProfile, updateUsername})(Nav);