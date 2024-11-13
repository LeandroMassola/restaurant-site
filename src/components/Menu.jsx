import styles from '../../public/assets/css/menu.module.css'
import {animated, useSpring} from 'react-spring'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';

export default function Menu() {


    
    const fadeSection = useSpring({
        from: {opacity: 0},
        to: {opacity:1},
        config: {duration: 3000}
    })

    /* const arrowAnimation = useSpring({
        from: {x:-200},
        to:{x:20},
        config: {tension: 220, duration: 500,
        },
    })  */

    

    const startersLink = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        delay: 1000,
        config: {
            velocity: -50,
            duration: 1000,
        }
    })
    const mainCoursesLink = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        delay: 1500,
        config: {
            velocity: -50,
            duration: 1000,
        }
    })
    const dessertsLink = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        delay: 2000,
        config: {
            velocity: -50,
            duration: 1000,
        }
    })
    const drinksLink = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        delay: 2500,
        config: {
            velocity: -50,
            duration: 1000,
        }
    })

    const [isHovered, setIsHovered] = useState(null)

    const rotateArrowAnimation = (isHovered) => useSpring({
            x: isHovered ? 40 : 0,
            tension: 200,
            config: {
            friction: 50
            }
        })
    
    
    const navigate = useNavigate()


    function getCategory(e) {
        
        console.log('esta es la categoria elegida en /menu : ' + e.target.name)
        let categoryChosen = e.target.name
        navigate('/viewingMenu', {state: {from: '/menu', category: categoryChosen}})
        let body = document.querySelector('body');
    }

    /* Lea.. usa el navigate, y com segundo paraametro pasale el estado, y recibilo en el viewingMenu a traves del useLocation.state y de ahi con un switch mostras el menu dinamico */

    return(
        <main className={styles.mainMenu}>

            <animated.section style={fadeSection} className={styles.contMenu}>
                <div className={styles.contArrowMenu}>
                    <animated.svg  style={{...startersLink, ...rotateArrowAnimation(isHovered == 'starters')}}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 ${styles.arrowTo}`}>
                        <path  strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </animated.svg>
                    <animated.a onMouseEnter={()=> setIsHovered('starters')} onMouseLeave={()=> setIsHovered(null)} name='Starters' onClick={getCategory} style={startersLink} className={styles.linksMenu} >Starters</animated.a>
                </div>

                <div className={styles.contArrowMenu}>
                    <animated.svg style={{...mainCoursesLink, ...rotateArrowAnimation(isHovered == 'mainCourses')}}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 ${styles.arrowTo} ${styles.arrowToMainCourses}`}>
                        <path  strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </animated.svg>
                    <animated.a onMouseEnter={()=> setIsHovered('mainCourses')} onMouseLeave={()=> setIsHovered(null)} name='Main Courses' onClick={getCategory} style={mainCoursesLink} className={styles.linksMenu} >Main Courses</animated.a>
                </div>

                <div className={styles.contArrowMenu}>
                    <animated.svg style={{...dessertsLink, ...rotateArrowAnimation(isHovered == 'desserts')}}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 ${styles.arrowTo}`}>
                        <path  strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </animated.svg>
                    <animated.a onMouseEnter={()=> setIsHovered('desserts')} onMouseLeave={()=> setIsHovered(null)} name='Desserts' onClick={getCategory} style={dessertsLink} className={styles.linksMenu} >Desserts</animated.a>
                </div>

                <div className={styles.contArrowMenu}>
                    <animated.svg  style={{...drinksLink, ...rotateArrowAnimation(isHovered == 'drinks')}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 ${styles.arrowTo}`}>
                        <path  strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </animated.svg>
                    <animated.a onMouseEnter={()=> setIsHovered('drinks')} onMouseLeave={()=> setIsHovered(null)} name='Drinks' onClick={getCategory} style={drinksLink} className={styles.linksMenu} >Drinks</animated.a>
                </div>
            </animated.section>


        </main>
    )
}