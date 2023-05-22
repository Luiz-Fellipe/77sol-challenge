import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//UTILS
import { formatMoney } from '../../../utils/formatMoney';
//TYPES
import { SimulationData } from '../../../types/simulator';

export interface InstallmentTableProps {
  installment: SimulationData['parcelamento'];
}

export function InstallmentTable({ installment }: InstallmentTableProps) {
  return (
    <TableContainer component={Paper} data-testid="installment-table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Parcelas</TableCell>
            <TableCell>Taxa Mínima</TableCell>
            <TableCell>Taxa Máxima</TableCell>
            <TableCell>Valor Mínimo</TableCell>
            <TableCell>Valor Máximo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {installment.map((installment) => (
            <TableRow
              key={installment.parcelas}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {installment.parcelas}
              </TableCell>
              <TableCell>{installment.taxa_maxima} %</TableCell>
              <TableCell>{installment.taxa_maxima} %</TableCell>
              <TableCell>{formatMoney(installment.valor_minimo)}</TableCell>
              <TableCell>{formatMoney(installment.valor_maximo)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
