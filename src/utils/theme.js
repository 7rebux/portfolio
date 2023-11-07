import { createStore } from 'solid-js/store';
import { createCookie } from 'solid-start';

const [innerTheme, setThemeInner] = createStore({ theme: 'system', systemTheme: false });
const themeCookie = createCookie('theme', { httpOnly: false, sameSite: 'strict' });

const setTheme = (newTheme) => {
  setThemeInner({ ...innerTheme, theme: newTheme });
  themeCookie.serialize(newTheme).then((value) => (document.cookie = value));
};

const theme = () => innerTheme.theme;
const systemTheme = () => innerTheme.systemTheme;

const getThemeClass = () => {
  return theme() === 'dark' || (theme() === 'system' && systemTheme()) ? 'dark' : null;
};

export { setThemeInner, themeCookie, setTheme, theme, systemTheme, getThemeClass };
