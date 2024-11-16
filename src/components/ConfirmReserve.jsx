import { useSearchParams } from "react-router-dom";
import styles from '../assets/css/confirmReserve.module.css'
import { useState, useEffect } from "react";

export default function ConfirmReserve() {
    const [searchParams] = useSearchParams();
    const reservationId = searchParams.get("reservationId");
    
    const [name, setName] = useState('')
    const [phone, setPhone] = useState()
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    console.log(reservationId);
    

    useEffect(()=> {
        getData()
    })

    async function getData() {
        try {
            const response = await fetch(`${import.meta.env.VITE_URL_CALL}/confirmReserve/${reservationId}`)
            console.log(response);
            
            if(response.ok) {
                const reservationData = await response.json();
                const formatDate = reservationData.date.slice(0,10)
                const [year, month, day] = formatDate.split('-')
                const finalDate = `${day}-${month}-${year}`
                setName(reservationData.completeName)
                setPhone(reservationData.phone)
                setDate(finalDate)
                setTime(reservationData.time)
                console.log(reservationData)
            } else {
                console.log('No se ha encontrado la reserva');
            }

        } catch (error) {
            console.log('error en el catch: ' + error);
            
        }
    }
    
    async function handleSubmit(status) {
        console.log(status);
        try {

            
            const response = await fetch(`${import.meta.env.VITE_URL_CALL}/confirmReserve`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({reservationId, status, phone})
            })
            console.log(response);
            
            if(response.ok) {
                console.log(`Reserva ${status}`)
            } else {
                console.log('No se ha podido aceptar la reserva');
                
            }
        } catch (error) {
            console.log('se produjo un error en el catch: ' + error)
        }
        
        
    }
    return (
        <main className={styles.mainConfirm}>
            <h1 className={styles.titleConfirm}>Confirmar Reserva</h1>
            <div className={styles.contConfirmation}>
                <p className={styles.textConfirmation}>¿Desea confirmar o rechazar la reserva de: <u><strong>{name}</strong></u>
                    <br />
                    con telefono:
                    <br /> 
                    <u><strong> {phone}</strong></u>
                    <br />
                    el día: 
                    <br />
                    <u><strong>{date}</strong></u>
                    <br />
                    a la hora:
                    <br />
                    <u><strong>{time}</strong></u>
                    ?
                    </p>
                <div className={styles.contBtns}>
                    <button className={styles.btnConfirmation} onClick={()=>handleSubmit('confirmada')} name="confirm" type="submit">Confirmar</button>
                    <button className={styles.btnDeny} onClick={()=>handleSubmit('rechazada')} name="deny" type="submit">Denegar</button>
                </div>
            </div>
        </main>
    )
}