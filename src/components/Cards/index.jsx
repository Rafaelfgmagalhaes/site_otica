import styles from './Cards.module.css';
import Image from 'next/image';
import Oculos1 from '../../../public/oculos01.png';
import Oculos2 from '../../../public/oculos02.png';
import Oculos3 from '../../../public/oculos03.png';
import Oculos4 from '../../../public/oculos04.png';

export default function Cards(){
    return(
        <div className={styles.areaCards}>
            <div className={styles.card}>
                <h3>Óculos de grau</h3>
                <Image className={styles.fotoOculos} src={Oculos1} alt='oculos de grau'></Image>
                <p>R$500,00</p>
            </div>
            <div className={styles.card}>
                <h3>Óculos transition</h3>
                <Image className={styles.fotoOculos} src={Oculos2} alt='oculos transition'></Image>
                <p>R$750,00</p>
            </div>
            <div className={styles.card}>
                <h3>Óculos de sol</h3>
                <Image className={styles.fotoOculos} src={Oculos3} alt='oculos de sol'></Image>
                <p>R$700,00</p>
            </div>
            <div className={styles.card}>
                <h3>Óculos infantil</h3>
                <Image className={styles.fotoOculos} src={Oculos4} alt='oculos infantil'></Image>
                <p>R$500,00</p>
            </div>
        </div>
    )
}