import { Grid, Typography } from '@mui/material';
import React from 'react';
import banner from '../../../Images/home/banner.png';

const Banner = () => {
    return (
        <Grid>
            {/* <Grid>
                <img style={{ width: '100%', height: '520px', }} src={banner} alt="Banner" />
            </Grid> */}
            <Grid marginTop='100px'>
                <Typography sx={{ fontSize: '30px', color: 'black', fontWeight: '600', textAlign: 'center', letterSpacing: '5px', marginBottom: '20px' }}>
                    The Easiest Way To Get Your New Job
                </Typography>
                {/* <Typography sx={{ fontSize: '15px', color: 'black', fontWeight: '600', textAlign: 'center' }}>
                    Thousand of jobs in the construction agency available. Browse as a visitor and register to apply.
                </Typography> */}
            </Grid>
        </Grid>
    );
};

export default Banner;