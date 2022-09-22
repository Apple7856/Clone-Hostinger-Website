import { Box, Divider, Stack, Typography } from '@mui/material';
import React from 'react';

const LeftSide = () => {
  return (
    <Box
      flex={4}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "2rem"
      }}
    >
      <img src='https://assets.hostinger.com/images/logo-homepage2020-f9c79137d7.svg' alt='' />
      <Typography variant='body2' sx={{ color: "#2f1c6a", fontSize: "16px" }}>
        We are a web hosting company with a mission to help everyone who goes online succeed.
        We accomplish this by continuously developing server technology, giving expert assistance, and ensuring a flawless online website hosting experience.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "flex-start",
          gap: "1rem"
        }}
      >
        <img src='https://assets.hostinger.com/images/payments/homepage-2020-payments/visa-5d68dadf24.png' alt='' width={60} />
        <img src='https://assets.hostinger.com/images/payments/homepage-2020-payments/mastercard-ca75c7f8d3.png' alt='' width={60} />
        <img src='https://assets.hostinger.com/images/payments/homepage-2020-payments/discover-1e5edf3f39.png' alt='' width={60} />
        <img src='https://assets.hostinger.com/images/payments/homepage-2020-payments/dinersclub-3f02e2deec.png' alt='' width={60} />
        <img src='https://assets.hostinger.com/images/payments/homepage-2020-payments/rupay-2bad18f6df.png' alt='' width={60} />
      </Box>
      <Typography variant='body2' sx={{
        fontSize: "16px",
        color: "#9e9e9e",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "1rem"
      }}>
        <span>Created By: Durgaprasad Singh</span>
        <span>Email: dp.9.singh@gmail.com</span>
        <span>Contact No.: +91-8726854923</span>
      </Typography>
    </Box>
  )
}

const HostingSide = () => {
  const list = [
    {
      name: "Web Hosting"
    },
    {
      name: "VPS Hosting"
    },
    {
      name: "Minecraft Server Hosting"
    },
    {
      name: "CyberPanel Hosting"
    },
    {
      name: "Cloud Hosting"
    },
    {
      name: "WordPress Hosting"
    },
    {
      name: "Email Hosting"
    },
    {
      name: "CMS Hosting"
    },
    {
      name: "Ecommerce Hosting"
    },
    {
      name: "Free Web Hosting"
    },
    {
      name: "Online Store"
    },
    {
      name: "Website Builder"
    },
    {
      name: "Buy Hosting"
    }
  ]
  return (
    <Box
      flex={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "1rem"
      }}
    >
      <Typography variant="h6" sx={{ color: "#2f1c6a" }}>HOSTING</Typography>
      {
        list.map((item, index) => {
          return <Typography variant='body2' sx={{ color: "#2f1c6a", fontSize: "16px", cursor: "pointer", "&:hover": { color: "#9e9e9e" } }} key={index}>{item.name}</Typography>
        })
      }
    </Box>
  )
}

const DomainSide = () => {
  const list = [
    {
      name: "Domain Name Search"
    },
    {
      name: "Domain Transfer"
    },
    {
      name: "Free Domain Name"
    },
    {
      name: "XYZ Domain"
    },
    {
      name: "Cheap Domains"
    },
    {
      name: "Domain Extensions"
    },
    {
      name: "WHOIS Lookup"
    },
    {
      name: "Free SSL Certificate"
    }
  ]
  return (
    <Box
      flex={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "1rem"
      }}
    >
      <Typography variant="h6" sx={{ color: "#2f1c6a" }}>DOMAIN</Typography>
      {
        list.map((item, index) => {
          return <Typography variant='body2' sx={{ color: "#2f1c6a", fontSize: "16px", cursor: "pointer", "&:hover": { color: "#9e9e9e" } }} key={index}>{item.name}</Typography>
        })
      }
    </Box>
  )
}

