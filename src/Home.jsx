import React, { useState } from 'react';
import { Box } from "@mui/material";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';
import PricingSection from './Components/PricingSection';
import ServicesSection from './Components/ServicesSection';
import SearchDomainSection from './Components/SearchDomainSection';
import TestimonialSection from './Components/Testimonial/TestimonialSection';
import UserTestimonialSection from './Components/Testimonial/UserTestimonialSection';
import CompanySecurityOath from './Components/CompanySecurityOath';
import MobileMenu from './Components/MobileMenu/MobileMenu';
import Language from './Components/Language-Page/Language';
import India_flag from "./Image/icons8-india-30.png";

const Home = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [changeLangugae, setChangeLangugae] = useState(false);
    const [langData, setLangData] = useState({
        flag: India_flag,
        lang: "English",
        short_name: "IND",
    })
    return (
        <Box>
            <Navbar
                handleMobileMenu={setOpenMobileMenu}
                openMobileMenu={openMobileMenu}
                handleLanguge={setChangeLangugae}
                changeLangugae={changeLangugae}
                langData={langData}
            />
            <Box sx={{ display: openMobileMenu || changeLangugae ? "none" : "block" }}>
                <HeroSection />
                <PricingSection />
                <ServicesSection />
                <SearchDomainSection />
                <TestimonialSection />
                <UserTestimonialSection />
                <CompanySecurityOath />
                <Footer />
            </Box>
            <Box sx={{ display: openMobileMenu ? "block" : "none" }}>
                <MobileMenu />
            </Box>
            <Box sx={{ display: changeLangugae ? "block" : "none" }}>
                <Language
                    handleLanguge={setChangeLangugae}
                    changeLangugae={changeLangugae}
                    handleLangugeData={setLangData}
                    LanguageData={langData}
                />
            </Box>
        </Box>
    )
}

export default Home;