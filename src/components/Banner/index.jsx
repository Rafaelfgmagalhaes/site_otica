import styles from './Banner.module.css';
import Image from 'next/image';
// import Capa from '../../../public/capa.png';

export default function Banner(){
    return(
        <section className={styles.banner}>
            <div className={styles.infoBanner}>
                <p>Preços baixos em</p>
                <div className={styles.destaque}>
                    <p><strong>ÓCULOS DE </strong></p>
                    <p><strong>GRAU E DE SOL</strong></p>
                </div>
                <p>você só encontra aqui</p>
            </div>
        </section>
    )
}
