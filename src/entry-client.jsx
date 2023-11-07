import { mount, StartClient } from 'solid-start/entry-client';
import { themeCookie, setThemeInner } from '~/utils/theme.js';

mount(() => {
  themeCookie.parse(document.cookie).then((theme) => {
    setThemeInner({
      theme: theme ?? 'system',
      systemTheme: window.matchMedia('(prefers-color-scheme: dark)').matches,
    });
  });

  return <StartClient />;
}, document);
