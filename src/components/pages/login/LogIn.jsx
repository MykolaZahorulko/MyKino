import React from 'react';
import styles from './LogIn.module.scss';
import Button from "../../ui/button/Button.jsx";
import {Link} from 'react-router-dom';
import {useLogInState} from "../../../hooks/LogInHooks.jsx";

const LogIn = () => {
    const {
        userName,
        message,
        isSignedIn,
        isWarning,
        handleSignInClick,
        handleInput,
        handleSignOutClick
    } = useLogInState()

    return (
        <div className={styles.login}>
            <div className={styles.container}>
                <div className={styles.login__content}>
                    {isSignedIn ? (
                        <div className={`${styles.login__content_signedin} ${isSignedIn ? styles.signed : ''}`}>
                            <h2 className={styles.login__content_signedin_title}>{message}</h2>
                            <p className={styles.login__content_signedin_welcome}>
                                Here you can choose a movie to watch
                                <br/>
                                <Link to={'/MyKino'}> Go to the main page <span>››</span></Link>
                            </p>
                            <Button
                                className={styles.login__button}
                                onClick={handleSignOutClick}
                            >
                                Sign out
                            </Button>
                        </div>
                    ) : (
                        <div className={styles.login__content_signedin}>
                            <form action="/" className={styles.login__form}>
                                <div
                                    className={`${styles.login__form_warning_message} ${isWarning.isNeeded ? styles._active : ''}`}>
                                    {isWarning.message}
                                </div>
                                <input
                                    className={styles.login__input}
                                    name="userName"
                                    type="text"
                                    placeholder={'Your name'}
                                    value={userName}
                                    onChange={(e) => {
                                        handleInput(e);
                                    }}
                                />
                            </form>
                            <Button
                                className={styles.login__button}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleSignInClick();
                                }}
                            >
                                Sign in
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LogIn;
