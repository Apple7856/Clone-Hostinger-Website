import { Box, styled, Typography } from '@mui/material';
import React from 'react';

const TypographyStyled = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    fontSize: "30px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
        fontSize: "25px"
    }
}))

const TypographyStyled2 = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    fontSize: "22px",
    [theme.breakpoints.down("sm")]: {
        fontSize: "18px"
    }
}))

const ImageStyled = styled("img")(({ theme }) => ({
    width: "2.5rem",
    [theme.breakpoints.down("sm")]: {
        width: "2rem",
    }
}))

const BoxStyled = styled(Box)(({ theme }) => ({
    width: "20rem",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    [theme.breakpoints.down("sm")]: {
        width: "12rem"
    }
}))

const ServicesSection = () => {
    const List = [
        {
            name: "Free SSL",
            img: "https://assets.hostinger.com/images/homepage2021/services/free-ssl-c672bc7cfb.svg"
        },
        {
            name: "Access Management",
            img: "https://assets.hostinger.com/images/homepage2021/services/access-management-01f91d3436.svg"
        },
        {
            name: "eCommerce Optimization",
            img: "https://assets.hostinger.com/images/homepage2021/services/ecommerce-c7adac5be7.svg"
        },
        {
            name: "Free Migration",
            img: "https://assets.hostinger.com/images/homepage2021/services/free-migration-913e6bfab2.svg"
        },
        {
            name: "Automated backups",
            img: "https://assets.hostinger.com/images/homepage2021/services/backups-2d6e895cf1.svg"
        },
        {
            name: "DDoS Protection",
            img: "https://assets.hostinger.com/images/homepage2021/services/cloudflare-d1bcbdabc9.svg"
        },
        {
            name: "PHP Speed Boost",
            img: "https://assets.hostinger.com/images/homepage2021/services/php-speed-boost-f7850027dc.svg"
        },
        {
            name: "LiteSpeed Cache Plugin",
            img: "https://assets.hostinger.com/images/homepage2021/services/litespeed-wp-module-e0e9453f3c.svg"
        },
        {
            name: "One-Click WordPress Installation",
            img: "https://assets.hostinger.com/images/homepage2021/services/wp-installation-2161a49ee3.svg"
        },
        {
            name: "24/7/365 Tech Support",
            img: "https://assets.hostinger.com/images/homepage2021/services/tech-support-ebf15a3d83.svg"
        },
        {
            name: "Auto Script Installer",
            img: "https://assets.hostinger.com/images/homepage2021/services/script-installer-6fe9e03c5c.svg"
        },
        {
            name: "99.9% Uptime Guarantee",
            img: "https://assets.hostinger.com/images/homepage2021/services/uptime-guarantee-1e9eae1cb0.svg"
        },
    ]
    return (
        <Box p={5} sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", color: "#2f1c6a" }}>
            <TypographyStyled variant='body2'>Our services include:</TypographyStyled>
            <Box
                p={2}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    flexWrap: "wrap",
                    gap: "1rem"
                }}
            >
                {
                    List.map((item, index) => {
                        return (
                            <BoxStyled
                                key={index}
                            >
                                <ImageStyled src={item.img} alt="" />
                                <TypographyStyled2 variant="body2">{item.name}</TypographyStyled2>
                            </BoxStyled>
                        )
                    })
                }
            </Box>
        </Box>
    )
}

export default ServicesSection;