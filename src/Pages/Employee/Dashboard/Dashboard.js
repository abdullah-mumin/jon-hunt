import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navigation from '../../Navigation/Navigation';
import Footer from '../../Footer/Footer';
import DashboardHome from './DashboardHome';
import ManageResume from '../ManageResume/ManageResume';
import ManageJobsPost from '../ManageJobsPost/ManageJobsPost';

const Profile = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleDashboard = () => {
        navigate(`/company-dashboard/dashboard`);
    }
    const handleJobs = () => {
        navigate(`/company-dashboard/manage-job`);
    }
    const handleResume = () => {
        navigate(`/company-dashboard/manage-resume`);
    }

    return (
        <>
            <Navigation />
            <Grid>
                <Grid
                    container
                    spacing={8}
                >
                    <Grid item md={2.5}>
                        <Grid>
                            <Container>
                                <Grid
                                    container
                                    boxShadow={3}
                                    backgroundColor='#393030'
                                    borderRadius='10px'
                                    padding='5px'
                                >
                                    <Grid>
                                        <Typography variant='body1' sx={{ color: '#16A493B5', fontWeight: '600', fontSize: '11px', marginLeft: '16px', marginTop: '20px' }}>
                                            APPLICATION
                                        </Typography>
                                        <Grid width='100%' marginBottom='5px' marginTop='10px'>
                                            <Button
                                                onClick={handleDashboard}
                                                style={{ color: '#FFFFFF', textTransform: 'none', width: '100%', justifyContent: 'flex-start', fontWeight: '600', marginLeft: '8px' }}>
                                                Dashboard
                                            </Button>
                                        </Grid>
                                        <Grid width='100%'>
                                            <Button
                                                onClick={handleJobs}
                                                style={{ color: '#FFFFFF', textTransform: 'none', width: '100%', justifyContent: 'flex-start', marginBottom: '5px', fontWeight: '600', marginLeft: '8px' }}>
                                                Manage Jobs Post
                                            </Button>
                                        </Grid>
                                        <Grid width='100%'>
                                            <Button
                                                onClick={handleResume}
                                                style={{ color: '#FFFFFF', textTransform: 'none', width: '100%', justifyContent: 'flex-start', marginBottom: '5px', fontWeight: '600', marginLeft: '8px' }}>
                                                Manage Resume
                                            </Button>
                                        </Grid>
                                        <Grid width='100%'>
                                            <Button
                                                // onClick={handleSetting}
                                                style={{ color: '#FFFFFF', textTransform: 'none', width: '100%', justifyContent: 'flex-start', marginBottom: '5px', fontWeight: '600', marginLeft: '8px' }}>
                                                Logout
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Grid>
                    </Grid>
                    <Grid item md={9}>
                        <Routes>
                            <Route exact path='/' element={<DashboardHome />}>
                            </Route>
                            <Route path='/dashboard' element={<DashboardHome />}>
                            </Route>
                            <Route path='/manage-resume' element={<ManageResume />}>
                            </Route>
                            <Route path='/manage-job' element={<ManageJobsPost />}>
                            </Route>
                        </Routes>
                    </Grid>
                </Grid>
            </Grid>
            <Footer />
        </>
    );
};

export default Profile;