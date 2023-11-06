import { mount, StartClient } from 'solid-start/entry-client';
import { setThemeInner } from '~/hooks/useTheme.js';

mount(() => <StartClient />, document);

// Update theme
queueMicrotask(() => {
  setThemeInner({
    theme: localStorage.theme ?? 'system',
    systemTheme: window.matchMedia('(prefers-color-scheme: dark)').matches,
  });
});
