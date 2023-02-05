import { createContext, useState, ReactNode } from "react";
import api from "../services/api";

interface ICalculatorProvider {
  children: ReactNode;
}

export interface ICalculator {
  amount: number;
  installments: number;
  mdr: number;
  days?: string | undefined;
}

interface ICalculatorContext {
  values: number[];
  amount: number | undefined;
  setAmount: React.Dispatch<React.SetStateAction<number | undefined>>;
  installments: number | undefined;
  setInstallments: React.Dispatch<React.SetStateAction<number | undefined>>;
  mdr: number | undefined;
  setMdr: React.Dispatch<React.SetStateAction<number | undefined>>;
  handleChangeAmount: (event: any) => void;
  handleChangeInstallments: (event: any) => void;
  handleChangeMdr: (event: any) => void;
  setValues: React.Dispatch<React.SetStateAction<number[]>>;
  onSubmitCalculate: (data: ICalculator) => {};
  requisitionValues: (data: ICalculator) => ICalculator;
}

export const CalculatorContext = createContext<ICalculatorContext>(
  {} as ICalculatorContext
);

export const CalculatorProvider = ({ children }: ICalculatorProvider) => {
  const [values, setValues] = useState<number[]>([]);
  const [amount, setAmount] = useState<number>();
  const [installments, setInstallments] = useState<number>();
  const [mdr, setMdr] = useState<number>();

  const handleChangeAmount = (event: any) => {
    if (event.target.value) {
      setAmount(event.target.value);
    } else {
      setAmount(0);
    }
  };
  const handleChangeInstallments = (event: any) => {
    if (event.target.value) {
      setInstallments(event.target.value);
    } else {
      setInstallments(0);
    }
  };
  const handleChangeMdr = (event: any) => {
    if (event.target.value) {
      setMdr(event.target.value);
    } else {
      setMdr(0);
    }
  };

  // Função responsavel por receber os valores de input e tratalos.
  const onSubmitCalculate = (data: ICalculator) => {
    const { amount, installments, mdr, days } = data;

    // Transformando a string da variavel "days" em um array de numeros.
    let arrayTransformation = [];
    let dataUpdated = {};

    // Se o campo days for preenchido, será criado um objeto com a key "days", caso contrario, não.
    if (days) {
      for (let i = 0; i < days.split(",").length; i++) {
        arrayTransformation.push(parseInt(days.split(",")[i]));
      }

      dataUpdated = {
        amount: amount,
        mdr: mdr,
        installments: installments,
        days: arrayTransformation,
      };
    } else {
      dataUpdated = {
        amount: amount,
        mdr: mdr,
        installments: installments,
      };
    }

    requisitionValues(dataUpdated);
    return dataUpdated;
  };

  // Função responsavel por fazer requisição de post enviando os dados tratados.
  const requisitionValues = (data: any) => {
    api
      .post("/", data)
      .then((response) => {
        setValues(response.data);
      })
      .catch((erro) => {
        console.error("Falha na requisição:", erro);
      });

    return data;
  };

  return (
    <CalculatorContext.Provider
      value={{
        onSubmitCalculate,
        values,
        setValues,
        requisitionValues,
        amount,
        setAmount,
        installments,
        setInstallments,
        mdr,
        setMdr,
        handleChangeAmount,
        handleChangeInstallments,
        handleChangeMdr,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
