import Menu from "../../componentes/Menu";
import Cabecalho from "../../componentes/Cabecalho";
import banner from './banner.png'
import styles from './PaginaInicial.module.scss'
import Rodape from "../../componentes/Rodape";
import Galeria from "../../componentes/Galeria";

function PaginaInicial() {
    return (
        <>
      <Cabecalho/>
      <main>
        <section className={styles.principal}>
          <Menu/>
          <div className={styles.principal__imagem}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="A imagem da terra vista do espaço"/>
          </div>
        </section>
      </main>
      <div>
        <Galeria/>
      </div>
      <Rodape/>
    </>
    )
}


export default PaginaInicial;