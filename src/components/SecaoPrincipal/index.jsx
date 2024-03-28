import styles from './SecaoPrincipal.module.css';
import Cards from '../Cards';

export default function SecaoPrincipal(){
    return(
        <section className={styles.produtos} id="nossosProdutos">   
            <div className={styles.areaProdutos}>
                <div className={styles.infoProd}>
                    <h2>NOSSOS PRODUTOS</h2>
                    <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                    <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
                </div>
                <div  className={styles.box}>
                    <Cards/>
                </div>
                <div className={styles.lista}>
                    <span>Todos os nossos produtos incluem:</span>
                    <ul>
                        <li>Garantia de 1 ano</li>
                        <li>Manutenção preventiva</li>
                        <li>Descontos especiais na compra da segunda unidade</li>
                        <li>Flexibilidade de pagamento</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}