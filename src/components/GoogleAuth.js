import React from 'react';
import  { connect } from 'react-redux';
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component{

    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId: '672501869896-b14vhhr686u2ipoou0b0v553ohpj0pk3.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                //listener to listen auth events and call on auth change
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        });

    }

    //method to trigger sin in and out actions
    onAuthChange = ( isSignedIn ) =>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    // use google sign in methods
    onSignIn = () =>{
        this.auth.signIn();
    };

    onSignOut = () =>{
      this.auth.signOut();
    };

    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return null;
        } else if( this.props.isSignedIn){
            return (
                <button className={"ui red google button"} onClick={this.onSignOut}>
                    <i className={"google icon"}/>
                    Sign out
                </button>
            );
        } else {
            return (
                <button className={"ui green google button"} onClick={this.onSignIn}>
                    <i className={"google icon"}/>
                    Sign in
                </button>
            );

        }

    }

    render(){
        return this.renderAuthButton();
    }
}

const mapStateToProps =( state )=>{
    return{ isSignedIn: state.auth.isSignedIn };
};

export default connect(
    mapStateToProps,{
    signIn, signOut
}) (GoogleAuth);