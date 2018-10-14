import React, {Component} from 'react';
import axios from 'axios';

export default class Post extends Component{
    constructor(props){
        super(props); 
 
        this.state= {
          postTitle: '',
          postImage: '',
          postContent: '',
          profile_pic: '',
          post_author: ''
        }
 
     }

     //post title, image, and content for that post, as well as the username and profile picture of the post author 
 
     componentDidMount(){
         axios.get(`/api/post/${this.props.match.params}`)
            .then(res => {
                this.setState({
                postTitle: res.data.title,
                postImage: res.data.img,
                postContent: res.data.content,
                profile_pic: res.data.profile_pic,
                post_author: res.data.username
                });
            })
     }

    render(props){
        return(
            <div className="post">
                <div>{this.state.postTitle}</div>
                <img alt="postImg" src={this.state.postImage} />
                <div>{this.state.postContent}</div>
                <div>{this.state.post_author}</div>
                <div>{this.state.profile_pic}</div>
            </div>
        )
    }
}