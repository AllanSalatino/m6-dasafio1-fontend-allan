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
      <h2>Simule sua Antecipação</h2>
      <div>
        <label>Valor total da venda (em centavos):</label>
        <input
          type="text"
          placeholder="Digite o valor total..."
          {...register("amount")}
        />
        <span>{errors?.amount?.message}</span>
      </div>
      <div>
        <label>MDR (taxa de juros):</label>
        <input
          type="text"
          placeholder="Digite a taxa de juros..."
          {...register("mdr")}
          required
        />
        <span>{errors?.mdr?.message}</span>
      </div>
      <div>
        <label>Quantidade de Parcelas:</label>
        <input
          type="text"
          placeholder="Digite a quantidade de parcelas..."
          {...register("installments")}
          required
        />
        <span>{errors?.installments?.message}</span>
      </div>
      <div>
        <label>Dias para antecipação:</label>
        <input
          type="text"
          placeholder="Ex: 30, 60, 90..."
          {...register("days")}
          required={false}
        />
      </div>

      <button type="submit">Calcular</button>
    </FormTag>
  );
};

export default Calculator;
