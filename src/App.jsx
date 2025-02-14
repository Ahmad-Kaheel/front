import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import { useTranslation } from 'react-i18next';
import Header from "./Dividing/Header"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './Dividing/Footer';
import Products from './pages/Products';
import Product from './pages/Product';
import Login from './Auth/Login';
import RegisterC from './Auth/RegisterC';
import RegisterB from './Auth/RegisterB';
import Profile from './Auth/Profile';
import Payment from './pages/Payment';
import FinishCheckout from './Component/FinishCheckout';
import { HelmetProvider } from 'react-helmet-async';
import ProfileData from './Auth/ProfileData';
import ProfileAdress from './Auth/ProfileAdress';
import ProfileOrder from './Auth/ProfileOrder';
import { Favorite } from '@mui/icons-material';
import { Typography } from '@mui/material';
import DeleveryInfo from './Component/DeleveryInfo';
import Checkout from './Component/Checkout';
import PaymentInfo from './Component/PaymentInfo';
import Welcome from './pages/Welcome';
import { useDispatch } from 'react-redux';
import { setUser } from './state/slices/UserSlice';
import MapComponent from './Component/MapComponent';
function App() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    document.documentElement.dir = localStorage.getItem("language") === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);
  useEffect(() => {
    // تحقق من وجود بيانات في Local Storage أو Session Storage
    const storedUser = localStorage.getItem('user') || sessionStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);

      // تحديث Redux بالحالة المحفوظة
      dispatch(setUser({
        userInfo: user.userInfo,
        access_token: user.accessToken,
        refresh_token: user.refreshToken,
      }));
    }
  }, [dispatch]);

  return (
   <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/welcome" element={<Welcome />} />
            
            <Route path="/products" element={<Products />} />
            <Route path="/product" element={<Product />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register-customer' element={< RegisterC/>} />
            <Route path='/register-vendor' element={< RegisterB/>} />
            <Route path='/map' element={< MapComponent/>} />

            <Route path="/profile" element={<Profile />}>
              <Route index element={<ProfileData />} /> {/* هذا يعرض ProfileData عندما يكون الرابط /profile فقط */}
              <Route path="data" element={<ProfileData />} />
              <Route path="address" element={<ProfileAdress />} />
              <Route path="order" element={<ProfileOrder />} />
              <Route path="favorite" element={<Favorite />} />
            </Route>
            <Route path='/payment' element={< Payment/>} >
              <Route index element={<PaymentInfo />} /> {/* هذا يعرض ProfileData عندما يكون الرابط /profile فقط */}

              <Route path="delevery" element={<DeleveryInfo />} />
              <Route path="checkout" element={<Checkout />} />
            </Route>
            <Route path='/checkout' element={< FinishCheckout/>} />



          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
   </HelmetProvider>
  );
}

export default App;
