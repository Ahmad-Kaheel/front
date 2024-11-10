import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import { useTranslation } from 'react-i18next';
import Header from './dividing/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './Dividing/Footer';
import Products from './pages/Products';
import Product from './pages/Product';
import Login from './Auth/Login';
import RegisterC from './Auth/RegisterC';
import RegisterB from './Auth/RegisterB';
function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
   <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product" element={<Product />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register-customer' element={< RegisterC/>} />
          <Route path='/register-vendor' element={< RegisterB/>} />

        </Routes>
        <Footer />
      </ThemeProvider>
   </BrowserRouter>
  );
}

export default App;
