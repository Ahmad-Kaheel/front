import { Button, Stack, ToggleButton, ToggleButtonGroup, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ProfileData from './ProfileData';
import ProfileAdress from './ProfileAdress';
import ProfileOrder from './ProfileOrder';
import Favorite from './Favorite';

const Profile = () => {
    const [view, setView] = useState('data');
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const navigate = useNavigate();

    const handleChange = (event, nextView) => {
        setView(nextView);
        navigate(`/profile/${nextView}`);
    };

    return (
        <Stack sx={{ padding:{xs:"20px",sm:"32px",md:"64px",lg:"128px"}, width: "fit-content", gap: "32px" }}>
            <Typography>حسابي</Typography>
            <Stack direction={{ xs: "column", md: "row" }} gap={"32px"}>
                <ToggleButtonGroup
                    orientation={isMobile ? "horizontal" : "vertical"}
                    value={view}
                    exclusive
                    onChange={handleChange}
                    dir='ltr'
                    sx={{ width: { xs: "fit-content", md: "250px" } }}
                >
                    <ToggleButton value="data" aria-label="list" sx={{ padding: { xs: "8px", sm: "16px", md: "32px" }, borderWidth: "2px", borderColor: "colors.gray0", borderRadius: { xs: "0", md: "24px 24px 0 0" } }}>
                        <Typography>بياناتي</Typography>
                    </ToggleButton>
                    <ToggleButton value="order" aria-label="module" sx={{ padding: { xs: "8px", sm: "16px", md: "32px" }, borderWidth: "2px", borderColor: "colors.gray0" }}>
                        <Typography>طلباتي</Typography>
                    </ToggleButton>
                    <ToggleButton value="address" aria-label="quilt" sx={{ padding: { xs: "8px", sm: "16px", md: "32px" }, borderWidth: "2px", borderColor: "colors.gray0" }}>
                        <Typography>عناويني</Typography>
                    </ToggleButton>
                    <ToggleButton value="favorite" aria-label="quilt" sx={{ padding: { xs: "8px", sm: "16px", md: "32px" }, borderWidth: "2px", borderColor: "colors.gray0" }}>
                        <Typography>المفضلة</Typography>
                    </ToggleButton>
                </ToggleButtonGroup>
                <Routes>
                    <Route path="data" element={<ProfileData />} />
                    <Route path="address" element={<ProfileAdress />} />
                    <Route path="order" element={<ProfileOrder />} />
                    <Route path="favorite" element={<Favorite />} />
                </Routes>
            </Stack>
        </Stack>
    );
};

export default Profile;
