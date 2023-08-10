import Navbar from './Navbar';
import ThemeSelect from './ThemeSelect';

const Header = () => {
  return (
    <header class='flex items-center justify-between border-b border-zinc-200 bg-surface-light p-4 dark:border-zinc-600 dark:bg-surface-dark sm:justify-around sm:border-0 sm:bg-transparent sm:py-8 sm:dark:bg-transparent'>
      {/* Spacer */}
      <div class='hidden flex-grow basis-0 sm:block' />

      {/* Navbar */}
      <Navbar />

      {/* Theme select */}
      <div class='inline-flex flex-none basis-0 justify-center sm:flex-grow'>
        <ThemeSelect />
      </div>
    </header>
  );
};

export default Header;
