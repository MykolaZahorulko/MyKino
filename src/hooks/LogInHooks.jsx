import React, {useEffect, useState} from 'react';
import {useCookies} from 'react-cookie';


export function useLogInState() {
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [isWarning, setIsWarning] = useState({isNeeded: false, message: ''});
    const [cookies, setCookie, removeCookie] = useCookies(['userName']);
    const maxUserNameLength = 15;

    useEffect(() => {
        window.scrollTo(0, 0);
        if (cookies.userName) {
            setUserName(cookies.userName);
            setIsSignedIn(true);
            setMessage(`Hi, ${cookies.userName}!`);
            setIsWarning({isNeeded: false, message: ''});
        }
    }, [cookies.userName]);

    const checkUserName = (name) => {
        if (name.length === 0) {
            setIsWarning({isNeeded: true, message: 'You must enter your nickname'});
        } else if (name.length > maxUserNameLength) {
            setIsWarning({isNeeded: true, message: 'The name should be shorter than 15 characters'});
        } else {
            setIsWarning({isNeeded: false, message: ''});
            setMessage(`Hi, ${name}!`);
        }
    };

    const handleSignInClick = () => {
        if (userName) {
            if (!isWarning.isNeeded) {
                setIsSignedIn(true);
                setIsWarning({isNeeded: false, message: ''});
                setCookie('userName', userName, {path: '/'});
            } else {
                setIsSignedIn(false);
            }
        } else {
            checkUserName(userName);
        }
    };

    const handleInput = (e) => {
        const inputValue = e.target.value;
        checkUserName(inputValue);
        setUserName(inputValue);
    };

    const handleSignOutClick = () => {
        setMessage('');
        setUserName('');
        setIsSignedIn(false);
        removeCookie('userName', {path: '/'});
    };
    return {
        userName,
        message,
        isSignedIn,
        isWarning,
        cookies,
        checkUserName,
        handleSignInClick,
        handleInput,
        handleSignOutClick
    }
}