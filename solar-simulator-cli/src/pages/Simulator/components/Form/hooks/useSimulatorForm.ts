import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { SimulatorForm, schema } from '../schema';

export function useSimulatorForm() {
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

  const onSubmit = handleSubmit((data) => {
    console.log('data', data);
  });

  return { options, control, onSubmit, errors };
}
