import { Box, Button, Divider, Stack, styled, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import cloudflare from "../Image/Cloudflare-Logo.png";
import WordPress from "../Image/2560px-WordPress_logo.svg.png";
import litespeed from "../Image/litespeed.png";
import tik from "../Image/tic.jpg"
import { HelpOutline } from '@mui/icons-material';

const PriceStyled1 = styled("span")(({ theme }) => ({
    fontSize: "20px",
    position: "relative",
    bottom: "1.3rem",
    [theme.breakpoints.down("sm")]: {
        fontSize: "15px",
        bottom: "1rem"
    }
}))

const PriceStyled2 = styled("span")(({ theme }) => ({
    fontSize: "48px",
    [theme.breakpoints.down("sm")]: {
        fontSize: "35px"
    }
}))

const PriceStyled3 = styled("span")(({ theme }) => ({
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
        fontSize: "15px"
    }
}))

const HeadingStyled = styled(Typography)(({ theme }) => ({
    fontSize: "30px",
    fontWeight: 700,
    color: "white",
    [theme.breakpoints.down("sm")]: {
        fontSize: "20px"
    }
}))

const DescStyled = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    fontSize: "18px",
    color: "#2f1c6a",
    [theme.breakpoints.down("sm")]: {
        fontSize: "13px"
    }
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
    width: "15rem",
    height: "3rem",
    borderRadius: "27px",
    fontSize: "18px",
    backgroundColor: "#6610f2",
    [theme.breakpoints.down("sm")]: {
        width: "11rem",
        height: "2.5rem",
    }
}))

const MiddelSection = () => {
    const List1 = [
        {
            name1: "Unmetered",
            name2: "traffic (Unlimited GB)",
            img: tik,
            info: "description"
        },
        {
            name1: "100",
            name2: "Websites",
            img: tik,
            info: null
        },
        {
            name1: "100 GB",
            name2: "SSD Storage",
            img: tik,
            info: "description"
        },
        {
            name1: "Free",
            name2: "Weekly Backups",
            img: tik,
            info: "description"
        },
    ]

    const List2 = [
        {
            name1: "Unlimited",
            name2: "Free SSL",
            img: tik,
            info: "description"
        },
        {
            name1: "Free",
            name2: "Domain",
            img: tik,
            info: "description"
        },
        {
            name1: "Free",
            name2: "Email",
            img: tik,
            info: "description"
        },
        {
            name1: "Optimized",
            name2: "for WordPress",
            img: tik,
            info: "description"
        },
    ]
    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Stack
                direction={"row"}
                divider={<Divider orientation="vertical" flexItem sx={{ borderColor: "rgba(140,133,255,.5)", display: { xs: "none", sm: "none", md: "block" } }} />}
                spacing={2}
                justifyContent="space-between"
                sx={{ width: "100%" }}
                p={5}
            >
                <Box flex={1} sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {
                            List1.map((item, index) => {
                                return <Box sx={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "5px" }} key={index}>
                                    <img src={item.img} alt="" />
                                    <Typography variant="body2" sx={{ fontSize: "16px", color: "#2f1c6a" }}>
                                        <span style={{ fontWeight: 700 }}>{item.name1}</span>{" "}
                                        {item.name2} {" "}
                                        {
                                            item.info && <Tooltip title={item.info} arrow>
                                                <HelpOutline sx={{ fontSize: "16px", fontWeight: "400", position: "relative", top: "3px", cursor: "pointer" }} />
                                            </Tooltip>
                                        }
                                    </Typography>
                                </Box>
                            })
                        }
                    </Box>
                </Box>

                <Box
                    flex={1}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        gap: "2rem"
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                        <Typography variant='body2' sx={{ fontWeight: "bold", color: "#2f1c6a" }}>
                            <PriceStyled1>₹</PriceStyled1>
                            <PriceStyled2>149.00</PriceStyled2>
                            <PriceStyled3>/mo</PriceStyled3>
                        </Typography>
                        <DescStyled variant='body2'>
                            ₹249.00/mo when you renew
                        </DescStyled>
                    </Box>
                    <ButtonStyled
                        variant='contained'
                    >
                        Select
                    </ButtonStyled>
                </Box>

                <Box flex={1} sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {
                            List2.map((item, index) => {
                                return <Box sx={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "5px" }} key={index}>
                                    <img src={item.img} alt="" />
                                    <Typography variant="body2" sx={{ fontSize: "16px", color: "#2f1c6a" }}>
                                        <span style={{ fontWeight: 700 }}>{item.name1}</span>{" "}
                                        {item.name2} {" "}
                                        {
                                            item.info && <Tooltip title={item.info} arrow>
                                                <HelpOutline sx={{ fontSize: "16px", fontWeight: "400", position: "relative", top: "3px", cursor: "pointer" }} />
                                            </Tooltip>
                                        }
                                    </Typography>
                                </Box>
                            })
                        }
                    </Box>
                </Box>
            </Stack>
        </Box>
    )
}

