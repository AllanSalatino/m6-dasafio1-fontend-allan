import { useContext } from "react";
import CalculationResult from "../components/calculation_result";
import Calculator from "../components/calculator";
import Header from "../components/header";
import { CalculatorContext } from "../context/calculatorContext";
import { Body, Main } from "./style";

const Dashboard = () => {
  const { values } = useContext(CalculatorContext);

  return (
    <Body>
      <Header />
      <Main>
        <Calculator />
        <CalculationResult />
      </Main>
    </Body>
  );
};

export default Dashboard;
