import React from 'react';


class GoogleAuth extends React.Component{

    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId: '672501869896-b14vhhr686u2ipoou0b0v553ohpj0pk3.apps.googleusercontent.com',
                scope: 'email'
            })
        });

    }

    render(){
        return(
            <div>
                Google Auth
            </div>
        );
    }
}

export default GoogleAuth;