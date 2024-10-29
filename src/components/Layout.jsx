import { useLocation } from "react-router-dom"

export default function Layout({children}) {
    let location = useLocation();

    function getBgImage() {
        switch (location.pathname) {
            case '/':
                return ("url('../assets/images/edits/bg-home-opacity.png')")

            case '/menu':
                return ("url('../assets/images/edits/pexels-rachel-claire-5490900.jpg')")

            default:
                break;
        }
    }
    return(
        <div style={{ backgroundImage: getBgImage(), backgroundSize: 'cover' }}>
            {children}
        </div>
    )
}