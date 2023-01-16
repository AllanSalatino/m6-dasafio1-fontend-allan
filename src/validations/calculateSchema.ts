import * as yup from "yup";

export const calculateSchema = yup.object().shape({
  installment_value: yup.number().required("Valor da parcela obrigatório"),
  interest_rate: yup.number().required("Taxa de Juros obrigatório"),
  due_date: yup.date().required("Dia do vencimento obrigatório"),
  discharge_date: yup.date().required("Data de Quitação obrigatória"),
  number_installments: yup
    .number()
    .required("Quantidade de parcelas obrigatória"),
});
