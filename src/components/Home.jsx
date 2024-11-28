import styles from '../assets/css/home.module.css'
import {Lottie} from 'react-lottie'
import {Player} from '@lottiefiles/react-lottie-player'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Xarrow from 'react-xarrows'
import arrowDraw from '../assets/animations/arrowDraw.json'
import { useEffect, useRef, useState } from 'react'
import Review from './Review'
import { animated, useSpring, easings } from 'react-spring'
import { useOnScreen } from '../hooks/hookUseOnScreen.jsx'
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
import { Link } from 'react-router-dom'


export default function Home() {

    const mainHeader = useRef()
    const arrowAnimation = useRef()
    const textArrow = useRef()
    const breakHome = useRef()
    const reviews = useRef()

    const [isContentLoaded, setIsContentLoaded] = useState(null)

    

    const isHeaderVisible = useOnScreen(mainHeader, '-100px');
/*     const isArrowVisible = useOnScreen(arrowAnimation, '-100px');
 */    const isTextArrowVisible = useOnScreen(textArrow, '-100px');
    const isBreakHomeVisible = useOnScreen(breakHome, '-100px');
    const isReviewsVisible = useOnScreen(reviews, '-100px')

    const fadeHeader = useSpring({
        opacity: isHeaderVisible ? 1 : 0,
        config: { duration: 1300 }
    });
    /* const fadeArrow = useSpring({
        opacity: isArrowVisible ? 1 : 0,
        config: { duration: 1300 }
    }); */
    const fadeText = useSpring({
        opacity: isTextArrowVisible ? 1 : 0,
        config: { duration: 1300 }
    });
    const fadeBreak = useSpring({
        opacity: isBreakHomeVisible ? 1 : 0,
        config: { duration: 1300 }
    });
    const fadeReviews = useSpring({
        opacity: isReviewsVisible ? 1 : 0,
        config: { duration: 1300 }
    });

    useEffect(()=> {
        /* if(arrowAnimation.current) {
            arrowAnimation.current.style.fill = 'none';
            arrowAnimation.current.style.stroke = 'black';
            arrowAnimation.current.style.strokeWidth = '2px';
        } */
        if(isHeaderVisible) {
            setIsContentLoaded(true)
        } else {
            setIsContentLoaded(false)
        }
    },[isHeaderVisible])

    let configAnimation = {
        animationData: arrowDraw,
        loop: false,
        autoPlay: false,
    }

    const fadeTitle = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        delay: 500,
        config: {
            velocity: -50,
            duration: 1000,
        }
    })
    const fadeLottie = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        delay: 2000,
        config: {
            velocity: -250,
        }
    })

    const fadeArrow = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        delay: 2000,
        config: {
            velocity: -250,
        }
    })

    const fadeLinkMenu = useSpring({
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


    return (
        <animated.main className={styles.mainHome}>
            <animated.h1 id='mainHeader' ref={mainHeader} /* style={fadeTitle} */ className={styles.mainHeader}>Welcome to Moll de Bellagio</animated.h1>
            
            
            {/* <DotLottieReact
                src="https://lottie.host/b67522ff-c3e6-4194-8deb-ed9f1c73371e/zNFWFO2Agt.lottie"
                autoplay
                className={styles.playerLottie}
                style={{...fadeLottie}}
            /> */}

            {/* <Lottie
                    lottieRef={arrowAnimation}
                    className= {styles.arrowHome}
                    options={configAnimation}
                    width={120}
                    height={120}
                    style={{rotate:'90deg', position:'static', margin:'0', transition: '1s' }}
            /> */}
            
            {/* <animated.div style={fadeArrow} rel={arrowAnimation} className={styles.contArrowMenu}>
                <LiaLongArrowAltDownSolid size={100} className={styles.arrowSvg}/>
            </animated.div> */}
            <Link id='textMenu' ref={textArrow} /* style={fadeLinkMenu} */ to='/menu' className={styles.textArrowMenu}>View Menu</Link>

            <Xarrow color="white"  strokeWidth={3}  headSize={6} animateDrawing={true} showHead={true} className={styles.playerLottie} start='mainHeader' end='textMenu'/>

            <animated.hr style={fadeBreak} ref={breakHome} className={styles.breakHr} />
            <animated.section style={fadeReviews} ref={reviews} className={styles.sectionReviews}>
            <h3 className={styles.headerReviews}>Our clients recommend us!</h3>
                <div className={styles.containerReviews}>
                    
                    <Review />
                </div>
            </animated.section>

        </animated.main>
    )
}