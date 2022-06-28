import styles from './styles.module.scss';
import { 
    AiFillLinkedin,
    AiFillFacebook,
    AiFillYoutube,
    AiOutlineInstagram
} from 'react-icons/ai';
import {
    BsChevronRight
} from 'react-icons/bs';

export function Footer(){
    return (
        <footer
            className={styles.footer}
        >
            <div
                className={styles.content}
            >
                <div
                    className={styles.newsletter_and_menu}
                >
                    <section
                        className={styles.newletter}
                    >
                        <p>Inscreva-se em nossa <span style={{ display:'block', marginTop: 15 }}>Newletter</span></p>
                        
                        <div
                            className={styles.input_container}
                        >
                            <input 
                                type="text" 
                                placeholder='Email'
                                
                            />

                            <div
                                className={styles.input_button}
                            >
                                <BsChevronRight 
                                    size={25}
                                />
                            </div>
                        </div>
                    </section>

                    <ul>
                        <li>M E N U</li>
                        <li><a href="https://aiko.digital/home/">Página Inicial</a></li>
                        <li><a href="https://jobs.quickin.io/aiko/jobs">Trabalhe Conosco</a></li>
                        <li><a href="https://aiko.digital/blog/">Blog</a></li>
                        <li><a href="https://aiko.digital/contato/">Contato</a></li>
                    </ul>
                </div>

                <div
                    className={styles.contacts}
                >
                    <div
                        className={styles.email_and_telephone}
                    >
                        <p><a href="https://aiko.digital/home/">contact@aiko.digital</a></p>
                        <p>Telefone: (31) 3564-0815</p>
                    </div>

                    <ul>
                        <a href="https://www.linkedin.com/company/aiko-brasil/">
                            <AiFillLinkedin 
                                color='#FFF'
                                size={30}
                            />
                        </a>

                        <a href="https://www.facebook.com/aikodigital">
                            <AiFillFacebook 
                                color='#FFF'
                                size={30}
                            />
                        </a>

                        <a href="https://www.youtube.com/channel/UCMQHGszuw7rxoJBS2bR49mQ">
                            <AiFillYoutube 
                                color='#FFF'
                                size={30}
                            />
                        </a>

                        <a href="https://www.instagram.com/aiko.digital/">
                            <AiOutlineInstagram 
                                color='#FFF'
                                size={30}
                            />
                        </a>
                    </ul>
                </div>
            </div>
        </footer>
    )
}