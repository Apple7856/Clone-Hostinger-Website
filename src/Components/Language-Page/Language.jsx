import { Close, SearchOutlined } from '@mui/icons-material';
import { Box, Button, Fab, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import USA_flag from "../../Image/icons8-usa-30.png";
import China_flag from "../../Image/icons8-china-30.png";
import Japan_flag from "../../Image/icons8-japan-30.png";
import Russian_flag from "../../Image/icons8-russian-federation-30.png";
import India_flag from "../../Image/icons8-india-30.png";
import Canada_flag from "../../Image/icons8-canada-30.png";
import Brazil_flag from "../../Image/icons8-brazil-30.png";
import AUS_flag from "../../Image/icons8-australia-30.png";
import Argentina_flag from "../../Image/icons8-argentina-30.png";
import Bangladesh_flag from "../../Image/icons8-bangladesh-30.png";

const Country_List = [
    {
        country_name: "India",
        flag: India_flag,
        short_name: "IND",
        language: "English"
    },
    {
        country_name: "India",
        flag: India_flag,
        short_name: "IND",
        language: "Hindi"
    },
    {
        country_name: "USA",
        flag: USA_flag,
        short_name: "USA",
        language: "English"
    },
    {
        country_name: "China",
        flag: China_flag,
        short_name: "CHI",
        language: "English"
    },
    {
        country_name: "Japan",
        flag: Japan_flag,
        short_name: "JAP",
        language: "English"
    },
    {
        country_name: "Russian",
        flag: Russian_flag,
        short_name: "RUS",
        language: "English"
    },
    {
        country_name: "Canada",
        flag: Canada_flag,
        short_name: "CAN",
        language: "English"
    },
    {
        country_name: "Brazil",
        flag: Brazil_flag,
        short_name: "BRA",
        language: "English"
    },
    {
        country_name: "AUS",
        flag: AUS_flag,
        short_name: "AUS",
        language: "English"
    },
    {
        country_name: "Argentina",
        flag: Argentina_flag,
        short_name: "ARG",
        language: "English"
    },
    {
        country_name: "Bangladesh",
        flag: Bangladesh_flag,
        short_name: "BAN",
        language: "English"
    },
]

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

const BoxStyled = styled(Box)(({ theme }) => ({
    width: "40%",
    display: "block",
    [theme.breakpoints.down("md")]: {
        width: "60%",
    }
}))

const ImageStyled = styled("img")(({ theme }) => ({
    width: 20,
}))

const Language = (props) => {

    const { handleLanguge, changeLangugae, handleLangugeData, LanguageData } = props;

    const [searchData, setSearchData] = useState([]);
    const [show, setShow] = useState(false);

    function handleSearch(e) {
        const inputData = e.target.value;
        if (inputData) {
            setShow(true);
            const filterData = Country_List.filter((item) => {
                if (item.country_name.toLowerCase().includes(inputData.toLowerCase())) {
                    return item;
                }
            })
            setSearchData(filterData);
        } else {
            setShow(false);
        }
    }

    return (
        <Box
            sx={{
                '@media all': {
                    minHeight: "521px"
                },
                backgroundColor: "#f2f3f6"
            }}
            pl={5}
            pr={5}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}
                pt={2}
                pb={2}
            >
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
                            placeholder="Search"
                            onChange={(e) => handleSearch(e)}
                        />
                        <Button
                            sx={{
                                fontSize: "16px",
                                color: "#6610f2",
                            }}
                            p={2}
                            variant="text"
                        >
                            <SearchOutlined />
                        </Button>
                    </Box>
                </BoxStyled>
                <Fab color="primary" aria-label="close" onClick={() => handleLanguge(!changeLangugae)} >
                    <Close />
                </Fab>
            </Box>
            <Box
                pt={5}
                pb={5}
                pr={4}
                pl={4}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                }}
            >
                <Box
                    sx={{
                        backgroundColor: "white",
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "20px 25px"
                    }}
                >
                    {
                        show ?
                            searchData.map((item, index) => {
                                return (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            gap: "10px",
                                            width: "12rem",

                                        }}
                                    >
                                        <ImageStyled src={item.flag} alt="" />
                                        <Typography
                                            sx={{
                                                fontWeight: "bold",
                                                cursor: "pointer",
                                                color: "#343a40",
                                                "&:hover": {
                                                    fontSize: "18px",
                                                    color: "#6610f2",
                                                    transition: "all ease-in-out .4s"
                                                }
                                            }}
                                            onClick={() => {
                                                handleLangugeData({ ...LanguageData, flag: item.flag, short_name: item.short_name, lang: item.language })
                                                handleLanguge(!changeLangugae)
                                            }}
                                        >
                                            {item.country_name}{" "}
                                            <span style={{ fontWeight: 300 }}>
                                                {item.language}</span>{" "}
                                        </Typography>
                                    </Box>
                                )
                            })
                            :
                            Country_List.map((item, index) => {
                                return (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            gap: "10px",
                                            width: "12rem",

                                        }}
                                    >
                                        <ImageStyled src={item.flag} alt="" />
                                        <Typography
                                            sx={{
                                                fontWeight: "bold",
                                                cursor: "pointer",
                                                color: "#343a40",
                                                "&:hover": {
                                                    fontSize: "18px",
                                                    color: "#6610f2"
                                                }
                                            }}
                                            onClick={() => {
                                                handleLangugeData({ ...LanguageData, flag: item.flag, short_name: item.short_name, lang: item.language })
                                                handleLanguge(!changeLangugae)
                                            }}
                                        >
                                            {item.country_name}{" "}
                                            <span style={{ fontWeight: 300 }}>
                                                {item.language}</span>{" "}
                                        </Typography>
                                    </Box>
                                )
                            })
                    }

                </Box>
            </Box>
        </Box>
    )
}

export default Language;