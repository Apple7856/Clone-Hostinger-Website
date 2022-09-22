import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const CompanySecurityOath = () => {
    return (
        <Box
            pt={6}
            pb={8}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1.5rem"
            }}
        >
            <Typography variant='h4' sx={{ fontWeight: "bold", color: "#2f1c6a", textAlign: "center", }}>
                30-Day Money-Back Guarantee
            </Typography>
            <Typography variant='body1' sx={{ fontSize: "16px", textAlign: "center", color: "#2f1c6a", width: "70%" }}>
                We'll refund your payment if you’re not 100% satisfied with Hostinger. No hassle, no risk.
            </Typography>
            <Button
                sx={{
                    backgroundColor: "#6610f2",
                    borderRadius: "27px",
                    width: "10rem",
                    textTransform: "capitalize",
                    fontSize: "16px",
                    color: "white"
                }}
                variant="contained"
            >
                Get Started
            </Button>
        </Box>
    )
}

export default CompanySecurityOath;