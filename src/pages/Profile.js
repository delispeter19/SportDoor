import { Fragment, React } from "react";

import Profile_Pic from "../media/profile.png";

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
    Paper,
    Avatar,
    Divider
} from "@mui/material";

const profileData = [
    {
        name: "Name",
        value: "John Smith",
    },
    {
        name: "Email",
        value: "johnSmith@gmail.com",
    },
    {
        name: "Birth Date",
        value: "11/19/1999",
    },
    {
        name: "Parks Following",
        value: "3",
    },
];

function Profile(props){
    return (
        <Card>
            <CardContent>
                <Grid 
                    container
                    spacing={2}
                    alignItems="center"
                    sx={{ height: "100%" }}
                >
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography
                            variant="h4"
                            sx={{ pt: 1 }}
                            gutterBottom
                        >
                            Profile
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Tooltip title="Profile Picture">
                            <Box
                                component="img"
                                sx={{ width: "30%" }}
                                src={Profile_Pic}
                            />
                        </Tooltip>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Card>
                            <CardContent>
                                {profileData.map((profile, i) => (
                                    <Fragment>
                                        <Grid 
                                            key={i}
                                            container
                                            alignItems="center"
                                        >
                                            <Grid item xs={6} sm={6} md={6}>
                                                <Typography
                                                    key={i+"0"} 
                                                    variant="h6"
                                                    sx={{ ml: 2, my: 4}}
                                                    align="left"
                                                >
                                                    {profile.name}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} sm={6} md={6}>
                                                <Typography
                                                    key={i+"1"}
                                                    variant="body"
                                                    sx={{ mr: 2}}
                                                    align="right"
                                                >
                                                    {profile.value}
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                        <Divider key={i+"2"}/>

                                    </Fragment>
                                    
                                ))}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Profile;
