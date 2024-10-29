import { useState, useEffect } from "react";
import styles from '../assets/css/card.module.css'


export default function Card({stateCategory}) {
    const [menuToShow, setMenuToShow] = useState([])

    useEffect(() => {

        const fetchMenu = async () => {
            try {
                const response = await fetch('/menu.json');
                const data = await response.json();
                console.log('Datos recibidos del JSON:', data);
                setMenuToShow(data);
                /* setLoading(false);  // Una vez que los datos se cargan, se detiene el "loading" */
            } catch (error) {
                console.error('Error al cargar el menú:', error);
                /* setLoading(false);  // Detener "loading" incluso si ocurre un error */
            }
        };
        
        fetchMenu()
    }, [stateCategory])

    const filteredMenu = menuToShow?.[stateCategory] || [];


    if (filteredMenu.length === 0) {
        return <p>No hay platos en esta categoría</p>;
    }
    
    return(
        <div className={styles.main}>
            <h4 className={styles.titleMenu}>{stateCategory}</h4>
            <div className={styles.contDish}>
            {filteredMenu.map((dish, key) => {
                return (
                    <div key={dish.id} className={styles.mainContainer}>
                        <h5 className={styles.headerMenu}>{dish.name}</h5>
                        <div className={styles.contCard}>
                            <p className={styles.dishDescription}>
                                {dish.description}
                            </p>
                        </div>
                    </div>
                )
            } )}
            </div>
            
        </div>
    )
}