import { store } from '../redux/global.store.provider';
// dark theme colors
const darkTheme = {
  backgroundColor: '#000',
  textColor: '#fff',
};

// light theme color
const lightTheme = {
  backgroundColor: '#ffffff',
  textColor: '#000',
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
