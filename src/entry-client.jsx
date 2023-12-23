import { mount, StartClient } from 'solid-start/entry-client';
import { themeCookie, setThemeInner } from '~/utils/theme.js';
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

mount(() => {
  // Handle theme cookie
  themeCookie.parse(document.cookie).then((theme) => {
    setThemeInner({
      theme: theme ?? 'system',
      systemTheme: window.matchMedia('(prefers-color-scheme: dark)').matches,
    });
  });

  // Inject analytics & speed insights
  inject();
  injectSpeedInsights({})

  return <StartClient />;
}, document);
