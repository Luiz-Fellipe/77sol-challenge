import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

//TYPES
import { SimulatorForm, schema } from '../schema';
import { FormProps } from '../types';

export function useSimulatorForm({ onSubmit }: FormProps) {
  const options = [
    {
      label: 'Fibrocimento Madeira',
      value: 'fibrocimento-madeira',
    },
    {
      label: 'Fibrocimento Metálico',
      value: 'fibrocimento-metalico',
    },
    {
      label: 'Cerâmico',
      value: 'ceramico',
    },
    {
      label: 'Metálico',
      value: 'metalico',
    },
    {
      label: 'Laje',
      value: 'laje',
    },
    {
      label: 'Solo',
      value: 'solo',
    },
  ];

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SimulatorForm>({
    resolver: zodResolver(schema),
  });

  const onSubmitForm = handleSubmit((data) => {
    onSubmit(data);
  });

  return { options, control, onSubmitForm, errors };
}
