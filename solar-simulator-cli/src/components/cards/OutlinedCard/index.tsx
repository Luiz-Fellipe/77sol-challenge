import { Card, CardContent, Typography } from '@mui/material';

export interface OutlinedCardProps {
  title: string;
  value: number | string;
}

export const OutlinedCard = ({ title, value }: OutlinedCardProps) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};
