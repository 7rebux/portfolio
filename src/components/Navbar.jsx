import { For, Show, createSignal } from 'solid-js';
import { Portal } from 'solid-js/web';
import { A, useLocation } from 'solid-start';
import { CloseIcon } from './icons';
import clickOutside from '~/directives/clickOutside';
import routes from '~/routes.json';

clickOutside;

const Navbar = () => {
  const [expanded, setExpanded] = createSignal(false);
  const location = useLocation();
  const active = (path) => location.pathname === path;

  return (
    <nav class='select-none' aria-expanded={expanded()}>
      {/* Default navbar */}
      <ul class='hidden gap-8 rounded-full border border-zinc-200 bg-surface-light px-8 py-3 dark:border-zinc-600 dark:bg-surface-dark sm:flex'>
        <For each={routes}>
          {({ title, path }) => (
            <li
              aria-selected={active(path)}
              class='text-black aria-selected:font-semibold aria-selected:text-primary dark:text-white aria-selected:dark:text-primary'
            >
              <A href={path}>{title}</A>
            </li>
          )}
        </For>
      </ul>

      {/* Mobile menu button */}
      <button
        class='block rounded-full border border-zinc-200 bg-surface-light px-7 py-2 text-sm text-black dark:border-zinc-600 dark:bg-surface-dark dark:text-white sm:hidden'
        onClick={() => setExpanded(true)}
      >
        Menu
      </button>

      {/* Mobile navbar */}
      <Portal>
        <Show when={expanded()}>
          <div class='absolute top-0 h-full w-full p-4 backdrop-blur-lg sm:hidden'>
            <div
              class='flex flex-col rounded-xl border border-zinc-200 bg-surface-light dark:border-zinc-600 dark:bg-surface-dark'
              use:clickOutside={() => setExpanded(false)}
            >
              {/* Menu header */}
              <div class='flex items-center justify-between border-b-4 border-double border-zinc-200 px-3 py-2 text-sm text-zinc-400 dark:border-zinc-600'>
                Navigation
                <button onClick={() => setExpanded(false)}>
                  <CloseIcon class='text-zinc-800 hover:text-black dark:text-zinc-200 hover:dark:text-white' />
                </button>
              </div>

              {/* Nav items */}
              <For each={routes}>
                {({ title, path }) => (
                  <A
                    class='border-b border-zinc-200 p-3 text-black last:border-0 aria-selected:font-semibold aria-selected:text-primary dark:border-zinc-600 dark:text-white aria-selected:dark:text-primary'
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
