// @refresh reload
import { Suspense } from 'solid-js';
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Routes,
  Title,
} from 'solid-start';
import Footer from './components/Footer';
import Header from './components/Header';
import './root.css';

const Root = () => {
  return (
    <Html lang='en' dir='ltr'>
      <Head>
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
      <Body class='flex h-screen flex-col bg-background-light dark:bg-background-dark'>
        <ErrorBoundary>
          <Header />
          <Suspense>
            <Routes>
              <FileRoutes />
            </Routes>
          </Suspense>
          <Footer />
          <div class='absolute left-0 top-0' id='modal' />
        </ErrorBoundary>
      </Body>
    </Html>
  );
};

export default Root;
