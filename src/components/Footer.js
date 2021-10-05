import React from 'react';
import './HeaderStyle.css'

const URL = "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-Aiko-Brazil-EI_IE4729801.13,24.htm"
const URL_Linkedin ="https://www.linkedin.com/company/aiko-brasil/"
function Footer() {
  return(
    <footer id ="footer">
      <div className="footerContent">
        <h1>Brasil</h1>
        <br />
        <p>Feito com muito esforço e carinho para Aiko Digital!</p>
      </div>
      <div className="footerContent">
        <h2>Chile</h2>
        <p>contact@aiko.digital</p>
        <a className="linkFooter" href={URL} target="_blank" rel="noreferrer" >Glassdoor</a>
        <br />
        <a className="linkFooter" href={URL_Linkedin} target="_blank" rel="noreferrer">Linkedin</a>
      </div>
    </footer>
    )
}


export default Footer