import React from 'react';
import { useMediaQuery } from '@mui/material';
import Nav1 from './Nav1';
import Nav2 from './Nav2';
import MobileNavigation from '../Component/MobileNav';

const Header = () => {
    // تحقق مما إذا كانت الشاشة صغيرة أو أصغر
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    return (
        <>
            {isSmallScreen ? (
                // عرض MobileNavigation فقط للشاشات الصغيرة
                <MobileNavigation />
            ) : (
                // عرض Nav1 و Nav2 للشاشات الكبيرة
                <>
                    <Nav1 />
                    <Nav2 />
                </>
            )}
        </>
    );
};

export default Header;
