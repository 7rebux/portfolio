import { For, Show, createSignal } from 'solid-js';
import clickOutside from '~/directives/clickOutside';
import useTheme from '~/hooks/useTheme';

clickOutside;

const themes = {
  system: '🔧',
  dark: '🌑',
  light: '☀️',
};

const ThemeSelect = () => {
  const [theme, setTheme] = useTheme();
  const [expanded, setExpanded] = createSignal(false);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setExpanded(false);
  };

  return (
    <div
      class='cursor-pointer select-none'
      use:clickOutside={() => setExpanded(false)}
      aria-expanded={expanded()}
    >
      {/* Trigger */}
      <button
        class='flex w-24 justify-center bg-surface-light dark:bg-surface-dark py-2 rounded-full border border-zinc-200 dark:border-zinc-600 capitalize text-sm text-black dark:text-white'
        onClick={() => setExpanded(!expanded())}
      >
        {themes[theme()]} {theme()}
      </button>

      {/* Content */}
      <Show when={expanded()}>
        <ul class='absolute w-24 mt-2 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-600'>
          <For each={Object.entries(themes)}>
            {([name, icon]) => (
              <li
                class='border-t first:border-0 border-zinc-200 dark:border-zinc-600 p-2 bg-surface-light dark:bg-surface-dark capitalize text-sm text-black dark:text-white'
                onClick={() => handleThemeChange(name)}
              >
                {icon} {name}
              </li>
            )}
          </For>
        </ul>
      </Show>
    </div>
  );
};

export default ThemeSelect;
