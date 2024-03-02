import { createCookie } from 'solid-start';
import { createEffect, createSignal } from 'solid-js';

const [isSystemDark, setIsSystemDark] = createSignal(false);
const [selectedTheme, setSelectedTheme] = createSignal('system');
const [calculatedTheme, setCalculatedTheme] = createSignal('');

const themeCookie = createCookie('theme', { httpOnly: false, sameSite: 'strict' });

createEffect(() => {
  setCalculatedTheme(
    selectedTheme() === 'dark' || (selectedTheme() === 'system' && isSystemDark())
      ? 'dark'
      : 'light'
  );
});

createEffect(() => {
  themeCookie.serialize(selectedTheme()).then((value) => (document.cookie = value));
});

export { themeCookie, calculatedTheme, selectedTheme, setIsSystemDark, setSelectedTheme };
