import React from 'react';
import one from "../../assets/images-and-icons/CategoryFilters/Users/User1.svg";
import two from "../../assets/images-and-icons/CategoryFilters/Users/User2.svg";
import three from "../../assets/images-and-icons/CategoryFilters/Users/User3.svg";
import four from "../../assets/images-and-icons/CategoryFilters/Users/User4.svg";
import five from "../../assets/images-and-icons/CategoryFilters/Users/User5.svg";
import { Box, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import HeadSection from '../../Utils/HeadSection';

const PersonNumberFilter = () => {
    const { t } = useTranslation('person');

    const data = [
        { image: one, name: "شخص واحد" },
        { image: two, name: "شخصان" },
        { image: three, name: "ثلاثة أشخاص" },
        { image: four, name: "أربع أشخاص" },
        { image: five, name: "خمس أشخاص" },
    ];

    return (
        <Stack 
            gap="30px" 
            sx={{ paddingY: { xs: "32px", sm: "48px", md: "64px" }, paddingX: { xs: "28px", sm: "32px", md: "128px",lg:"256px" } }}
        >
            <HeadSection name={t("name")} more={t('more')} />
            <Stack 
                flexDirection="row" 
                justifyContent="center" 
                sx={{ gap: { xs: "30px", md: "64px", lg: "128px" } }}
            >
                {data.map((person, index) => (
                    <Stack 
                        key={index} 
                        alignItems="center" 
                        gap="10px" 
                        sx={{ cursor: "pointer" }}
                    >
                        <Box 
                            component="img" 
                            src={person.image} 
                            alt={person.name} 
                            sx={{
                                width: { xs: "30px", sm: "40px", md: "50px", lg: "50px" },
                                height: { xs: "35px", sm: "45px", md: "50px", lg: "50px" },
                            }} 
                        />
                        <Typography variant="body1" sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}>
                            {person.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
};

export default PersonNumberFilter;
