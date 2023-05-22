import {
  Alert,
  Box,
  Container,
  Divider,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';

//COMPONENTS
import { SimulationResult } from '../../components/feedbacks';
import { SimulationForm } from '../../components/forms';

//HOOKS
import { useGetSimulationResult } from './hooks/useGetSimulationResult';

export function Simulator() {
  const { handleGetSimulationResult, data, isError, isLoading } =
    useGetSimulationResult();

  return (
    <Container maxWidth="md">
      <Stack spacing={2}>
        <Box sx={{ width: '100%' }}>
          <Typography variant="h6" gutterBottom>
            Simulador Solar
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Faça a sua simulação solar
          </Typography>
        </Box>
        <SimulationForm
          onSubmit={handleGetSimulationResult}
          isLoading={isLoading}
        />

        <Divider variant="middle" />

        {!isError && !isLoading && data && (
          <SimulationResult
            economy={data.economia}
            potential={data.potencial}
            installationPrice={data.valor_instalacao}
            installment={data.parcelamento}
          />
        )}

        {isError && (
          <Alert severity="error">
            Erro ao realizar simulação, por favor tente novamente.
          </Alert>
        )}

        {isLoading && (
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <Skeleton variant="rectangular" height={110} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Skeleton variant="rectangular" height={110} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Skeleton variant="rectangular" height={110} />
            </Grid>
            <Grid item xs={12}>
              <Skeleton variant="rectangular" height={210} />
            </Grid>
          </Grid>
        )}
      </Stack>
    </Container>
  );
}
