import { Button, Stack, ToggleButton, ToggleButtonGroup, Typography, useMediaQuery } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import ProfileData from './ProfileData';
import ProfileAdress from './ProfileAdress';
import ProfileOrder from './ProfileOrder';
import Favorite from './Favorite';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
const Profile = () => {
    const user = useSelector((state) => state.user.userInfo); // تأكد من اسم المسمى الصحيح
    console.log(user)
    const { t } = useTranslation("profile");
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const navigate = useNavigate();
    const location = useLocation();
    // استخراج المسار الحالي
    const currentPath = location.pathname;

    // تحديد العرض النشط بناءً على المسار الحالي
    const getCurrentView = () => {
        if (currentPath === "/profile" || currentPath === "/profile/") {
            return "data"; // إذا كان في صفحة "/profile"، افترض أن العرض هو "data"
        }
        const path = currentPath.split("/").pop(); // استخراج الجزء الأخير من المسار
        return path;
    };

    const [view, setView] = useState(getCurrentView);

    useEffect(() => {
        // تحديث العرض عند تغيير الموقع
        setView(getCurrentView());
    }, [currentPath]);

    const handleChange = (event, nextView) => {
        if (nextView !== view) {
            setView(nextView);
            if (nextView === "data") {
                navigate("/profile");
            } else {
                navigate(`/profile/${nextView}`);
            }
        }
    };

    return (
        <Stack sx={{ paddingY:"32px",paddingX: { xs: "20px", sm: "32px", md: "64px", lg: "200px", width: { xs: "100%", md: "400px" } }, gap: "32px" }}>
            <Typography>{t("account")}</Typography>
            <Stack direction={{ xs: "column", md: "row" }} gap={"32px"}>
                <ToggleButtonGroup
                    orientation={isMobile ? "horizontal" : "vertical"}
                    value={view}
                    exclusive
                    onChange={handleChange}
                    dir="ltr"
                    sx={{ width: { xs: "fit-content", md: "250px" } }}
                >
                    <ToggleButton
                        value="data"
                        aria-label="list"
                        disabled={view === "data"}
                        sx={{ padding: { xs: "8px", sm: "16px", md: "32px" }, borderWidth: "2px", borderColor: "colors.gray0", borderRadius: { xs: "0", md: "14px 14px 0 0" } }}
                    >
                        <Typography>{t("btn1")}</Typography>
                    </ToggleButton>
                    <ToggleButton
                        value="order"
                        aria-label="module"
                        disabled={view === "order"}
                        sx={{ padding: { xs: "8px", sm: "16px", md: "32px" }, borderWidth: "2px", borderColor: "colors.gray0" }}
                    >
                        <Typography>{t("btn2")}</Typography>
                    </ToggleButton>
                    <ToggleButton
                        value="address"
                        aria-label="quilt"
                        disabled={view === "address"}
                        sx={{ padding: { xs: "8px", sm: "16px", md: "32px" }, borderWidth: "2px", borderColor: "colors.gray0" }}
                    >
                        <Typography>{t("btn3")}</Typography>
                    </ToggleButton>
                    <ToggleButton
                        value="favorite"
                        aria-label="quilt"
                        disabled={view === "favorite"}
                        sx={{ padding: { xs: "8px", sm: "16px", md: "32px" }, borderWidth: "2px", borderColor: "colors.gray0" ,borderRadius: { xs: "0", md: "0px 0px 14px 14px" }}}
                    >
                        <Typography>{t("btn4")}</Typography>
                    </ToggleButton>
                </ToggleButtonGroup>

                <Routes>
                    <Route path="" element={<ProfileData />} />
                    <Route path="address" element={<ProfileAdress />} />
                    <Route path="order" element={<ProfileOrder />} />
                    <Route path="favorite" element={<Favorite />} />
                </Routes>
            </Stack>
        </Stack>
    );
};

export default Profile;
