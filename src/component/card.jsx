import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Divider } from '@mui/material';
import { Box } from '@mui/system';

const columns = [
  { id: 'Monday', label: 'Name', minWidth: 100 },
  { id: 'Tuesday', label: 'ISO\u00a0Code', minWidth: 100 },
  { id: 'Wednesday', label: 'ISO\u00a0Code', minWidth: 100 },
  { id: 'Thursday', label: 'ISO\u00a0Code', minWidth: 100 },
  { id: 'Friday', label: 'ISO\u00a0Code', minWidth: 100 },
  
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const StickyHeadTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '85%', overflow: 'hidden',margin:'auto',marginTop:'60px'}}>
 
        <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">

            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {<Box sx={{ width:'100%',hieght:'auto',border:'1px solid black'}}>{column.id}</Box>}
                </TableCell>
              ))}
            </TableRow>

          <TableBody>
           
          </TableBody>
        </Table>
      </TableContainer>
     
      
    </Paper>
  );
}
export default StickyHeadTable