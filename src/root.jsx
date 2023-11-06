// @refresh reload
import { Suspense } from 'solid-js';
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Routes,
  Title,
  Link,
  Meta,
  Scripts,
} from 'solid-start';
import Footer from './components/Footer';
import Header from './components/Header';
import './root.css';
import { HydrationScript } from 'solid-js/web';
import { systemTheme, theme } from '~/hooks/useTheme.js';

const Root = () => {
  return (
    <Html
      class={theme() === 'dark' || (theme() === 'system' && systemTheme()) ? 'dark' : ''}
      lang='en'
      dir='ltr'
    >
      <Head>
        <HydrationScript />

        <Meta charset='utf-8' />
        <Meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta name='theme-color' content='#4287f5' />
        <Title>Nils Osswald</Title>
        <Link rel='icon' href='/favicon.ico' />

        {/* Primary tags */}
        <Meta name='title' content='Nils Osswald' />
        <Meta name='description' content='Personal portfolio of Nils Osswald' />

        {/* Open Graph tags */}
        <Meta property='og:title' content='Nils Osswald' />
        <Meta property='og:type' content='website' />
        <Meta property='og:url' content='https://www.nilsosswald.de/' />
        <Meta property='og:image' content='https://www.nilsosswald.de/favicon.ico' />
        <Meta property='og:description' content='Personal portfolio of Nils Osswald' />

        {/* Twitter tags */}
        <Meta property='twitter:url' content='https://www.nilsosswald.de/' />
        <Meta property='twitter:title' content='Nils Osswald' />
        <Meta property='twitter:description' content='Personal portfolio of Nils Osswald' />
        <Meta property='twitter:image' content='https://www.nilsosswald.de/favicon.ico' />
      </Head>
      <Body class='flex min-h-screen flex-col bg-background-light dark:bg-background-dark'>
        <ErrorBoundary>
          <div class='mx-0 flex-1 lg:mx-20 xl:mx-40 2xl:mx-60'>
            <Header />
            <main class='p-4'>
              <Suspense>
                <Routes>
                  <FileRoutes />
                </Routes>
              </Suspense>
            </main>
          </div>
          <Footer />
          <div class='fixed' id='modal' />
        </ErrorBoundary>
        <Scripts />
      </Body>
    </Html>
  );
};

export default Root;
