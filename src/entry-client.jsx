import { mount, StartClient } from 'solid-start/entry-client';
import { themeCookie, setThemeInner } from '~/utils/theme.js';
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

mount(() => {
  themeCookie.parse(document.cookie).then((theme) => {
    // Inject analytics
    inject();

    // Inject speed insights
    injectSpeedInsights({});

    setThemeInner({
      theme: theme ?? 'system',
      systemTheme: window.matchMedia('(prefers-color-scheme: dark)').matches,
    });
  });

  return <StartClient />;
}, document);
