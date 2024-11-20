import React from 'react';
import one from "../../assets/images-and-icons/CategoryFilters/Users/1.png";
import two from "../../assets/images-and-icons/CategoryFilters/Users/2.png";
import three from "../../assets/images-and-icons/CategoryFilters/Users/3.png";
import four from "../../assets/images-and-icons/CategoryFilters/Users/4.png";
import five from "../../assets/images-and-icons/CategoryFilters/Users/5.png";
import { Box, Stack, Typography, Grid } from '@mui/material';
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
            sx={{ 
                paddingY: { xs: "32px", sm: "48px", md: "64px" }, 
                paddingX: { xs: "28px", sm: "32px", md: "128px", lg: "256px" } 
            }}
        >
            <HeadSection name={t("name")} more={t('more')} />
            <Grid 
                container 
                spacing={4} 
                justifyContent="center"
            >
                {data.map((person, index) => (
                    <Grid 
                        item 
                        key={index} 
                        xs={6} sm={4} md={3} lg={2} 
                        sx={{ display: "flex", justifyContent: "center" }}
                    >
                        <Stack 
                            alignItems="center" 
                            gap="20px" 
                            sx={{ cursor: "pointer" }}
                        >
                            <Box
                             sx={{
                                // width: { xs: "250x", sm: "30px", md: "50px" },
                                height: { xs: "25px", sm: "30px", md: "40px" },
                            }} 
                            >
                                <Box 
                                    component="img" 
                                    src={person.image} 
                                    alt={person.name} 
                                    sx={{height:"100%"}}
                                />
                            </Box>
                            <Typography 
                                sx={{ 
                                    fontSize: { xs: "12px", sm: "14px", md: "16px" }, 
                                    textAlign: "center" 
                                }}
                            >
                                {person.name}
                            </Typography>
                        </Stack>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
};

export default PersonNumberFilter;
