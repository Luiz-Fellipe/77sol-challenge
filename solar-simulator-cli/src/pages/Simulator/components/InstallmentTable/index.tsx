import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//UTILS
import { formatMoney } from '../../../../utils/formatMoney';
//TYPES
import { SimulationData } from '../../../../types/simulator';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

interface InstallmentTableProps {
  installment: SimulationData['parcelamento'];
}

export function InstallmentTable({ installment }: InstallmentTableProps) {
  return (
    <TableContainer component={Paper}>
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
