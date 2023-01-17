import * as yup from "yup";

export const calculateSchema = yup.object().shape({
  installment_value: yup
    .number()
    .required("Valor da parcela é obrigatória")
    .typeError("Valor da parcela é obrigatória"),
  interest_rate: yup
    .number()
    .required("Taxa de Juros é obrigatória")
    .typeError("Taxa de Juros é obrigatória"),
  number_installments: yup
    .number()
    .required("Quantidade de parcelas é obrigatória")
    .typeError("Quantidade de parcelas é obrigatória"),
});
