import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Dashboard extends Component{
    
    constructor(props){
       super(props); 

       this.state= {
         title: '',
         listOfPosts: [],
         userPosts: true
       }
       this.handleChange = this.handleChange.bind(this);
       this.resetSearch = this.resetSearch.bind(this);
       this.componentDidMount = this.componentDidMount.bind(this);
       this.getPostResults = this.getPostResults.bind(this);
       this.userPostsUpdate = this.userPostsUpdate.bind(this);
    }

    handleChange(e){ 
        this.setState({
        [e.target.name] : e.target.value
        });
      }

    resetSearch(){ 
        this.setState({
        title : ''
        });
      }

    userPostsUpdate(){
          this.setState({
              userPosts: !this.state.userPosts
          });
      }

    
/// must add '%' to beginning and end of title search in axios request!!
// if userPosts is false... then id ===id... else ... id === 0
    
    getPostResults(){
        const {userPosts, title} = this.state;
        const {id} = this.props;

        if(userPosts){
          axios.get(`/api/posts?title=%${title}%&id=0`).then( res => {
              this.setState({
                  listOfPosts: res.data
              })
          })
        } else {
          axios.get(`/api/posts?title=%${title}%&id=${id}`).then( res => {
            this.setState({
                listOfPosts: res.data
            })
        })
    }
}
    componentDidMount(){
        const {userPosts, title} = this.state;
        const {id} = this.props;

        if(userPosts){
          axios.get(`/api/posts?title=%${title}%&id=0`).then( res => {
              this.setState({
                  listOfPosts: res.data
              })
          })
        } else {
          axios.get(`/api/posts?title=%${title}%&id=${id}`).then( res => {
            this.setState({
                listOfPosts: res.data
            })
        })
    }
}


    render(){

        return(
            <div className="dashboard">
                <div className="searchSection" >
                <div>Search</div>
                <input id="myInput" name='title' onChange= {this.handleChange}></input>
                <button onClick={this.getPostResults}>Search</button>
                <button onClick={() => {this.resetSearch();(document.getElementById('myInput').value = '')}}>Reset</button>
                My Posts<input type='checkbox' id="postCheck" name='myPosts' defaultChecked={this.state.userPosts} onClick={this.userPostsUpdate} />
                </div>
                <div className= "dashposts">
                  {this.state.listOfPosts.map( (post, i) =>{
                      return <ul className="postList" key={i}> 
                        <div><Link className="links" to={`/post/${post.id}`} >{post.title}</Link></div>
                       <div className="postComp"><div className="dashUsername">by {post.username}</div> <img alt="post-dashUserPic" src={post.profile_pic}/></div>
                     </ul>
                } )}
               </div>
            </div>
        )
    }

}

function mapStateToProps(props){
   return {id: props.id}
}

export default connect(mapStateToProps)(Dashboard);