import Navbar from './Navbar';
import ThemeSelect from './ThemeSelect';

// TODO: center middle item
const Header = () => {
  return (
    <header class='flex select-none items-center justify-between border-b bg-surface-light p-4 dark:bg-surface-dark sm:border-0 sm:bg-transparent sm:py-8 sm:dark:bg-transparent'>
      {/* Spacer */}
      <div class='hidden sm:block'>
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
      <ThemeSelect />
    </header>
  );
};

export default Header;
