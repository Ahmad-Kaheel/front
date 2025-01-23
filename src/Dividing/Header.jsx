import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import Nav1 from './Nav1';
import Nav2 from './Nav2';
import MobileNavigation from '../Component/MobileNav';

const Header = () => {
    // تحقق مما إذا كانت الشاشة صغيرة أو أصغر
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    return (
        <Box >
            {isSmallScreen ? (
                // عرض MobileNavigation فقط للشاشات الصغيرة
                <MobileNavigation />
            ) : (
                // عرض Nav1 و Nav2 للشاشات الكبيرة
                <>
                    <Box 
                    className='gradient-border'
                    sx={{
                        borderBottomWidth: "4px",
                        borderBottomStyle: "solid",
                        borderImage: "gradient.red_line",
                    }}
                    >
                        <Box sx={{maxWidth:"2000px",margin:"auto"}}>
                            <Nav1 />
                        </Box>
                    </Box>
                    <Box className='nav-shadow'>
                        <Box sx={{maxWidth:"2000px",margin:"auto"}}>
                            <Nav2 />
                        </Box>
                    </Box>
                </>
            )}
        </Box>
    );
};

export default Header;
