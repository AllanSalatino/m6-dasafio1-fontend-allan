import { createContext, useState, ReactNode } from "react";

interface ICalculatorProvider {
  children: ReactNode;
}

export interface ICalculator {
  installment_value: number;
  interest_rate: number;
  due_date: Date;
  discharge_date: Date;
  number_installments: number;
}

interface ICalculatorContext {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  onSubmitCalculate: (data: ICalculator) => ICalculator;
}

export const CalculatorContext = createContext<ICalculatorContext>(
  {} as ICalculatorContext
);

export const CalculatorProvider = ({ children }: ICalculatorProvider) => {
  const [value, setValue] = useState(0);

  const onSubmitCalculate = (data: ICalculator) => {
    console.log(data);
    return data;
  };
  return (
    <CalculatorContext.Provider value={{ onSubmitCalculate, value, setValue }}>
      {children}
    </CalculatorContext.Provider>
  );
};
