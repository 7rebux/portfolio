import { For, Show, createSignal } from 'solid-js';
import { Portal } from 'solid-js/web';
import { A, useLocation } from 'solid-start';
import { CloseIcon, HamburgerMenu } from './icons';
import clickOutside from '~/directives/clickOutside';
import routes from '~/routes.json';

const Navbar = () => {
  const [expanded, setExpanded] = createSignal(false);
  const location = useLocation();
  const active = (path) => location.pathname === path;

  clickOutside;

  return (
    <nav aria-expanded={expanded()}>
      {/* Default navbar */}
      <ul class='hidden gap-8 rounded-full border bg-surface-light px-8 py-3 dark:bg-surface-dark sm:flex'>
        <For each={routes}>
          {({ title, path }) => (
            <li
              aria-selected={active(path)}
              class='cursor-pointer text-black transition hover:text-primary aria-selected:font-semibold aria-selected:text-primary dark:text-white hover:dark:text-primary aria-selected:dark:text-primary'
            >
              <A href={path}>{title}</A>
            </li>
          )}
        </For>
      </ul>

      {/* Mobile menu button */}
      <button
        class='bg-surface-lighter dark:bg-surface-darker flex w-24 items-center justify-center gap-2 rounded-full border py-2 text-sm text-black dark:text-white sm:hidden'
        onClick={() => setExpanded(true)}
      >
        <HamburgerMenu />
        Menu
      </button>

      {/* Mobile navbar */}
      <Portal mount={document.getElementById('modal')}>
        <Show when={expanded()}>
          <div class='h-screen w-screen p-4 backdrop-blur-lg backdrop-brightness-75 sm:hidden'>
            <div
              class='flex flex-col overflow-hidden rounded-xl border bg-surface-light dark:bg-surface-dark'
              use:clickOutside={() => setExpanded(false)}
            >
              {/* Menu header */}
              <div class='flex items-center justify-between px-3 py-2 text-sm text-zinc-400'>
                Navigation
                <button onClick={() => setExpanded(false)}>
                  <CloseIcon class='text-zinc-800 transition hover:text-black dark:text-zinc-200 hover:dark:text-white' />
                </button>
              </div>

              {/* Nav items */}
              <For each={routes}>
                {({ title, path }) => (
                  <A
                    class='hover:bg-surface-lighter hover:dark:bg-surface-darker border-b bg-surface-light p-3 text-black transition last:border-0 aria-selected:font-semibold aria-selected:text-primary dark:bg-surface-dark dark:text-white aria-selected:dark:text-primary'
                    href={path}
                    aria-selected={active(path)}
                    onClick={() => setExpanded(false)}
                  >
                    {title}
                  </A>
                )}
              </For>
            </div>
          </div>
        </Show>
      </Portal>
    </nav>
  );
};

export default Navbar;
