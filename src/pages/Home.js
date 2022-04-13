import React from 'react';
import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";

// MUI
import {
    Box,
    createTheme,
    ThemeProvider   
} from "@mui/material";
import Header from '../components/Header';

const theme = createTheme({
    components: {
        // Name of the component
        MuiCard: {
            styleOverrides: {
                // Name of the slot
                root: {
                // Some CSS
                    backgroundColor: "#white",
                    height: "100%"

                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    color: "black"
                },
            },
        },
        MuiBottomNavigation: {
            styleOverrides: {
              // Name of the slot
              root: {
                // Some CSS
                backgroundColor: "black",
                height: "7%"
              },
            },
        },
    },
});


function Home(props) {

  return (
    <ThemeProvider theme={theme}>
        <Box sx={{ height: 890, width: 450 }}>
            <Header/>
            <Box sx={{ 
                height: "82%",
                width: "auto",
                py: 2, px: 3,
                bgcolor: "#eeeeee",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}>
                <Outlet />
            </Box>
            <Footer />
        </Box>
    </ThemeProvider>
  );
}

export default Home;
