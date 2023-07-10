import { Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import SearchIcon from '@mui/icons-material/Search';
import { GoLocation } from 'react-icons/go';
import { BiTimeFive } from 'react-icons/bi';
import { AiFillUnlock } from 'react-icons/ai';
import { GrCurrency } from 'react-icons/gr';
import { FormControl, InputAdornment, createStyles, makeStyles } from '@material-ui/core';
import { useLocation, useNavigate } from 'react-router-dom';
import Loader from '../../Component/Loader/Loader';


const useStyles = makeStyles(() => {
    return createStyles({
        search: {
            margin: "0"
        }
    });
});

const Jobs = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { search } = useStyles();
    const [showClearIcon, setShowClearIcon] = useState("none");
    // console.log(location.state);

    const handleChange = (event) => {
        setShowClearIcon(event.target.value === "" ? "none" : "flex");
    };

    const handleButton = (id) => {
        navigate(`/job-details/${id}`);
        // console.log(id);
    }

    const [loading, setLoading] = useState(false);
    const [jobInfo, setJobInfo] = useState([]);
    // useEffect(() => {
    //     setLoading(true);
    //     fetch(`https://talent-hustle-server.vercel.app/search/?title=${location.state.title}&location=${location.state.locationInfo}`, {
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setJobInfo(data);
    //             setLoading(false);
    //         })
    // }, []);
    useEffect(() => {
        setLoading(true);
        fetch(`https://talent-hustle-server.vercel.app/search/${location.state.title}&${location.state.locationInfo}`, {
        })
            .then(res => res.json())
            .then(data => {
                setJobInfo(data);
                setLoading(false);
            })
    }, []);
    // console.log(jobInfo);


    return (
        <>
            <Navigation />
            <Grid>
                <Grid>
                    <Container>
                        <Grid
                            container
                            spacing={8}
                        >
                            <Grid item md={3}>
                                <Grid
                                    container
                                    boxShadow={2}
                                    borderRadius='10px'
                                    marginTop='30px'
                                    padding='10px 20px'
                                >
                                    <Grid marginTop='10px'>
                                        <Typography variant='body2' sx={{ fontWeight: '600', fontSize: '17px', color: '#291F78', marginBottom: '10px' }}>
                                            SEARCH
                                        </Typography>
                                        <Grid sx={{ width: '100%' }}>
                                            <FormControl className={search}>
                                                <TextField
                                                    size="small"
                                                    variant="outlined"
                                                    onChange={handleChange}
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <SearchIcon />
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    boxShadow={2}
                                    borderRadius='10px'
                                    marginTop='30px'
                                    padding='10px 20px'
                                >
                                    <Grid marginTop='5px'>
                                        <Typography variant='body2' sx={{ fontWeight: '600', fontSize: '17px', color: '#291F78' }}>
                                            VACANCY TYPE
                                        </Typography>
                                        <Grid>
                                            <Grid>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox size='small'
                                                            // value={check || ''} checked={check} onChange={handleCheckChange}
                                                            name="breakfast" />
                                                    }
                                                    label={<Typography sx={{ fontSize: '13px' }}>Full Time</Typography>}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid>
                                            <Grid>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox size='small'
                                                            // value={check || ''} checked={check} onChange={handleCheckChange}
                                                            name="breakfast" />
                                                    }
                                                    label={<Typography sx={{ fontSize: '13px' }}>Internship</Typography>}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid>
                                            <Grid>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox size='small'
                                                            // value={check || ''} checked={check} onChange={handleCheckChange}
                                                            name="breakfast" />
                                                    }
                                                    label={<Typography sx={{ fontSize: '13px' }}>Part Time</Typography>}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid>
                                            <Grid>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox size='small'
                                                            // value={check || ''} checked={check} onChange={handleCheckChange}
                                                            name="breakfast" />
                                                    }
                                                    label={<Typography sx={{ fontSize: '13px' }}>Temporary</Typography>}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    boxShadow={2}
                                    borderRadius='10px'
                                    marginTop='30px'
                                    padding='10px 20px'
                                >
                                    <Grid marginTop='5px'>
                                        <Typography variant='body2' sx={{ fontWeight: '600', fontSize: '17px', color: '#291F78' }}>
                                            SECTORS
                                        </Typography>
                                        <Grid>
                                            <Grid>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox size='small'
                                                            // value={check || ''} checked={check} onChange={handleCheckChange}
                                                            name="breakfast" />
                                                    }
                                                    label={<Typography sx={{ fontSize: '13px' }}>Engineering</Typography>}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid>
                                            <Grid>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox size='small'
                                                            // value={check || ''} checked={check} onChange={handleCheckChange}
                                                            name="breakfast" />
                                                    }
                                                    label={<Typography sx={{ fontSize: '13px' }}>Accounting</Typography>}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid>
                                            <Grid>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox size='small'
                                                            // value={check || ''} checked={check} onChange={handleCheckChange}
                                                            name="breakfast" />
                                                    }
                                                    label={<Typography sx={{ fontSize: '13px' }}>Banking</Typography>}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid>
                                            <Grid>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox size='small'
                                                            // value={check || ''} checked={check} onChange={handleCheckChange}
                                                            name="breakfast" />
                                                    }
                                                    label={<Typography sx={{ fontSize: '13px' }}>Digital</Typography>}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid>
                                            <Grid>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox size='small'
                                                            // value={check || ''} checked={check} onChange={handleCheckChange}
                                                            name="breakfast" />
                                                    }
                                                    label={<Typography sx={{ fontSize: '13px' }}>Design</Typography>}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid>
                                            <Grid>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox size='small'
                                                            // value={check || ''} checked={check} onChange={handleCheckChange}
                                                            name="breakfast" />
                                                    }
                                                    label={<Typography sx={{ fontSize: '13px' }}>Education</Typography>}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    boxShadow={2}
                                    borderRadius='10px'
                                    marginTop='30px'
                                    padding='10px 20px'
                                >
                                    <Grid marginTop='5px'>
                                        <Typography variant='body2' sx={{ fontWeight: '600', fontSize: '17px', color: '#291F78' }}>
                                            DATE POSTED
                                        </Typography>
                                        <Grid>
                                            <Grid>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox size='small'
                                                            // value={check || ''} checked={check} onChange={handleCheckChange}
                                                            name="breakfast" />
                                                    }
                                                    label={<Typography sx={{ fontSize: '13px' }}>Last 6 Hours</Typography>}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid>
                                            <Grid>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox size='small'
                                                            // value={check || ''} checked={check} onChange={handleCheckChange}
                                                            name="breakfast" />
                                                    }
                                                    label={<Typography sx={{ fontSize: '13px' }}>Last 12 Hours</Typography>}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid>
                                            <Grid>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox size='small'
                                                            // value={check || ''} checked={check} onChange={handleCheckChange}
                                                            name="breakfast" />
                                                    }
                                                    label={<Typography sx={{ fontSize: '13px' }}>Last 24 Hours</Typography>}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid>
                                            <Grid>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox size='small'
                                                            // value={check || ''} checked={check} onChange={handleCheckChange}
                                                            name="breakfast" />
                                                    }
                                                    label={<Typography sx={{ fontSize: '13px' }}>Last 7 Days</Typography>}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid>
                                            <Grid>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox size='small'
                                                            // value={check || ''} checked={check} onChange={handleCheckChange}
                                                            name="breakfast" />
                                                    }
                                                    label={<Typography sx={{ fontSize: '13px' }}>Last 30 Days</Typography>}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid>
                                            <Grid>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox size='small'
                                                            // value={check || ''} checked={check} onChange={handleCheckChange}
                                                            name="breakfast" />
                                                    }
                                                    label={<Typography sx={{ fontSize: '13px' }}>All</Typography>}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    boxShadow={2}
                                    borderRadius='10px'
                                    marginTop='30px'
                                    padding='10px 20px'
                                >
                                    <Grid marginTop='5px'>
                                        <Typography variant='body2' sx={{ fontWeight: '600', fontSize: '17px', color: '#291F78' }}>
                                            SALARY
                                        </Typography>
                                        <Grid>
                                            <Grid>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox size='small'
                                                            // value={check || ''} checked={check} onChange={handleCheckChange}
                                                            name="breakfast" />
                                                    }
                                                    label={<Typography sx={{ fontSize: '13px' }}>0 - 15000</Typography>}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid>
                                            <Grid>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox size='small'
                                                            // value={check || ''} checked={check} onChange={handleCheckChange}
                                                            name="breakfast" />
                                                    }
                                                    label={<Typography sx={{ fontSize: '13px' }}>15000 - 20000</Typography>}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid>
                                            <Grid>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox size='small'
                                                            // value={check || ''} checked={check} onChange={handleCheckChange}
                                                            name="breakfast" />
                                                    }
                                                    label={<Typography sx={{ fontSize: '13px' }}>20000 - 30000</Typography>}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid>
                                            <Grid>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox size='small'
                                                            // value={check || ''} checked={check} onChange={handleCheckChange}
                                                            name="breakfast" />
                                                    }
                                                    label={<Typography sx={{ fontSize: '13px' }}>30000 - 40000</Typography>}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid>
                                            <Grid>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox size='small'
                                                            // value={check || ''} checked={check} onChange={handleCheckChange}
                                                            name="breakfast" />
                                                    }
                                                    label={<Typography sx={{ fontSize: '13px' }}>40000+</Typography>}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={8}>
                                <Grid sx={{ marginTop: '30px' }}>
                                    <Grid sx={{ border: '1px solid #F3F4F9', boxShadow: '1', borderRadius: '10px', marginBottom: '30px' }}>
                                        <Grid sx={{ padding: '20px 20px' }}>
                                            {
                                                jobInfo.length !== 0 ?
                                                    <>
                                                        {
                                                            jobInfo.map((info) =>
                                                                <Grid
                                                                    key={info?._id}
                                                                    container
                                                                    spacing={4}
                                                                    alignItems='center'
                                                                >
                                                                    <Grid item md={8}>
                                                                        <Grid>
                                                                            <Typography sx={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>
                                                                                {info?.title}
                                                                            </Typography>
                                                                            <Grid
                                                                                container
                                                                                spacing={4}
                                                                                marginBottom='10px'
                                                                            >
                                                                                <Grid item md={6}>
                                                                                    <Grid
                                                                                        display='flex'
                                                                                        alignItems='center'
                                                                                    >
                                                                                        <GoLocation style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                                        <Typography sx={{ fontSize: '15px' }}>
                                                                                            {info?.location}
                                                                                        </Typography>
                                                                                    </Grid>
                                                                                </Grid>
                                                                                <Grid item md={6}>
                                                                                    <Grid
                                                                                        display='flex'
                                                                                        alignItems='center'
                                                                                    >
                                                                                        <BiTimeFive style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                                        <Typography sx={{ fontSize: '15px' }}>
                                                                                            {info?.jobType}
                                                                                        </Typography>
                                                                                    </Grid>
                                                                                </Grid>
                                                                            </Grid>
                                                                            <Grid
                                                                                container
                                                                                spacing={4}
                                                                            >
                                                                                <Grid item md={6}>
                                                                                    <Grid
                                                                                        display='flex'
                                                                                        alignItems='center'
                                                                                    >
                                                                                        <AiFillUnlock style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                                        <Typography sx={{ fontSize: '15px' }}>
                                                                                            {info?.date}
                                                                                        </Typography>
                                                                                    </Grid>
                                                                                </Grid>
                                                                                <Grid item md={6}>
                                                                                    <Grid
                                                                                        display='flex'
                                                                                        alignItems='center'
                                                                                    >
                                                                                        <GrCurrency style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                                        <Typography sx={{ fontSize: '15px' }}>
                                                                                            ${info?.minSalary} - {info?.maxSalary} Per month
                                                                                        </Typography>
                                                                                    </Grid>
                                                                                </Grid>
                                                                            </Grid>
                                                                        </Grid>
                                                                    </Grid>
                                                                    <Grid item md={4}>
                                                                        <Grid sx={{ textAlign: 'end', alignItems: 'center' }}>
                                                                            <Button
                                                                                onClick={() => handleButton(info?._id)}
                                                                                variant="contained"
                                                                            >
                                                                                View
                                                                            </Button>
                                                                        </Grid>
                                                                    </Grid>
                                                                </Grid>
                                                            )
                                                        }
                                                    </>
                                                    :
                                                    <>
                                                        <Grid sx={{ marginTop: '50px', marginBottom: '50px' }}>
                                                            <Typography sx={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>
                                                                NO jobs are available in your search! Search something other...
                                                            </Typography>
                                                        </Grid>
                                                    </>
                                            }
                                        </Grid>
                                    </Grid>
                                    {/* <Grid sx={{ border: '1px solid #F3F4F9', boxShadow: '1', borderRadius: '10px', marginBottom: '30px' }}>
                                        <Grid sx={{ padding: '20px 20px' }}>
                                            <Grid
                                                container
                                                spacing={4}
                                                alignItems='center'
                                            >
                                                <Grid item md={8}>
                                                    <Grid>
                                                        <Typography sx={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>
                                                            SALES & MARKETING COORDINATOR
                                                        </Typography>
                                                        <Grid
                                                            container
                                                            spacing={4}
                                                            marginBottom='10px'
                                                        >
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <GoLocation style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        New York , Casborn
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <BiTimeFive style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        Full Time
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid
                                                            container
                                                            spacing={4}
                                                        >
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <AiFillUnlock style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        20/03/2023
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <GrCurrency style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        $2000 - 2100 Per month
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item md={4}>
                                                    <Grid sx={{ textAlign: 'end', alignItems: 'center' }}>
                                                        <Button
                                                            onClick={() => handleButton(2)}
                                                            variant="contained"
                                                        >
                                                            View
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid sx={{ border: '1px solid #F3F4F9', boxShadow: '1', borderRadius: '10px', marginBottom: '30px' }}>
                                        <Grid sx={{ padding: '20px 20px' }}>
                                            <Grid
                                                container
                                                spacing={4}
                                                alignItems='center'
                                            >
                                                <Grid item md={8}>
                                                    <Grid>
                                                        <Typography sx={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>
                                                            SALES & MARKETING COORDINATOR
                                                        </Typography>
                                                        <Grid
                                                            container
                                                            spacing={4}
                                                            marginBottom='10px'
                                                        >
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <GoLocation style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        New York , Casborn
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <BiTimeFive style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        Full Time
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid
                                                            container
                                                            spacing={4}
                                                        >
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <AiFillUnlock style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        20/03/2023
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <GrCurrency style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        $2000 - 2100 Per month
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item md={4}>
                                                    <Grid sx={{ textAlign: 'end', alignItems: 'center' }}>
                                                        <Button
                                                            onClick={() => handleButton(3)}
                                                            variant="contained"
                                                        >
                                                            View
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid sx={{ border: '1px solid #F3F4F9', boxShadow: '1', borderRadius: '10px', marginBottom: '30px' }}>
                                        <Grid sx={{ padding: '20px 20px' }}>
                                            <Grid
                                                container
                                                spacing={4}
                                                alignItems='center'
                                            >
                                                <Grid item md={8}>
                                                    <Grid>
                                                        <Typography sx={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>
                                                            SALES & MARKETING COORDINATOR
                                                        </Typography>
                                                        <Grid
                                                            container
                                                            spacing={4}
                                                            marginBottom='10px'
                                                        >
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <GoLocation style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        New York , Casborn
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <BiTimeFive style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        Full Time
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid
                                                            container
                                                            spacing={4}
                                                        >
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <AiFillUnlock style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        20/03/2023
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <GrCurrency style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        $2000 - 2100 Per month
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item md={4}>
                                                    <Grid sx={{ textAlign: 'end', alignItems: 'center' }}>
                                                        <Button
                                                            onClick={() => handleButton(4)}
                                                            variant="contained"
                                                        >
                                                            View
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid sx={{ border: '1px solid #F3F4F9', boxShadow: '1', borderRadius: '10px', marginBottom: '30px' }}>
                                        <Grid sx={{ padding: '20px 20px' }}>
                                            <Grid
                                                container
                                                spacing={4}
                                                alignItems='center'
                                            >
                                                <Grid item md={8}>
                                                    <Grid>
                                                        <Typography sx={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>
                                                            SALES & MARKETING COORDINATOR
                                                        </Typography>
                                                        <Grid
                                                            container
                                                            spacing={4}
                                                            marginBottom='10px'
                                                        >
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <GoLocation style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        New York , Casborn
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <BiTimeFive style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        Full Time
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid
                                                            container
                                                            spacing={4}
                                                        >
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <AiFillUnlock style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        20/03/2023
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <GrCurrency style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        $2000 - 2100 Per month
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item md={4}>
                                                    <Grid sx={{ textAlign: 'end', alignItems: 'center' }}>
                                                        <Button
                                                            onClick={() => handleButton(5)}
                                                            variant="contained"
                                                        >
                                                            View
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid sx={{ border: '1px solid #F3F4F9', boxShadow: '1', borderRadius: '10px', marginBottom: '30px' }}>
                                        <Grid sx={{ padding: '20px 20px' }}>
                                            <Grid
                                                container
                                                spacing={4}
                                                alignItems='center'
                                            >
                                                <Grid item md={8}>
                                                    <Grid>
                                                        <Typography sx={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>
                                                            SALES & MARKETING COORDINATOR
                                                        </Typography>
                                                        <Grid
                                                            container
                                                            spacing={4}
                                                            marginBottom='10px'
                                                        >
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <GoLocation style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        New York , Casborn
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <BiTimeFive style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        Full Time
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid
                                                            container
                                                            spacing={4}
                                                        >
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <AiFillUnlock style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        20/03/2023
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <GrCurrency style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        $2000 - 2100 Per month
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item md={4}>
                                                    <Grid sx={{ textAlign: 'end', alignItems: 'center' }}>
                                                        <Button
                                                            onClick={() => handleButton(6)}
                                                            variant="contained"
                                                        >
                                                            View
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid sx={{ border: '1px solid #F3F4F9', boxShadow: '1', borderRadius: '10px', marginBottom: '30px' }}>
                                        <Grid sx={{ padding: '20px 20px' }}>
                                            <Grid
                                                container
                                                spacing={4}
                                                alignItems='center'
                                            >
                                                <Grid item md={8}>
                                                    <Grid>
                                                        <Typography sx={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>
                                                            SALES & MARKETING COORDINATOR
                                                        </Typography>
                                                        <Grid
                                                            container
                                                            spacing={4}
                                                            marginBottom='10px'
                                                        >
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <GoLocation style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        New York , Casborn
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <BiTimeFive style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        Full Time
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid
                                                            container
                                                            spacing={4}
                                                        >
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <AiFillUnlock style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        20/03/2023
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <GrCurrency style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        $2000 - 2100 Per month
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item md={4}>
                                                    <Grid sx={{ textAlign: 'end', alignItems: 'center' }}>
                                                        <Button
                                                            onClick={() => handleButton(7)}
                                                            variant="contained"
                                                        >
                                                            View
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid sx={{ border: '1px solid #F3F4F9', boxShadow: '1', borderRadius: '10px', marginBottom: '30px' }}>
                                        <Grid sx={{ padding: '20px 20px' }}>
                                            <Grid
                                                container
                                                spacing={4}
                                                alignItems='center'
                                            >
                                                <Grid item md={8}>
                                                    <Grid>
                                                        <Typography sx={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>
                                                            SALES & MARKETING COORDINATOR
                                                        </Typography>
                                                        <Grid
                                                            container
                                                            spacing={4}
                                                            marginBottom='10px'
                                                        >
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <GoLocation style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        New York , Casborn
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <BiTimeFive style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        Full Time
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid
                                                            container
                                                            spacing={4}
                                                        >
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <AiFillUnlock style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        20/03/2023
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <GrCurrency style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        $2000 - 2100 Per month
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item md={4}>
                                                    <Grid sx={{ textAlign: 'end', alignItems: 'center' }}>
                                                        <Button
                                                            onClick={() => handleButton(8)}
                                                            variant="contained"
                                                        >
                                                            View
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid> */}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
                {
                    loading && <Loader />
                }
                <Grid sx={{ backgroundColor: '#453D83', padding: '20px 0px' }}>
                    <Grid sx={{ textAlign: 'center' }}>
                        <Typography sx={{ fontSize: '30px', color: 'white', fontWeight: '600', letterSpacing: '2px' }}>
                            HAVE A QUESTION?
                        </Typography>
                        <Typography sx={{ fontSize: '15px', color: 'white', fontWeight: '600', marginTop: '10px' }}>
                            We are here to help. Email us or call +44 534 643 2544
                        </Typography>
                        <Button variant='contained' style={{
                            color: 'black', fontWeight: '600', marginTop: '20px', fontSize: '17px', borderRadius: '10px', backgroundColor: '#FFFFFF', width: '250px', ':hover': {
                                bgcolor: '#FFFFFF',
                                color: 'black',
                            }
                        }}>
                            Contact Us
                        </Button>
                    </Grid>
                </Grid>
                <Grid>
                    <Container>
                        <Grid sx={{ marginTop: '50px', marginBottom: '50px' }}>
                            <Grid sx={{ backgroundColor: '#FFFDFD', boxShadow: '6', padding: '40px 40px', borderRadius: '20px', backgroundImage: 'linear-gradient(to right, #9F37CE, #291F78)' }}>
                                <Grid
                                    container
                                    spacing={4}
                                    alignItems='center'
                                >
                                    <Grid item md={6}>
                                        <Grid>
                                            <Typography sx={{ fontSize: '30px', fontWeight: '600', letterSpacing: '5px', color: '#000000' }}>
                                                Never Want to Miss Any
                                            </Typography>
                                            <Typography sx={{ fontSize: '35px', fontWeight: '600', letterSpacing: '5px', color: '#291F78' }}>
                                                Job News?
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={6}>
                                        <Grid
                                            container
                                            spacing={1}
                                        >
                                            <Grid item md={6}>
                                                <TextField
                                                    sx={{
                                                        color: 'white', width: '100%', borderRadius: '10px', backgroundColor: 'white', [`& fieldset`]: {
                                                            borderRadius: '10px',
                                                        },
                                                    }}
                                                    placeholder='Email'
                                                    variant="outlined"
                                                    size='small'
                                                />
                                            </Grid>
                                            <Grid item md={6}>
                                                <Button variant='contained' style={{
                                                    color: 'white', fontSize: '17px', borderRadius: '15px', backgroundColor: '#291F78', width: '100%', ':hover': {
                                                        bgcolor: '#291F78',
                                                        color: 'white',
                                                    }
                                                }}>
                                                    Submit
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
            <Footer />
        </>
    );
};

export default Jobs;