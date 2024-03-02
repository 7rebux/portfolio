import Navbar from './Navbar';
import ThemeSelect from './ThemeSelect';

const Header = () => {
  return (
    <header class='flex select-none items-center justify-between border-b bg-surface-light p-4 dark:bg-surface-dark sm:border-0 sm:bg-transparent sm:py-8 sm:dark:bg-transparent'>
      {/* Icon */}
      <div class='hidden flex-grow basis-0 sm:block'>
        <img
          class='h-10 w-10 rounded-full border'
          draggable={false}
          src='/images/avatar.png'
          alt='A picture of myself'
        />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Theme select */}
      <div class='flex flex-grow basis-0 justify-end'>
        <ThemeSelect />
      </div>
    </header>
  );
};

export default Header;
