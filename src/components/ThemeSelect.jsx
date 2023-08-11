import { For, Show, createSignal } from 'solid-js';
import clickOutside from '~/directives/clickOutside';
import useTheme from '~/hooks/useTheme';
import { DesktopIcon, MoonIcon, SunIcon } from './icons';
import { Dynamic } from 'solid-js/web';

const themes = {
  system: DesktopIcon,
  dark: MoonIcon,
  light: SunIcon,
};

const ThemeSelect = () => {
  const [theme, setTheme] = useTheme();
  const [expanded, setExpanded] = createSignal(false);

  clickOutside;

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setExpanded(false);
  };

  return (
    <div
      class='cursor-pointer'
      use:clickOutside={() => setExpanded(false)}
      aria-expanded={expanded()}
      aria-label='Select theme'
    >
      {/* Trigger */}
      <button
        class='bg-surface-lighter dark:bg-surface-darker flex w-24 items-center justify-center gap-2 rounded-full border py-2 text-sm capitalize text-black dark:text-white sm:bg-surface-light sm:dark:bg-surface-dark'
        onClick={() => setExpanded(!expanded())}
        aria-label={theme()}
      >
        {themes[theme()]}
        {theme()}
      </button>

      {/* Content */}
      <Show when={expanded()}>
        <ul class='absolute mt-2 w-24 overflow-hidden rounded-xl border'>
          <For each={Object.entries(themes)}>
            {([name, icon]) => (
              <li
                class='hover:dark:bg-surface-darker hover:bg-surface-lighter flex items-center gap-2 border-t bg-surface-light p-2 text-sm capitalize text-black transition first:border-0 aria-selected:font-semibold aria-selected:text-primary dark:bg-surface-dark dark:text-white aria-selected:dark:text-primary'
                aria-selected={theme() === name}
                onClick={() => handleThemeChange(name)}
              >
                <Dynamic component={icon} />
                {name}
              </li>
            )}
          </For>
        </ul>
      </Show>
    </div>
  );
};

export default ThemeSelect;
