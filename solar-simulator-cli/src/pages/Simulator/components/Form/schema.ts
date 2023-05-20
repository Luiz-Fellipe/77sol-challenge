import * as z from 'zod';

export const schema = z.object({
  cep: z.string({
    required_error: 'O CEP é obrigatório.',
  }),
  valor_conta: z.string({
    required_error: 'O valor é obrigatório.',
  }),
  estrutura: z.object({
    label: z.string(),
    value: z.string({
      required_error: 'A estrtura é obrigatória.',
    }),
  }),
});

export type SimulatorForm = z.infer<typeof schema>;
