import React from "react";
import one from "../../assets/images-and-icons/CategoryFilters/Users/1.svg";
import two from "../../assets/images-and-icons/CategoryFilters/Users/2.png";
import three from "../../assets/images-and-icons/CategoryFilters/Users/3.svg";
import four from "../../assets/images-and-icons/CategoryFilters/Users/4.png";
import five from "../../assets/images-and-icons/CategoryFilters/Users/5.png";
import six from "../../assets/images-and-icons/CategoryFilters/Users/6.svg";

import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import HeadSection from "../../Utils/HeadSection";

const PersonNumberFilter = () => {
  const { t } = useTranslation("person");

  const data = [
    { image: one, name: "شخص واحد" },
    { image: two, name: "شخصان" },
    { image: three, name: "ثلاثة أشخاص" },
    { image: four, name: "أربع أشخاص" },
    { image: five, name: "خمس أشخاص" },
    { image: six, name: "ست أشخاص" },

  ];

  return (
    <Stack
      gap="30px"
      sx={{
        paddingY: { xs: "32px", sm: "48px", md: "64px" },
        paddingX: { xs: "28px", sm: "32px", md: "128px", lg: "200px",xl:"20%" },
      }}
    >
      <HeadSection name={t("name")} more={t("more")} />

      {/* Container for all items */}
      <Stack 
                flexDirection="row"
                sx={{
                    gap: { xs: "20px", sm: "32px", md: "64px", lg: "95px" },
                    cursor: "pointer",
                    textAlign: { xs: "center", sm: "initial" },
                }}
                justifyContent={"center"}
                alignItems={"center"}
            >
        {data.map((person, index) => (
          <Stack
            key={index}
            alignItems="center"
            justifyContent="center"
            spacing={1.5} // Space between icon and text
            sx={{
              cursor: "pointer",
              textAlign: "center",
              width: { xs: "80px", sm: "100px", md: "120px",xl:"265px" }, // Width for each item
            }}
          >
            {/* Icon */}
            <Box
              component="img"
              src={person.image}
              alt={person.name}
              sx={{
                width: index === 0 ? { xs: "20px", sm: "25px", md: "30px",xl:"40px" }:index===4? { xs: "45px", sm: "55px", md: "65px",xl:"80px" }: { xs: "40px", sm: "50px", md: "60px",xl:'75px' }, // Smaller size for the first icon
                height: index === 0 ? { xs: "30px", sm: "40px", md: "55px",xl:"70px" } :index===4? { xs: "45px", sm: "55px", md: "65px",xl:"80px" }: { xs: "40px", sm: "50px", md: "60px",xl:'75px' },
                objectFit: "contain",
              }}
            />
            {/* Name */}
            <Typography
              fontSize={{ xs: "12px", sm: "14px", md: "16px" }} // Adjust text sizes
              fontWeight="500"
              sx={{ color: "gray" }}
            >
              {person.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default PersonNumberFilter;
