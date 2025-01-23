import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Box, Button, TextField } from "@mui/material";

const MapComponent = ({ onLocationSelect }) => {
  const [markerPosition, setMarkerPosition] = useState(null);
  const [currentAddress, setCurrentAddress] = useState("");
  const [mapCenter, setMapCenter] = useState({ lat: 31.963158, lng: 35.930359 });

  useEffect(() => {
    // الحصول على الموقع الحالي عند تحميل الصفحة
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setMapCenter(userLocation);
          setMarkerPosition(userLocation);
          getAddressFromCoordinates(userLocation.lat, userLocation.lng);
        },
        (error) => {
          console.error("Error getting location: ", error);
        }
      );
    }
  }, []);

  const getAddressFromCoordinates = (lat, lng) => {
    const apiKey = "YOUR_GOOGLE_MAPS_API_KEY"; // استخدم مفتاحك هنا
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "OK" && data.results.length > 0) {
          setCurrentAddress(data.results[0].formatted_address);
        } else {
          setCurrentAddress("تعذر الحصول على العنوان");
        }
      })
      .catch((error) => {
        console.error("Error fetching address:", error);
        setCurrentAddress("تعذر الحصول على العنوان");
      });
  };

  const handleMapClick = (event) => {
    const newPosition = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setMarkerPosition(newPosition);
    getAddressFromCoordinates(newPosition.lat, newPosition.lng);
  };

  const handleSelectLocation = () => {
    if (markerPosition) {
      onLocationSelect(markerPosition);
    } else {
      alert("يرجى اختيار موقع بالنقر على الخريطة!");
    }
  };

  return (
    <Box sx={{ position: "relative", width: "100%", height: "300px" }}>
      <LoadScript googleMapsApiKey="AIzaSyAOpm9ATq2lTrDlzLKUEUHKWqQklBEp--w">
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "200px" }}
          center={mapCenter}
          zoom={15}
          onClick={handleMapClick}
        >
          {markerPosition && <Marker position={markerPosition} />}
        </GoogleMap>
      </LoadScript>

      <Box sx={{ position: "absolute", top: "10px", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <Button variant="contained" color="primary" onClick={handleSelectLocation}>
          اختيار عنوانك
        </Button>
      </Box>

      <TextField
        fullWidth
        value={currentAddress}
        variant="outlined"
        margin="normal"
        label="عنوان المستلم"
        disabled
      />
    </Box>
  );
};

export default MapComponent;
