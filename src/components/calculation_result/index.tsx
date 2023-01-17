import { useContext } from "react";
import { CalculatorContext } from "../../context/calculatorContext";
import { Result, ResultTotal, Container } from "./style";

const CalculationResult = () => {
  const { values } = useContext(CalculatorContext);

  return (
    <Container>
      {values.map((value, index) => {
        return (
          <div key={index}>
            {index == 0 && <h2>Resultado obtido:</h2>}
            {values[values.length - 1] != value ? (
              <Result>
                <p>{index + 1}° parcela:</p>
                <span>
                  {value.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </Result>
            ) : (
              <ResultTotal>
                Valor total para quitação:
                <span>
                  {value.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </ResultTotal>
            )}
          </div>
        );
      })}
    </Container>
  );
};

export default CalculationResult;
