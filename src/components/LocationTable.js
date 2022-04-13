import { React, Fragment, useEffect, useState } from 'react';
import ParkDataView from './ParkDataView';

// MUI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const parkData = [
    {
        name: "Noel Nord",
        link: "https://goo.gl/maps/XYLs2xbqDPa5M4Qg9",
        status: "Open",
        people: 5,
    },
    {
        name: "Beausejour",
        link: "https://goo.gl/maps/AeSPnXcz1XbCUdRA9",
        status: "Closed",
        people: 0,
    },
    {
        name: "Cousineau",
        link: "https://goo.gl/maps/oo1YS7jgHFroH3Sp7",
        status: "Open",
        people: 4,
    }
]


function LocationTable(props) {
  const [open, setOpen] = useState(false);

  const handleDialogOpen = (id) => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <ParkDataView open={open} onClose={handleDialogClose} />
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Park</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>People</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {parkData.map((park, i) => (
            <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell>
                    <a target="_blank" href={park.link}>
                        {park.name}
                    </a>
                </TableCell>
                <TableCell>{park.status}</TableCell>
                <TableCell>{park.people}</TableCell>
                <TableCell>                  
                  <Button variant="contained" sx={{ bgcolor: "#00e676" }} onClick={handleDialogOpen}>
                      View
                  </Button>
                </TableCell>
            </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
}

export default LocationTable;
