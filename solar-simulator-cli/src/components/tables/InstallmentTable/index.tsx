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
              data-testid="table-row"
              key={installment.parcelas}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell scope="row" data-testid="cell-qtd-installment">
                {installment.parcelas}
              </TableCell>
              <TableCell data-testid="cell-max-fee">
                {installment.taxa_maxima} %
              </TableCell>
              <TableCell data-testid="cell-min-fee">
                {installment.taxa_minina} %
              </TableCell>
              <TableCell data-testid="cell-min-value">
                {formatMoney(installment.valor_minimo)}
              </TableCell>
              <TableCell data-testid="cell-max-value">
                {formatMoney(installment.valor_maximo)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
