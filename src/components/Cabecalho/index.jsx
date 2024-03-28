import styles from './Cabecalho.module.css';
import Image from 'next/image';
import Logo from '../../../public/logo.png';
import Link from 'next/link';

export default function Cabecalho(){
    return(
        <header className={styles.topo}>
            <div className={styles.topoItens}>
                <Image className={styles.logotipo} src={Logo} alt='logo'/>
                <div className={styles.linha}></div>
                <nav className={styles.menu}>
                    <Link href="#nossosProdutos" className={styles.itemMenu}>PRODUTOS</Link>
                    <Link href="#sobreNos" className={styles.itemMenu}>SOBRE</Link>
                    <Link href="#contato" className={styles.itemMenu}>CONTATO</Link>
                </nav>
            </div>
        </header>
    )
}