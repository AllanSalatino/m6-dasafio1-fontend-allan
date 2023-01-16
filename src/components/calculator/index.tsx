import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { calculateSchema } from "../../validations/calculateSchema";
import {
  CalculatorContext,
  ICalculator,
} from "../../context/calculatorContext";
import { useContext } from "react";
import { FormTag } from "./style";

const Calculator = () => {
  const { onSubmitCalculate, setValue } = useContext(CalculatorContext);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<ICalculator>({
    resolver: yupResolver(calculateSchema),
  });

  return (
    <FormTag noValidate={true} onSubmit={handleSubmit(onSubmitCalculate)}>
      <h2>Calculadora de Antecipação</h2>
      <div>
        <label>Valor da parcela:</label>
        <input
          type="text"
          placeholder="Digite o valor da parcela..."
          {...register("installment_value")}
          required
        />
      </div>
      <div>
        <label>Taxa de Juros:</label>
        <input
          type="text"
          placeholder="Digite a taxa de juros..."
          {...register("interest_rate")}
          required
        />
      </div>
      <div>
        <label>Dia do Vencimento:</label>
        <input
          type="text"
          placeholder="Digite o dia do vencimento..."
          {...register("due_date")}
          required
        />
      </div>
      <div>
        <label>Data de Quitação:</label>
        <input
          type="text"
          placeholder="Digite a data de quitação..."
          {...register("discharge_date")}
          required
        />
      </div>
      <div>
        <label>Quantidade de Parcelas:</label>
        <input
          type="text"
          placeholder="Digite a quantidade de parcelas..."
          {...register("number_installments")}
          required
        />
      </div>

      <button type="submit">Calcular</button>
    </FormTag>
  );
};

export default Calculator;
