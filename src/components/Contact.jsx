import { useState, useEffect } from "react";
import styles from '../assets/css/contact.module.css'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";




export default function Contact() {

    let apiKey = 'AIzaSyBbjjMKyKRL9YwKqdmVV-GiLPqBjLY62p8'
    let center = {
        lat: 39.90868626880527,
        lng: 3.0836899493710392
    }


    let getBody = document.querySelector('body');
    const [bodyContact, setBodyContact] = useState(getBody)
    useEffect(()=> {
        bodyContact.style.backgroundColor = 'rgba(0,0,0,0.8)'
    }, [])


    return(
        <main className={styles.mainContact}>
            <div className={styles.container}>
                
                <h1 className={styles.titleContact}>Contact us</h1>
                {/* <form className={styles.formContact} action="#" method="POST">

                    <div className={styles.contField}>
                        <label htmlFor="name" className={styles.nameField}>Complete Name:</label>
                        <input placeholder="Write your name..." type="text" name='name' id='name' className={styles.inputField} />
                    </div>

                    <div className={styles.contField}>
                        <label htmlFor="phone" className={styles.nameField}>Phone Number:</label>
                        <input placeholder="Write your phone number..." type="number" name='number' id='number' className={styles.inputField} />
                    </div>

                    <div className={styles.contField}>
                        <label htmlFor="subject" className={styles.nameField}>Subject:</label>
                        <input placeholder="Subject of the message..." type="text" name='subject' id='subject' className={styles.inputField} />
                    </div>

                    <div className={styles.contField}>
                            <label htmlFor="message" className={styles.nameField}>Message:</label>
                            <textarea placeholder="Write your message..." type="text" name='message' id='message' className={styles.inputField} />
                    </div> 

                    <div className={styles.contBtns}>
                        <button className={styles.submitBtn} type='submit'>
                            Send
                        </button>

                        <button className={styles.resetBtn} type='reset'>
                            Reset
                        </button>
                    </div>

                </form> */}

            </div>

            <div className={styles.containerContactData}>
                <ul className={styles.listData}>
                    <li className={styles.itemData}><IoIosMail className={styles.iconData} /><span className={styles.textContact}>contact@restaurant.com</span></li>
                    <li className={styles.itemData}><FaWhatsapp className={styles.iconData} /><span className={styles.textContact}>+34 655 112 334</span></li>
                    <li className={styles.itemData}><HiLocationMarker className={styles.iconData} /><span className={styles.textContact}>Carrer de Llevant 70</span></li>
                </ul>
                <LoadScript googleMapsApiKey={apiKey} >
                    <GoogleMap  mapContainerClassName={styles.mapContStyle} center={center} zoom={17}>
                        <Marker position={center}/>
                    </GoogleMap>
                </LoadScript>
            </div>
            
        </main>
    )
}