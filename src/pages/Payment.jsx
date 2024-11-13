import { Box, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material'
import React, { useState } from 'react'
import car from "../assets/images and icons/basket/Transport.svg";
import PaymentInfo from '../Component/PaymentInfo';
import DeleveryInfo from '../Component/DeleveryInfo';
import Checkout from '../Component/Checkout';
const steps = [
    'Select master blaster campaign settings',
    'Create an ad group',
    'Create an ad',
];

const Payment = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});
    const handleNext = () => {
        const newActiveStep = activeStep + 1;
        setActiveStep(newActiveStep);
    };

    return (
        <Stack sx={{ paddingY: "128px",px:{xs:"20px",md:"32",lg:"64px"},margin:"auto" }} gap={"128px"}>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep} alternativeLabel dir='ltr'>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                
            </Box>
            <Stack direction={{xs:"column",md:"row"}} gap={"64px"} sx={{width:"fit-content",margin:"auto"}}>
                    {activeStep===0 && <Box>هذه هي تفاصيل السلة والمنتجات  المضافة لها </Box>}
                    {activeStep===1 && <DeleveryInfo />}
                    {activeStep === 2 && <Checkout />}
                    <PaymentInfo activeStep={activeStep} setActiveStep={setActiveStep}/>
                </Stack>
        </Stack>
    );
}

export default Payment;
