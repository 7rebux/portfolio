import { For, Show, createSignal } from 'solid-js';
import clickOutside from '~/directives/clickOutside';
import { theme, setTheme } from '~/utils/theme.js';
import { DesktopIcon, MoonIcon, SunIcon } from './icons';
import { Dynamic } from 'solid-js/web';

const themes = {
  system: DesktopIcon,
  dark: MoonIcon,
  light: SunIcon,
};

const ThemeSelect = (props) => {
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
      aria-haspopup={true}
      aria-expanded={expanded()}
      aria-label='Select theme'
    >
      {/* Trigger */}
      <button
        class='flex w-24 items-center justify-center gap-2 rounded-full border bg-surface-lighter py-2 text-sm capitalize text-black dark:bg-surface-darker dark:text-white sm:bg-surface-light sm:dark:bg-surface-dark'
        onClick={() => setExpanded(!expanded())}
        aria-label={theme()}
      >
        {themes[theme()]}
        {theme()}
      </button>

      {/* Content */}
      <Show when={expanded()}>
        <ul
          role='listbox'
          aria-orientation='vertical'
          class='absolute mt-2 w-24 overflow-hidden rounded-xl border'
        >
          <For each={Object.entries(themes)}>
            {([name, icon]) => (
              <li
                class='flex items-center gap-2 border-t bg-surface-light p-2 text-sm capitalize text-black transition first:border-0 hover:bg-surface-lighter aria-selected:font-semibold aria-selected:text-primary dark:bg-surface-dark dark:text-white hover:dark:bg-surface-darker aria-selected:dark:text-primary'
                role='option'
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
