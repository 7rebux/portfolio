import { StartServer, createHandler, renderAsync } from 'solid-start/entry-server';
import { themeCookie, setThemeInner, systemTheme } from '~/utils/theme.js';

export default createHandler(
  ({ forward }) => {
    return async (event) => {
      const request = event.request;
      const theme = await themeCookie.parse(request.headers.get('cookie'));

      setThemeInner({
        theme: theme ?? 'system',
        systemTheme: systemTheme(),
      });

      return forward(event);
    };
  },
  renderAsync((event) => <StartServer event={event} />)
);
