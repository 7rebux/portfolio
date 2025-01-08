// @refresh reload
import { createHandler, StartServer } from '@solidjs/start/server';

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang='en'>
        <head>
          <title>Nils Osswald</title>
          <link rel='icon' href='/favicon.ico' />

          <meta charset='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='theme-color' content='#4287f5' />

          <meta name='title' content='Nils Osswald' />
          <meta name='description' content='Personal portfolio of Nils Osswald' />

          <meta property='og:title' content='Nils Osswald' />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://www.nilsosswald.de/' />
          <meta property='og:image' content='https://www.nilsosswald.de/favicon.ico' />
          <meta property='og:description' content='Personal portfolio of Nils Osswald' />

          <meta property='twitter:url' content='https://www.nilsosswald.de/' />
          <meta property='twitter:title' content='Nils Osswald' />
          <meta property='twitter:description' content='Personal portfolio of Nils Osswald' />
          <meta property='twitter:image' content='https://www.nilsosswald.de/favicon.ico' />

          {assets}
        </head>
        <body>
          <div
            id='app'
            class='flex min-h-screen flex-col bg-background-light dark:bg-background-dark'
          >
            {children}
          </div>
          <div class='fixed' id='modal' />
          {scripts}
        </body>
      </html>
    )}
  />
));

// const old = () =>
//   createHandler(
//     ({ forward }) => {
//       return async (event) => {
//         const request = event.request;
//         const theme = await themeCookie.parse(request.headers.get('cookie'));
//
//         setSelectedTheme(theme ?? 'system');
//         setIsSystemDark(event.request.headers.get('Sec-CH-Prefers-Color-Scheme') === 'dark');
////
//         return forward(event);
//       };
//     },
//     renderAsync((event) => <StartServer event={event} />)
//   );
