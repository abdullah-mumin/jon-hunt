import { Avatar, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { TfiBag } from 'react-icons/tfi';
import { TbActivityHeartbeat } from 'react-icons/tb';
import {
    Chart,
    Title,
    // BarSeries,
    ArgumentAxis,
    ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { useState } from 'react';
import { BarSeries } from '@devexpress/dx-react-chart';
import avater1 from '../../../Images/men.jpg';
import ManageResume from '../ManageResume/ManageResume';

const chartData = [
    { month: 'Jan', population: 2.525 },
    { month: 'Feb', population: 3.018 },
    { month: 'Mar', population: 3.682 },
    { month: 'Apr', population: 4.440 },
    { month: 'May', population: 5.310 },
    { month: 'Jun', population: 6.127 },
    { month: 'Jul', population: 6.130 },
    { month: 'Aug', population: 6.230 },
    { month: 'Sep', population: 6.330 },
    { month: 'Oct', population: 6.630 },
    { month: 'Nov', population: 6.830 },
    { month: 'Dec', population: 6.930 },
];

const DashboardHome = () => {
    // console.log(chartData)

    return (
        <Grid>
            <Grid sx={{ marginTop: '50px' }}>
                <Grid
                    container
                    spacing={4}

                >
                    <Grid item md={4}>
                        <Grid sx={{ border: '1px solid gray', borderRadius: '10px', padding: '20px 0px', textAlign: 'center' }}>
                            <Grid>
                                <BiHomeAlt style={{ fontSize: '40px' }} />
                            </Grid>
                            <Grid>
                                <Typography sx={{ fontSize: '20px' }}>
                                    1566
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography sx={{ fontSize: '25px', fontWeight: '600' }}>
                                    Jobs View
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={4}>
                        <Grid sx={{ border: '1px solid gray', borderRadius: '10px', padding: '20px 0px', textAlign: 'center' }}>
                            <Grid>
                                <TfiBag style={{ fontSize: '40px' }} />
                            </Grid>
                            <Grid>
                                <Typography sx={{ fontSize: '20px' }}>
                                    166
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography sx={{ fontSize: '25px', fontWeight: '600' }}>
                                    Applied Jobs
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={4}>
                        <Grid sx={{ border: '1px solid gray', borderRadius: '10px', padding: '20px 0px', textAlign: 'center' }}>
                            <Grid>
                                <TbActivityHeartbeat style={{ fontSize: '40px' }} />
                            </Grid>
                            <Grid>
                                <Typography sx={{ fontSize: '20px' }}>
                                    6566
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography sx={{ fontSize: '25px', fontWeight: '600' }}>
                                    Month Views
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={4}
                    marginTop='50px'
                >
                    <Grid item md={8}>
                        {/* <Grid
                            boxShadow={3}
                            backgroundColor='#FFFFFF'
                            borderRadius='10px'
                            padding='5px 20px'
                        >
                            <Grid>
                                <Chart
                                    data={chartData.map(data => data)}
                                >
                                    <ArgumentAxis />
                                    <ValueAxis max={7} />

                                    <BarSeries
                                        valueField="population"
                                        argumentField="month" />
                                    <Title text="User Statistics" />
                                </Chart>
                            </Grid>
                        </Grid> */}
                        <Grid sx={{ marginTop: '-50px' }}>
                            <ManageResume />
                        </Grid>
                    </Grid>
                    <Grid item md={4}>
                        <Grid>
                            <Grid sx={{ backgroundColor: '#291F78', textAlign: 'center', padding: '10px 0px' }}>
                                <Typography sx={{ fontSize: '20px', color: 'white' }}>
                                    User Comment
                                </Typography>
                            </Grid>
                            <Grid sx={{ boxShadow: '2', padding: '10px 20px' }}>
                                <Grid sx={{ marginTop: '20px', marginBottom: '20px' }}>
                                    <Grid sx={{ marginBottom: '15px' }}>
                                        <Grid
                                            container
                                            spacing={4}
                                            alignItems='center'
                                        >
                                            <Grid item md={2} sm={2}>
                                                <Avatar alt="Image" src={avater1} />
                                            </Grid>
                                            <Grid item md={10} sm={10}>
                                                <Grid>
                                                    <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                                                        Faruk Hossian
                                                    </Typography>
                                                    <Typography sx={{ fontSize: '15px' }}>
                                                        Lorem ipsum dolor sit amet consectetur.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid sx={{ marginBottom: '15px' }}>
                                        <Grid
                                            container
                                            spacing={4}
                                            alignItems='center'
                                        >
                                            <Grid item md={2} sm={2}>
                                                <Avatar alt="Image" src={avater1} />
                                            </Grid>
                                            <Grid item md={10} sm={10}>
                                                <Grid>
                                                    <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                                                        Faruk Hossian
                                                    </Typography>
                                                    <Typography sx={{ fontSize: '15px' }}>
                                                        Lorem ipsum dolor sit amet consectetur.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid sx={{ marginBottom: '15px' }}>
                                        <Grid
                                            container
                                            spacing={4}
                                            alignItems='center'
                                        >
                                            <Grid item md={2} sm={2}>
                                                <Avatar alt="Image" src={avater1} />
                                            </Grid>
                                            <Grid item md={10} sm={10}>
                                                <Grid>
                                                    <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                                                        Faruk Hossian
                                                    </Typography>
                                                    <Typography sx={{ fontSize: '15px' }}>
                                                        Lorem ipsum dolor sit amet consectetur.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid sx={{ marginBottom: '15px' }}>
                                        <Grid
                                            container
                                            spacing={4}
                                            alignItems='center'
                                        >
                                            <Grid item md={2} sm={2}>
                                                <Avatar alt="Image" src={avater1} />
                                            </Grid>
                                            <Grid item md={10} sm={10}>
                                                <Grid>
                                                    <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                                                        Faruk Hossian
                                                    </Typography>
                                                    <Typography sx={{ fontSize: '15px' }}>
                                                        Lorem ipsum dolor sit amet consectetur.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;