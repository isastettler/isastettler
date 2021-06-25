import { Github, Linkedin, Minutemailer, Spotify } from "@icons-pack/react-simple-icons";
import { useState } from 'react';

const Icon = () => {
    const [style, setStyle] = useState('icon-enter')
    setTimeout(() => {
        setStyle('icon');
    }, 5000)
    return <div style={{display: 'flex', justifyContent: 'center'}}>
        <Minutemailer className={`${style}`} onClick={()=> console.log('clicked!')}/>
        <Linkedin className={`${style}`} onClick={()=> window.open('https://www.linkedin.com/in/stettlerisabelle/', '_blank').focus()}/>
        <Github className={`${style}`} onClick={()=> window.open('https://github.com/isastettler', '_blank').focus()}/> 
        <Spotify className={`${style}`} onClick={()=> window.open('https://open.spotify.com/user/1154029168?si=3151fc984b8f4948', '_blank').focus()}/>
        </div>
  }
export default Icon;