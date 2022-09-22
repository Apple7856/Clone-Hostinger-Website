import { ExpandLess, ExpandMore, LockTwoTone, } from '@mui/icons-material';
import { Box, Button, Collapse, List, ListItemButton, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ListItemTextStyled = styled(ListItemText)(({ theme }) => ({
    fontWeight: 700,
    fontSize: "18px",
    color: "#343a40",
    "&:hover": {
        color: "#6610f2"
    }
}))

const MobileMenu = () => {

    const navigate = useNavigate();

    const [open, setOpen] = useState({
        hosting: false,
        vps: false,
        email: false,
        domain: false,
    });

    return (
        <Box
            sx={{
                minHeight: "521px",
                backgroundColor: "background.paper"
            }}
        >
            <List sx={{ padding: 0, margin: 0 }}>
                <List
                    sx={{ width: '100%', bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItemButton onClick={() => setOpen({ ...open, hosting: !open.hosting, vps: false, email: false, domain: false })}>
                        <ListItemTextStyled primary="Hosting" disableTypography={true} />
                        {open.hosting ? <ExpandLess sx={{ color: "#6610f2" }} /> : <ExpandMore sx={{ color: "#6610f2" }} />}
                    </ListItemButton>
                    <Collapse in={open.hosting} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemTextStyled primary="Web Hosting" disableTypography={true} />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemTextStyled primary="Cloud Hosting" disableTypography={true} />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemTextStyled primary="WordPress Hosting" disableTypography={true} />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
                <List
                    sx={{ width: '100%', bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItemButton onClick={() => setOpen({ ...open, vps: !open.vps, hosting: false, email: false, domain: false })}>
                        <ListItemTextStyled primary="VPS" disableTypography={true} />
                        {open.vps ? <ExpandLess sx={{ color: "#6610f2" }} /> : <ExpandMore sx={{ color: "#6610f2" }} />}
                    </ListItemButton>
                    <Collapse in={open.vps} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemTextStyled primary="VPS Hosting" disableTypography={true} />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemTextStyled primary="CyberPanal Hosting" disableTypography={true} />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemTextStyled primary="Minecraft Server Hosting" disableTypography={true} />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
                <List
                    sx={{ width: '100%', bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItemButton onClick={() => setOpen({ ...open, email: !open.email, vps: false, hosting: false, domain: false })}>
                        <ListItemTextStyled primary="Email" disableTypography={true} />
                        {open.email ? <ExpandLess sx={{ color: "#6610f2" }} /> : <ExpandMore sx={{ color: "#6610f2" }} />}
                    </ListItemButton>
                    <Collapse in={open.email} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemTextStyled primary="Google Workspace Email Hosting" disableTypography={true} />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemTextStyled primary="Hostinger Email Hosting" disableTypography={true} />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
                <List
                    sx={{ width: '100%', bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItemButton onClick={() => setOpen({ ...open, domain: !open.domain, vps: false, email: false, hosting: false })}>
                        <ListItemTextStyled primary="Domain" disableTypography={true} />
                        {open.domain ? <ExpandLess sx={{ color: "#6610f2" }} /> : <ExpandMore sx={{ color: "#6610f2" }} />}
                    </ListItemButton>
                    <Collapse in={open.domain} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemTextStyled primary="Domain Name Search" disableTypography={true} />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemTextStyled primary="WHOIS Lookup" disableTypography={true} />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemTextStyled primary="Domain Transfer" disableTypography={true} />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
            </List>
            <Box p={2}>
                <Button
                    startIcon={<LockTwoTone />}
                    variant="outlined"
                    sx={{
                        width: "300px",
                        height: "45px",
                        borderRadius: "30px",
                        border: "2px solid #6610f2",
                        fontWeight: "bold",
                        textTransform: "capitalize",
                        fontSize: "18px",
                        "&:hover": {
                            borderColor: "#6610f2",
                            backgroundColor: "#6610f2",
                            color: "white"
                        }
                    }}
                    onClick={() => navigate("/login-page")}
                >
                    Log In
                </Button>
            </Box>
        </Box>
    )
}

export default MobileMenu;