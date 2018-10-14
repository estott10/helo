import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

function Nav(props) {
    // if(props.history.location.pathname === "/"){
    //     return;
    // } else 
    
    
    return (
        <div>
              <div>{props.username}</div>
              <div><img alt='profilepic' src={props.profile_pic}/></div>
            <Link to="/dashboard">
                <button>Home</button>
            </Link>
            <Link to="/post/:postid">
                <button>New Post</button>
            </Link>
            <Link to="/">
                <button>Logout</button>
            </Link>
        
        </div>
    )
}

function mapStateToProps(props){
  return {
      username: props.username,
      profile_pic: props.profile_pic
  }
}

export default connect(mapStateToProps)(Nav);