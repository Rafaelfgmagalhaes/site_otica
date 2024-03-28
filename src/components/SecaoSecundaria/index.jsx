import styles from './SecaoSecundaria.module.css';
import Image from 'next/image';
import Foto1 from '../../../public/atendimento.png';
import Foto2 from '../../../public/loja.png';

export default function SecaoSecundaria(){
    return(
        <section className={styles.sobreNos} id="sobreNos">
            <div className={styles.quemSomos}>
                <h2>QUEM SOMOS NÓS?</h2>
                <p>Fundada em 2001 em nova Iguaçu - Rio de Janeiro, a Óticas Vida iniciou suas atividades focada no atendimento ao publico de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
            </div>
            <div className={styles.cartoes}>
                <div className={styles.cartao}>
                    <div className={styles.fotoCartao}>
                        <Image className={styles.img} src={Foto2} alt='foto filiais'></Image>
                    </div>
                    <div className={styles.infoCartao}>
                        <h3>NOSSAS FILIAIS</h3>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na Ámerica</p>
                    </div>
                </div>
                <div className={styles.cartao}>
                    <div className={styles.infoCartao}>
                        <h3>ATENDIMENTO FLEXÍVEL</h3>
                        <p>Nossa equipe possui treinamento para o melhor atendimento</p>
                    </div>
                    <div className={styles.fotoCartao}>
                        <Image className={styles.img} src={Foto1} alt='foto atendimento'></Image>
                    </div>
                </div>
            </div>
        </section>
    )
}