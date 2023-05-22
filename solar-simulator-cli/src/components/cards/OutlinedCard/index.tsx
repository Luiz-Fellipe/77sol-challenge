import { Card, CardContent, Typography } from '@mui/material';

export interface OutlinedCardProps {
  title: string;
  value: number | string;
}

export const OutlinedCard = ({ title, value }: OutlinedCardProps) => {
  return (
    <Card variant="outlined" data-testid="outlined-card">
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          data-testid="outlined-card-title"
        >
          {title}
        </Typography>
        <Typography
          sx={{ mb: 1.5 }}
          color="text.secondary"
          data-testid="outlined-card-value"
        >
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};
