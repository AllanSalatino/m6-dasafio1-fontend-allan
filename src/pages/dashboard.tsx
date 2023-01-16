import Calculator from "../components/calculator";
import Header from "../components/header";
import { Body } from "./style";

const Dashboard = () => {
  return (
    <Body>
      <Header />
      <Calculator />
    </Body>
  );
};

export default Dashboard;
