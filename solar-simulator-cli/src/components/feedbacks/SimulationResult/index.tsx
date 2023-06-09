import { Grid } from '@mui/material';

//COMPONENTS
import { OutlinedCard } from '../../cards';
import { InstallmentTable } from '../../tables';
//UTILS
import { formatMoney } from '../../../utils/formatMoney';
//TYPES
import { SimulationData } from '../../../types/simulator';

export interface ResultProps {
  economy: SimulationData['economia'];
  potential: SimulationData['potencial'];
  installationPrice: SimulationData['valor_instalacao'];
  installment: SimulationData['parcelamento'];
}

export function SimulationResult({
  economy,
  potential,
  installationPrice,
  installment,
}: ResultProps) {
  return (
    <Grid container spacing={1} data-testid="simulation-result-container">
      <Grid item xs={12} md={4}>
        <OutlinedCard title="Economia" value={formatMoney(economy)} />
      </Grid>
      <Grid item xs={12} md={4}>
        <OutlinedCard title="Potencial" value={potential} />
      </Grid>
      <Grid item xs={12} md={4}>
        <OutlinedCard
          title="Valor Instalação"
          value={formatMoney(installationPrice)}
        />
      </Grid>
      <Grid item xs={12}>
        <InstallmentTable installment={installment} />
      </Grid>
    </Grid>
  );
}
