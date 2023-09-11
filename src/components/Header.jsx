import Navbar from './Navbar';
import ThemeSelect from './ThemeSelect';

// TODO: center middle item
const Header = () => {
  return (
    <header class='flex select-none items-center justify-between border-b bg-surface-light p-4 dark:bg-surface-dark sm:border-0 sm:bg-transparent sm:py-8 sm:dark:bg-transparent'>
      {/* Spacer */}
      <div class='hidden sm:block'>
        {/* TODO: Replace this with an image */}
        <div class='flex h-10 w-10 items-center justify-center rounded-full border bg-surface-light text-zinc-600 dark:bg-surface-dark dark:text-zinc-400'>
          N
        </div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Theme select */}
      <ThemeSelect />
    </header>
  );
};

export default Header;