const TopSection = () => {
    return (
        <Box
            sx={{ width: "100%", height: "4rem", backgroundColor: "#6610f2", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}
        >
            <HeadingStyled variant='body2'>
                Best Web Hosting
            </HeadingStyled>
        </Box>
    )
}

const BottomSection = ({ open, handleOpen }) => {
    return (
        <Box p={2} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Button
                variant='text'
                sx={{
                    textDecoration: "underline",
                    fontSize: "18px",
                    textTransform: "capitalize",
                    color: "#6610f2",
                    "&:hover": {
                        backgroundColor: "white",
                        textDecoration: "underline",
                    }
                }}
                onClick={() => handleOpen(!open)}
            >
                {open ? "See Less" : "See All Features"}
            </Button>
        </Box>
    )
}

const HiddenSectionDownMd = () => {
    const List = [
        {
            name1: "Unmetered",
            name2: "traffic (Unlimited GB)",
            img: tik,
            info: "description"
        },
        {
            name1: "100",
            name2: "Websites",
            img: tik,
            info: null
        },
        {
            name1: "100 GB",
            name2: "SSD Storage",
            img: tik,
            info: "description"
        },
        {
            name1: "Free",
            name2: "Weekly Backups",
            img: tik,
            info: "description"
        },
        {
            name1: "Unlimited",
            name2: "Free SSL",
            img: tik,
            info: "description"
        },
        {
            name1: "Free",
            name2: "Domain",
            img: tik,
            info: "description"
        },
        {
            name1: "Free",
            name2: "Email",
            img: tik,
            info: "description"
        },
        {
            name1: "Optimized",
            name2: "for WordPress",
            img: tik,
            info: "description"
        },
        {
            name1: "Unmetered",
            name2: "traffic (Unlimited GB)",
            img: tik,
            info: "description"
        },
        {
            name1: "100",
            name2: "Websites",
            img: tik,
            info: null
        },
        {
            name1: "100 GB",
            name2: "SSD Storage",
            img: tik,
            info: "description"
        },
        {
            name1: "Free",
            name2: "Weekly Backups",
            img: tik,
            info: "description"
        },
        {
            name1: "Unlimited",
            name2: "Free SSL",
            img: tik,
            info: "description"
        },
        {
            name1: "Free",
            name2: "Domain",
            img: tik,
            info: "description"
        },
        {
            name1: "Free",
            name2: "Email",
            img: tik,
            info: "description"
        },
        {
            name1: "Optimized",
            name2: "for WordPress",
            img: tik,
            info: "description"
        },
    ]
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {
                List.map((item, index) => {
                    return <Box sx={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "5px" }} key={index}>
                        <img src={item.img} alt="" />
                        <Typography variant="body2" sx={{ fontSize: "16px", color: "#2f1c6a" }}>
                            <span style={{ fontWeight: 700 }}>{item.name1}</span>{" "}
                            {item.name2} {" "}
                            {
                                item.info && <Tooltip title={item.info} arrow>
                                    <HelpOutline sx={{ fontSize: "16px", fontWeight: "400", position: "relative", top: "3px", cursor: "pointer" }} />
                                </Tooltip>
                            }
                        </Typography>
                    </Box>
                })
            }
        </Box>
    )
}

