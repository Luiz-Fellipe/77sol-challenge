import * as z from 'zod';

export const schema = z.object({
  cep: z
    .string({
      required_error: 'O CEP é obrigatório.',
    })
    .refine(
      (val) => {
        if (!val.match(/^[0-9]{5}-[0-9]{3}$/) || val.length === 0) return false;
        return true;
      },
      {
        message: 'Insira um CEP válido.',
      }
    ),
  valor_conta: z
    .string({
      required_error: 'O valor é obrigatório.',
    })
    .refine(
      (val) => {
        if (!val.match(/^\d+$/) || Number(val) <= 0) return false;
        return true;
      },
      {
        message: 'Insira um valor válido.',
      }
    ),
  estrutura: z.object({
    label: z.string(),
    value: z.string({
      required_error: 'A estrtura é obrigatória.',
    }),
  }),
});

export type SimulatorForm = z.infer<typeof schema>;
