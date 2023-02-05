import { CalculatorContext } from "../../context/calculatorContext";
import { useContext, useEffect, useState } from "react";
import { FormTag } from "./style";

const Calculator = () => {
  const {
    onSubmitCalculate,
    amount,
    installments,
    mdr,
    handleChangeAmount,
    handleChangeInstallments,
    handleChangeMdr,
  } = useContext(CalculatorContext);

  useEffect(() => {
    if (amount && installments && mdr) {
      let data = {
        amount: amount,
        installments: installments,
        mdr: mdr,
      };
      onSubmitCalculate(data);
    }
  }, [amount, installments, mdr]);

  return (
    <FormTag noValidate={true}>
      <h2>Simule sua Antecipação</h2>
      <div>
        <label>Informe o valor da venda *</label>
        <input type="text" required onChange={handleChangeAmount} />
      </div>
      <div>
        <label>Em quantas parcelas *</label>
        <input type="text" required onChange={handleChangeInstallments} />
        <p>Máximo de 12 parcelas</p>
      </div>
      <div>
        <label>Informe o percentual de MDR *</label>
        <input type="text" required onChange={handleChangeMdr} />
      </div>
    </FormTag>
  );
};

export default Calculator;
