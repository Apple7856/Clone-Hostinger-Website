import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, styled, Box, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { KeyboardArrowDown, KeyboardArrowUp, LockTwoTone, ShoppingCartOutlined, MenuOutlined, Close } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: 'center',
  justifyContent: "space-between",
  '@media all': {
    minHeight: "80px",
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
  fontSize: "18px",
  fontWeight: 400,
  color: "black",
  "&:hover": {
    backgroundColor: "none",
  }
}));

const StyledImage = styled("img")(({ theme }) => ({
  width: "160px",
  [theme.breakpoints.down("sm")]: {
    width: "110px"
  }
}));

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  color: "#2f1c6a",
  cursor: "pointer",
}));


const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
    width: "20px",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    width: "300px"
  },
}));

const HostingList = [
  {
    title: "Web Hosting",
    img: "https://assets.hostinger.com/images/hero/icons/shared-hosting-ico-3b9eae97d4.svg",
    desc: "For small to medium websites."
  },
  {
    title: "Cloud Hosting",
    img: "https://assets.hostinger.com/images/hero/icons/cloud-hosting-ico-8b3eacbef9.svg",
    desc: "For large scale projects."
  },
  {
    title: "WordPress Hosting",
    img: "https://assets.hostinger.com/images/hero/icons/wordpress-hosting-ico-f260728d34.svg",
    desc: "Optimized solutions for WordPress hosting."
  },
]

const VPSList = [
  {
    title: "VPS Hosting",
    img: "https://assets.hostinger.com/images/hero/icons/vps-hosting-ico-ae5dec82ad.svg",
    desc: "Dedicated resources to scale."
  },
  {
    title: "CyberPanal Hosting",
    img: "https://assets.hostinger.com/images/hero/icons/cyber-panel-vps-hosting-ico-85f6512246.svg",
    desc: "Control panel with Open/LiteSpeed Webserver."
  },
  {
    title: "Minecraft Server Hosting",
    img: "https://assets.hostinger.com/images/hero/icons/minecraft-hosting-ico-48c44ca8a8.svg",
    desc: "Share your Minecraft experience."
  },
]

const EmailList = [
  {
    title: "Google Workspace Email Hosting",
    img: "https://assets.hostinger.com/images/hero/icons/workspace-email-hosting-ico-f6d95080f4.svg",
    desc: "Get custom email and 30GB of storage."
  },
  {
    title: "Hostinger Email Hosting",
    img: "https://assets.hostinger.com/images/hero/icons/titan-email-hosting-ico-adbf24006e.svg",
    desc: "Promote your business with every outreach."
  }
]

const DomainList = [
  {
    title: "Domain Name Search",
    img: "https://assets.hostinger.com/images/hero/icons/domain-checker-ico-9f56a54b4a.svg",
    desc: "Find the perfect domain name."
  },
  {
    title: "WHOIS Lookup",
    img: "https://assets.hostinger.com/images/hero/icons/whois-ico-05661c09d0.svg",
    desc: "Lookup tool to find WHOIS information."
  },
  {
    title: "Domain Transfer",
    img: "https://assets.hostinger.com/images/hero/icons/domain-transfer-ico-2a5c55e300.svg",
    desc: "Want to transfer domain to Hostinger?"
  },
]

