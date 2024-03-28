import styles from './Footer.module.css';
import Image from 'next/image';
import Logo1 from '../../../public/local.png';
import Logo2 from '../../..//public/telefone.png';
import Logo3 from '../../../public/email.png';
import Logo4 from '../../../public/fb.png';
import Logo5 from '../../../public/ig.png';
import Logo6 from '../../../public/tt.png';

export default function Footer(){
    return(
        <footer className={styles.rodape} id="contato">
            <div className={styles.infoRodape}>
                <h2>FALE CONOSCO</h2>
                <p>Não perca tempob venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou centro de atendimento.</p>
            </div>
            <div className={styles.redes}>
                <div className={styles.redeContatos}>
                    <h3>Nossos Contato</h3>
                    <ul type="none">
                        <li className={styles.local}>Nova Iguaçu - RJ</li>
                        <li className={styles.tel}>(21) 99999-8888</li>
                        <li className={styles.mail}>contato@oticasvida.com.br</li>
                    </ul>
                </div>

                <div className={styles.redesSociais}>
                    <h3>Nossas Redes sociais</h3>
                    <ul type="none">
                         <li className={styles.face}>/oticasvida</li>
                         <li className={styles.insta}>@oticasvida</li>
                         <li className={styles.twiter}>@oticasvida</li>
                    </ul>
                </div>
            </div>

            <p className={styles.copyright}>&copy;2024 oticas vida - todos os direitos reservados</p>
        
        </footer>
    )
}