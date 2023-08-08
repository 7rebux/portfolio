import { For, createSignal } from 'solid-js';
import useTheme from '~/hooks/useTheme';

const themes = {
  system: '🔧',
  dark: '🌑',
  light: '☀️',
};

const ThemeSelect = () => {
  const [theme, setTheme] = useTheme();
  const [extended, setExtended] = createSignal('hidden');

  return (
    <div
      class='relative cursor-pointer w-24 select-none'
      onclick={() => setExtended(extended() ? '' : 'hidden')}
    >
      <div class='flex justify-center bg-surface-light dark:bg-surface-dark py-2 rounded-full border border-zinc-200 dark:border-zinc-600'>
        <span class='capitalize text-sm text-black dark:text-white'>
          {themes[theme()]} {theme()}
        </span>
      </div>
      <div
        class={`${extended()} absolute w-24 mt-2 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-600`}
      >
        <For each={Object.entries(themes)}>
          {([name, icon]) => (
            <div
              class='border-t first:border-t-0 border-zinc-200 dark:border-zinc-600 p-2 bg-surface-light dark:bg-surface-dark'
              onclick={() => setTheme(name)}
            >
              <span class='capitalize text-sm text-black dark:text-white'>
                {icon} {name}
              </span>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

export default ThemeSelect;
