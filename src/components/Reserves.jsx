import { useState, useEffect } from 'react';
import styles from '../assets/css/reserves.module.css'
import Success from './Success';

export default function Reserves() {
    const [formData, setFormData] = useState({completeName:'', phone: '', dateTime: '', numberOfPeople: '', commentarys: '' })
    
    async function handleSendReserve(e) {
        e.preventDefault();

        const response = await fetch(import.meta.env.VITE_URL_CALL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })

        if (response.ok) {
            console.log('Mensaje enviado con éxito');
            
        } else {
            console.log('error al enviar el mensaje');
            
        }
    }

    return(
        <main className={styles.mainReserves}>
            <div className={styles.container}>
                <h1 className={styles.titleReserves}>Book a table!</h1>
                <form className={styles.formReserves} onSubmit={handleSendReserve}>
                    <div className={styles.contField}>
                        <label htmlFor="name" className={styles.nameField}>Complete Name:</label>
                        <input type="text" name='name' id='name' value={formData.completeName} onChange={(e)=> setFormData({...formData, completeName: e.target.value})} className={styles.inputField} />
                    </div>

                    <div className={styles.contField}>
                        <label htmlFor="phone" className={styles.nameField}>Phone Number:</label>
                        <input type="number" name='number' id='number' value={formData.phone} onChange={(e)=> setFormData({...formData, phone: e.target.value})} className={styles.inputField} />
                    </div>

                    <div className={styles.contField}>
                        <label htmlFor="timeDate" className={styles.nameField}>Date / Time:</label>
                        <input type="date" name='timeDate' id='timeDate' value={formData.dateTime} onChange={(e)=> setFormData({...formData, dateTime: e.target.value})} className={styles.inputField} />
                    </div>

                    <div className={styles.contField}>
                        <label htmlFor="numberPeople" className={styles.nameField}>Number of people:</label>
                        <input type="number" name='numberPeople' id='numberPeople' value={formData.numberOfPeople} onChange={(e)=> setFormData({...formData, numberOfPeople: e.target.value})} className={styles.inputField} />
                    </div>

                    <div className={styles.contField}>
                        <label htmlFor="commentary" className={styles.nameField}>Commentarys:</label>
                        <textarea type="text" name='commentary' id='commentary' value={formData.commentarys} onChange={(e)=> setFormData({...formData, commentarys: e.target.value})} className={styles.inputField} />
                    </div>

                    <div className={styles.contBtns}>
                        <button className={styles.submitBtn} type='submit'>
                            Send
                        </button>

                        <button className={styles.resetBtn} type='reset'>
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}