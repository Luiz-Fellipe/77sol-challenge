import { SimulatorForm } from './schema';

export interface FormProps {
  isLoading?: boolean;
  onSubmit: (data: SimulatorForm) => void;
  defaultValues?: SimulatorForm;
}
