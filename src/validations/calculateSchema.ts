import * as yup from "yup";

export const calculateSchema = yup.object().shape({
  amount: yup
    .number()
    .required("Valor total da transação é obrigatório")
    .typeError("Valor total da transação é obrigatório")
    .min(1000, "Numero precisa ser maior que 1.000"),
  mdr: yup
    .number()
    .required("Taxa de Juros é obrigatória")
    .typeError("Taxa de Juros é obrigatória"),
  installments: yup
    .number()
    .required("Quantidade de parcelas é obrigatória")
    .typeError("Quantidade de parcelas é obrigatória"),
  days: yup.string().nullable().notRequired(),
});
