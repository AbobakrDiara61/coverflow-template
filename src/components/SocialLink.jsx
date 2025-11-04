import { faFacebook, faInstagram, faLinkedin, faTwitch } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const defaultLinks = [
  {
    icon: faFacebook,
    path: "https://www.facebook.com/",
  },
  {
    icon: faTwitch,
    path: "https://www.twitch.tv/",
  },
  {
    icon: faLinkedin,
    path: "https://www.linkedin.com/",
  },
  {
    icon: faInstagram,
    path: "https://www.instagram.com/",
  }
]
const SocialLink = ({links = defaultLinks}) => {
  return (
    <ul className='flex gap-2.5'>
      {
        links.map(({icon, path}) => 
        <li>
          <a href={path} className='flex justify-center items-center w-11 h-11 rounded-full overflow-hidden text-2xl text-white faded-gradient transform hover:-translate-y-1 border border-white/20 hover:border-transparent shadow-lg hover:shadow-main/40'>
            <FontAwesomeIcon icon={icon} />
          </a>
        </li>
        
         
      )}
    </ul>
  )
}

export default SocialLink
