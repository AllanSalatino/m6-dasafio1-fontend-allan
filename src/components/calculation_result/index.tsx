import { useContext } from "react";
import { CalculatorContext } from "../../context/calculatorContext";
import { Result, Container } from "./style";

const CalculationResult = () => {
  const { values } = useContext(CalculatorContext);
  const arrKeys = Object.keys(values);
  const arrValues = Object.values(values);
  return (
    <Container>
      <h2>Você Receberá:</h2>
      {arrKeys.map((key, index) => {
        return (
          <Result>
            {key == "1" ? <p>Amanhã:</p> : <p>Em {key} dias:</p>}
            <span>
              {(arrValues[index] / 1000).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </Result>
        );
      })}
    </Container>
  );
};

export default CalculationResult;
