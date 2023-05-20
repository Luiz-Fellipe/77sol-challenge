import { Grid } from '@mui/material';
import { OutlinedCard } from '../../../../components/cards';
import { InstallmentTable } from '../InstallmentTable';

export function Result() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={4}>
        <OutlinedCard title="Economia" value={713400} />
      </Grid>
      <Grid item xs={12} md={4}>
        <OutlinedCard title="Potencial" value={4791} />
      </Grid>
      <Grid item xs={12} md={4}>
        <OutlinedCard title="Valor Instalação" value={4791} />
      </Grid>
      <Grid item xs={12}>
        <InstallmentTable />
      </Grid>
    </Grid>
  );
}
