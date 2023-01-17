import { useContext } from "react";
import { CalculatorContext } from "../../context/calculatorContext";
import { Result, Container } from "./style";

const CalculationResult = () => {
  const { values } = useContext(CalculatorContext);
  const arrKeys = Object.keys(values);
  const arrValues = Object.values(values);
  return (
    <Container>
      {arrKeys.map((key, index) => {
        return (
          <div key={index}>
            {index == 0 && <h2>Você Receberá:</h2>}

            <Result>
              <p>Em {key} dias:</p>
              <span>
                {(arrValues[index] / 1000).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </Result>
          </div>
        );
      })}
    </Container>
  );
};

export default CalculationResult;
