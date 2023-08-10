import { For, Show, createSignal } from 'solid-js';
import { Portal } from 'solid-js/web';
import { A, useLocation } from 'solid-start';
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
            <li class={active(path) ? 'font-semibold text-primary' : 'text-black dark:text-white'}>
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
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    class='h-5 w-5 text-black dark:text-white'
                  >
                    <path stroke-linecap='round' stroke-linejoin='round' d='M6 18L18 6M6 6l12 12' />
                  </svg>
                </button>
              </div>

              {/* Nav items */}
              <For each={routes}>
                {({ title, path }) => (
                  <A
                    class={`
                  ${
                    active(path) ? 'font-semibold text-primary' : 'text-black dark:text-white'
                  } border-b border-zinc-200 p-3 last:border-0 dark:border-zinc-600
                `}
                    href={path}
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
