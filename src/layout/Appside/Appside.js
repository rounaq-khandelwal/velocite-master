import { Typography } from '@mui/material';
import * as React from 'react';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import './Appside.scss';

const Appside = () => {
  return (
    <div className="appAside">
      <h2 className="headingBrain"> BrainIntelCorp for a Happy Mind</h2>
      <Typography mt={35} ml={4}>
        <span className="app-tagline">
          Assessment for Happiness
          <br />
          using your Speech Signals
        </span>
      </Typography>
    </div>
  );
};

export default Appside;
