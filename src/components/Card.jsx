import Logo from './Logo'

const technologies = [{
  name: "HTML5",
  link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
}, {
  name: "CSS3",
  link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
}, 
{
  name: "JavaScript",
  link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
},
{
  name: "Responsive",
  link: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design"
}]

const cornerStyle = {
  width: "80px",
  height: "80px",
  borderColor: "#667eea66",
  position: "absolute",
}
const style = "absolute w-20 h-20 rounded-tl-3xl border-main/40";

const Card = () => {
  return (
    <div className='relative text-center w-full max-w-96 light-bg p-8 ring-2 ring-white/10 rounded-4xl'>
      <div className='-right-10 -bottom-10 rounded-br-3xl border-r-2 border-b-2' style={cornerStyle}></div>
      <div className={`${style} -left-10 -top-10 border-l-2 border-t-2`}></div>
      <div className='w-32 h-20 my-5 mx-auto flex justify-center items-center main-gradient rounded-4xl shadow-xl shadow-accent/40'>
        <Logo />
      </div>
      <h4 className='text-3xl text-white font-bold mb-6'>3D Coverflow</h4>
      <p className='text-gray-300 max-w-80 mx-auto'>Transform your image galleries into immersive 3D experiences</p>
      <ul className='flex justify-center flex-wrap gap-5 mt-8'>
        {
          technologies.map(tech => 
            <li className='faded-gradient overflow-hidden py-2 rounded-full shadow-lg hover:shadow-accent/50' key={`${tech.name}-feature`}>
              <a href={tech.link} className=' text-gray-300 hover:text-white bg-white/5 border border-white/20 hover:border-transparent px-5 py-2 rounded-full backdrop-blur-md transition-all duration-300' >{tech.name}</a>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default Card
