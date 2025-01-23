import { CheckBox, LocationOn, Search } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, DateTimePicker, TimePicker } from "@mui/x-date-pickers";
import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import car from "../assets/images-and-icons/basket/Transport.svg";
import { CustomInput } from "../Utils/CustomInput";
import PhoneNumberInput from "../Utils/PhoneNumberInput";
import MapComponent from "./MapComponent";
import { DateInput } from "../Utils/DateInput";
import { LocalizationProvider } from "@mui/x-date-pickers";

const DeliveryOption = ({ label }) => (
  <FormControlLabel control={<Checkbox />} label={label} />
);

const DeliveryTimeOption = ({ title, selected, onClick }) => (
  <Stack
    gap="16px"
    onClick={onClick}
    sx={{
      padding: "16px",
      border: selected ? "2px solid blue" : "2px solid gray",
      borderRadius: "12px",
      cursor: "pointer",
      backgroundColor: selected ? "#e3f2fd" : "transparent",
      "&:hover": { backgroundColor: "#f5f5f5" },
    }}
  >
    <Typography>{title}</Typography>
  </Stack>
);

const DeleveryInfo = () => {
  const { t, i18n } = useTranslation("payment");
  const [selectedCountry, setSelectedCountry] = useState({
    code: 'SA',
    label: 'Saudi Arabia',
    phone: '966',
  });
  const [adress, setAdress] = useState('');
  const handleChange = (event) => {
    setAdress(event.target.value);
  };
  const [deliveryOption, setDeliveryOption] = useState("today"); // "today" أو "specificTime"
  const [selectedDateTime, setSelectedDateTime] = useState(dayjs()); // الافتراضي: اليوم
  const [openDateTimePicker, setOpenDateTimePicker] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");
  const handleLocationSelect = (location) => {
    const locationText = `الموقع المختار: ${location.lat.toFixed(5)}, ${location.lng.toFixed(5)}`;
    setSelectedAddress(locationText);
  };
  return (
    <Stack gap="24px" width="100%">
      {/* خيارات التوصيل */}
      <DeliveryOption label="التوصيل لشخص أخر" />
      <DeliveryOption label="إخفاء التفاصيل الشخصية" />

      {/* خريطة الموقع */}
      <Stack width="100%">
        <CustomInput label={t("name")} language={i18n.language} type="text" />
      </Stack>

      {/* إدخال الهاتف */}
      <Stack direction="row" gap="32px" width="100%">
        <PhoneNumberInput
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          required
        />
        <CustomInput label={t("phone")} language={i18n.language} type="text" />
      </Stack>

      <Stack width="100%">
      <MapComponent onLocationSelect={handleLocationSelect} />
      </Stack>

      <FormControl fullWidth>
        <Select
          value={adress}
          onChange={handleChange}
          displayEmpty
          size="small"
          sx={{
            border: "2px solid",
            borderColor: "colors.gray0",
            borderRadius: "8px",
            fontSize: { xs: "8px", md: "12px" },
            width: "100%",
            color: "text.placeholder",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .MuiSelect-icon": {
              right: i18n.language === 'en' ? '0px' : 'unset',
              left: i18n.language === 'ar' ? '0px' : 'unset',
            }
          }}
          aria-label={t('select_location')}
        >
          <MenuItem value="" disabled>
            {t('select_location')}
          </MenuItem>
          <MenuItem value="Ryadh">{t('select1')}</MenuItem>
          <MenuItem value="jaddah">{t('select2')}</MenuItem>
          <MenuItem value="khobar">{t('select3')}</MenuItem>
        </Select>
      </FormControl>

      <Stack width="100%">
        <TextField
          label={t("عنوان المستلم")}
          value={selectedAddress}
          variant="outlined"
          fullWidth
          InputLabelProps={{
            className: i18n.language === "ar" ? "custom-label-rtl" : "",
          }}
        />
      </Stack>
      <TextField
        InputLabelProps={{
          className: i18n.language === "ar" ? 'custom-label-rtl' : ''
        }}
        sx={{
          textAlign: 'right',
          width: "100%",
          '& .MuiOutlinedInput-root': {
            borderRadius: "12px",
            borderWidth: "2px",
            '& fieldset': {
              borderColor: "rgba(0, 0, 0, 0.23)",
            },
            '&:hover fieldset': {
              borderColor: "gray",
            },
            '&.Mui-focused fieldset': {
              borderColor: "gray",
            },
          },
          '& .MuiInputLabel-root': {
            color: 'gray',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'gray',
          },
        }}
        id="outlined-basic"
        label={t("ملاحظات اضافية للعنوان")}
        type={"text"}
        variant="outlined"
        multiline
        rows={4}
      />
      
      {/* خيار إظهار المعلومات */}
      <Stack direction="row" alignItems="center" width="100%">
        <Checkbox />
        <Typography>{t("show")}</Typography>
      </Stack>

      {/* خيارات وقت التوصيل */}
      <Stack gap="24px" width="100%">
      {/* خيارات وقت التوصيل */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack gap="16px" width="100%">
          <Typography variant="h6">وقت التوصيل</Typography>

          <Stack direction="row" gap="16px">
            {/* خيار التوصيل اليوم */}
            <DeliveryTimeOption
              title="اليوم"
              selected={deliveryOption === "today"}
              onClick={() => {
                setDeliveryOption("today");
                setSelectedDateTime(dayjs()); // ضبط على الوقت الحالي
              }}
            />

            {/* خيار اختيار تاريخ ووقت محدد */}
            <DeliveryTimeOption
              title="اختر تاريخ ووقت محدد"
              selected={deliveryOption === "specificTime"}
              onClick={() => {
                setDeliveryOption("specificTime");
                setOpenDateTimePicker(true);
              }}
            />

            {/* التقويم لاختيار التاريخ والوقت */}
            {deliveryOption === "specificTime" && (
          <DateTimePicker
            open={openDateTimePicker}
            onClose={() => setOpenDateTimePicker(false)} // يتم الإغلاق فقط عند تأكيد الاختيار
            value={selectedDateTime}
            onAccept={(dateTime) => {
              setSelectedDateTime(dateTime); // حفظ التاريخ والوقت عند الضغط على OK
              setOpenDateTimePicker(false); // إغلاق بعد الضغط على OK
            }}
            slotProps={{
              textField: { sx: { display: "none" } } // إخفاء حقل الإدخال
            }}
          />
        )}
          </Stack>

          {/* عرض الوقت المختار */}
          <Box
            sx={{
              padding: "16px",
              border: "2px solid gray",
              borderRadius: "12px",
              display: "inline-block",
              marginTop: "8px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <Typography>
              {deliveryOption === "today"
                ? `التوصيل اليوم - ${selectedDateTime.format("HH:mm")}`
                : `التاريخ والوقت المحدد: ${selectedDateTime.format("YYYY-MM-DD HH:mm")}`}
            </Typography>
          </Box>
        </Stack>
      </LocalizationProvider>
    </Stack>
    </Stack>
  );
};

export default DeleveryInfo;
