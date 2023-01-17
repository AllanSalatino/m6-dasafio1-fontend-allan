import { createContext, useState, ReactNode } from "react";

interface ICalculatorProvider {
  children: ReactNode;
}

export interface ICalculator {
  installment_value: number;
  interest_rate: number;
  number_installments: number;
}

interface ICalculatorContext {
  values: number[];
  setValues: React.Dispatch<React.SetStateAction<number[]>>;
  onSubmitCalculate: (data: ICalculator) => ICalculator;
  windowWidth: number;
  setWindowWidth: React.Dispatch<React.SetStateAction<number>>;
}

export const CalculatorContext = createContext<ICalculatorContext>(
  {} as ICalculatorContext
);

export const CalculatorProvider = ({ children }: ICalculatorProvider) => {
  const [values, setValues] = useState<number[]>([]);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  const onSubmitCalculate = (data: ICalculator) => {
    const { installment_value, interest_rate, number_installments } = data;

    let resultMxR = 0;
    let resultVxMxR = 0;
    let arrayResults = [];
    let total = 0;

    for (let i = 1; i <= number_installments; i++) {
      resultMxR = i * (interest_rate / 100);
      resultVxMxR = installment_value - resultMxR * installment_value;
      arrayResults.push(resultVxMxR);
      total += resultVxMxR;
    }
    arrayResults.push(total);

    setValues(arrayResults);

    return data;
  };

  const myTimer = () => {
    setWindowWidth(window.innerWidth);
  };
  setInterval(myTimer as any, 500);

  return (
    <CalculatorContext.Provider
      value={{
        onSubmitCalculate,
        values,
        setValues,
        windowWidth,
        setWindowWidth,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
