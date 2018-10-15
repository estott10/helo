import React, {Component} from 'react';
import Post from '../Post/Post';
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
//reset search fields...

    render(){

        return(
            <div>Dashboard
                <input name='title' onChange= {this.handleChange}></input>
                <button onClick={this.getPostResults}>Search</button>
                <button onClick={this.resetSearch}>Reset</button>
                My Posts<input type='checkbox' name='myPosts' value= {this.state.userPosts} />
                
                  {this.state.listOfPosts.map( (post, i) =>{
                    // <Post title={post.title} author={post.username} content={post.content} image={post.img} authorPic={post.profile_pic}/>
                      return <ul className="postList" key={i}> 
                        <div><Link to={`/post/${post.id}`} >{post.title}</Link></div>
                        <div>{post.username}</div> <img alt="post-dashUserPic" src={post.profile_pic}/>
                     </ul>
                } )}
               
            </div>
        )
    }

}

function mapStateToProps(props){
   return {id: props.id}
}

export default connect(mapStateToProps)(Dashboard);