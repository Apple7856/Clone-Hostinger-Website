import { Box, Button, styled, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import tik from "../Image/tick-icon-30.png";

const TypographyStyled = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
    textAlign: "center",
    width: "70%",
    [theme.breakpoints.down("md")]: {
        width: "90%"
    }
}))

const BoxStyled1 = styled(Box)(({ theme }) => ({
    position: "absolute",
    width: "45%",
    top: "120px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    gap: "10px",
    [theme.breakpoints.down("md")]: {
        width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
        width: "90%",
    },
}))

const TypographyStyled1 = styled(Typography)(({ theme }) => ({
    fontSize: "33px",
    fontWeight: 700,
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
        fontSize: "25px",
    }
}))

const ImageBoxStyled = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
}))

const ImageStyled = styled("img")(({ theme }) => ({
    width: "500px",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
        width: "100%"
    }
}))

const PriceStyled1 = styled("span")(({ theme }) => ({
    fontSize: "30px",
    position: "relative",
    bottom: "1.8rem",
    [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
        bottom: "1.5rem"
    }
}))

const PriceStyled2 = styled("span")(({ theme }) => ({
    fontSize: "70px",
    [theme.breakpoints.down("sm")]: {
        fontSize: "50px"
    }
}))

const PriceStyled3 = styled("span")(({ theme }) => ({
    fontSize: "30px",
    [theme.breakpoints.down("sm")]: {
        fontSize: "20px"
    }
}))

const TimerBoxStyled = styled(Box)(({ theme }) => ({
    width: "3rem",
    height: "3rem",
    backgroundColor: "white",
    borderRadius: "5px",
    color: "#1d1e20",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
    width: "15rem",
    height: "3rem",
    borderRadius: "27px",
    fontSize: "18px",
    backgroundColor: "#e83e8c",
    [theme.breakpoints.down("sm")]: {
        width: "12rem",
        height: "2.5rem",
    }
}))

const HeroSection = () => {
    const [days, setDays] = useState(1);
    const [hours, setHours] = useState(20);
    const [minutes, setMinutes] = useState(5);
    const [seconds, setSeconds] = useState(15);
    useEffect(() => {
        const intervalTimer = setInterval(() => {
            if (days || hours || minutes || seconds) {
                if (seconds) {
                    setSeconds(seconds - 1);
                } else if (minutes) {
                    setSeconds(59)
                    setMinutes(minutes - 1)
                } else if (hours) {
                    setSeconds(59)
                    setMinutes(59)
                    setHours(hours - 1);
                } else if (days) {
                    setSeconds(59)
                    setMinutes(59)
                    setHours(23)
                    setDays(days - 1)
                }
            }
        }, 1000);
        return () => clearInterval(intervalTimer);
    });

    return (
        <Box
            sx={{
                height: "500px",
                backgroundColor: "#6610f2",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
            pt={3}
        >
            <ImageBoxStyled>
                <Box sx={{ display: { xs: "none", sm: "nome", md: "none", lg: "block" } }}>
                    <ImageStyled src="https://assets.hostinger.com/lang/en-in/images/sales/summerSale2022v2/header/main-header-left@2x-529d040190.png" alt="" />
                </Box>
                <Box>
                    <ImageStyled src="https://assets.hostinger.com/lang/en-in/images/sales/summerSale2022v2/header/main-header-right@2x-6a87966aca.png" alt="" />
                </Box>
            </ImageBoxStyled>
            <BoxStyled1>
                <TypographyStyled1
                    variant='body1'
                >
                    Savings to Set Your Website in Motion
                </TypographyStyled1>
                <Typography variant='body2' sx={{ fontWeight: "bold" }}>
                    <PriceStyled1>₹</PriceStyled1>
                    <PriceStyled2>149.00</PriceStyled2>
                    <PriceStyled3>/mo</PriceStyled3>
                </Typography>
                <TypographyStyled>
                    Get things moving with a free domain, lifetime SSL, and DDoS protection included with a four-year subscription.
                </TypographyStyled>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: 'baseline',
                        gap: "5px"
                    }}
                >
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <TimerBoxStyled>
                            {days > 9 ? days : "0" + days}
                        </TimerBoxStyled>
                        <Typography variant='body2'>days</Typography>
                    </Box>
                    <Typography variant='body2' sx={{ color: "#727586", fontSize: "16px", fontWeight: "bold" }}>:</Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <TimerBoxStyled>
                            {hours > 9 ? hours : "0" + hours}
                        </TimerBoxStyled>
                        <Typography variant='body2'>hours</Typography>
                    </Box>
                    <Typography variant='body2' sx={{ color: "#727586", fontSize: "16px", fontWeight: "bold" }}>:</Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <TimerBoxStyled>
                            {minutes > 9 ? minutes : "0" + minutes}
                        </TimerBoxStyled>
                        <Typography variant='body2'>minutes</Typography>
                    </Box>
                    <Typography variant='body2' sx={{ color: "#727586", fontSize: "16px", fontWeight: "bold" }}>:</Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <TimerBoxStyled>
                            {seconds > 9 ? seconds : "0" + seconds}
                        </TimerBoxStyled>
                        <Typography variant='body2'>seconds</Typography>
                    </Box>
                </Box>
                <ButtonStyled
                    variant='contained'
                >
                    Get Started
                </ButtonStyled>
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "3px" }}>
                    <img src={tik} alt="" width={15} />
                    <Typography variant="body2" sx={{ fontSize: "16px", textAlign: "center" }}>
                        Get exclusive 30-day money-back guarantee
                    </Typography>
                </Box>
            </BoxStyled1>
        </Box>
    )
}

export default HeroSection;