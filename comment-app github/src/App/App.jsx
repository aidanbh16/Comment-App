import React from 'react';
import './App.css';
import Pen from '../img/image-from-rawpixel-id-6287687-png.png';

function Base(){
    return <Body/>
}

class Body extends React.Component{
    render() {
        return(
            <>
                <View/>
            </>
        );
    }
};

class View extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            comments: [],
            titleInput: '',
            commentInput: '',
            date: new Date().getMonth()+1 + "/" + new Date().getDate() + "/" + new Date().getFullYear()
        }

        this.logSubmit = this.logSubmit.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleComment = this.handleComment.bind(this);
    }

    handleTitle = (event) => {
        this.setState({
            titleInput: event.target.value
        })
    }

    handleComment = (event) => {
        this.setState({
            commentInput: event.target.value
        })
    }

    logSubmit = (event) => {
        event.preventDefault();
        this.state.comments.push({
            key: this.state.comments.length,
            date: this.state.date,
            title: this.state.titleInput,
            comment: this.state.commentInput
        })
        document.querySelector(".titleBox").value = '';
        document.querySelector(".commentBox").value = '';
        this.setState({
            titleInput: '',
            commentInput: '',
        })
        console.log(this.state.comments);
    }

    render(){
        const commentList = this.state.comments.map(comments => 
            <div className='comment'>
                <li key={comments.key}>
                    <div className='date box'>{comments.date}</div>
                    <div className='commentTitle box'>{comments.title}</div>
                    <div className='commentText'>{comments.comment}</div>
                </li>
            </div>
        );
        return(
            <div>
                <div className="createBox">
                    <form id="postForm" onSubmit={this.logSubmit}>
                        <fieldset className='dateInput'>
                            <label>Date: {new Date().getMonth()+1 + "/" + new Date().getDate() + "/" + new Date().getFullYear()}</label>
                        </fieldset>
                        <fieldset className='titleInput'>
                            Title:<input required type='text' className='titleBox'  minLength='4' maxLength='19' placeholder="Input a title" onChange={this.handleTitle}/>
                        </fieldset>
                        <fieldset className='commentInput'>
                            <label>Comment: </label>
                            <br/>
                            <textarea required type='text' className='commentBox' maxLength='2000' minLength='5' placeholder="Input a comment" onChange={this.handleComment}/>
                        </fieldset>
                        <fieldset className='submitInput'>
                            <input className='submitBox' type='submit'/>
                        </fieldset>
                    </form>
                </div>
                <div className="outPostBox">
                    <div className="inPostBox">
                        <ul className='list'>{commentList}</ul>
                    </div>
                </div>
                <div>
                    <img src={Pen} alt="pen" className='pen'/>
                </div>
            </div>
        );
    }
}

export default Base;
