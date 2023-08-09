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
      <ul class='hidden sm:flex gap-8 px-8 py-3 rounded-full border border-zinc-200 dark:border-zinc-600 bg-surface-light dark:bg-surface-dark'>
        <For each={routes}>
          {({ title, path }) => (
            <li class={active(path) ? 'text-primary font-semibold' : 'text-black dark:text-white'}>
              <A href={path}>{title}</A>
            </li>
          )}
        </For>
      </ul>

      {/* Mobile menu button */}
      <button
        class='sm:hidden block px-7 py-2 text-sm text-black dark:text-white rounded-full border border-zinc-200 dark:border-zinc-600 bg-surface-light dark:bg-surface-dark'
        onClick={() => setExpanded(true)}
      >
        Menu
      </button>

      {/* Mobile navbar */}
      <Portal>
        <Show when={expanded()}>
          <div class='sm:hidden absolute top-0 w-full h-full p-4 backdrop-blur-lg'>
            <div
              class='flex flex-col rounded-xl border border-zinc-200 dark:border-zinc-600 bg-surface-light dark:bg-surface-dark'
              use:clickOutside={() => setExpanded(false)}
            >
              {/* Menu header */}
              <div class='flex justify-between items-center px-3 py-2 border-b-4 border-double border-zinc-200 dark:border-zinc-600 text-zinc-400 text-sm'>
                Navigation
                <button onClick={() => setExpanded(false)}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    class='w-5 h-5 text-black dark:text-white'
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
                    active(path) ? 'text-primary font-semibold' : 'text-black dark:text-white'
                  } p-3 last:border-0 border-b border-zinc-200 dark:border-zinc-600
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
