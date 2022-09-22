import { Box, Button, Divider, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, styled, TextField, Typography } from '@mui/material';
import React from 'react';
import googleImage from "../../Image/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
import facebookImage from "../../Image/download.png"
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const ImageBoxStyled = styled(Box)(({ theme }) => ({
    width: "80px",
    height: "60px",
    border: "1px solid #e0e0e0",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer"
}))

const BoxStyled = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: '20px',
    flexDirection: "column",
    width: "30%",
    [theme.breakpoints.down("md")]: {
        width: "90%"
    }
}))

const SpanStyled = styled("span")(({ theme }) => ({
    color: "#6747c7",
    cursor: "pointer",
    "&:hover": {
        color: "#2f1c6a",
    }
}))

const LoginPage = () => {

    const navigate = useNavigate();

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <Box
            sx={{
                width: "100%"
            }}
        >
            <Box
                pt={4}
                pl={4}
                pr={4}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}
            >
                <img src='https://assets.hostinger.com/images/logo-dark-1b05f1e5e7.svg' alt='' />
                <Button
                    variant="outlined"
                    sx={{
                        width: "100px",
                        height: "40px",
                        borderRadius: "30px",
                        border: "1px solid #6610f2",
                        textTransform: "capitalize",
                        fontSize: "14px",
                        "&:hover": {
                            borderColor: "#6610f2",
                            backgroundColor: "#6610f2",
                            color: "white"
                        }
                    }}
                    onClick={() => navigate("/")}
                >
                    Back
                </Button>
            </Box>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
            }}>
                <BoxStyled>
                    <Box>
                        <Typography variant='h5' sx={{ fontWeight: "bold", textAlign: "center", color: '#2f1c6a' }}>Log in</Typography>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: '20px',
                        flexDirection: "row",
                    }}>
                        <ImageBoxStyled>
                            <img src={googleImage} alt="" width={30} />
                        </ImageBoxStyled>
                        <ImageBoxStyled>
                            <img src={facebookImage} alt="" width={30} />
                        </ImageBoxStyled>
                    </Box>
                    <Divider sx={{ width: "100%" }}>or</Divider>
                    <TextField id="outlined-basic" label="Email" variant="outlined" sx={{ width: "100%" }} />
                    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <Button variant='contained' sx={{ bgcolor: "#6747c7", "&:hover": { bgcolor: "#6747c7" }, width: "100%", height: "50px" }}>Log in</Button>
                    <Typography variant='body1' sx={{ fontSize: "14px", fontWeight: "bold", color: '#6747c7', cursor: "pointer" }}>Forget Password?</Typography>
                    <Typography variant='body1' sx={{ fontSize: "18px", fontWeight: "bold", color: '#2f1c6a', textAlign: "center", width: "100%" }}>
                        Not a member yet? <SpanStyled>Choose a hosting plan</SpanStyled> and get started now!
                    </Typography>
                </BoxStyled>
            </Box>
        </Box>
    )
}

export default LoginPage;