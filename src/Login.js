import React from "react";
import "./Login.css"
import {Button} from "@material-ui/core";
import {auth, provider} from "./firebase.js";
import {actionTypes} from "./reducer.js";
import {useStateValue} from "./StateProvider.js";

function Login(){
    const [{}, dispatch] = useStateValue();
    
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
            dispatch({
                type: actionTypes.SET_USER, 
                user: result.user
            })
        })
            .catch((error) => alert(error.message));
    };
        
    
    
    return (
        <div className="login">
            <div className="login--container">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp Logo"
                />
                <div className="login--text">
                    <h1>Sign in to WhatsApp</h1>
                </div>
                <Button type="submit" onClick={signIn}>
                    Sign In with Google
                </Button>
            </div>
        </div>
    
    );
    
}

export default Login;