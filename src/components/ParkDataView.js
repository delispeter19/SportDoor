// Proof of concept for sending emails to
import React from "react";

// MUI
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const presenceData = [
    {
        name: "Jim Smith",
        status: "Friends",
    },
    {
        name: "Jerry Parker",
        status: "Not Friends",
    },
    {
        name: "Peter Macicasan",
        status: "Friends",
    }
]

function ParkDataView (props) {
  const { open, onClose } = props;

  return (
      <Dialog fullWidth maxWidth="sm" open={open} onClose={onClose}>
        <DialogTitle sx={{ bgcolor: "black", color: "white" }}>
          Park Presence
          <IconButton
            edge="start"
            color="inherit"
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Box >
            <Container component="main" >
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Friend Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {presenceData.map((presence, i) => (
                            <TableRow
                                key={i}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{presence.name}</TableCell>
                                <TableCell>{presence.status}</TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
          </Box>
        </DialogContent>

      </Dialog>
  );
};

export default ParkDataView;
