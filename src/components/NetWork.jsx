import '../style/components/NetWork.sass'
import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'


const NetWork = () => {
  return (
    <section id="social-networks">
      <a href="https://www.linkedin.com/in/vinicius-sim%C3%A3o-a9b085204/"className='social-btn'>
        <FaLinkedinIn id='linkedin'/>
      </a>
      <a href="https://github.com/viniciusimao"className='social-btn'>
        <FaGithub id='github'/>
      </a>
      <a href="https://www.instagram.com/vinisimaozinho/"className='social-btn'>
        <FaInstagram id='instagram'/>
      </a>
    
    </section>
  )
}

export default NetWork