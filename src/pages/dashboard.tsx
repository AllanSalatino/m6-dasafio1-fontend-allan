import { useContext } from "react";
import CalculationResult from "../components/calculation_result";
import Calculator from "../components/calculator";
import { CalculatorContext } from "../context/calculatorContext";
import { Container, Main } from "./style";

const Dashboard = () => {
  const { values } = useContext(CalculatorContext);

  return (
    <Container>
      <Main>
        <Calculator />
        <CalculationResult />
      </Main>
    </Container>
  );
};

export default Dashboard;
