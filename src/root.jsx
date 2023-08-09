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
    <Html lang='en'>
      <Head>
        <Title>Nils Osswald</Title>
        <Link rel='icon' href='/favicon.ico' />
        <Meta charset='utf-8' />
        <Meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Body class='h-screen flex flex-col bg-background-light dark:bg-background-dark'>
        <Suspense>
          <ErrorBoundary>
            <Header />
            <Routes>
              <FileRoutes />
            </Routes>
            <Footer />
          </ErrorBoundary>
        </Suspense>
      </Body>
    </Html>
  );
};

export default Root;
