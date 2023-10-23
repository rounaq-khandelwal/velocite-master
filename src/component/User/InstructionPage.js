import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography, TextField, Button} from '@mui/material';
import HeaderLogin from '../../layout/Header/HeaderLogin'
import Helplink from '../../layout/Header/HelpLink';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Footer from '../../layout/Footer/Footer';
const InstructionPage = (props) => {
    const {setPage} =props;
 
    return(
        <Grid xs={12} sm={6} >
            <Typography >
                <Helplink />
            </Typography>
            <Typography  mt={22}>
                <HeaderLogin/>
            </Typography>
            <Typography mt={6}>
                <p style={{textAlign: 'center'}}>Thankyou for your interest in Happiness Index</p>
                <p style={{textAlign: 'center'}}>Instructions have been sent your mail id. </p>
                <p style={{textAlign: 'center'}}>Please verify</p>
            </Typography> 
            <Footer style='240px'/>    
        </Grid>
    )
}

export default InstructionPage;