const InformationSide = () => {
  const list1 = [
    {
      name: "Migrate to Hostinger"
    },
    {
      name: "System Status"
    },
    {
      name: "Affiliate Program"
    },
    {
      name: "Payment Methods"
    },
    {
      name: "Rewards"
    },
    {
      name: "Reviews"
    },
    {
      name: "Pricing"
    },
    {
      name: "Sitemap"
    }
  ]

  const list2 = [
    {
      name: "Privacy Policy"
    },
    {
      name: "Terms of Service"
    }
  ]

  return (
    <Box
      flex={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "1rem"
      }}
    >
      <Typography variant="h6" sx={{ color: "#2f1c6a" }}>INFORMATION</Typography>
      {
        list1.map((item, index) => {
          return <Typography variant='body2' sx={{ color: "#2f1c6a", fontSize: "16px", cursor: "pointer", "&:hover": { color: "#9e9e9e" } }} key={index}>{item.name}</Typography>
        })
      }
      <Typography variant="h6" sx={{ paddingTop: "10px", color: "#2f1c6a" }}>LEGAL</Typography>
      {
        list2.map((item, index) => {
          return <Typography variant='body2' sx={{ color: "#2f1c6a", fontSize: "16px", cursor: "pointer", "&:hover": { color: "#9e9e9e" } }} key={index}>{item.name}</Typography>
        })
      }
    </Box>
  )
}

const RightSide = () => {
  const list1 = [
    {
      name: "About Hostinger"
    },
    {
      name: "Our Technology"
    },
    {
      name: "Roadmap"
    },
    {
      name: "Customer Care"
    },
    {
      name: "Blog"
    }
  ]

  const list2 = [
    {
      name: "Tutorials"
    },
    {
      name: "Knowledge Base"
    },
    {
      name: "Report Online Abuse"
    }
  ]
  return (
    <Box
      flex={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "1rem"
      }}
    >
      <Typography variant="h6" sx={{ color: "#2f1c6a" }}>COMPANY</Typography>
      {
        list1.map((item, index) => {
          return <Typography variant='body2' sx={{ color: "#2f1c6a", fontSize: "16px", cursor: "pointer", "&:hover": { color: "#9e9e9e" } }} key={index}>{item.name}</Typography>
        })
      }
      <Typography variant="h6" sx={{ paddingTop: "10px", color: "#2f1c6a" }}>HELP</Typography>
      {
        list2.map((item, index) => {
          return <Typography variant='body2' sx={{ color: "#2f1c6a", fontSize: "16px", cursor: "pointer", "&:hover": { color: "#9e9e9e" } }} key={index}>{item.name}</Typography>
        })
      }
      <Stack direction="row" spacing={1} justifyContent="space-between" sx={{ marginTop: "5rem" }}>
        <img src='https://assets.hostinger.com/images/footer/socials/2020/linked-in-6483ac5eaf.svg' alt='' width={35} />
        <img src='https://assets.hostinger.com/images/footer/socials/2020/facebook-aae08bebe5.svg' alt='' width={35} />
        <img src='https://assets.hostinger.com/images/footer/socials/2020/instagram-19e7bf8e7d.svg' alt='' width={35} />
        <img src='https://assets.hostinger.com/images/footer/socials/2020/twitter-12500689a0.svg' alt='' width={35} />
        <img src='https://assets.hostinger.com/images/footer/socials/2020/youtube-10b297f40e.svg' alt='' width={35} />
      </Stack>
    </Box>
  )
}

const Footer = () => {
  return (
    <Box
      sx={{
        height: "100%",
        backgroundColor: "#f4f5ff",
      }}
      pt={4}
      pl={4}
      pr={4}
      pb={2}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "2rem"
        }}
      >
        <LeftSide />
        <HostingSide />
        <DomainSide />
        <InformationSide />
        <RightSide />
      </Box>
      <Divider sx={{ padding: "15px 0px" }} />
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }} pt={2}>
        <Typography variant='body2' sx={{ fontSize: "16px", color: "#9e9e9e" }}>
          © 2004-2022 hostinger.in - India’s #1 Web Hosting & Domains provider.
        </Typography>
        <Typography variant='body2' sx={{ fontSize: "16px", color: "#9e9e9e" }}>
          Prices are listed without VAT
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer;