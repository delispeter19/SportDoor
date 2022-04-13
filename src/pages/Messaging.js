import { React } from "react";

import SendIcon from '@mui/icons-material/Send';
import InfoIcon from '@mui/icons-material/Info';

import {
    Box,
    Grid,
    Typography,
    Card,
    CardContent,
    TextField,
    Tooltip,
    IconButton,
    Paper
  } from "@mui/material";

function Messaging(props){
    return (
        <Card>
            <CardContent>
                <Box sx={{ 
                    height: 700,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                }}>
                    <Paper sx={{ textAlign: 'left'  }} variant="outlined" square>
                        <Grid 
                            container
                            alignItems="center"
                        >
                            <Grid item xs={10} sm={10} md={10}>
                                <Typography
                                    variant="h5"
                                    sx={{ pt: 1, ml: 2 }}
                                    gutterBottom
                                >
                                    Noel Nord Group
                                </Typography>
                            </Grid>
                            <Grid item xs={2} sm={2} md={2}>
                                <Tooltip title="Group Info">
                                    <IconButton 
                                        size="large"
                                        color="inherit"
                                        sx={{mt: 1, ml: 1}}
                                    >
                                        <InfoIcon sx={{ color: "black" }}/>
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </Paper>

                    <Paper sx={{ height: "100%"}} variant="outlined" square>
                        
                    </Paper>

                    <Grid 
                        container
                        alignItems="center"
                    >
                        <Grid item xs={10} sm={10} md={10}>
                            <TextField
                                d="outlined-textarea"
                                fullWidth
                                placeholder="Aa"
                                multiline i
                                sx={{ mt: 2 }}
                            />
                        </Grid>
                        <Grid item xs={2} sm={2} md={2}>
                            <Tooltip title="Send">
                                <IconButton 
                                    size="large"
                                    color="inherit"
                                    sx={{ mt: 2, ml: 1}}
                                >
                                    <SendIcon sx={{ color: "black" }}/>
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        
                    </Grid>
                </Box>
            </CardContent>
        </Card>
    )
}

export default Messaging;
