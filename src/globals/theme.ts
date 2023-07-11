import { store } from '../redux/global.store.provider';
// dark theme colors
const darkTheme = {
  backgroundColor: '#000',
  textColor: '#fff',
  tabBarBackground: '#0a0a0a',
  tabIconActive: '#fff',
  tabIconInActive: '#aaa',
  tabTextActive: '#fff',
  tabTextInActive: '#aaa',
  dark: true,
  iconOverlay: '#222',
  layerOverlay: '#222',
};

// light theme color
const lightTheme = {
  backgroundColor: '#ffffff',
  textColor: '#000',
  tabBarBackground: '#eee',
  tabIconActive: '#000',
  tabIconInActive: '#aaa',
  tabTextActive: '#000',
  tabTextInActive: '#aaa',
  dark: false,
  iconOverlay: '#eee',
  layerOverlay: '#f5f5f5',
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
