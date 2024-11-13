import { useEffect, useState } from 'react'
import styles from '/assets/css/navBar.module.css'
import { animated, useSpring } from '@react-spring/web'
import { LuConciergeBell } from "react-icons/lu";
import imgLogo from '/assets/images/edits/logo-bellagio-white.png'
function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    const menuAnimation = useSpring({
        display: isOpen ? 'flex' : 'none',
        transform: isOpen ? 'transaleX(0)' : 'translateX(-100%)',
        opacity: isOpen ? 1 : 0,
        config: {tension: 220, friction: 12}
    })

    const burguerIcon = useSpring({
        opacity: isOpen ? 0 : 1,
        config: {duration: 300}
    })

    const closeIcon = useSpring({
        opacity: isOpen ? 1 : 0,
        config: {duration: 300}
    })

    function toggleIcon() {
        setIsOpen(!isOpen);
        let main = document.querySelector('main')
        if(isOpen) {
            main.style.opacity = '1'
        } else {
            main.style.opacity = '0.2'
        }
    }


    return (
        <nav className={styles.nav}>
            <div className={styles.nav__cont}>
                <div className={styles.contMenu}>
                    <animated.svg
                    style={burguerIcon} 
                    onClick={toggleIcon}
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className={`size-10 ${styles.btnBurguerMenu}`}
                    >
                        <path
                        className={styles.iconsMenu}
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </animated.svg>
                    <animated.svg style={closeIcon}  onClick={toggleIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 ${styles.iconsMenu} ${styles.btnCloseMenu}`}>
                        <path className={styles.iconsMenu} strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </animated.svg>
                </div>
                <div className={styles.nav__contMenuList}>
                    <ul className={`${styles.menuList} ${styles.menuListLarge}`}>
                        <li className={`${styles.menuItems} ${styles.menuItemsLarge}`}><a className={`${styles.menuBtns} ${styles.menuBtnsLarge}`} href="/menu">Menu</a></li>
                        <li className={`${styles.menuItems} ${styles.menuItemsLarge}`}><a className={`${styles.menuBtns} ${styles.menuBtnsLarge}`} href="/about">About us</a></li>
                        <li className={`${styles.menuItems} ${styles.menuItemsLarge}`}><a className={`${styles.menuBtns} ${styles.menuBtnsLarge}`} href="/contact">Contact</a></li>
                        <li className={`${styles.menuItems} ${styles.menuItemsLarge}`}><a className={`${styles.menuBtns} ${styles.menuBtnsLarge}`} href="/reserves">Reserves</a></li>                    
                    </ul>
                </div>
                <a className={styles.linkReserves} href="/reserves"><LuConciergeBell className={styles.iconReserves} style={{width: '33%', fontSize:'2.8rem', position: 'relative', left: '11%'}}/></a>
                <a href='/' className={styles.contLogo}>
                    <img src={imgLogo} className={styles.logoImg} alt="loo-restaurant"/>
                </a>
            </div>

            {/* Burguer menu */}
            
            <animated.div 
            className={styles.nav__openMenuCont}
            style={menuAnimation}>
                <ul className={styles.menuList}>
                    <li className={styles.menuItems}><a className={styles.menuBtns} href="/menu">Menu</a></li>
                    <li className={styles.menuItems}><a className={styles.menuBtns} href="/about">About us</a></li>
                    <li className={styles.menuItems}><a className={styles.menuBtns} href="/contact">Contact</a></li>
                    <li className={styles.menuItems}><a className={styles.menuBtns} href="/reserves">Reserves</a></li>                    
                </ul>
            </animated.div>
        </nav>
    )
}

export default NavBar