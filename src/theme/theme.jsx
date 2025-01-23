import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "'Cairo', sans-serif",
  },
  palette: {
    
    colors: {
      red0: "#E23636",
      black0: "#262626",
      black1:"#595959",
      gray0: "#8C8C8C",
      white0: "#F2F2F2",
      white10:"#D9D9D9"
    },
    text: {
      paragraph: "#404040",
      placeholder: "#8C8C8C",
      titles: "#262626",
    },
    gradient: {
      red_line: "linear-gradient(90deg, #E23636 0%, #EF8F8F 25%, #E23636 50%, #EF8F8F 62.5%, #E23636 100%) 1",
    },
  },
});

export default theme;
