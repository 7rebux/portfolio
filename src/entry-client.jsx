import { mount, StartClient } from 'solid-start/entry-client';
import { setIsSystemDark, themeCookie, updateTheme } from '~/utils/theme.js';
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

mount(() => {
  // Handle theme cookie
  themeCookie.parse(document.cookie).then((theme) => {
    updateTheme(theme ?? 'system');
    setIsSystemDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  // Inject analytics & speed insights
  inject();
  injectSpeedInsights({});

  return <StartClient />;
}, document);
