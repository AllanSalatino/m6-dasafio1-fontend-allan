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
  const { onSubmitCalculate } = useContext(CalculatorContext);

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
        />
        <span>{errors?.installment_value?.message}</span>
      </div>
      <div>
        <label>Taxa de Juros:</label>
        <input
          type="text"
          placeholder="Digite a taxa de juros..."
          {...register("interest_rate")}
          required
        />
        <span>{errors?.interest_rate?.message}</span>
      </div>
      <div>
        <label>Quantidade de Parcelas:</label>
        <input
          type="text"
          placeholder="Digite a quantidade de parcelas..."
          {...register("number_installments")}
          required
        />
        <span>{errors?.number_installments?.message}</span>
      </div>

      <button type="submit">Calcular</button>
    </FormTag>
  );
};

export default Calculator;
