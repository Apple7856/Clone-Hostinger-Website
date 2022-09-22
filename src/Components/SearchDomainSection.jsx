import { Box, Button, styled, Typography } from '@mui/material';
import React, { useState } from 'react';

const BoxStyled = styled(Box)(({ theme }) => ({
    width: "70%",
    display: "block",
    [theme.breakpoints.down("md")]: {
        display: "none"
    }
}))

const BoxStyled2 = styled(Box)(({ theme }) => ({
    width: "80%",
    display: "none",
    [theme.breakpoints.down("md")]: {
        display: "block"
    }
}))

const InputStyled1 = styled("input")(({ theme }) => ({
    width: "100%",
    border: "1px solid #e0e0e0",
    borderRadius: "27px",
    padding: "12px 15px",
    fontSize: "16px",
    "&:focus": {
        outline: "none"
    },
    [theme.breakpoints.down("md")]: {
        display: "block"
    }
}))

const InputStyled2 = styled("input")(({ theme }) => ({
    width: "100%",
    borderRadius: "27px",
    padding: "12px 15px",
    fontSize: "16px",
    outline: "none",
    border: "none",
    "&:focus": {
        outline: "none"
    },
    [theme.breakpoints.down("md")]: {
        display: "block"
    }
}))

const TypographyStyled = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
    textAlign: "center",
    color: "#2f1c6a",
    width: "70%",
    [theme.breakpoints.down("md")]: {
        width: "90%"
    }
}))

const TypographyStyled2 = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    color: "#2f1c6a",
    textAlign: "center",
    width: "70%",
    [theme.breakpoints.down("md")]: {
        width: "90%"
    }
}))

const SearchDomainSection = () => {
    const [inputValue, setInputValue] = useState(null);
    return (
        <Box
            pt={6}
            pb={6}
            sx={{
                backgroundColor: "#f4f5ff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1.5rem"
            }}
        >
            <TypographyStyled2 variant='h4'>
                Find the perfect domain name
            </TypographyStyled2>
            <TypographyStyled>
                Enter domain name of your choice and pick any extension name on the next step (choose between .in, .com, .online, .live, .store, .info and many more)
            </TypographyStyled>
            <BoxStyled>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        border: "1px solid #e0e0e0",
                        borderRadius: "27px",
                        backgroundColor: "white"
                    }}
                >
                    <InputStyled2
                        type={"text"}
                        placeholder="Type in that perfect domain name"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                    />
                    <Button
                        sx={{
                            backgroundColor: inputValue ? "#6610f2" : "#727586",
                            borderRadius: "27px",
                            width: "200px",
                            textTransform: "capitalize",
                            fontSize: "16px",
                            color: "white",
                            height: "45px"
                        }}
                        p={2}
                        variant="contained"
                        disabled={inputValue ? false : true}
                    >
                        Search
                    </Button>
                </Box>
            </BoxStyled>
            <BoxStyled2>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "20px"
                    }}
                >
                    <InputStyled1
                        type={"text"}
                        placeholder="Type in that perfect domain name"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                    />
                    <Button
                        sx={{
                            backgroundColor: inputValue ? "#6610f2" : "#727586",
                            borderRadius: "27px",
                            width: "200px",
                            textTransform: "capitalize",
                            fontSize: "16px",
                            color: "white",
                            height: "45px"
                        }}
                        p={2}
                        variant="contained"
                        disabled={inputValue ? false : true}
                    >
                        Search
                    </Button>
                </Box>
            </BoxStyled2>
        </Box>
    )
}

export default SearchDomainSection;
