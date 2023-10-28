import React from 'react'
import styles from './Footer.module.scss'
import Logo from "../../ui/logo/Logo.jsx"
import Button from "../../ui/button/Button.jsx"
import {Link} from 'react-router-dom'
import {FaTelegramPlane as TelegramIcon} from 'react-icons/fa'
import {BsBookmark as FavoriteIcon, BsGrid as SelectionIcon} from 'react-icons/bs'


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <hr style={{border: "1px solid #ccc"}}/>
                <div className={styles.footer__navigation}>
                    <div className={styles.footer__left_content}>
                        <Logo
                            className={styles.footer__logo}
                        />
                        <Button className={styles.footer__button} to="https://web.telegram.org/a/">
                            <div className={`${styles.img} ${styles.footer__button_telegram_icon}`}>
                                <TelegramIcon/>
                            </div>
                            <span className={styles.footer__button_text}>We in Telegram</span>
                        </Button>
                    </div>
                    <div className={styles.footer__center_content}>
                        <Link to="/selections" className={styles.footer__center_content_item}>
                            <div className={`${styles.img} ${styles.footer__center_content_icon}`}>
                                <SelectionIcon/>
                            </div>
                            <div className={styles.footer__center_content_text}>Selections</div>
                        </Link>
                        <Link
                            to="/favorites"
                            className={styles.footer__center_content_item}>
                            <div className={`${styles.img} ${styles.footer__center_content_icon}`}>
                                <FavoriteIcon/>
                            </div>
                            <div className={styles.footer__center_content_text}>Favorites</div>
                        </Link>
                    </div>
                </div>
                <hr style={{border: "1px solid #ccc"}}/>
                <div className={styles.footer__information}>
                    <div className={styles.footer__information_contacts}>
                        Our contacts <span>mykino.team@gmail.com</span>
                    </div>
                    <div className={styles.footer__information_rights}>
                        2023 All right reserved
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer
