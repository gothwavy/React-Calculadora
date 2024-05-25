import { useState, useEffect } from "react";

export default function Calculadora() {

  const [primeiroNumero, setPrimeiroNumero] = useState();
  const [segundoNumero, setSegundoNumero] = useState();
  const [resultado, setResultado] = useState(0);
  const [operacao, setOperacao] = useState('Somar');

  const calcular = () => {
    if (operacao == 'Somar') {
      return parseFloat(primeiroNumero) + parseFloat(segundoNumero);
    } else if (operacao == 'Subtrair') {
      return parseFloat(primeiroNumero) - parseFloat(segundoNumero);
    } else if (operacao == 'Multiplicar') {
      return parseFloat(primeiroNumero) * parseFloat(segundoNumero);
    } else {
      return parseFloat(primeiroNumero) / parseFloat(segundoNumero);
    }
  }

  useEffect(() => {
    setResultado(calcular());
  }, [primeiroNumero, segundoNumero, operacao]);

  return (
    <div className="container">

      <h1>Calculadora</h1>

      <div className="calculo">
        <input type="number"
          value={primeiroNumero}
          onChange={(e) => setPrimeiroNumero(e.target.value)}
          placeholder="Primeiro valor"
        />
        <input type="number"
          value={segundoNumero}
          onChange={(e) => setSegundoNumero(e.target.value)}
          placeholder="Segundo valor"
        />
        <div className="operador">
          <select onChange={(e) => setOperacao(e.target.value)}>
            <option value="Somar">+</option>
            <option value="Subtrair">-</option>
            <option value="Multiplicar">*</option>
            <option value="Dividir">/</option>
          </select>
        </div>
      </div>

      <div className="resultado">
        <p>Resultado: <span>{resultado}</span></p>
      </div>

    </div>
  )
}