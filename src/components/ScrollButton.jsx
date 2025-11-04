import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

const ScrollButton = () => {
    const scrollToTop = () => {
        window.scrollTo( {
            top:0,
            behavior: "smooth"
        })
    }
    return (
        <button 
            className={`w-12 h-12 flex justify-center items-center rounded-full fixed right-8 bottom-8 z-10 main-gradient text-white text-sm hover:shadow-md shadow-accent transfrom -translate-y-2 transition-all duration-300 `} 
            onClick={scrollToTop}
        >
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
    )
}

export default ScrollButton
