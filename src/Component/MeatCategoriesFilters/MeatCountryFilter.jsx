import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Aus from "../../assets/images-and-icons/flags/Australia.svg";
import Brazil from "../../assets/images-and-icons/flags/Brazil.svg";
import Ecuador from "../../assets/images-and-icons/flags/Ecuador.svg";
import India from "../../assets/images-and-icons/flags/India.svg";
import Uruguay from "../../assets/images-and-icons/flags/Uruguay.svg";
import { useTranslation } from 'react-i18next';
import HeadSection from '../../Utils/HeadSection';

const MeatCountryFilter = () => {
    const { t, i18n } = useTranslation('country');

    const data = [
        { flag: Aus, name: "Australia" },
        { flag: Brazil, name: "Brazil" },
        { flag: Ecuador, name: "Ecuador" },
        { flag: India, name: "India" },
        { flag: Uruguay, name: "Uruguay" },
    ];

    return (
        <Stack 
            gap={{ xs: "32px", sm: "48px", md: "64px" }}
            sx={{ paddingY: { xs: "32px", sm: "48px", md: "64px" }, paddingX: { xs: "20px", sm: "32px", md: "128px",lg:"256px"} }}
        >
            <HeadSection name={t('name')} more={t('more')} /> 

            <Stack 
                flexDirection="row"
                sx={{
                    gap: { xs: "20px", sm: "32px", md: "64px", lg: "128px" },
                    cursor: "pointer",
                    textAlign: { xs: "center", sm: "initial" },
                }}
                justifyContent={"center"}
                alignItems={"center"}
            >
                {data.map((country, index) => (
                    <Stack 
                        key={index}
                        alignItems={"center"}
                        gap={"10px"}
                        sx={{ maxWidth: { xs: "100%", sm: "auto" } }}
                    >
                        <Box 
                            component={"img"}
                            src={country.flag} 
                            alt={country.name}
                            sx={{
                                width: { xs: "18px", sm: "20px", md: "30px", lg: "30px" },
                                height: { xs: "18px", sm: "20px", md: "30px", lg: "30px" },
                            }}
                        />
                        <Typography variant="body1" sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}>
                            {country.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
};

export default MeatCountryFilter;
