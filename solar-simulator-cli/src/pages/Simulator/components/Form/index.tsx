import { Controller } from 'react-hook-form';
import {
  Autocomplete,
  Button,
  Grid,
  InputAdornment,
  Stack,
  TextField,
} from '@mui/material';

//HOOKS
import { useSimulatorForm } from './hooks/useSimulatorForm';

//COMPONENTS
import { InputWithMask } from '../../../../components/inputs';

//TYPES
import { FormProps } from './types';

export function Form({ onSubmit, isLoading }: FormProps) {
  const { options, control, onSubmitForm, errors } = useSimulatorForm({
    onSubmit,
  });

  return (
    <form onSubmit={onSubmitForm}>
      <Stack direction="column" spacing={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Controller
              name="cep"
              control={control}
              render={({ field }) => (
                <InputWithMask
                  {...field}
                  label="CEP"
                  mask="99999-999"
                  error={!!errors?.cep?.message}
                  helperText={errors?.cep?.message}
                  value={field.value || ''}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Controller
              name="valor_conta"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="number"
                  label="Valor da conta de luz"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">R$</InputAdornment>
                    ),
                  }}
                  fullWidth
                  error={!!errors?.valor_conta?.message}
                  helperText={errors?.valor_conta?.message}
                  value={field.value || ''}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="estrutura"
              control={control}
              defaultValue={options[0]}
              render={({ field }) => (
                <Autocomplete
                  {...field}
                  disablePortal
                  fullWidth
                  isOptionEqualToValue={(option, value) => {
                    return option.value === value.value;
                  }}
                  options={options}
                  renderInput={(params) => (
                    <TextField {...params} label="Estrutura do Telhado" />
                  )}
                  onChange={(_, data) => {
                    field.onChange(data);
                    return data;
                  }}
                />
              )}
            />
          </Grid>
        </Grid>
        <Stack direction="row" justifyContent="flex-end">
          <Button variant="contained" type="submit" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Enviar'}
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}
