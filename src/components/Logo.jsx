
const Logo = ({color="#ffffff", strokeColor="#ffffff" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg" 
      className='w-10 h-10'
    >
      <defs>
        <linearGradient id="mainGrad" x1="0%" y1="0%" x2="100%" y2="100%" >
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>
      </defs>
      <rect 
        x="10" 
        y="25" 
        width="15" 
        height="50" 
        fill={color}
        transform="rotate(-15 17.5 50)" 
        opacity="0.9" 
      />
      <rect 
        x="35" 
        y="15" 
        width="15" 
        height="70" 
        fill={color}
        />
      <rect 
        x="60" 
        y="25" 
        width="15" 
        height="50" 
        fill={color}
        transform="rotate(15 67.5 50)" 
        opacity="0.9" 
      />
      <circle cx="50" cy="50" r="45" fill="none" stroke={strokeColor} strokeWidth="2" opacity="0.3" />
    </svg>
  )
}

export default Logo
