import React, {useEffect, useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { useHistory } from 'react-router-dom'
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { getProducts } from '../request/Request';


export default function MainForm() {

const history = useHistory()

const [productos, setProductos] = useState([])

const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

const loadProducts = async () =>{
  try {
   getProducts().then((res)=>{
   setProductos(res.orders)
   })
   console.log('hola',productos)
  } catch (error) {
    console.log(error)
  }
  }
  
  useEffect(() => {
    loadProducts();
  },[])
  return (
      <div>
    <div style={{margin:10, flexDirection:'row-reverse', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
    <Button variant="contained" style={{fontWeight:'bold', height:'50%'}}
    onClick={()=> history.push('/Crear')}
    >ADD ITEM</Button>
    <h3 style={{color:'#1976d2'}}>EJERCICIO DE PRUEBA "TENDENCYS INNOCATIONS"</h3>
    </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">NUMBER</StyledTableCell>
            <StyledTableCell>SKU</StyledTableCell>
            <StyledTableCell align="left">NAME</StyledTableCell>
            <StyledTableCell align="left">QUANTITY</StyledTableCell>
            <StyledTableCell align="left">PRICE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row) => (
            row.items.map((e)=>(
            <StyledTableRow
              key={e.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell align="left">{row.number}</StyledTableCell>
              <StyledTableCell component="th" scope="e">{e.sku}</StyledTableCell>
              <StyledTableCell align="left">{e.name}</StyledTableCell>
              <StyledTableCell align="left">{e.quantity}</StyledTableCell>
              <StyledTableCell align="left">{e.price}</StyledTableCell>   
            </StyledTableRow>
            ))          
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={productos.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#1976d2',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWeight:'bold'
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
