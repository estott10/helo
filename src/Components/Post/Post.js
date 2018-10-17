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
    this.componentDidMount=this.componentDidMount.bind(this);
     }

     //post title, image, and content for that post, as well as the username and profile picture of the post author 
 
     componentDidMount(){
        const { match: {params} } = this.props;

         axios.get(`/api/post/${params.postid}`)
            .then(res => {
                this.setState({
                postTitle: res.data[0].title,
                postImage: res.data[0].img,
                postContent: res.data[0].content,
                profile_pic: res.data[0].profile_pic,
                post_author: res.data[0].username
                });
            })
     }

    render(props){
        return(
            <div className="post" id="singlePost">
               <div id="titlePic">
                  <div id="postTitle">{this.state.postTitle}</div>
                  <div className="postImg"><img alt="postImg" src={this.state.postImage} /></div>
                </div>
                <div>{this.state.postContent}</div>
                <div id="usernamePic">
                  <div>by {this.state.post_author}</div>
                  <div className="postAuthor"><img alt="post_proilepic" src={this.state.profile_pic}/></div>
                </div>
            </div>
        )
    }
}