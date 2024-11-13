import { useEffect, useState } from "react";
import styles from '../assets/css/reviews.module.css'
import { IoStar } from "react-icons/io5";
import { GiLaurels } from "react-icons/gi";



export default function Review() {

    const [placeId, setPlaceId] = useState(null);
    const [reviews, setReviews] = useState(null);
    const [error, setError] = useState(null);

    let apiKey = import.meta.env.VITE_API_KEY
    const placeName = 'Moll de Bellagio, Puerto Pollença'
    const url = `https://maps.googleapis.com/api/place/findplacefromtext/json?input=${encodeURIComponent(placeName)}&inputtype=textquery&fields=place_id&key=${apiKey}`;
    let position = {
        lat: 39.90868626880527,
        lng: 3.0836899493710392
    }
    
    async function getIdPlace() {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            })
            const placeDetails = await response.json();
            const idPlace = placeDetails.candidates[0].place_id; 
            console.log(idPlace)
            if(idPlace) {
                setPlaceId(idPlace)
            }
        } catch (error) {
            console.log('error: ' + error);
            setError('Error al guardar el placeID')
        }
    }

    

    async function getReviews(id) {

        let urlDetailPlace = `api/maps/api/place/details/json?place_id=${id}&fields=reviews,name&key=${apiKey}`

        try {
            const response = await fetch(urlDetailPlace, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            const placeDetails = await response.json();
            console.log(placeDetails)
            const reviews = placeDetails.result.reviews

            if(reviews) {
                console.log('reseñas: ' + reviews);
                setReviews(reviews)
            }
        } catch (error) {
            console.log('error: ' + error)
            setError('Error al guardar las reviews')
        }
    }

    useEffect(()=> {
        getIdPlace()
    }, [])

    useEffect(()=> {
        if(placeId) {
            getReviews(placeId)
        }
    }, [placeId])
    return(
        <div className={styles.contReviews}>
            
            {reviews && reviews.map((review, index) => (
                <div className={styles.cardReview} key={index}>
                    <GiLaurels className={styles.laurels}/>
                    <h5 className={styles.nameReview}>{review.author_name}</h5>
                    <p className={styles.descReview}>{review.text}</p>
                    <p className={styles.ratingReview}>{review.rating}<IoStar /></p>
                </div>
            ))}
            {error && <p>{error}</p>}
        </div>
    )
}