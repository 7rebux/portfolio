import { createMiddleware } from '@solidjs/start/middleware';
import { setIsSystemDark, setSelectedTheme, themeCookie } from '~/utils/theme';

export default createMiddleware({
  onRequest: [
    async (event) => {
      const request = event.request;
      const theme = await themeCookie.parse(request.headers.get('cookie'));

      setSelectedTheme(theme ?? 'system');
      setIsSystemDark(event.request.headers.get('Sec-CH-Prefers-Color-Scheme') === 'dark');
    },
  ],
});
