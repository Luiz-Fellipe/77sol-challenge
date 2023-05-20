import { Box, Container, Stack, Typography } from '@mui/material';
import { Form } from './components/Form';
import { Result } from './components/Result';

export function Simulator() {
  return (
    <Container maxWidth="sm">
      <Stack spacing={2}>
        <Box sx={{ width: '100%' }}>
          <Typography variant="h6" gutterBottom>
            Simulador Solar
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Faça a sua simulação solar
          </Typography>
        </Box>
        <Form />

        <Result />
      </Stack>
    </Container>
  );
}
