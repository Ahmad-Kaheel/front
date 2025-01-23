import { Box, Stack, Step, StepLabel, Stepper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import PaymentInfo from '../Component/PaymentInfo';
import DeleveryInfo from '../Component/DeleveryInfo';
import Checkout from '../Component/Checkout';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const Payment = () => {
    const { t } = useTranslation("payment");
    const navigate = useNavigate();
    const location = useLocation();

    const steps = [
        t("step1"),
        t("step2"),
        t("step3")
    ];

    const getStepFromPath = (path) => {
        if (path.includes('/payment/delevery')) return 1;
        if (path.includes('/payment/checkout')) return 2;
        return 0;
    };

    const [activeStep, setActiveStep] = useState(getStepFromPath(location.pathname));

    useEffect(() => {
        setActiveStep(getStepFromPath(location.pathname));
    }, [location.pathname]);

    const handleNext = () => {
        const newActiveStep = activeStep + 1;
        setActiveStep(newActiveStep);

        if (newActiveStep === 1) {
            navigate('/payment/delevery');
        } else if (newActiveStep === 2) {
            navigate('/payment/checkout');
        }
    };

    const handleStepClick = (index) => {
        setActiveStep(index);

        if (index === 0) {
            navigate('/payment');
        } else if (index === 1) {
            navigate('/payment/delevery');
        } else if (index === 2) {
            navigate('/payment/checkout');
        }
    };

    return (
        <>
            <Helmet>
                <title>الدفع - متجر اللحم الذهبي</title>
                <meta name="description" content="صفحة الدفع الخاصة بمتجر اللحم الذهبي لتقديم معلومات التوصيل وإتمام عملية الشراء بسهولة." />
                <meta name="keywords" content="متجر اللحم الذهبي, الدفع, التوصيل, الشراء, اللحوم, منتجات غذائية" />
                <meta name="author" content="متجر اللحم الذهبي" />
                <meta property="og:title" content="الدفع - متجر اللحم الذهبي" />
                <meta property="og:description" content="أكمل عملية الدفع بسهولة مع متجر اللحم الذهبي واحصل على أجود أنواع اللحوم." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://goldenmeatstore.com/payment" />
                <meta property="og:image" content="https://goldenmeatstore.com/assets/images/payment-banner.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="الدفع - متجر اللحم الذهبي" />
                <meta name="twitter:description" content="أكمل عملية الدفع بسهولة مع متجر اللحم الذهبي." />
                <meta name="twitter:image" content="https://goldenmeatstore.com/assets/images/payment-banner.jpg" />
            </Helmet>

            <Stack sx={{ paddingY: "128px", paddingX: { xs: "20px", sm: "32px", md: "128px", lg: "200px", xl:"20%" }, margin: "auto" }} gap={"128px"}>
                <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep} alternativeLabel sx={{ direction: "ltr" }}>
                    {steps.map((label, index) => (
                        <Step
                            key={label}
                            sx={{
                                cursor: "pointer",
                                "& .MuiStepLabel-label": {
                                    fontSize: "1.2rem",
                                    fontWeight: "bold",
                                
                                },
                                "& .MuiStepIcon-root": {
                                    fontSize: "2rem",
                                 
                                },
                                "& .MuiStepIcon-text": {
                                    fill: "white", // التحكم في لون النص داخل الأيقونة
                                },
                                "& .css-1244fg1-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed":{
                                    color:"green"
                                },
                                "& .css-1yimk3v-MuiSvgIcon-root-MuiStepIcon-root.Mui-active" : {
                                    color:"orange"
                                },
                                "& .css-ivp2xp-MuiStepLabel-label" : {
                                    color:"red"
                                },
                                "& .css-ivp2xp-MuiStepLabel-label.Mui-active" : {
                                    color:"orange"
                                },
                                "& .css-ivp2xp-MuiStepLabel-label.Mui-completed" : {
                                    color:"green"
                                }
                            }}
                            onClick={() => handleStepClick(index)}
                        >
                            <StepLabel
                                StepIconProps={{
                                    sx: {
                                        color: index < activeStep
                                            ? "green"
                                            : index === activeStep
                                            ? "orange"
                                            : "red",
                                        fontSize: "2rem",
                                    },
                                }}
                            >
                                {label}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>

                </Box>

                <Stack direction={{ xs: "column", md: "row" }} gap="64px" sx={{ width: "100%", justifyContent: "center" }}>
                    <Stack direction={{xs:"column-reverse",md:"row-reverse"}} gap={"60px"}>
                        <PaymentInfo
                            activeStep={activeStep}
                            setActiveStep={setActiveStep}
                            handleNext={handleNext}
                        />
                        <Routes>
                            <Route path="/" index />
                            <Route path="delevery" element={<DeleveryInfo />} />
                            <Route path="checkout" element={<Checkout />} />
                        </Routes>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
};

export default Payment;
