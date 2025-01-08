import { MetaProvider } from '@solidjs/meta';
import './app.css';
import { Router } from '@solidjs/router';
import { Suspense } from 'solid-js';
import { FileRoutes } from '@solidjs/start/router';
import Header from './components/Header';
import Footer from './components/Footer';
import { HttpHeader } from '@solidjs/start';

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          {/* https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-Prefers-Color-Scheme */}
          <HttpHeader name='Accept-CH' value='Sec-CH-Prefers-Color-Scheme' />
          <Suspense>
            <main class='mx-0 flex-1 lg:mx-20 xl:mx-40 2xl:mx-60'>
              <Header />
              <div class='p-4'>{props.children}</div>
            </main>
            <Footer />
          </Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
