import { React } from "react";

import Parks from "../media/mtl_park.jpg";
import Sports from "../media/mtl_sport.jpg";

import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Divider,
    Button  
  } from "@mui/material";

import SendIcon from '@mui/icons-material/Send';

const tileData = [
    {
        img: Parks,
        text: 'Montreal Parks',
        href: "https://montreal.ca/en/places?sioc_topic.code=culture-et-loisirs&mtl_content.lieux.category.code=CENT",
    },
    {
        img: Sports,
        text: 'Montreal Sports Facilities',
        href: "https://montreal.ca/en/places?mtl_content.lieux.installation.code=AREN,CENT,GYMN,PISI&orderBy=dc_title",
    },
];

function Dashboard(props){
    return (
        <Card>
            <CardContent>
                <Box sx={{ width: "100%" }} pb={2}>
                    <Typography
                        variant="h5"
                        align="center"
                        sx={{ mb: 2 }}
                    >
                        Information
                    </Typography>

                    <Divider />
                </Box>
                <Grid 
                    container
                    alignItems="center"
                >
                    {tileData.map((tile, i) => (
                        <Grid key={"_"+i} item xs={12} sm={12} md={6}>
                        <Card key={i} sx={{ p: 2, mb: 1, bgcolor: "#ededed" }}>
                            <Box
                            key={i+"0"}
                            component="img"
                            sx={{
                                width: "90%"
                            }}
                            alt={tile.text}
                            src={tile.img}

                            />
                            <Grid 
                                container
                                alignItems="center"
                            >
                                <Grid item xs={6} sm={6} md={6}>
                                    <Typography
                                        key={i+"1"}
                                        sx={{ py: 3, px: 2 }}
                                        color="text.secondary"
                                    >
                                    {tile.text}
                                    </Typography>
                                </Grid>
                                
                                <Grid item xs={6} sm={6} md={6}>
                                    <Button
                                        key={i+"2"}
                                        variant="contained"
                                        endIcon={<SendIcon />}
                                        sx={{ bgcolor: "#00e650" }}
                                        target="_blank"
                                        href={tile.href}
                                    >
                                    Go
                                    </Button>
                                </Grid>
                            </Grid>
                        </Card>
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Dashboard;
