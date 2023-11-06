import { createStore } from 'solid-js/store';

const [innerTheme, setThemeInner] = createStore({ theme: 'system', systemTheme: false });

const setTheme = (newTheme) => {
  setThemeInner({ ...innerTheme, theme: newTheme });
  localStorage.theme = newTheme;
};

const theme = () => innerTheme.theme;
const systemTheme = () => innerTheme.systemTheme;

export { theme, setTheme, setThemeInner, systemTheme };
