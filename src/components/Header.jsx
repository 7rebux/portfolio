import Navbar from './Navbar';
import ThemeSelect from './ThemeSelect';

const Header = () => {
  return (
    <header class='flex p-4 sm:py-8 justify-between sm:justify-around items-center w-screen sm:border-0 border-b border-zinc-200 dark:border-zinc-600 sm:bg-transparent sm:dark:bg-transparent bg-surface-light dark:bg-surface-dark'>
      {/* Spacer */}
      <div class='hidden sm:block flex-grow basis-0' />

      {/* Navbar */}
      <Navbar />

      {/* Theme select */}
      <div class='flex-none sm:flex-grow basis-0 inline-flex justify-center'>
        <ThemeSelect />
      </div>
    </header>
  );
};

export default Header;
