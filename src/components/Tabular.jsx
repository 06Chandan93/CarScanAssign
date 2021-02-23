import React,{useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// import table theme from material Ui core


// Demo Data to display
const data=[
  {id:1,name:'Facebook',value:20000},
  {id:2,name:'Twitter',value:15000},
  {id:3,name:'Instagram',value:30000},
  {id:4,name:'Telegram',value:35000},
];

// Function Declaration To display in Table
const Tabular=()=>{

  return(
    <>
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Value</TableCell>

          </TableRow>
        </TableHead>

        <TableBody>

      {
        data.map((item,i)=>(

        <TableRow key={item.id}>
          <TableCell >{item.id}</TableCell>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.value}</TableCell>
</TableRow>

)

      )
    }
    </TableBody>
  </Table>
    </TableContainer>
    </>
  )
}

export default Tabular;
