import React from 'react';
import './Header.css'
import Github from "../img/github.512x499.png"
import Insta from "../img/instagram-white-icon.png"
import LinkedIn from "../img/linkedin-app-white-icon.png"

function Header(){
    return <Head/>
};

class Head extends React.Component{
    render() {
        return(
            <div className="header">
                <Title/>
                <Links/>
                <Account/>
            </div>
        );
    }
};

function Title(){
    return(
        <div>
            <header className="title">Comment App</header>
        </div>
    );
}

class Links extends React.Component {
    render() {
        return(
            <div className="linkBox">
                <a href="https://github.com/aidanbh16" rel="noopener noreferrer" target="_blank"><img alt="Github" src={Github} className="icons"></img></a>
                <a href="https://www.instagram.com/holton_aidan/" rel="noopener noreferrer" target="_blank"><img alt="Instagram" src={Insta} className="icons"></img></a>
                <a href="https://www.linkedin.com/in/aidan-holton/" rel="noopener noreferrer" target="_blank"><img alt="LinkedIn" src={LinkedIn} className="icons"></img></a>
            </div>
        );
    }
}

class Account extends React.Component {
    render() {
        return(
            <div className="accountBox">
                <button type="button" className="sign">Sign up</button>
                <button type="button" className="sign">Sign in</button>
            </div>
        );
    }
}

export default Header;