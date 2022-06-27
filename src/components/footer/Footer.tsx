import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'
import "./footer.css";

const Footer = () => {
  return (
    <div className="f">
      <div className="f-social">
        <a className="f-icon" href="https://www.github.com/Maaath/" target="_blank" rel="noreferrer" >
          <FaGithub size="40"  color="#fff"/>
        </a>  
        <a className="f-icon" href="https://www.linkedin.com/in/math-macedo/" target="_blank" rel="noreferrer" >
          <FaLinkedin size="40"  color="#fff"/>
        </a>  
      </div>
      <p className="f-copyright">Made with <FaHeart color="#B51942"/> by Matheus Macedo</p>
    </div>
  )
}

export default Footer