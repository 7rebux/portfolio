import { mount, StartClient } from 'solid-start/entry-client';
import { themeCookie, setThemeInner } from '~/utils/theme.js';
import { inject } from '@vercel/analytics';

mount(() => {
  themeCookie.parse(document.cookie).then((theme) => {
    inject();

    setThemeInner({
      theme: theme ?? 'system',
      systemTheme: window.matchMedia('(prefers-color-scheme: dark)').matches,
    });
  });

  return <StartClient />;
}, document);
