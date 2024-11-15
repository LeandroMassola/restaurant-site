import { useLocation, useNavigate } from 'react-router-dom'
import styles from '../assets/css/viewingMenu.module.css'
import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Card from './Card.jsx'

export default function ViewingMenu() {

    


    let animationLoad = useSpring({
        from: {opacity:0},
        to: {opacity: 1},
        config: {duration: 2000}
    })

    const location = useLocation();
    const [stateCategory, setStateCategory] = useState(location.state.category)
    function handleChangeCategory(e) {
        e.preventDefault();
        setStateCategory(e.target.name)
        console.log(e.target.name);
        return stateCategory
    }
    return (

        <animated.section style={animationLoad} className={styles.main}>
            <Card handleChangeCategory={handleChangeCategory} stateCategory={stateCategory} />
            <hr className={styles.lineBreaks}/>
            <hr className={styles.lineBreakTwo} />
            <div className={styles.contListCategories}>
                <ul className={styles.listCategories}>
                    <li className={`${styles.itemList} ${stateCategory == 'Starters'? `${styles.activeLink}` : ''}`}><a href='#' onClick={handleChangeCategory} name='Starters'  className={styles.linksList} >Starters</a></li>
                    <li className={`${styles.itemList} ${stateCategory == 'Main Courses'? `${styles.activeLink}` : ''}`}><a href='#' onClick={handleChangeCategory} name='Main Courses' className={styles.linksList} >Main Courses</a></li>
                    <li className={`${styles.itemList} ${stateCategory == 'Desserts'? `${styles.activeLink}` : ''}`}><a href='#' onClick={handleChangeCategory} name='Desserts' className={styles.linksList} >Desserts</a></li>
                    <li className={`${styles.itemList} ${stateCategory == 'Drinks'? `${styles.activeLink}` : ''}`}><a href='#' onClick={handleChangeCategory} name='Drinks' className={styles.linksList}>Drinks</a></li>
                </ul>
            </div>
        </animated.section>
    )
}