const Navbar = (props) => {

  const { handleMobileMenu, openMobileMenu, handleLanguge, changeLangugae, langData } = props;
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState({
    hosting: false,
    email: false,
    vps: false,
    domain: false
  });

  const [scroll, setScroll] = useState(true)

  const handleScroll = (e) => {
    if (!e.target.documentElement.scrollTop) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [])

  return (
    <AppBar position='sticky'>
      <StyledToolbar sx={{
        bgcolor: scroll ? "#e3f2fd" : "white",
      }}>
        {/* Left Side */}
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px" }}>
          <StyledImage src='https://assets.hostinger.com/images/logo-homepage2020-f9c79137d7.svg' alt='' />
          <Box sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block", xl: "block" } }}>
            <StyledButton startIcon={<img src={langData.flag} width={30} />} onClick={() => handleLanguge(!changeLangugae)}>
              {langData.lang}
            </StyledButton>
          </Box>
          <Box sx={{ display: { xs: "block", sm: "block", md: "block", lg: "none", xl: "none" } }}>
            <StyledButton startIcon={<img src={langData.flag} width={30} />} onClick={() => handleLanguge(!changeLangugae)}>
              {langData.short_name}
            </StyledButton>
          </Box>
        </Box>

        {/* Right Side  */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: "20px"
          }}
        >
          <Box sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block", xl: "block" } }}>
            <BootstrapTooltip
              title={
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                  {
                    HostingList.map((item, index) => {
                      return (
                        <ListItem key={index}>
                          <ListItemAvatar>
                            <img src={item.img} alt="" />
                          </ListItemAvatar>
                          <StyledListItemText primary={<Box sx={{
                            fontSize: "18px", fontWeight: "bold", "&:hover": {
                              fontSize: "19px",
                              transition: "all ease-in-out .3s"
                            }
                          }}>{item.title}</Box>} secondary={item.desc} />
                        </ListItem>
                      )
                    })
                  }
                </List>
              }
              open={menuOpen.hosting}
            >
              <StyledButton
                endIcon={menuOpen.hosting ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                sx={{
                  "&:hover": {
                    color: "#424242"
                  }
                }}
                onClick={() => {
                  setMenuOpen({ ...menuOpen, hosting: !menuOpen.hosting, vps: false, email: false, domain: false })
                }}
              >
                Hosting
              </StyledButton>
            </BootstrapTooltip>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block", xl: "block" } }}>
            <BootstrapTooltip
              title={
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                  {
                    VPSList.map((item, index) => {
                      return (
                        <ListItem key={index}>
                          <ListItemAvatar>
                            <img src={item.img} alt="" />
                          </ListItemAvatar>
                          <StyledListItemText primary={<Box sx={{
                            fontSize: "18px", fontWeight: "bold", "&:hover": {
                              fontSize: "19px",
                              transition: "all ease-in-out .3s"
                            }
                          }}>{item.title}</Box>} secondary={item.desc} />
                        </ListItem>
                      )
                    })
                  }
                </List>
              }
              open={menuOpen.vps}
            >
              <StyledButton
                endIcon={menuOpen.vps ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                sx={{
                  "&:hover": {
                    color: "#424242"
                  }
                }}
                onClick={() => setMenuOpen({ ...menuOpen, vps: !menuOpen.vps, hosting: false, email: false, domain: false })}
              >
                VPS
              </StyledButton>
            </BootstrapTooltip>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block", xl: "block" } }}>
            <BootstrapTooltip
              title={
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                  {
                    EmailList.map((item, index) => {
                      return (
                        <ListItem key={index}>
                          <ListItemAvatar>
                            <img src={item.img} alt="" />
                          </ListItemAvatar>
                          <StyledListItemText primary={<Box sx={{
                            fontSize: "18px", fontWeight: "bold", "&:hover": {
                              fontSize: "19px",
                              transition: "all ease-in-out .3s"
                            }
                          }}>{item.title}</Box>} secondary={item.desc} />
                        </ListItem>
                      )
                    })
                  }
                </List>
              }
              open={menuOpen.email}
            >
              <StyledButton
                endIcon={menuOpen.email ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                sx={{
                  "&:hover": {
                    color: "#424242"
                  }
                }}
                onClick={() => setMenuOpen({ ...menuOpen, email: !menuOpen.email, hosting: false, vps: false, domain: false })}
              >
                Email
              </StyledButton>
            </BootstrapTooltip>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block", xl: "block" } }}>
            <BootstrapTooltip
              title={
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                  {
                    DomainList.map((item, index) => {
                      return (
                        <ListItem key={index}>
                          <ListItemAvatar>
                            <img src={item.img} alt="" />
                          </ListItemAvatar>
                          <StyledListItemText primary={<Box sx={{
                            fontSize: "18px", fontWeight: "bold", "&:hover": {
                              fontSize: "19px",
                              transition: "all ease-in-out .3s"
                            }
                          }}>{item.title}</Box>} secondary={item.desc} />
                        </ListItem>
                      )
                    })
                  }
                </List>
              }
              open={menuOpen.domain}
            >
              <StyledButton
                endIcon={menuOpen.domain ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                sx={{
                  "&:hover": {
                    color: "#424242"
                  }
                }}
                onClick={() => setMenuOpen({ ...menuOpen, domain: !menuOpen.domain, hosting: false, email: false, vps: false })}
              >
                Domain
              </StyledButton>
            </BootstrapTooltip>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block", xl: "block" } }}>
            <StyledButton
              startIcon={<LockTwoTone />}
              variant="outlined"
              sx={{
                borderRadius: "30px",
                borderColor: "black",
                "&:hover": {
                  borderColor: "black",
                }
              }}
              onClick={() => navigate("/login-page")}
            >
              Log In
            </StyledButton>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block", xl: "block" } }}>
            <StyledButton startIcon={<ShoppingCartOutlined />} sx={{ fontSize: "20px" }}>
              Cart
            </StyledButton>
          </Box>
          <Box sx={{ display: { xs: "block", sm: "block", md: "block", lg: "none", xl: "none" } }}>
            <ShoppingCartOutlined sx={{ color: "black", cursor: "pointer" }} />
          </Box>
          <Box sx={{ display: { xs: "block", sm: "block", md: "block", lg: "none", xl: "none" } }}>
            {
              openMobileMenu ?
                <Close sx={{ color: "black", cursor: "pointer" }} onClick={() => handleMobileMenu(!openMobileMenu)} /> :
                <MenuOutlined sx={{ color: "black", cursor: "pointer" }} onClick={() => handleMobileMenu(!openMobileMenu)} />
            }
          </Box>
        </Box>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar;