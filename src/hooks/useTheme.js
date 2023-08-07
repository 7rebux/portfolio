import { createEffect, createSignal } from 'solid-js';

const useTheme = () => {
  const [theme, setTheme] = createSignal(localStorage.theme ?? 'system');

  createEffect(() => {
    localStorage.theme = theme();

    if (
      theme() === 'dark' ||
      (theme() === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });

  return [theme, setTheme];
};

export default useTheme;
