import entradaImg from '../../assets/Entradas.svg'
import saidaImg from '../../assets/Saida.svg'
import totalImg from '../../assets/Total.svg'
import { Container } from "./style";

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradaImg}></img>
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={saidaImg}></img>
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg}></img>
                </header>
                <strong> R$500,00</strong>
            </div>
        </Container>
    )
}