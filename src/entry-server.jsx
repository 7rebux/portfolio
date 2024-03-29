import { StartServer, createHandler, renderAsync } from 'solid-start/entry-server';
import { themeCookie, setSelectedTheme, setIsSystemDark } from '~/utils/theme.js';

export default createHandler(
  ({ forward }) => {
    return async (event) => {
      const request = event.request;
      const theme = await themeCookie.parse(request.headers.get('cookie'));

      setSelectedTheme(theme ?? 'system');
      setIsSystemDark(event.request.headers.get('Sec-CH-Prefers-Color-Scheme') === 'dark');

      return forward(event);
    };
  },
  renderAsync((event) => <StartServer event={event} />)
);
