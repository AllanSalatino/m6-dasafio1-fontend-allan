import { useContext } from "react";
import CalculationResult from "../components/calculation_result";
import Calculator from "../components/calculator";
import Header from "../components/header";
import { CalculatorContext } from "../context/calculatorContext";
import { Body, Main } from "./style";

const Dashboard = () => {
  const { values, windowWidth } = useContext(CalculatorContext);

  return (
    <>
      {windowWidth < 768 ? (
        <Body>
          <Header />
          <main>
            {values.length != 0 ? <CalculationResult /> : <Calculator />}
          </main>
        </Body>
      ) : (
        <Body>
          <Header />
          <Main>
            <Calculator />
            <CalculationResult />
          </Main>
        </Body>
      )}
    </>
  );
};

export default Dashboard;
