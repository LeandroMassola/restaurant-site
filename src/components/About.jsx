import { useState, useEffect } from "react";
import styles from '../assets/css/about.module.css'


export default function About() {



    return(
        <main className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.titleAbout}>
                    About Us
                </h1>
                <p className={styles.descAbout}>
                    Welcome to Moll de Bellagio, a restaurant where the flavors of the Mediterranean meet the charm of Italy. Located in the heart of the city, we draw inspiration from the picturesque beauty of Bellagio, the jewel of Lake Como. Just like the bustling port that shares our name, Moll de Bellagio is a place where culture, tradition, and the freshest ingredients converge.

                    Our story began with a simple idea: to bring the vibrant tastes of the Mediterranean and Italian coasts to your table. Founded by passionate food lovers, our restaurant was born out of a desire to celebrate authentic cuisine crafted with love, tradition, and a modern touch. From the sun-kissed olive groves of Greece to the rich, flavorful pastas of Italy, every dish at Moll de Bellagio is a tribute to the regions that inspire us.
                </p>
                <h1 className={styles.titleMission}>
                    Our Mission
                </h1>
                <p className={styles.descMission}>
                    At Moll de Bellagio, our mission is to offer an unforgettable dining experience. We believe in the power of food to bring people together, and our aim is to create a space where you can share delicious meals with friends and family in a warm, welcoming environment. We are committed to sourcing the freshest ingredients, supporting local farmers, and staying true to the traditional methods of Mediterranean and Italian cooking.

                    Come and enjoy a taste of the Mediterranean with us—where every meal is crafted with passion and every visit is like a journey to the shores of Bellagio.
                </p>
                
            </div>
        </main>
    )
}