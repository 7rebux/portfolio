import { For, createSignal } from 'solid-js';
import { A, useLocation } from 'solid-start';
import routes from '~/routes.json';

const Navbar = () => {
  const [open, setOpen] = createSignal(false);
  const location = useLocation();
  const active = (path) => location.pathname === path;

  return (
    <nav class='select-none'>
      {/* Default navbar */}
      <div class='hidden sm:block'>
        <ul class='flex gap-8 px-8 py-3 rounded-full border border-zinc-200 dark:border-zinc-600 bg-surface-light dark:bg-surface-dark'>
          <For each={routes}>
            {({ title, path }) => (
              <li
                class={active(path) ? 'text-primary font-semibold' : 'text-black dark:text-white'}
              >
                <A href={path}>{title}</A>
              </li>
            )}
          </For>
        </ul>
      </div>

      {/* Mobile menu button */}
      <button class={`${open() ? 'hidden' : 'block'} sm:hidden`} onclick={() => setOpen(true)}>
        <div class='px-7 py-2 text-sm text-black dark:text-white rounded-full border border-zinc-200 dark:border-zinc-600 bg-surface-light dark:bg-surface-dark'>
          Menu
        </div>
      </button>

      {/* Mobile navbar */}
      <div
        class={`${open() ? 'block' : 'hidden'} sm:hidden p-4 w-screen absolute top-0 left-0 z-10`}
      >
        <ul class='flex flex-col rounded-xl border border-zinc-200 dark:border-zinc-600 bg-surface-light dark:bg-surface-dark'>
          {/* Menu title */}
          <div class='flex justify-between items-center px-3 py-2 border-b-4 border-double border-zinc-200 dark:border-zinc-600'>
            <span class='text-sm text-gray-700 dark:text-gray-300'>Navigation</span>
            <button onclick={() => setOpen(false)}>
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
              <li class='p-3 last:border-0 border-b border-zinc-200 dark:border-zinc-600'>
                <A
                  class={active(path) ? 'text-primary font-semibold' : 'text-black dark:text-white'}
                  href={path}
                >
                  {title}
                </A>
              </li>
            )}
          </For>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
