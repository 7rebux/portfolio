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
        class='flex w-24 justify-center rounded-full border border-zinc-200 bg-surface-light py-2 text-sm capitalize text-black dark:border-zinc-600 dark:bg-surface-dark dark:text-white'
        onClick={() => setExpanded(!expanded())}
      >
        {themes[theme()]} {theme()}
      </button>

      {/* Content */}
      <Show when={expanded()}>
        <ul class='absolute mt-2 w-24 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-600'>
          <For each={Object.entries(themes)}>
            {([name, icon]) => (
              <li
                class='border-t border-zinc-200 bg-surface-light p-2 text-sm capitalize text-black first:border-0 dark:border-zinc-600 dark:bg-surface-dark dark:text-white'
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
