import { Box, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import PaymentInfo from '../Component/PaymentInfo';
import DeleveryInfo from '../Component/DeleveryInfo';
import Checkout from '../Component/Checkout';
import { useTranslation } from 'react-i18next';



const Payment = () => {
    const [activeStep, setActiveStep] = useState(0);
    const {t,i18n} = useTranslation("payment")
    const navigate = useNavigate();
    const steps = [
        t("step1"),t("step2"),t("step3")
    ];
    const handleNext = () => {
        const newActiveStep = activeStep + 1;
        setActiveStep(newActiveStep);

        // الانتقال إلى الروت الفرعي المناسب
        if (newActiveStep === 1) {
            navigate('/payment/delevery');
        } else if (newActiveStep === 2) {
            navigate('/payment/checkout');
        }
    };

    const handleStepClick = (index) => {
        setActiveStep(index); // تحديث الـ step الحالية

        // التنقل إلى الروت الفرعي المناسب بناءً على الخطوة
        if (index === 0) {
            navigate('/payment');
        } else if (index === 1) {
            navigate('/payment/delevery');
        } else if (index === 2) {
            navigate('/payment/checkout');
        }
    };

    return (
        <Stack sx={{ paddingY: "128px", paddingX: { xs: "20px", sm: "32px", md: "128px",lg:"200px",xl:"256px"} , margin: "auto" }} gap={"128px"}>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep} alternativeLabel dir='ltr'>
                    {steps.map((label, index) => (
                        <Step key={label} sx={{cursor:"pointer"}} onClick={() => handleStepClick(index)}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>

            {/* ترتيب المحتوى المتغير والثابت بجانب بعضهما باستخدام direction="row" */}
            <Stack direction={{xs:"column",md:"row"}} gap="64px" sx={{ width: "100%", justifyContent: "center" }}>
                
                
                {/* الجزء المتغير بناءً على الروت الفرعي */}
                <Stack direction={"row"} gap={"60px"}>
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
    );
};

export default Payment;