const HiddenSection = () => {
    const List1 = [
        {
            name1: "Unmetered",
            name2: "traffic (Unlimited GB)",
            img: tik,
            info: "description"
        },
        {
            name1: "100",
            name2: "Websites",
            img: tik,
            info: null
        },
        {
            name1: "100 GB",
            name2: "SSD Storage",
            img: tik,
            info: "description"
        },
        {
            name1: "Free",
            name2: "Weekly Backups",
            img: tik,
            info: "description"
        },
    ]

    const List2 = [
        {
            name1: "Unlimited",
            name2: "Free SSL",
            img: tik,
            info: "description"
        },
        {
            name1: "Free",
            name2: "Domain",
            img: tik,
            info: "description"
        },
        {
            name1: "Free",
            name2: "Email",
            img: tik,
            info: "description"
        },
        {
            name1: "Optimized",
            name2: "for WordPress",
            img: tik,
            info: "description"
        },
    ]

    return (
        <Box>
            <Typography variant='h5' sx={{ color: "#2f1c6a", fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "center" }}>
                Plan Features
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Stack
                            direction={"row"}
                            divider={<Divider orientation="vertical" flexItem sx={{ borderColor: "rgba(140,133,255,.5)" }} />}
                            spacing={2}
                            justifyContent="space-between"
                            sx={{ width: "100%" }}
                            p={5}
                        >
                            <Box flex={1} sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                {
                                    List1.map((item, index) => {
                                        return <Box sx={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "5px" }} key={index}>
                                            <img src={item.img} alt="" />
                                            <Typography variant="body2" sx={{ fontSize: "16px", color: "#2f1c6a" }}>
                                                <span style={{ fontWeight: 700 }}>{item.name1}</span>{" "}
                                                {item.name2} {" "}
                                                {
                                                    item.info && <Tooltip title={item.info} arrow>
                                                        <HelpOutline sx={{ fontSize: "16px", fontWeight: "400", position: "relative", top: "3px", cursor: "pointer" }} />
                                                    </Tooltip>
                                                }
                                            </Typography>
                                        </Box>
                                    })
                                }
                            </Box>

                            <Box flex={1} sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                {
                                    List2.map((item, index) => {
                                        return <Box sx={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "5px" }} key={index}>
                                            <img src={item.img} alt="" />
                                            <Typography variant="body2" sx={{ fontSize: "16px", color: "#2f1c6a" }}>
                                                <span style={{ fontWeight: 700 }}>{item.name1}</span>{" "}
                                                {item.name2} {" "}
                                                {
                                                    item.info && <Tooltip title={item.info} arrow>
                                                        <HelpOutline sx={{ fontSize: "16px", fontWeight: "400", position: "relative", top: "3px", cursor: "pointer" }} />
                                                    </Tooltip>
                                                }
                                            </Typography>
                                        </Box>
                                    })
                                }
                            </Box>

                            <Box flex={1} sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                {
                                    List2.map((item, index) => {
                                        return <Box sx={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "5px" }} key={index}>
                                            <img src={item.img} alt="" />
                                            <Typography variant="body2" sx={{ fontSize: "16px", color: "#2f1c6a" }}>
                                                <span style={{ fontWeight: 700 }}>{item.name1}</span>{" "}
                                                {item.name2} {" "}
                                                {
                                                    item.info && <Tooltip title={item.info} arrow>
                                                        <HelpOutline sx={{ fontSize: "16px", fontWeight: "400", position: "relative", top: "3px", cursor: "pointer" }} />
                                                    </Tooltip>
                                                }
                                            </Typography>
                                        </Box>
                                    })
                                }
                            </Box>
                        </Stack>
                    </Box>
                </Box>
                <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }} p={5}>
                    <HiddenSectionDownMd />
                </Box>
            </Box>
        </Box>
    )
}


const BoxStyled1 = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    gap: "20px",
    width: "50%",
    [theme.breakpoints.down("md")]: {
        width: "80%"
    },
    [theme.breakpoints.down("sm")]: {
        width: "90%"
    }
}))

const BoxStyled2 = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    outline: "1px solid #e0e0e0",
    borderRadius: "5px",
    overflow: "hidden",
    width: "75%",
    [theme.breakpoints.down("md")]: {
        width: "100%"
    }
}))

const PricingSection = () => {
    const [showHiddenSection, setShowHiddenSection] = useState(false);
    return (
        <Box sx={{
            padding: "20px 40px 20px 40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "30px"
        }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "5rem"
                }}
            >
                <img src={WordPress} alt="" width={200} />
                <img src={litespeed} alt="" width={200} />
                <img src={cloudflare} alt="" width={200} />
            </Box>
            <BoxStyled1>
                <Typography variant='h4' sx={{ fontWeight: 700, color: "#2f1c6a", textAlign: "center" }}>
                    All-In-One Web Hosting
                </Typography>
                <Typography variant='body1' sx={{ fontSize: "16px", textAlign: "center", color: "#727586" }}>
                    We prepared the best web hosting plan for you to start. You will be able to adjust plans as you go - our custom-built algorithm will provide suggestions based on your usage.
                </Typography>
            </BoxStyled1>
            <BoxStyled2>
                <TopSection />
                <MiddelSection />
                {showHiddenSection && <HiddenSection />}
                <Box sx={{ width: "100%", border: "1px solid #e0e0e0" }}></Box>
                <BottomSection open={showHiddenSection} handleOpen={setShowHiddenSection} />
            </BoxStyled2>
        </Box>
    )
}

export default PricingSection;