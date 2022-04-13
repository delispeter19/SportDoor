import { React, useRef, useCallback, Fragment } from "react";
import Webcam from "react-webcam";

import {
    Typography,
    Card,
    CardContent,
    Button, 
    createTheme,
    ThemeProvider
  } from "@mui/material";

  const theme = createTheme({
    components: {
        // Name of the component
        MuiCard: {
            styleOverrides: {
                // Name of the slot
                root: {
                // Some CSS
                    backgroundColor: "white",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
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
    },
});

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

  const WebcamCapture = () => {
    const webcamRef = useRef(null);
    const capture = useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot();
      },
      [webcamRef]
    );
    return (
        <Fragment>
            <Webcam
                audio={false}
                height={250}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={350}
                videoConstraints={videoConstraints}
            />
            <Button 
                variant="contained" 
                sx={{ bgcolor: "#00e650" }}
                onClick={capture}
            > 
                <Typography variant="h5" sx={{ color: "white" }} > <b>Scan QR</b> </Typography>
            </Button>
        </Fragment>
                
    );
  };

function Scanner(props){
    return (
        <ThemeProvider theme={theme}>
            <Card>
                <CardContent>
                    <WebcamCapture />
                </CardContent>
            </Card>
        </ThemeProvider>
    )
}

export default Scanner;
