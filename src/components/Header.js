import { React } from "react";

import {
    AppBar,
    Toolbar,
    Typography,
    createTheme,
    ThemeProvider
  } from "@mui/material";

const theme = createTheme({
    components: {
        // Name of the component
        MuiAppBar: {
            styleOverrides: {
                // Name of the slot
                root: {
                // Some CSS
                    backgroundColor: "black",
                    alignItems: "center",
                    height: "7%"
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                // Name of the slot
                root: {
                // Some CSS
                    fontFamily: "Segoe UI"
                },
            },
        },
    }
});

function Header(props){
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Toolbar>
                    <Typography sx={{ my: 1, }} variant="h4" component="div" gutterBottom>
                        <b>SportDoor</b>
                    </Typography>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
        
    )
}

export default Header;
