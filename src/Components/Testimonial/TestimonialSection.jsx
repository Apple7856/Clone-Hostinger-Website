import { Box, CardMedia, styled, Typography } from '@mui/material';
import React from 'react';

const BoxStyled = styled(Box)(({ theme }) => ({
    width: "45%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1rem",
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
        width: "90%"
    }
}))

const TestimonialSection1 = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: 'center',
                justifyContent: "space-between",
            }}
            p={5}
        >
            <BoxStyled>
                <Typography variant='body1' sx={{ fontSize: "16px", color: "#727586" }}>
                    EASY TO USE AND SIMPLE
                </Typography>
                <Typography variant='h4' sx={{ fontWeight: 700, color: "#2f1c6a", }}>
                    Easy to set up
                </Typography>
                <Typography variant='body1' sx={{ fontSize: "16px", color: "#727586" }}>
                    Getting your website live is as simple as a click of a button. Everything you need - provided in a clear way.
                </Typography>
                <Typography
                    sx={{
                        textDecoration: "underline",
                        fontSize: "18px",
                        color: "#2f1c6a",
                        cursor: "pointer",
                        "&:hover": {
                            color: "#6610f2",
                            textDecoration: "underline",
                        }
                    }}
                >
                    Learn more
                </Typography>
            </BoxStyled>
            <BoxStyled>
                <CardMedia
                    component="video"
                    image='https://assets.hostinger.com/videos/homepage2020/easy-to-set-up-6e4616539f.mp4'
                    autoPlay
                >
                </CardMedia>
            </BoxStyled>
        </Box>
    )
}

const TestimonialSection2 = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: 'center',
                justifyContent: "space-between",
            }}
            p={5}
        >
            <BoxStyled>
                <CardMedia
                    component="video"
                    image='https://assets.hostinger.com/videos/homepage2020/simply-fast-websites-ad53591419.mp4'
                    autoPlay
                >
                </CardMedia>
            </BoxStyled>
            <BoxStyled>
                <Typography variant='body1' sx={{ fontSize: "16px", color: "#727586" }}>
                    PERFORMANCE AND SPEED
                </Typography>
                <Typography variant='h4' sx={{ fontWeight: 700, color: "#2f1c6a", }}>
                    Lightning-fast websites
                </Typography>
                <Typography variant='body1' sx={{ fontSize: "16px", color: "#727586" }}>
                    Website speed can slow or grow your business. Delight your visitors with a fast-loading and optimized website.
                </Typography>
                <Typography
                    sx={{
                        textDecoration: "underline",
                        fontSize: "18px",
                        color: "#2f1c6a",
                        cursor: "pointer",
                        "&:hover": {
                            color: "#6610f2",
                            textDecoration: "underline",
                        }
                    }}
                >
                    Learn more
                </Typography>
            </BoxStyled>

        </Box>
    )
}

const TestimonialSection4 = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: 'center',
                justifyContent: "space-between",
            }}
            p={5}
        >
            <BoxStyled>
                <CardMedia
                    component="video"
                    image='https://assets.hostinger.com/videos/homepage2020/chat-support-24-7-f281e75a32.mp4'
                    autoPlay
                >
                </CardMedia>
            </BoxStyled>
            <BoxStyled>
                <Typography variant='body1' sx={{ fontSize: "16px", color: "#727586" }}>
                    PROFESSIONAL AND HANDS-ON
                </Typography>
                <Typography variant='h4' sx={{ fontWeight: 700, color: "#2f1c6a", }}>
                    24/7 Support
                </Typography>
                <Typography variant='body1' sx={{ fontSize: "16px", color: "#727586" }}>
                    Our team of experts will solve technical issues to get your websites up and running. Anytime.
                </Typography>
                <Typography
                    sx={{
                        textDecoration: "underline",
                        fontSize: "18px",
                        color: "#2f1c6a",
                        cursor: "pointer",
                        "&:hover": {
                            color: "#6610f2",
                            textDecoration: "underline",
                        }
                    }}
                >
                    Contact us
                </Typography>
            </BoxStyled>

        </Box>
    )
}

const TestimonialSection3 = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: 'center',
                justifyContent: "space-between",
            }}
            p={5}
        >
            <BoxStyled>
                <Typography variant='body1' sx={{ fontSize: "16px", color: "#727586" }}>
                    GREAT WORDPRESS EXPERIENCE
                </Typography>
                <Typography variant='h4' sx={{ fontWeight: 700, color: "#2f1c6a", }}>
                    WordPress made easy
                </Typography>
                <Typography variant='body1' sx={{ fontSize: "16px", color: "#727586" }}>
                    Start your website with an automatic 1-click WordPress installation. The backend is powered by LiteSpeed caching and advanced optimization to ensure your websites are fast, reliable and secure.
                </Typography>
                <Typography
                    sx={{
                        textDecoration: "underline",
                        fontSize: "18px",
                        color: "#2f1c6a",
                        cursor: "pointer",
                        "&:hover": {
                            color: "#6610f2",
                            textDecoration: "underline",
                        }
                    }}
                >
                    Learn more
                </Typography>
            </BoxStyled>
            <BoxStyled>
                <CardMedia
                    component="video"
                    image='https://assets.hostinger.com/videos/homepage2020/wordpress-made-easy-f182af6a28.mp4'
                    autoPlay
                >
                </CardMedia>
            </BoxStyled>
        </Box>
    )
}

const TestimonialSection5 = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: 'center',
                justifyContent: "space-between",
            }}
            p={5}
        >
            <BoxStyled>
                <Typography variant='body1' sx={{ fontSize: "16px", color: "#727586" }}>
                    FLEXIBLE AND SCALABLE
                </Typography>
                <Typography variant='h4' sx={{ fontWeight: 700, color: "#2f1c6a", }}>
                    From micro to large-scale
                </Typography>
                <Typography variant='body1' sx={{ fontSize: "16px", color: "#727586" }}>
                    Different projects require different technologies. Pick a plan that matches your current needs, then upgrade and scale as your website grows.
                </Typography>
                <Typography
                    sx={{
                        textDecoration: "underline",
                        fontSize: "18px",
                        color: "#2f1c6a",
                        cursor: "pointer",
                        "&:hover": {
                            color: "#6610f2",
                            textDecoration: "underline",
                        }
                    }}
                >
                    See all products
                </Typography>
            </BoxStyled>
            <BoxStyled>
                <CardMedia
                    component="video"
                    image='https://assets.hostinger.com/videos/homepage2020/scale-from-micro-to-large-scale-54c553ecb0.mp4'
                    autoPlay
                >
                </CardMedia>
            </BoxStyled>
        </Box>
    )
}

const TestimonialSection = () => {

    return (
        <Box sx={{ width: '100%' }}>
            <TestimonialSection1 />
            <TestimonialSection2 />
            <TestimonialSection3 />
            <TestimonialSection4 />
            <TestimonialSection5 />
        </Box>
    )
}

export default TestimonialSection;