import { store } from '../redux/global.store.provider';
// dark theme colors
const darkTheme = {
  backgroundColor: '#336699',
  textColor: '#fff',
};

// light theme color
const lightTheme = {
  backgroundColor: '#ffffff',
  textColor: '#336699',
};

const GetColorScheme = () => {
  const themeStore = store.getState().themeReducer.theme;
  if (themeStore === 'light') {
    return lightTheme;
  } else {
    return darkTheme;
  }
};

export default GetColorScheme;
