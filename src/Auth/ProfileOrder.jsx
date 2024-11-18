import React from 'react';
import { Box, Accordion, AccordionDetails, AccordionSummary, Button, Stack, Typography, useMediaQuery, Divider, colors } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import pImg from "../assets/images-and-icons/hero/slide3.jpg";
import { useTranslation } from 'react-i18next';

const ProfileOrder = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const {t,i18n} = useTranslation("order")
  const orders = [
    {
      DateOrder: "22 Aguste 2024",
      DateDelevered: "22 Aguste 2024",
      total: "44 ربال سعودي",
      shipTo: "Loukman Dareusey",
      orderId: "#940080950850",
      Products: [
        { name: "نصف كيلو لحم مفروم النعمة", desc: "من أجود أنواع اللحوم في العالم", image: pImg },
        { name: "نصف كيلو لحم مفروم النعمة", desc: "من أجود أنواع اللحوم في العالم", image: pImg },
      ],
    },
  ];

  return (
    <Stack gap="32px" width="100%" padding="16px">
      <Typography fontSize="26px" fontWeight={600} color="colors.red0">
        {t("order")}
      </Typography>
      {orders.map((order, index) => (
        <Accordion key={index} sx={{ boxShadow: 2, borderRadius: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1-content"
            id={`panel${index}-header`}
            sx={{
              bgcolor: "colors.white0",
              padding: "16px",
              borderBottom: "1px solid #e0e0e0",
            }}
          >
            <Stack
              direction={isSmallScreen ? "column" : "row"}
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              gap={isSmallScreen ? "16px" : "32px"}
            >
              <Stack direction="row" gap="32px">
                <Stack>
                  <Typography variant="subtitle2" color="textSecondary"> {t("orderDate")}</Typography>
                  <Typography>{order.DateOrder}</Typography>
                </Stack>
                <Stack>
                  <Typography variant="subtitle2" color="textSecondary">{t("total")}</Typography>
                  <Typography>{order.total}</Typography>
                </Stack>
                <Stack>
                  <Typography variant="subtitle2" color="textSecondary">{t("sendTo")}</Typography>
                  <Typography>{order.shipTo}</Typography>
                </Stack>
              </Stack>
              <Stack alignItems={isSmallScreen ? "flex-start" : "flex-end"}>
                <Typography variant="subtitle2" color="textSecondary">{t("orderNum")}</Typography>
                <Typography>{order.orderId}</Typography>
                <Stack direction="row" gap="8px" mt="8px">
                  <Button variant="contained" sx={{bgcolor:"colors.red0"}}>
                     {t("btn1")}
                  </Button>
                  <Button variant="outlined" color="primary" sx={{borderColor:"colors.red0",color:"colors.red0"}}>
                    {t("btn2")}
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Stack gap="24px">
              <Typography fontWeight={700} fontSize="18px" color="textSecondary">
              {t("delever")}: {order.DateDelevered}
              </Typography>
              <Divider />
              {order.Products.map((product, index) => (
                <Stack
                  direction={isSmallScreen ? "column" : "row"}
                  gap="16px"
                  alignItems="center"
                  key={index}
                  sx={{
                    padding: "16px",
                    bgcolor: "#f9f9f9",
                    borderRadius: "8px",
                  }}
                >
                  <Box
                    component="img"
                    src={product.image}
                    sx={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  />
                  <Stack flex={1} gap="8px">
                    <Typography fontWeight={600}>{product.name}</Typography>
                    <Typography color="textSecondary">{product.desc}</Typography>
                    <Stack direction="row" gap="8px">
                      <Button
                        sx={{
                          fontSize: "14px",
                          fontWeight: 500,
                          bgcolor:"colors.red0"
                        }}
                        variant="contained"
                      >
                         {t("view")}
                      </Button>
                      <Button
                        sx={{
                          fontSize: "14px",
                          fontWeight: 500,
                          borderColor:"colors.red0",
                          color:"colors.red0"
                        }}
                        variant="outlined"
                      >
                         {t("btn1")}
                      </Button>
                    </Stack>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );
};

export default ProfileOrder;
