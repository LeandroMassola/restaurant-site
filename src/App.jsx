import styles from './app.module.css'
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Menu from './components/Menu'
import ViewingMenu from './components/ViewingMenu'
import About from './components/About'
import Reserves from './components/Reserves'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ConfirmReserve from './components/ConfirmReserve'

function App() {

  const location = useLocation();

  const [imgBg, setImgBg] = useState('')
  const [imgLoaded, setImgLoaded] = useState(false)

  const body = document.querySelector('body')

  useEffect(()=> {

    function getBgImage() {
      switch (location.pathname) {
        case '/':
          return ("url('/images/edits/bg-home-opacity.png')");
        
        case '/home':
          return ("url('/images/edits/bg-home-opacity.png')");
  
        case '/menu':
          return ("url('/images/edits/bg-menu-opacity.png')");

        case '/viewingMenu':
          configBackground.height = ''
          return ("url('/images/edits/bg-reading-menu.png')");
        
        case '/about':
          return ("url('/images/edits/bg-about-chef.png')");

        case '/reserves':
          return ("url('/images/edits/bg-reserves.png')");

        case '/contact':
          return ("url('/images/edits/bg-contact.png')");

        case '/confirmReserve':
          return ("url('/images/edits/bg-contact.png')");

        default:
          return('none');
      }
    }

    const image = new Image();
    const newBgImage =  getBgImage();
    image.src = newBgImage.replace("url('","").replace("')", "");
    image.onload = ()=> setImgBg(newBgImage)
/*     setImgBg(true)    
 */    
  }, [location.pathname])


  let configBackground = {
    backgroundImage: imgBg,
    backgroudRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    position: 'relative',
    height: 'auto'
/*     backgroundColor: 'rgb(0, 85, 106)'
 */  }

  body.style.backgroundImage = imgBg;
  body.style.backgroundRepeat = 'no-repeat';
  body.style.backgroundSize = 'cover';
  body.style.backgroundPosition = 'center';
  body.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
  body.style.height = 'auto'

  
  

  

/*   function handleLocation() {
    if(location.pathname == '/viewingMenu') {
      console.log('entro al if del app.jsx')
      configBackground.height = ''
    }
  }
 */

  const fade = useSpring({ opacity: imgBg ? 1 : 0, from: { opacity: 0 }, config: { duration: 700 } });
  return (
    <animated.div className={styles.mainApp} style={{...fade}} >
      
        
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/viewingMenu' element={<ViewingMenu imgLoaded: imgLoaded/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/reserves' element={<Reserves/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/confirmReserve' element={<ConfirmReserve/>}/>
          </Routes>
          <Footer />

    </animated.div>
  )
}

export default App
