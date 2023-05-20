import { Autocomplete, Button, Grid, Stack, TextField } from '@mui/material';
import { useSimulatorForm } from './hooks/useSimulatorForm';
import { InputWithMask } from '../../../../components/inputs';
import { Controller } from 'react-hook-form';

export function Form() {
  const { options, control, onSubmit, errors } = useSimulatorForm();

  return (
    <form onSubmit={onSubmit}>
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
                  label="Valor"
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
          <Button variant="contained" type="submit">
            Enviar
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}
