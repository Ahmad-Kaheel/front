import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import car from "../assets/images-and-icons/basket/Transport.svg";
import productImg from "../assets/images-and-icons/CategoryFilters/Cooled.png"
import delet from "../assets/images-and-icons/basket/delete.svg";
import { useTranslation } from 'react-i18next';
import { Search } from '@mui/icons-material';

const PaymentInfo = ({ activeStep, setActiveStep, handleNext }) => {
    const { t, i18n } = useTranslation("payment")
    const handleClick = () => {
        if (activeStep < 3) {
            setActiveStep(activeStep + 1)
        } else {
            console.log("dd");
        }
    }
    return (
        <Stack width={"100%"} gap={{ xs: "16px", md: "32px" }}>
            <Stack
                flexDirection={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                sx={{
                    borderBottom: 1,
                    borderWidth: "2px",
                    borderColor: "#36E236",
                    gap: { xs: "8px", sm: "0" },
                    alignItems: "center"
                }}
            >
                <Box component="img" src={car} sx={{ width: { xs: "50px", sm: "auto" } }} />
                <Typography fontWeight={400} fontSize="14px" color='colors.black0'>
                    طلبك مؤهل للتوصيل المجاني
                </Typography>
                <Typography fontWeight={400} fontSize="14px" color='colors.black0'>
                    2500 ر.س
                </Typography>
            </Stack>

            <Stack
                flexDirection={{ xs: "column", sm: "row" }}
                gap={{ xs: "32px", sm: "64px" }}
                justifyContent="space-between"
                sx={{
                    border: 1,
                    padding: "16px",
                    borderRadius: "32px",
                    borderWidth: "2px",
                    alignItems: "center"
                }}
            >
                <Stack flexDirection="row" gap="32px" alignItems="center">
                    <Box component="img" src={productImg} sx={{ width: "88px", height: "88px" }} />
                    <Stack gap="16px">
                        <Typography fontWeight={400} fontSize="14px" color='colors.black0'>
                            باقة 100 جوري برتقالية مبهجة
                        </Typography>
                        <Typography fontWeight={400} fontSize="14px" color='colors.black0'>
                            ج.م 6,299
                        </Typography>
                    </Stack>
                </Stack>
                <Stack direction={"row"} justifyContent="space-between" alignItems="center" gap={"20px"}>
                    <Stack flexDirection="row" sx={{ border: 1, padding: "5px", borderRadius: "10px" }} gap="16px">
                        <Typography fontWeight={600} fontSize="24px" color='colors.black0' sx={{ cursor: "pointer" }}>+</Typography>
                        <Typography fontWeight={600} fontSize="24px" color='colors.black0' sx={{ cursor: "pointer" }}>1</Typography>
                        <Typography fontWeight={600} fontSize="24px" color='colors.black0' sx={{ cursor: "pointer" }}>-</Typography>
                    </Stack>
                    <Box component="img" src={delet} sx={{ width: "18px", height: "20px", cursor: "pointer" }} />

                </Stack>

            </Stack>

            <Stack direction="row" gap="16px" alignItems="center">
                <TextField
                    sx={{
                        width: "100%",
                        '& .MuiOutlinedInput-root': {
                            borderRadius: "12px",
                            borderWidth: "2px",
                            '& fieldset': { borderColor: "rgba(0, 0, 0, 0.23)" },
                            '&:hover fieldset': { borderColor: "gray" },
                            '&.Mui-focused fieldset': { borderColor: "gray" },
                        },
                        '& .MuiInputLabel-root': { color: 'gray' },
                        '& .MuiInputLabel-root.Mui-focused': { color: 'gray' },
                    }}
                    InputLabelProps={{
                        className: i18n.language === "ar" ? 'custom-label-rtl' : ''
                    }}
                    id="outlined-basic"
                    label={t("code")}
                    type="text"
                    variant="outlined"
                    slotProps={{
                        input: {
                            startAdornment: <Search sx={{ m: 1 }} />
                        }
                    }}
                />
                <Button variant="contained" sx={{ bgcolor: "colors.red0" }}>{t("send")}</Button>
            </Stack>

            <Stack gap="32px" sx={{ padding: "32px", borderRadius: "32px", border: 1, borderWidth: "2px" }}>
                <Typography fontWeight={600} fontSize="16px" color='colors.black0'> {t("summ")}</Typography>
                <Stack direction="row" justifyContent="space-between">
                    <Typography fontWeight={400} fontSize="14px" color='colors.black0'>{t("price")}</Typography>
                    <Typography fontWeight={400} fontSize="14px" color='colors.black0'>555رس</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography fontWeight={400} fontSize="14px" color='colors.black0'>{t("money")}</Typography>
                    <Typography fontWeight={400} fontSize="14px" color='colors.black0'>مجانا</Typography>
                </Stack>
                <Typography fontWeight={400} fontSize="14px" color='colors.black0'>
                    يرجى ملاحظة أن بعض المناطق وخدمة التوصيل السريع قد تتضمن رسوم توصيل إضافية
                </Typography>
                <Stack direction="row" justifyContent="space-between">
                    <Typography fontWeight={400} fontSize="14px" color='colors.black0'>{t("total")}</Typography>
                    <Typography fontWeight={400} fontSize="14px" color='colors.black0'>555رس</Typography>
                </Stack>
            </Stack>
            <Button onClick={handleNext} variant="contained" sx={{ bgcolor: "colors.red0", width: { xs: "100%", sm: "auto" } }}>
                {
                    activeStep === 0 ? t("btn1") : activeStep === 1 ? t("btn2") : t("btn3")
                }
            </Button>
        </Stack>
    )
}

export default PaymentInfo;
