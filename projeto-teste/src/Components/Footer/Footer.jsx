import React from 'react'
import Style from './Footer.module.css'
import github from '../../Assets/img/github.png'
import linkedin from '../../Assets/img/linkedin.png'

function Footer() {
  return (
    <footer className={Style.rodape}>
        <p className={Style.p_rodape}>Todos os direitos reservados &copy; 2022 Fernanda Pereira</p>

        <section className={Style.logos}>
          <a href="https://github.com/FernandaPereira-S" target="_blank"><img src={github} alt="github" className={Style.icone}/></a>
          <a href="https://www.linkedin.com/in/fernandapereiradasilva/" target="_blank"><img src={linkedin} alt="linkedin" className={Style.icone}/></a>
        </section>
    </footer>
  )
}

export default Footer