import { Button, Container, Grid, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import HouseIcon from '@mui/icons-material/House';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchArea = () => {
    const navigate = useNavigate();
    // const location = useLocation();

    const [title, setTitle] = useState('');
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const [locationInfo, setLocationInfo] = useState('');
    const handleLocationChange = (e) => {
        setLocationInfo(e.target.value);
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        // console.log(title);
        // console.log(location);
        navigate(`/jobs`,
            {
                state: {
                    title: title,
                    locationInfo: locationInfo,
                }
            });
        // const info = {
        //     'title': title,
        //     'location': location,
        // }
        // try {
        //     const response = await fetch(`https://talent-hustle-server.vercel.app/search`, {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(info),
        //     });

        //     const result = await response.json();
        //     console.log(result);
        // } catch (error) {
        //     console.error("Error:", error);
        // }
    };
    return (
        <Grid>
            <Container>
                <Grid>
                    <Grid
                        sx={{ backgroundColor: '#28A2AA', borderRadius: '10px', padding: '30px 20px', boxShadow: '8' }}
                    >
                        <Grid
                            container
                            spacing={4}
                        >
                            <Grid item md={5}>
                                <TextField
                                    sx={{
                                        color: 'black', width: '100%', [`& fieldset`]: {
                                            borderRadius: 2.5,
                                            height: '55px',
                                        },
                                        // '& .MuiSelect-select': {
                                        //     width: '1%'
                                        // },
                                    }}
                                    placeholder="Job Title"
                                    // size='small'
                                    id="outlined-select-city"
                                    value={title}
                                    name='title'
                                    onChange={handleTitleChange}
                                >
                                </TextField>
                            </Grid>
                            <Grid item md={5}>
                                <TextField
                                    sx={{
                                        color: 'black', width: '100%', [`& fieldset`]: {
                                            borderRadius: 2.5,
                                            height: '55px',
                                        },
                                        // '& .MuiSelect-select': {
                                        //     width: '1%'
                                        // },
                                    }}
                                    placeholder="Location"
                                    // size='small'
                                    id="outlined-select-city"
                                    value={locationInfo}
                                    name='location'
                                    onChange={handleLocationChange}
                                >
                                </TextField>
                            </Grid>
                            <Grid item md={2}>
                                <Button
                                    onClick={handleSearch}
                                    sx={{
                                        backgroundColor: '#291F78', textTransform: 'none', width: '100%', padding: '12px 20px', borderRadius: '10px', '&:hover': {
                                            bgcolor: '#291F78',
                                        },
                                    }}
                                    variant="contained"
                                >
                                    Search
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
};

export default SearchArea;