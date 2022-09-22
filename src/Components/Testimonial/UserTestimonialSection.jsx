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

const TestimonialSection6 = () => {
    const list = [
        {
            img: "https://assets.hostinger.com/images/homepage2020/control-panel-section/user-icon-923934a391.svg",
            title: "Ease of Use",
            desc: "Hostinger Panel is extremely user-friendly and can be used by those with little experience in website development."
        },
        {
            img: "https://assets.hostinger.com/images/homepage2020/control-panel-section/chart-icon-3472a5b9a8.svg",
            title: "Powerful",
            desc: "A wide variety of tools to satisfy advanced user and website developer needs."
        },
        {
            img: "https://assets.hostinger.com/images/homepage2020/control-panel-section/wp-icon-9be267d135.svg",
            title: "WordPress Optimized",
            desc: "Get more speed, better SEO, visitor retention and conversions with our custom-built WP optimization stack and LiteSpeed cache."
        }
    ]
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
                    image='https://assets.hostinger.com/videos/homepage2020/user-friendly-cp-2020-7ab2c70b24.mp4'
                    autoPlay
                >
                </CardMedia>
            </BoxStyled>
            <BoxStyled>
                {
                    list.map((item, index) => {
                        return (
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    gap: "1rem"
                                }}
                                key={index}
                            >
                                <img src={item.img} alt="" />
                                <Typography variant='h4' sx={{ fontWeight: 700, color: "#2f1c6a", }}>
                                    {item.title}
                                </Typography>
                                <Typography variant='body1' sx={{ fontSize: "16px", color: "#727586" }}>
                                    {item.desc}
                                </Typography>
                            </Box>
                        )
                    })
                }
            </BoxStyled>

        </Box>
    )
}

const UserTestimonialSection = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Typography
                variant='h4'
                sx={{ fontWeight: 700, color: "#2f1c6a", textAlign: "center" }}
                pt={2}
            >
                User-Friendly Control Panel
            </Typography>
            <TestimonialSection6 />
        </Box>
    )
}

export default UserTestimonialSection;