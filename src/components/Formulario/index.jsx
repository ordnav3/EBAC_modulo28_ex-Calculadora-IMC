import { useState } from "react";
import styles from './Formulario.module.css';

const Formulario = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [estado, setEstado] = useState('');


    const somarImc = () => (peso / (altura ** 2)).toFixed(2)

    return (
        <div className="container">
            <header>
                <h1 className={styles.title}>Calculadora de IMC</h1>
            </header>
            <form className={styles.form}>
                <input className={styles.input} onChange={evento => setAltura(Number(evento.target.value))} type="number" placeholder="Digite sua Altura" />
                <input className={styles.input} onChange={evento => setPeso(Number(evento.target.value))} type="number" placeholder="Digite seu peso" />
            </form>
            <div className={styles.res}>
                <p>Seu Imc é de: <b>{somarImc()}</b></p>
            </div>
            <p>O Índice de Massa Corporal, ou IMC, é uma ferramenta amplamente utilizada para avaliar a saúde do peso de uma pessoa.</p>
            <p>Ele é calculado com base na relação entre o peso e a altura de uma pessoa. O IMC fornece uma estimativa da quantidade de gordura corporal e ajuda a determinar se alguém está dentro de uma faixa de peso saudável.Para calcular o IMC, você pode usar a seguinte fórmula: IMC = peso (kg) / (altura (m) * altura (m)).</p>
            <p>Depois de obter o valor do IMC, você pode verificar <b>em que faixa ele se encaixa:Abaixo de 18.5: Abaixo do peso; 18.5 a 24.9: Peso saudável; 25 a 29.9: Sobrepeso; 30 ou mais: Obesidade</b></p>
            <p> É importante lembrar que o IMC é uma ferramenta geral e não leva em consideração outros fatores importantes, como a composição corporal e a distribuição de gordura. Portanto, é aconselhável consultar um profissional de saúde para uma avaliação completa de sua saúde e peso.</p>
            <p>Utilize esta calculadora de IMC para obter uma estimativa rápida e simples do seu IMC e, se necessário, busque orientação médica para alcançar seus objetivos de saúde.</p>
        </div>
    )
}

export default Formulario;