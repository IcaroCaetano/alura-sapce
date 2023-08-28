import logo from './logo.png'
import search from './search.png'

function Cabecalho() {
    return (
        <header>
            <img src={logo} alt="Logo do Alura Space"/>
            <div>
                <input type="text" placeholder="O que você procura"></input>
                <img src={search} alt="ícone da lupa"></img>
            </div>
        </header>
    )
}


export default Cabecalho;