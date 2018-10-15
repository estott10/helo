import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateProfile, updateUsername, updateId} from '../../ducks/reducer';
import axios from 'axios';

class Form extends Component{
    constructor(props){
        super(props); 
 
        this.state= {
          postTitle: '',
          postImage: '',
          postContent: ''
        }

        this.handlePostUpdate= this.handlePostUpdate.bind(this);
        this.addNewPost= this.addNewPost.bind(this);
    }
    handlePostUpdate(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    addNewPost(){
        const { id } = this.props;
        const newPost = {
            title: this.state.postTitle,
            img: this.state.postImage,
            content: this.state.postContent
        }
        
        axios.post(`/api/new/${id}`, newPost)
            .then(res => {
                this.props.history.push('/dashboard')
            })
    }

    render(){
        return(
            <div>Form
                <div>Image Preview
                <img alt="imagePreview" src={this.state.postImage} />
                </div>
                Title:
                <input name='postTitle'  onChange={(e)=> this.handlePostUpdate(e)}></input>
                Image:
                <input name='postImage' onChange={(e) => this.handlePostUpdate(e)}></input>
                Message:
                <input name='postContent'  onChange={(e)=> this.handlePostUpdate(e)}></input>
                <button onClick={this.addNewPost}>Post</button>
            </div>
        )
    }
}

function mapStateToProps(props){
    return {
        id: props.id,
        username: props.username,
        profile_pic: props.profile_pic
    }
}

export default connect(mapStateToProps, {updateUsername, updateProfile, updateId})(Form);