import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import React, { useState } from 'react';

import Basket from './Basket';

const MobileNav = () => {
    const [value, setValue] = useState(0);
    const [openDrawer, setOpenDrawer] = useState(false);  // حالة فتح السلة
    const handleDrawerClose = () => {
        console.log("Closing drawer from Nav2");
        setOpenDrawer(false);
    };
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 40 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction
                    label="Home"
                    icon={
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_905_3916)">
                                <path d="M16.2338 6.66677L10.5195 1.65724C9.99566 1.18871 9.31752 0.929688 8.61473 0.929688C7.91194 0.929688 7.2338 1.18871 6.70997 1.65724L0.995684 6.66677C0.693178 6.93731 0.451779 7.2692 0.287562 7.64033C0.123345 8.01146 0.0400771 8.41332 0.0433032 8.81915V17.143C0.0433032 17.9007 0.344323 18.6274 0.880141 19.1633C1.41596 19.6991 2.14268 20.0001 2.90045 20.0001H14.329C15.0868 20.0001 15.8135 19.6991 16.3493 19.1633C16.8851 18.6274 17.1862 17.9007 17.1862 17.143V8.80962C17.188 8.4054 17.1041 8.00538 16.9399 7.63599C16.7758 7.2666 16.5351 6.93625 16.2338 6.66677ZM10.5195 18.0953H6.70997V13.3334C6.70997 13.0808 6.81031 12.8386 6.98892 12.66C7.16752 12.4814 7.40976 12.3811 7.66235 12.3811H9.56711C9.8197 12.3811 10.0619 12.4814 10.2405 12.66C10.4192 12.8386 10.5195 13.0808 10.5195 13.3334V18.0953ZM15.2814 17.143C15.2814 17.3955 15.1811 17.6378 15.0025 17.8164C14.8238 17.995 14.5816 18.0953 14.329 18.0953H12.4243V13.3334C12.4243 12.5757 12.1232 11.8489 11.5874 11.3131C11.0516 10.7773 10.3249 10.4763 9.56711 10.4763H7.66235C6.90459 10.4763 6.17786 10.7773 5.64205 11.3131C5.10623 11.8489 4.80521 12.5757 4.80521 13.3334V18.0953H2.90045C2.64786 18.0953 2.40562 17.995 2.22701 17.8164C2.04841 17.6378 1.94807 17.3955 1.94807 17.143V8.80962C1.94824 8.6744 1.9772 8.54076 2.03303 8.4176C2.08887 8.29444 2.17029 8.18459 2.27187 8.09534L7.98616 3.09534C8.15996 2.94265 8.38339 2.85845 8.61473 2.85845C8.84607 2.85845 9.0695 2.94265 9.2433 3.09534L14.9576 8.09534C15.0592 8.18459 15.1406 8.29444 15.1964 8.4176C15.2523 8.54076 15.2812 8.6744 15.2814 8.80962V17.143Z"
                                    fill={value === 0 ? "#E23636" : "#404040"} />
                            </g>
                            <defs>
                                <clipPath id="clip0_905_3916">
                                    <rect width="17.143" height="20" fill="white" transform="translate(0.0432129)" />
                                </clipPath>
                            </defs>
                        </svg>
                    }
                    sx={{ color: value === 0 ? 'red' : 'inherit', '& .MuiBottomNavigationAction-label': { color: value === 0 ? 'red' : 'inherit' } }}
                />
                <BottomNavigationAction
                    label="Product"
                    icon={<svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.04322 6.99996H16.0432C16.1909 6.99898 16.3366 6.9653 16.4697 6.90132C16.6029 6.83735 16.7202 6.74467 16.8132 6.62996C16.911 6.51749 16.9824 6.38459 17.0222 6.24099C17.0619 6.09739 17.0691 5.9467 17.0432 5.79996L16.0432 0.799959C15.9965 0.570684 15.8708 0.365062 15.6881 0.218887C15.5054 0.0727124 15.2772 -0.00475863 15.0432 -4.07016e-05H9.04322C8.80927 -0.00475863 8.58108 0.0727124 8.39836 0.218887C8.21564 0.365062 8.08997 0.570684 8.04322 0.799959L7.04322 5.79996C7.01459 5.94523 7.01858 6.09503 7.0549 6.23857C7.09122 6.38211 7.15895 6.51579 7.25322 6.62996C7.34839 6.74731 7.46892 6.84156 7.60575 6.90564C7.74257 6.96973 7.89214 7.00197 8.04322 6.99996ZM9.86322 1.99996H14.2232L14.8232 4.99996H9.26322L9.86322 1.99996ZM22.0432 9.79996C21.9965 9.57068 21.8708 9.36506 21.6881 9.21889C21.5054 9.07271 21.2772 8.99524 21.0432 8.99996H15.0432C14.8093 8.99524 14.5811 9.07271 14.3984 9.21889C14.2156 9.36506 14.09 9.57068 14.0432 9.79996L13.0432 14.8C13.0146 14.9452 13.0186 15.095 13.0549 15.2386C13.0912 15.3821 13.159 15.5158 13.2532 15.63C13.3484 15.7473 13.4689 15.8416 13.6057 15.9056C13.7426 15.9697 13.8921 16.002 14.0432 16H22.0432C22.1909 15.999 22.3366 15.9653 22.4697 15.9013C22.6029 15.8373 22.7202 15.7447 22.8132 15.63C22.911 15.5175 22.9824 15.3846 23.0222 15.241C23.0619 15.0974 23.0691 14.9467 23.0432 14.8L22.0432 9.79996ZM15.2632 14L15.8632 11H20.2232L20.8232 14H15.2632ZM9.04322 8.99996H3.04322C2.80927 8.99524 2.58108 9.07271 2.39836 9.21889C2.21564 9.36506 2.08997 9.57068 2.04322 9.79996L1.04322 14.8C1.01459 14.9452 1.01859 15.095 1.0549 15.2386C1.09122 15.3821 1.15895 15.5158 1.25322 15.63C1.34839 15.7473 1.46892 15.8416 1.60575 15.9056C1.74257 15.9697 1.89214 16.002 2.04322 16H10.0432C10.1909 15.999 10.3366 15.9653 10.4697 15.9013C10.6029 15.8373 10.7202 15.7447 10.8132 15.63C10.911 15.5175 10.9824 15.3846 11.0222 15.241C11.0619 15.0974 11.0691 14.9467 11.0432 14.8L10.0432 9.79996C9.99647 9.57068 9.87079 9.36506 9.68808 9.21889C9.50536 9.07271 9.27716 8.99524 9.04322 8.99996ZM3.26322 14L3.86322 11H8.22322L8.82322 14H3.26322Z" fill={value === 1 ? "#E23636" : "#404040"} />
                    </svg>
                    }
                    sx={{ color: value === 1 ? 'red' : 'inherit', '& .MuiBottomNavigationAction-label': { color: value === 1 ? 'red' : 'inherit' } }}
                />
                <BottomNavigationAction
                    onClick={() => setOpenDrawer(true)}
                    label="Basket"
                    icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1114_1140)">
                            <path d="M14.3999 19.4285C14.7182 19.4285 15.0234 19.3081 15.2485 19.0938C15.4735 18.8794 15.5999 18.5887 15.5999 18.2856V15.9999C15.5999 15.6968 15.4735 15.4061 15.2485 15.1918C15.0234 14.9775 14.7182 14.8571 14.3999 14.8571C14.0817 14.8571 13.7765 14.9775 13.5514 15.1918C13.3264 15.4061 13.1999 15.6968 13.1999 15.9999V18.2856C13.1999 18.5887 13.3264 18.8794 13.5514 19.0938C13.7765 19.3081 14.0817 19.4285 14.3999 19.4285ZM9.59995 19.4285C9.91821 19.4285 10.2234 19.3081 10.4485 19.0938C10.6735 18.8794 10.7999 18.5887 10.7999 18.2856V15.9999C10.7999 15.6968 10.6735 15.4061 10.4485 15.1918C10.2234 14.9775 9.91821 14.8571 9.59995 14.8571C9.28169 14.8571 8.97646 14.9775 8.75142 15.1918C8.52637 15.4061 8.39995 15.6968 8.39995 15.9999V18.2856C8.39995 18.5887 8.52637 18.8794 8.75142 19.0938C8.97646 19.3081 9.28169 19.4285 9.59995 19.4285ZM20.3999 5.71424H18.7439L16.6679 1.77139C16.6045 1.62631 16.5103 1.49524 16.3913 1.38639C16.2723 1.27754 16.131 1.19324 15.9762 1.13875C15.8214 1.08427 15.6565 1.06077 15.4917 1.06973C15.327 1.07869 15.166 1.11992 15.0187 1.19083C14.8714 1.26174 14.7411 1.36082 14.6359 1.48187C14.5306 1.60292 14.4527 1.74334 14.4071 1.89435C14.3614 2.04537 14.3489 2.20374 14.3704 2.35955C14.3919 2.51537 14.4469 2.6653 14.5319 2.79996L16.0559 5.71424H7.94395L9.46795 2.79996C9.58442 2.53357 9.59078 2.23507 9.48573 1.9644C9.38069 1.69373 9.17202 1.47093 8.90162 1.34072C8.63122 1.21051 8.31912 1.18255 8.02796 1.26243C7.73681 1.34231 7.48816 1.52413 7.33195 1.77139L5.25595 5.71424H3.59995C2.75177 5.72653 1.9354 6.02366 1.29481 6.55325C0.654213 7.08283 0.230555 7.81084 0.0985512 8.60887C-0.0334527 9.40691 0.134678 10.2237 0.57329 10.9152C1.0119 11.6067 1.69282 12.1285 2.49595 12.3885L3.38395 20.9142C3.47349 21.7629 3.89196 22.5493 4.55763 23.1198C5.22331 23.6904 6.08839 24.0042 6.98395 23.9999H17.0399C17.9355 24.0042 18.8006 23.6904 19.4663 23.1198C20.1319 22.5493 20.5504 21.7629 20.6399 20.9142L21.5279 12.3885C22.3328 12.1277 23.0148 11.604 23.4531 10.9102C23.8914 10.2164 24.0577 9.39724 23.9226 8.59783C23.7875 7.79841 23.3597 7.07034 22.7149 6.54255C22.0702 6.01477 21.2501 5.72134 20.3999 5.71424ZM18.2279 20.6856C18.1981 20.9685 18.0586 21.2307 17.8367 21.4208C17.6148 21.611 17.3265 21.7156 17.0279 21.7142H6.97195C6.67343 21.7156 6.38507 21.611 6.16317 21.4208C5.94128 21.2307 5.80179 20.9685 5.77195 20.6856L4.91995 12.5714H19.0799L18.2279 20.6856ZM20.3999 10.2857H3.59995C3.28169 10.2857 2.97646 10.1653 2.75142 9.95092C2.52638 9.7366 2.39995 9.44591 2.39995 9.1428C2.39995 8.8397 2.52638 8.54901 2.75142 8.33468C2.97646 8.12036 3.28169 7.99995 3.59995 7.99995H20.3999C20.7182 7.99995 21.0234 8.12036 21.2485 8.33468C21.4735 8.54901 21.5999 8.8397 21.5999 9.1428C21.5999 9.44591 21.4735 9.7366 21.2485 9.95092C21.0234 10.1653 20.7182 10.2857 20.3999 10.2857Z" fill={value === 2 ? "#E23636" : "#404040"} />
                        </g>
                        <defs>
                            <clipPath id="clip0_1114_1140">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    }
                    sx={{ color: value === 2 ? 'red' : 'inherit', '& .MuiBottomNavigationAction-label': { color: value === 2 ? 'red' : 'inherit' } }}
                />
                <BottomNavigationAction
                    label="Account"
                    icon={<svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1114_1144)">
                            <path d="M14.9564 12.7746C16.0259 11.9331 16.8066 10.7792 17.1898 9.47344C17.5729 8.16764 17.5396 6.77488 17.0944 5.48892C16.6491 4.20296 15.8141 3.08775 14.7056 2.29844C13.597 1.50912 12.27 1.08496 10.9091 1.08496C9.54828 1.08496 8.22126 1.50912 7.11269 2.29844C6.00413 3.08775 5.16914 4.20296 4.72391 5.48892C4.27867 6.77488 4.24533 8.16764 4.62851 9.47344C5.01169 10.7792 5.79234 11.9331 6.86186 12.7746C5.02922 13.5088 3.43017 14.7266 2.2352 16.2981C1.04022 17.8697 0.294109 19.736 0.0764044 21.6982C0.0606458 21.8415 0.0732588 21.9865 0.113523 22.1248C0.153787 22.2632 0.220914 22.3923 0.311072 22.5048C0.493152 22.7319 0.757986 22.8773 1.04731 22.9091C1.33664 22.941 1.62676 22.8566 1.85385 22.6745C2.08094 22.4924 2.2264 22.2276 2.25822 21.9382C2.49777 19.8057 3.51461 17.8362 5.11446 16.406C6.71432 14.9758 8.78502 14.1852 10.931 14.1852C13.0769 14.1852 15.1476 14.9758 16.7474 16.406C18.3473 17.8362 19.3641 19.8057 19.6037 21.9382C19.6333 22.2063 19.7612 22.4539 19.9627 22.6332C20.1642 22.8125 20.4249 22.9108 20.6946 22.9091H20.8146C21.1006 22.8762 21.3619 22.7316 21.5417 22.5069C21.7216 22.2821 21.8053 21.9954 21.7746 21.7091C21.5559 19.7414 20.8057 17.8702 19.6046 16.2963C18.4035 14.7223 16.7967 13.5049 14.9564 12.7746ZM10.9091 12C10.0461 12 9.20242 11.7441 8.48483 11.2646C7.76723 10.7852 7.20793 10.1037 6.87766 9.3063C6.54738 8.50895 6.46097 7.63157 6.62934 6.78511C6.79771 5.93865 7.21331 5.16112 7.82358 4.55085C8.43384 3.94059 9.21137 3.52499 10.0578 3.35662C10.9043 3.18825 11.7817 3.27466 12.579 3.60494C13.3764 3.93521 14.0579 4.49451 14.5374 5.2121C15.0168 5.9297 15.2728 6.77337 15.2728 7.63641C15.2728 8.79372 14.813 9.90363 13.9947 10.722C13.1763 11.5403 12.0664 12 10.9091 12Z" fill={value === 3 ? "#E23636" : "#404040"} />
                        </g>
                        <defs>
                            <clipPath id="clip0_1114_1144">
                                <rect width="21.8182" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    }
                    sx={{ color: value === 3 ? 'red' : 'inherit', '& .MuiBottomNavigationAction-label': { color: value === 3 ? 'red' : 'inherit' } }}
                />
            </BottomNavigation>
            <Basket openDrawer={openDrawer} handleDrawerClose={handleDrawerClose} />

        </Paper>
    );
};

export default MobileNav;