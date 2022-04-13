import { React } from "react";
import LocationTable from "../components/LocationTable";

import {
    Box,
    Typography,
    Card,
    CardContent,
    Divider, 
  } from "@mui/material";

function Locations(props){
    return (
        <Card>
            <CardContent>
                <Box sx={{ pb: 2, mx: 1 }}>
                    <Typography
                        variant="h5"
                        gutterBottom
                    >
                        Park Locations
                    </Typography>

                    <Divider />

                    <LocationTable />
                </Box>
            </CardContent>
        </Card>
    )
}

export default Locations;
